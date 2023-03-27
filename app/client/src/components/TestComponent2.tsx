import { Box } from "@chakra-ui/react";
import React from "react";
import TestComponent3 from "./TestComponent3";
import TestComponent4 from "./TestComponent4";
import TestComponent5 from "./TestComponent5";

const components = [TestComponent3, TestComponent4, TestComponent5];
const TestComponent2 = () => {
  return (
    <Box>
      {components.map((Comp) => {
        return <Comp />;
      })}
    </Box>
  );
};

export default TestComponent2;
