import { getDataFromTree } from "@apollo/client/react/ssr";
import { Container } from "@chakra-ui/react";
import { getComponentData } from "../HOC/getComponentData";
import withApollo from "../utils/withApollo";
import Index from "../views/index";


const index = (props) => {
  return (
    <Container maxW="7xl">
      <Index props={props} />;
    </Container>
  );
};

export default withApollo(getComponentData(index, "homepage"), {
  getDataFromTree,
});
