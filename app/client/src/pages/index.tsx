import { Container } from "@chakra-ui/react";
import Header from "src/components/Header";
import Index from "../views/index";
import IntroJs from "src/components/introJs/Intro";
import { getComponentData } from "../HOC/getComponentData";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../utils/withApollo";
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
