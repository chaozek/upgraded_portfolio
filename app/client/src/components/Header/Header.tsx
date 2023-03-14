import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React from "react";
import IntroJs from "../introJs/Intro";
import { Flex } from "@chakra-ui/react";

const Header = (props) => {
  console.log(props, "PFFF");
  /* console.log(isAdmin, "PROSPYYY"); */
  return (
    <Box my="3">
      <Flex gap="5" alignItems="center">
        <Button onClick={() => props.setAdmin()}>
          {props.isAdmin ? "FAKE LOGOUT" : "FAKE LOGIN"}
        </Button>
        <IntroJs />
      </Flex>
    </Box>
  );
};

export default Header;
