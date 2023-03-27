import { compose, withState, withProps, defaultProps } from "recompose";
import { transformData } from "../../helpers/transformData";
import Index from "./_Index";

const enhancer = compose(
  withState("counter", "setCounter", 0),
  defaultProps({ component: "button" }),
  withProps((props) => {
    return transformData(props);
  })
);
export default enhancer(Index);
