import { compose, withProps, withContext } from "recompose";
import Header from "./Header";
import { MyContext } from "src/context";
import { useContext } from "react";

const enhancer = compose(
  withProps((props) => {
    const { isAdmin, isDraggable, setContextData } = useContext(MyContext);
    return {
      ...props,
      isAdmin,
      setAdmin: () => setContextData({ isAdmin: !isAdmin }),
      setIsDraggable: () => setContextData({ isDraggable: !isDraggable }),
    };
  })
);
export default enhancer(Header);
