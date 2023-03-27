import { compose, withContext, withProps, withState } from "recompose";

import Layout from "./Layout";
import { MyContext } from "src/context";
import _ from "lodash";
import { generateComponentShape } from "src/views/helpers";
import { getComponentData } from "src/HOC/getComponentData";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { transformData } from "src/helpers/transformData";
import { useAddComponentToRenderMutation } from "generated";
import { useContext } from "react";
import withApollo from "src/utils/withApollo";

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
      setSideMenuOpened: () =>
        setContextData({ sideMenuOpened: !sideMenuOpened }),
    };
  })
);
export default withApollo(getComponentData(enhancer(Layout), "homepage"), {
  getDataFromTree,
});
