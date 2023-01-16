import { Box } from "@chakra-ui/react";

import { Hero } from "../components/Hero";

import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";

const Index = () => (
  <Box>
    <Hero />
    <About />
    <Skills />
    <Projects />
  </Box>
);

export default Index;
