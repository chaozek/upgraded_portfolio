import React from "react";

export const PresentComponent = ({ children, components, parentName }: any) => {
  let renderComponent =
    components &&
    components.find((comp) => {
      return comp.name === parentName;
    });
  return <>{React.cloneElement(children, { component: renderComponent })}</>;
};

PresentComponent.defaultProps = {};
