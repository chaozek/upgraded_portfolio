import {
  PageComponentDocument,
  UpdateOrderInComponentsDocument,
  useAddComponentToPageMutation,
} from "generated";

import { componentsShapeRegex } from "./componentsNames";

export const fireCreateComponent = (componentToRenderStatic, componentName) => {
  const [addToComponentPageMutation, { data, loading, error }] =
    useAddComponentToPageMutation();

  componentsShapeRegex.map((shape) => {
    if (shape.value.test(componentToRenderStatic)) {
      try {
        addToComponentPageMutation({
          variables: {
            component: {
              name: "intro",
              parentName: "intro",
              title: "TEST",
              texts: {
                title: "Lorem ipsum dolor sit 2",
                textOrder: "text1",
              },
            },
            page: "homepage",
          },
          errorPolicy: "all",
          refetchQueries: [
            {
              query: PageComponentDocument,
              variables: {
                page: "homepage",
              },
            },
          ],
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  });
};
