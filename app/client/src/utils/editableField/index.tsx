import { compose, withProps } from "recompose";

import { MyContext } from "src/context";
import editableField from "./editableField";
import getConfig from "next/config";
import { useContext } from "react";
import { withContextData } from "src/HOC/withContextData";

const enhancer = compose(
  withProps((props) => {
    return {
      ...props,
    };
  })
);
export default enhancer(withContextData(editableField));
