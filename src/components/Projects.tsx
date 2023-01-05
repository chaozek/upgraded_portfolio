import { FlexProps, Text } from "@chakra-ui/react";
import { WhiteBlock } from "./WhiteBlock";
export const Projects = (props: FlexProps) => (
  <WhiteBlock description="CHECK OUT MY" header="Projects">
    <Text
      fontWeight={"600"}
      as="h2"
      textTransform="uppercase"
      fontSize="1xl"
      mb="5"
    >
      Main focus (making a living from)
    </Text>
  </WhiteBlock>
);
