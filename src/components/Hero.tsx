import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import atom from "../../public/atom.png";
import { Button } from "./CustomButton";


export const Hero = () => {
  return (
    <Flex
      id="home"
      justifyContent="center"
      alignItems="center"
      height={["auto", "auto", "auto", "100vh"]}
      // bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
      //bgClip="text"
      flexWrap="wrap"
      py={["80px", "80px", "80px", "0px"]}
    >
      <Flex
        flex={["0 0 100%", "0 0 100%", "0 1 50%"]}
        flexWrap="wrap"
        flexBasis="200px"
        justifyContent="end"
      >
        <Image
          src={atom.src}
          width={["100px", "250px", "350px"]}
          minWidth={["100px", "250px", "350px"]}
        />
      </Flex>
      <Flex
        flex={["0 0 100%", "0 0 100%", "0 1 50%"]}
        flexDirection="column"
        paddingX={"15px"}
        paddingTop={["80px", "80px", "80px", "0px"]}
        textAlign={["center", "center", "left"]}
      >
        <Text>HI THERE! I'M</Text>
        <Heading>PAVEL KAPLAN</Heading>
        <Text>
          Self taught{" "}
          <Text as="span" fontWeight="bold" color="greenTheme">
            Front-End Developer{" "}
          </Text>
          who love his job.
        </Text>
        <Box
          display={"flex"}
          alignItems="flex-end"
          justifyContent={["center", "center", "left"]}
        >
          <Box>
            <Button as="a" href="/assets/PK_CV.pdf" target="_blank">
              Resumé
            </Button>
          </Box>
          <List display="flex" alignItems="center" ml="10">
            <ListItem ml="4">
              <IconButton
                as="a"
                href="https://www.linkedin.com/in/pavel-kaplan-75032b138/"
                aria-label="Call Segun"
                color={"greenTheme"}
                icon={<BsLinkedin />}
                boxShadow="0px 4px 6px rgb(134 151 168 / 10%)"
              />
            </ListItem>
            <ListItem ml="4">
              <IconButton
                as="a"
                href="https://github.com/chaozek"
                boxShadow="0px 4px 6px rgb(134 151 168 / 10%)"
                aria-label="Call Segun"
                color={"greenTheme"}
                icon={<BsGithub />}
              />
            </ListItem>
          </List>
        </Box>
      </Flex>
    </Flex>
  );
};

Hero.defaultProps = {
  title: "with-chakra-ui-typescript",
};
