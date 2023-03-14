import React, { useContext } from "react";
import _ from "lodash";
import {
  PageComponentDocument,
  useCreateComponentMutation,
  usePageComponentQuery,
} from "../../generated/index";
import { MyContext } from "src/context";

export function getComponentData(Component, page) {
  return function WrappedComponent(props) {
    const { data, loading } = usePageComponentQuery({
      variables: { page },
    });
    const { isAdmin, isDraggable, setContextData } = useContext(MyContext);

    const [
      createComponentMutation,
      { data: componentData, loading: _loading, error: _error },
    ] = useCreateComponentMutation();
    if (!data) {
      try {
        createComponentMutation({
          variables: {
            name: "homepage",
            page: "homepage",
            title: "TEST",
            parentName: "homepage",
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

        return;
      } catch (error) {
        console.log(error, "ERR");
      }
    }

    let renderComp = [];
    if (data && !data.pageComponent) {
      renderComp = [
        "ComponentWithImage1",
        "intro1",
        "intro2",
        "intro3",
        "intro4",
        "intro5",
        "intro6",
        "ThreeColumnsWithPicture1",
        "LightBigBox1",
      ];
    } else {
      renderComp = _.map(
        _.get(data, "pageComponent.componentsToRender", []),
        "component"
      );
    }

    return (
      <Component
        data={_.get(data, "pageComponent.components", [])}
        componentsToRender={renderComp}
        componentsOrder={_.get(data, "pageComponent.componentsToRender", [])}
        loading={loading}
        isAdmin={isAdmin}
        isDraggable={isDraggable}
        setIsDraggable={() => setContextData({ isDraggable: !isDraggable })}
        {...props}
      />
    );
  };
}
