import { MyContext } from "src/context";
import React from "react";
import _ from "lodash";
import { useContext } from "react";

export function withContextData(Component) {
  return function WrappedComponent(props) {
    /*     const { data, loading } = useComponentImagesQuery({
      variables: { component },
    }); */
    const {
      isAdmin,
      isDraggable,
      sideMenuOpened,
      isTextEditable,
      isImageEditable,
      setContextData,
    } = useContext(MyContext);
    return (
      <Component
        {...props}
        isAdmin={isAdmin}
        isDraggable={isDraggable}
        isTextEditable={isTextEditable}
        isImageEditable={isImageEditable}
        setImageEditable={() =>
          setContextData({ isImageEditable: !isImageEditable })
        }
        setAdmin={() => setContextData({ isAdmin: !isAdmin })}
        setTextEditable={() =>
          setContextData({ isTextEditable: !isTextEditable })
        }
        setIsDraggable={() => setContextData({ isDraggable: !isDraggable })}
        setSideMenuOpened={() =>
          setContextData({ sideMenuOpened: !sideMenuOpened })
        }
      />
    );
  };
}
