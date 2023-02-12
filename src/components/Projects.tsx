import { Box, FlexProps, Image, List, ListItem, Text } from "@chakra-ui/react";
import { WhiteBlock } from "./WhiteBlock";
import Zonky from "../../public/companies/zonky-logo.svg";
import AB from "../../public/companies/Air_Bank_logo.svg.png";
import BS from "../../public/companies/bluestyle-logo.svg";
export const Projects = (props: FlexProps) => (
  <div id="projects">
    <WhiteBlock description="CHECK OUT MY" header="Projects">
      <Text
        fontWeight={"600"}
        as="h2"
        textTransform="uppercase"
        fontSize="1xl"
        mb="5"
      >
        Main focus (making a living from)
        <Box
          justifyContent="space-around"
          display="flex"
          alignItems="center"
          mt="10"
          flexWrap="wrap"
          _dark={{
            bg: "greenLightTheme",
            color: "white",
            borderRadius: "10px",
          }}
        >
          <Image
            minWidth="150px"
            maxWidth="150px"
            width="100%"
            height="auto"
            src={Zonky.src}
            p={["10", "10", "10", "0"]}
          />
          <Image
            minWidth="150px"
            maxWidth="150px"
            width="100%"
            height="auto"
            src={AB.src}
            p={["10", "10", "10", "0"]}
          />
          <Image
            minWidth="150px"
            maxWidth="150px"
            width="100%"
            height="auto"
            src={BS.src}
            p={["10", "10", "10", "0"]}
          />
        </Box>
      </Text>
    </WhiteBlock>
  </div>
);
