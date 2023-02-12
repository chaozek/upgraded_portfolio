import { Flex, IconButton } from "@chakra-ui/react";
import { FiHome, FiUser, FiAward, FiStar, FiPhone } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import NavItem from "../components/NavItem";
import { Container } from "./Container";

interface Props {
  navSize: string;
  changeNavSize: (size: string) => void;
  changeShowMobileMenu: (show: boolean) => void;
  showMobileMenu: boolean;
}
export const Sidebar = ({
  navSize,
  changeNavSize,
  changeShowMobileMenu,
  showMobileMenu,
}: Props) => {
  let closeOnMobileLinkClick = () => {
    changeNavSize("large");
    changeShowMobileMenu(!showMobileMenu);
  };

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
          onClick={closeOnMobileLinkClick}
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
            onClick={closeOnMobileLinkClick}
            navSize={navSize}
            icon={FiHome}
            title="home"
          />
          <NavItem
            onClick={closeOnMobileLinkClick}
            navSize={navSize}
            icon={FiUser}
            title="about"
          />
          <NavItem
            onClick={closeOnMobileLinkClick}
            navSize={navSize}
            icon={FiStar}
            title="skills"
          />
          <NavItem
            onClick={closeOnMobileLinkClick}
            navSize={navSize}
            icon={FiAward}
            title="projects"
          />
          <NavItem
            onClick={closeOnMobileLinkClick}
            navSize={navSize}
            icon={FiPhone}
            title="contact"
          />
        </Flex>
      </Container>
    </Flex>
  );
};
