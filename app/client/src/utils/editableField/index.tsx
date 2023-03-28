import { compose, withProps } from "recompose";
import { withContextData } from "src/HOC/withContextData";
import editableField from "./editableField";


const enhancer = compose(
  withProps((props) => {
    return {
      ...props,
    };
  })
);
export default enhancer(withContextData(editableField));
