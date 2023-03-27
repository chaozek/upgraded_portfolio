import { Box } from "@chakra-ui/react";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

const Index = () => (
  <Box>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </Box>
);

export default Index;
