import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../utils/withApollo";
import Index from "../views/index";
import { getComponentData } from "../HOC/getComponentData";
import { Container } from "@chakra-ui/react";
import IntroJs from "src/components/introJs/Intro";
import Header from "src/components/Header";
const index = (props) => {
  return (
    <Container maxW="7xl">
      <Header />
      <Index props={props} />;
    </Container>
  );
};

export default withApollo(getComponentData(index, "homepage"), {
  getDataFromTree,
});
