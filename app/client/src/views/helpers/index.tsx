import { Box } from "@chakra-ui/react";
import ComponentWIthImage from "src/components/ComponentWIthImage";
import { Intro } from "src/components/Intro";
import { LightBigBox } from "src/components/LightBigBox";
import { PageComponentDocument } from "generated";
import { PresentComponent } from "src/components/Component";
import ThreeColumnsWithPicture from "src/components/ThreeColumnsWithPicture";
import _ from "lodash";
import { componentsShape } from "src/createComponent/componentsNames";
import getHighestCompName from "src/helpers/getHighestCompName";

export const generateComponentShape = (data, componentName, props) => {
  const foundComp = _.find(data, { name: componentName });
  const ComponentsShapes = /\ComponentWithImage\d+\b/.test(componentName)
    ? ComponentWIthImage
    : /\bintro\d+\b/.test(componentName)
    ? Intro
    : /\ThreeColumnsWithPicture\d+\b/.test(componentName)
    ? ThreeColumnsWithPicture
    : /\LightBigBox\d+\b/.test(componentName)
    ? LightBigBox
    : Box;
  const findFun = (componentName) => {
    if (!foundComp) {
      return;
    } else {
      return foundComp.show;
    }
  };
  return {
    component: (
      <PresentComponent
        show={findFun(componentName)}
        parentName={componentName}
        components={data}
      >
        <ComponentsShapes
          components={data}
          {...props}
          parentComponent="homepage"
          parentName={componentName}
        />
      </PresentComponent>
    ),
    componentName,
    show: findFun(componentName),
  };
};

export const addComponentToRender = (
  addComponentToRenderMutation,
  componentsToRender,
  componentName
) => {
  componentsShape.map((shape) => {
    if (shape.value === componentName) {
      try {
        //FIX HIGHESTCOMP NAME OR RETURN HIGHESTCOMP FROM BACKEND DIRECTLY
        addComponentToRenderMutation({
          variables: {
            component:
              componentName +
              getHighestCompName(componentsToRender, componentName),
            pageName: "homepage",
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
