import { About } from "../components/About";
import { Box } from "@chakra-ui/react";
import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import { Project } from "../components/Project";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

const Index = () => (
  <Box>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Project />
    <Contact />
  </Box>
);

export default Index;
