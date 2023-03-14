import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import TestComponent3 from "src/components/TestComponent3";
import TestComponent4 from "src/components/TestComponent4";
import TestComponent5 from "src/components/TestComponent5";

const components = [
  { component: TestComponent3, componentName: "TestComponent3" },
  { component: TestComponent4, componentName: "TestComponent4" },
  { component: TestComponent5, componentName: "TestComponent5" },
];

const test = () => {
  const { route } = useRouter();

  return (
    <Box>
      {components.map(({ component: Component }) => {
        return <Component />;
      })}
    </Box>
  );
};
export default test;
