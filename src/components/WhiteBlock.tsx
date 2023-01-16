import { Box, Flex } from "@chakra-ui/react";
import { UpperHeader } from "./UpperHeader";
interface Props {
  children?: JSX.Element;
  description?: string;
  header?: string;
  noSpace?: boolean;
}
export const WhiteBlock = ({
  children,
  description,
  header,
  noSpace,
}: Props) => (
  <Flex as="section" flexDirection={"column"} py={noSpace ? "0rem" : "8rem"}>
    <UpperHeader header={header} description={description} />
    <Box p="48px" borderRadius="50px" bg="textBlockBackground">
      {children}
    </Box>
  </Flex>
);
