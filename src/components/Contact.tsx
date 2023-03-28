import { Flex, IconButton, Text } from "@chakra-ui/react";
import { BsLinkedin } from "react-icons/bs";
import { WhiteBlock } from "./WhiteBlock";


export const Contact = () => (
  <div id="contact">
    <WhiteBlock description="Any questions?" header="Contact">
      <Flex
        flexDirection={"column"}
        alignItems="center"
        justifyContent="center"
      >
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
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/pavel-kaplan-75032b138/"
          aria-label="Call Segun"
          color={"greenTheme"}
          icon={<BsLinkedin />}
          boxShadow="0px 4px 6px rgb(134 151 168 / 10%)"
          width="40px"
          mt="2"
        />
      </Flex>
    </WhiteBlock>
  </div>
);
