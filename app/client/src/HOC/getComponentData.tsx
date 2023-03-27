import {
  PageComponentDocument,
  useCreateComponentMutation,
  usePageComponentQuery,
} from "../../generated/index";
import React, { useContext } from "react";

import { MyContext } from "src/context";
import _ from "lodash";
import { useEffect } from "react";

export function getComponentData(Component, page) {
  return function WrappedComponent(props) {
    const { data, loading } = usePageComponentQuery({
      variables: { page },
    });
    const { isAdmin, isDraggable, setContextData } = useContext(MyContext);
    let renderComp = [];
    useEffect(() => {
      if (data && !data.pageComponent) {
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
    }, [data]);

    const [
      createComponentMutation,
      { data: componentData, loading: _loading, error: _error },
    ] = useCreateComponentMutation();


    if (
      data &&
      data.pageComponent &&
      data.pageComponent.componentsToRender.length <= 1
    ) {
      renderComp = [
        "ComponentWithImage1",
        "intro1",
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
