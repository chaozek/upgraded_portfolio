import withApollo from "../utils/withApollo";
import About from "../views/index/index";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { getComponentData } from "../HOC/getComponentData";

function about(props) {
  return <About props={props} />;
}

export default withApollo(getComponentData(about, "homepage"), {
  getDataFromTree,
});
