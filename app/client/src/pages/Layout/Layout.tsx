import {
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import Collapsible from "react-collapsible";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-scroll";
import IntroJs from "src/components/introJs/Intro";
import { componentsShape } from "src/createComponent/componentsNames";
import { CreateComponent } from "src/createComponent/CreateComponent";
import { addComponentToRender } from "src/views/helpers";

interface LayoutProps {
  children: React.ReactNode;
  sideMenuOpened: boolean;
  setSideMenuOpened: () => void;
  isAdmin: boolean;
  setAdmin: () => void;
  addComponentToRenderMutation: () => void;
  logout: () => void;
  setImageEditable: () => void;
  data: any;
  components: any[];
  componentsToRender: any[];
  setIsDraggable: () => void;
  isDraggable: boolean;
  isTextEditable: boolean;
  setTextEditable: () => void;
  isImageEditable: boolean;
}
const Layout = ({
  children,
  sideMenuOpened,
  setSideMenuOpened,
  isAdmin,
  setAdmin,
  addComponentToRenderMutation,
  data,
  components,
  componentsToRender,
  setIsDraggable,
  isDraggable,
  isTextEditable,
  setTextEditable,
  isImageEditable,
  setImageEditable,
  logout,
}: LayoutProps) => {
  const handleBothClicks = () => {
    if (isAdmin === false) {
      setAdmin();
    } else {
      logout();
    }
  };
  return (
    <Flex flexDirection={{ base: "none", md: "row" }}>
      <Box
        backgroundColor="gray.800"
        color="white"
        overflow="auto"
        width={sideMenuOpened ? "300px" : "0px"}
        transition="width 0.3s ease"
        display={["none", "none", "none", "block"]}
        borderRight={sideMenuOpened && "1px solid #6565FD"}
      >
        <Box
          borderRight="1px"
          borderColor="black"
          position="fixed"
          top="65px"
          right="0"
          height="100%"
        />

        <Box
          height="65px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="xs" color="#39FF14">
            {process.env.NEXT_PUBLIC_TEST
              ? process.env.NEXT_PUBLIC_TEST
              : "nic"}
          </Text>
        </Box>
        <Box position="fixed" overflowY="auto" height="100%" mb="5">
          <Box
            gap="5"
            display="flex"
            flexDirection={{ md: "column" }}
            justifyContent="start"
            alignItems="center"
            pb="100px"
          >
            <Collapsible trigger="ENABLE FEATURES">
              <Box
                gap="5"
                display="flex"
                flexDirection={{ md: "column" }}
                justifyContent="center"
                alignItems="center"
                mt={5}
                width="100%"
              >
                <Button
                  width="90%"
                  backgroundColor="#1F1F4B"
                  onClick={() => setImageEditable()}
                >
                  {isImageEditable ? "Disable" : "Enable"} image edit
                </Button>
                <Button
                  width="90%"
                  backgroundColor="#1F1F4B"
                  onClick={() => setIsDraggable()}
                >
                  {isDraggable ? "Disable dragging" : "Enable dragging"}
                </Button>
                <Button
                  onClick={() => setTextEditable()}
                  backgroundColor="#1F1F4B"
                  width="90%"
                >
                  {!isTextEditable ? "Enable" : "Disable"} text editor
                </Button>
              </Box>
            </Collapsible>
            <Collapsible trigger="CREATE COMPONENTS">
              {componentsShape.map((comp, i) => {
                return (
                  <Box
                    gap="5"
                    display="flex"
                    flexDirection={{ md: "column" }}
                    justifyContent="center"
                    alignItems="center"
                    mt={5}
                  >
                    <Button
                      key={i}
                      backgroundColor="#1F1F4B"
                      width="90%"
                      onClick={() =>
                        addComponentToRender(
                          addComponentToRenderMutation,
                          componentsToRender,
                          comp.value
                        )
                      }
                    >
                      CREATE {comp.value}
                    </Button>
                  </Box>
                );
              })}
            </Collapsible>
            <Collapsible trigger="SHOW / HIDE COMPONENTS">
              <Box
                gap="5"
                display="flex"
                flexDirection={{ md: "column" }}
                justifyContent="center"
                alignItems="center"
                mt={5}
              >
                {components &&
                  components.map((component, i) => {
                    return (
                      <GridItem w="100%">
                        <Link smooth={true} to={component.componentName}>
                          <CreateComponent
                            key={i}
                            componentName={component.componentName}
                            componentToRenderStatic={component.componentName}
                            componentInfo={data}
                          />
                        </Link>
                      </GridItem>
                    );
                  })}
              </Box>
            </Collapsible>
            <Collapsible trigger={`TUTORIAL GUIDE (wip)`}>
              <Box
                gap="5"
                display="flex"
                flexDirection={{ md: "column" }}
                justifyContent="center"
                alignItems="center"
                mt={5}
              >
                <IntroJs />
              </Box>
            </Collapsible>
          </Box>
        </Box>
      </Box>
      <Box flex="1" width={{ xl: "300px" }} transition="margin-left 0.3s ease">
        <Flex
          alignItems="center"
          backgroundColor="#1A202C"
          height={{ base: "56px", md: "64px" }}
          justifyContent="space-between"
          position="sticky"
          padding="0 1rem"
          top="0"
          zIndex="10"
          borderBottom="1px solid #6565FD"
        >
          <Heading weight="bold" color="#6565FD">
            PK
          </Heading>
          <Box gap="5" display="flex">
            <Button onClick={() => handleBothClicks()}>
              {isAdmin ? "FAKE LOGOUT" : "FAKE LOGIN"}
            </Button>
            <Button
              rightIcon={<FaRegEdit />}
              colorScheme="blue"
              variant="outline"
              display={["none", "none", "none", "flex"]}
              color="red"
              isDisabled={!isAdmin}
              onClick={() => setSideMenuOpened()}
            >
              Edit page
            </Button>
          </Box>
        </Flex>
        <Box>{children}</Box>
      </Box>
    </Flex>
  );
};

export default Layout;
