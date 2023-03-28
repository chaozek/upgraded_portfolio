import { getDataFromTree } from "@apollo/client/react/ssr";
import { useAddComponentToRenderMutation } from "generated";
import _ from "lodash";
import { useContext } from "react";
import { compose, withProps } from "recompose";
import { MyContext } from "src/context";
import { getComponentData } from "src/HOC/getComponentData";
import withApollo from "src/utils/withApollo";
import { generateComponentShape } from "src/views/helpers";
import Layout from "./Layout";


const enhancer = compose(
  withProps((props: any) => {
    const {
      isAdmin,
      isDraggable,
      sideMenuOpened,
      isTextEditable,
      isImageEditable,
      setContextData,
    } = useContext(MyContext);

    const [
      addComponentToRenderMutation,
      {
        data: addComponentData,
        loading: addComponentLoading,
        error: addComponentError,
      },
    ] = useAddComponentToRenderMutation();
    let componentsToRender = _.get(props, "componentsToRender", {});

    const components = componentsToRender.map((comp) => {
      return generateComponentShape(_.get(props, "data", {}), comp, props);
    });
    return {
      ...props,
      isAdmin,
      addComponentToRenderMutation,
      componentsToRender,
      sideMenuOpened,
      isTextEditable,
      isImageEditable,
      components,
      setImageEditable: () =>
        setContextData({ isImageEditable: !isImageEditable }),
      setTextEditable: () =>
        setContextData({ isTextEditable: !isTextEditable }),
      setAdmin: () =>
        setContextData({ isAdmin: !isAdmin, sideMenuOpened: false }),
      setIsDraggable: () =>
        setContextData({
          isDraggable: !isDraggable,
        }),
      logout: () =>
        setContextData({
          isDraggable: false,
          isImageEditable: false,
          isAdmin: false,
          sideMenuOpened: false,
          isTextEditable: false,
        }),
      setSideMenuOpened: () =>
        setContextData({ sideMenuOpened: !sideMenuOpened }),
    };
  })
);
export default withApollo(getComponentData(enhancer(Layout), "homepage"), {
  getDataFromTree,
});
