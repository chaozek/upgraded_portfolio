import { Box, Flex, FlexProps } from "@chakra-ui/react";
import { UpperHeader } from "./UpperHeader";

export const WhiteBlock = ({ children, description, header, noSpace }: any) => (
  <Flex as="section" flexDirection={"column"} py={noSpace ? "0rem" : "8rem"}>
    <UpperHeader header={header} description={description} />
    <Box p="48px" borderRadius="50px" bg="textBlockBackground">
      {children}
    </Box>
  </Flex>
);
