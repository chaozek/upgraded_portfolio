import { Box, Flex, IconButton } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

export const Layout = ({ children }: { children: JSX.Element }) => {
  const [navSize, changeNavSize] = useState("small");
  const [showMobileMenu, changeShowMobileMenu] = useState(false);

  return (
    <div className="wrapper">
      <Box>
        <DarkModeSwitch />
        <Sidebar
          showMobileMenu={showMobileMenu}
          changeShowMobileMenu={changeShowMobileMenu}
          navSize={navSize}
          changeNavSize={changeNavSize}
        />
      </Box>
      <IconButton
        background="none"
        aria-label="menu"
        ml="3"
        _hover={{ background: "none" }}
        icon={<FiMenu />}
        size="lg"
        top="10px"
        display={["flex", "flex", "flex", "none"]}
        position="absolute"
        onClick={() => {
          changeNavSize("large");
          changeShowMobileMenu(!showMobileMenu);
        }}
      />
      <Flex w="100%">
        <Flex w="100%">
          <Box
            w={[
              "100%",
              "100%",
              "100%",
              "calc(100% - 60px)",
              "calc(100% - 60px)",
            ]}
            marginLeft={["0px", "0px", "0px", "75px"]}
            h={"100vh"}
          >
            <Box p={["0px", "0 33px", "0 33px"]} maxW={"1140px"} m="0 auto">
              {children}
            </Box>
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};
