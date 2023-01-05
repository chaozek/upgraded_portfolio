import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  Icon,
  List,
  ListItem,
  useColorMode,
} from "@chakra-ui/react";
import me from "../../public/me.jpg";
import { Button } from "./CustomButton";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export const Hero = ({ title }: { title: string }) => {
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
        justifyContent="center"
        flexWrap="wrap"
        flexBasis="200px"
      >
        <Image
          src={me.src}
          width={["100px", "250px", "350px"]}
          minWidth={["100px", "250px", "350px"]}
          borderRadius={500}
          boxShadow={[
            "none",
            "none",
            "12px 0 #81E6D9, 24px 0 #B2F5EA, 36px 0 #E6FFFA",
          ]}
          marginX="25px"
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
        <Box display={"flex"} alignItems="flex-end">
          <Box>
            <Button>Resumé</Button>
          </Box>
          <List display="flex" alignItems="center" ml="10">
            <ListItem ml="4">
              <IconButton
                aria-label="Call Segun"
                color={"greenTheme"}
                icon={<BsLinkedin />}
                boxShadow="0px 4px 6px rgb(134 151 168 / 10%)"
              />
            </ListItem>
            <ListItem ml="4">
              <IconButton
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
