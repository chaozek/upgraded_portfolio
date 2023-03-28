import { Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { WhiteBlock } from "./WhiteBlock";


export const Project = () => {
  return (
    <Box id="pagebuilder">
      <WhiteBlock
        description="CHECK OUT MY"
        header="MY PERSONAL LATEST PROJECT"
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading
            as="a"
            href="https://app.brnensky-vyvojar.eu/"
            textAlign="center"
            size="lg"
            target="_blank"
          >
            https://app.brnensky-vyvojar.eu/
          </Heading>

          <IconButton
            as="a"
            href="https://github.com/chaozek/upgraded_portfolio"
            target="_blank"
            aria-label="Call Segun"
            color={"greenTheme"}
            icon={<BsGithub />}
            boxShadow="0px 4px 6px rgb(134 151 168 / 10%)"
            width="40px"
            mt="2"
          />
        </Flex>
      </WhiteBlock>
    </Box>
  );
};
