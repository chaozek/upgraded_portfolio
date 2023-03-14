import {
  PageComponentDocument,
  UpdateOrderInComponentsDocument,
  useAddComponentToPageMutation,
} from "generated";
import { componentsShapeRegex } from "./componentsNames";

export const fireCreateComponent = (componentToRenderStatic, componentName) => {
  const [addToComponentPageMutation, { data, loading, error }] =
    useAddComponentToPageMutation();
  console.log(componentToRenderStatic, "componentToRenderStatic");

  componentsShapeRegex.map((shape) => {
    console.log(shape, "SHAPEE");
    if (shape.value.test(componentToRenderStatic)) {
      try {
        addToComponentPageMutation({
          variables: {
            component: {
              name: "intro",
              parentName: "intro",
              title: "TEST",
              texts: {
                title: "DEFAULT VALUE",
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
