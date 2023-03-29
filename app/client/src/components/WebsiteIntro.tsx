import { Flex, Heading } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { ListIcon } from "@chakra-ui/react";
import { List } from "@chakra-ui/react";
import { ListItem } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Collapsible from "react-collapsible";
import { MdArrowCircleRight, MdCheckCircle } from "react-icons/md";

const WebsiteIntro = () => {
  return (
    <Box maxWidth="1000px" m="4" fontWeight="bold" color="white">
      <Collapsible
        trigger={
          <>
            <MdArrowCircleRight />
            <span>APP DESCRIPTION (start by clicking here)</span>
          </>
        }
      >
        <Flex flexDirection="column" m="4">
          <Heading color="white">App description</Heading>
          <Text color="white">
            I was looking for pagebuilder project to get inspirated from but I
            wasn't able to find any, so I've decided to build one from scratch.
          </Text>
          <Text color="white">
            Frontend of this app is build by Next.js, Apollo, chakra UI,
            Typescript, Recompose ...etc{" "}
          </Text>
          <Text color="white">
            Backend of this app is build by Graphql, Apollo-Server, Prisma,
            (nginx, CI/CD github pipelines) ...etc{" "}
          </Text>
          <Text fontStyle="italic" mt="5" color="white">
            Please note, that app is still in development & need HUGE
            refactoring & proper typescript definitions. Main focus was to get
            it all work together, which was accomplished.
          </Text>
          <Heading mt="5" size="md" color="white">
            Features:
          </Heading>
          <List mt="5" color="white">
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              You can create as many predefined components you want. Its easy to
              design and add new components in a code as needed.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              You can change the order of components.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              You can edit text.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              You can upload and change images in specific components.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              You can hide / show existing components.
            </ListItem>
          </List>
          <Text mt="5" color="white">
            Go ahead, fake login into app, click on edit button in the header
            and start editing. Dont worry about breaking the app or components.
            I can erase whole database which will initially create predefined
            components on initial render.
          </Text>
          <Text mt="5" color="white">
            Components are created by graphql request. On next page loads whole
            website is server side rendered. I've used localStorage & React
            Context for global data management for simplicity. It was used for
            user interaction / actions, everything else is server based.
          </Text>
          <Heading mt="5" size="md" color="white">
            Source code:
          </Heading>
          <Link
            mt="5"
            target="_blank"
            href="https://github.com/chaozek/upgraded_portfolio"
          >
            https://github.com/chaozek/upgraded_portfolio
          </Link>
        </Flex>
      </Collapsible>
    </Box>
  );
};
export default WebsiteIntro;
