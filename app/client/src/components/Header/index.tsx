import { compose, withContext, withProps } from "recompose";

import Header from "./Header";
import { MyContext } from "src/context";
import getConfig from "next/config";
import { useContext } from "react";

const enhancer = compose(
  withProps((props) => {
    const { isAdmin, isDraggable, sideMenuOpened, setContextData } =
      useContext(MyContext);
    const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();
    return {
      ...props,
      isAdmin,
      sideMenuOpened,
      publicRuntimeConfig,
      setAdmin: () => setContextData({ isAdmin: !isAdmin }),
      setIsDraggable: () => setContextData({ isDraggable: !isDraggable }),
    };
  })
);
export default enhancer(Header);
