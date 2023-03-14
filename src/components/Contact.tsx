import { Flex, Text } from "@chakra-ui/react";
import { WhiteBlock } from "./WhiteBlock";
export const Contact = () => (
  <div id="contact">
    <WhiteBlock description="Any questions?" header="Contact">
      <Flex flexDirection={"column"}>
        <Text
          as="a"
          href="mailto:pkaplan1@seznam.cz"
          textTransform="uppercase"
          fontSize="xl"
          textAlign={"center"}
          fontWeight="bold"
        >
          pkaplan1@seznam.cz
        </Text>
        <Text
          as="a"
          href="tel:+420735545288"
          textTransform="uppercase"
          fontSize="md"
          textAlign={"center"}
        >
          +420 735 545 288
        </Text>
      </Flex>
    </WhiteBlock>
  </div>
);
