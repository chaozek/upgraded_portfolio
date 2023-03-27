import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import IntroJs from "../introJs/Intro";
import React from "react";
import { Text } from "@chakra-ui/react";
import getConfig from "next/config";

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();
const Header = (props) => {
  return (
    <Box my="3">
      <Flex gap="5" alignItems="center">
        <Button onClick={() => props.setAdmin()}>
          {props.isAdmin ? "FAKE LOGOUT" : "FAKE LOGIN"}
        </Button>
        <Text color="white">
          {process.env.NEXT_PUBLIC_TEST ? process.env.NEXT_PUBLIC_TEST : "nic"}
          {publicRuntimeConfig.NEXT_PUBLIC_TEST
            ? publicRuntimeConfig.NEXT_PUBLIC_TEST
            : "SECOND"}
        </Text>

        <IntroJs />
      </Flex>
    </Box>
  );
};

export default Header;
