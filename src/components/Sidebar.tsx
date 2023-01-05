import { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiBriefcase,
  FiSettings,
} from "react-icons/fi";
import { IoPawOutline, IoClose } from "react-icons/io5";
import NavItem from "../components/NavItem";
import { Container } from "./Container";
export const Sidebar = ({
  navSize,
  changeNavSize,
  changeShowMobileMenu,
  showMobileMenu,
}) => {
  return (
    <Flex
      pos="fixed"
      h="100vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
      transition="all cubic-bezier(0, 0.52, 1, 1) .2s"
      justifyContent="space-between"
      left={[
        showMobileMenu ? "0px" : "-200px",
        showMobileMenu ? "0px" : "-200px",
        showMobileMenu ? "0px" : "-200px",
        "0px",
      ]}
      zIndex="2"
      onMouseOver={() => {
        changeNavSize("large");
      }}
      onMouseLeave={() => {
        !showMobileMenu ? changeNavSize("small") : null;
      }}
    >
      <Container h="100%" justifyContent="space-between">
        <IconButton
          aria-label="menu"
          ml="3"
          mt="2"
          icon={<IoClose />}
          display={["flex", "flex", "flex", "none"]}
          position="absolute"
          top="0"
          right="5px"
          onClick={() => {
            changeNavSize("large");
            changeShowMobileMenu(!showMobileMenu);
          }}
        />
        <Flex
          p="10px"
          flexDir="column"
          w="100%"
          alignItems={navSize == "small" ? "center" : "flex-start"}
          as="nav"
          mt="30px"
        >
          <NavItem
            navSize={navSize}
            icon={FiHome}
            title="home"
            description="This is the description for the dashboard."
          />
          <NavItem navSize={navSize} icon={FiCalendar} title="about" />
          <NavItem navSize={navSize} icon={FiUser} title="Skills" />
          <NavItem navSize={navSize} icon={IoPawOutline} title="Works" />
          <NavItem navSize={navSize} icon={FiDollarSign} title="Contact" />
        </Flex>
        <Flex
          p="5%"
          flexDir="column"
          w="100%"
          alignItems={navSize == "small" ? "center" : "flex-start"}
          mb={4}
        >
          <Divider display={navSize == "small" ? "none" : "flex"} />
          <Flex mt={4} align="center">
            <Avatar size="sm" src="avatar-1.jpg" />
            <Flex
              flexDir="column"
              ml={4}
              display={navSize == "small" ? "none" : "flex"}
            >
              <Heading as="h3" size="sm">
                Pavel Kaplan
              </Heading>
              <Text color="gray">Admin</Text>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};
