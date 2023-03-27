import { Box, Flex, Heading, Image } from "@chakra-ui/react";

import EditableField from "../../../utils/editableField";
import { PageComponentQuery } from "../../../../generated";
import { Text } from "@chakra-ui/react";
import png from "../../../assets/png.png";

interface Props {
  component: PageComponentQuery["pageComponent"]["components"]["0"];
  isAdmin: boolean;
  parentComponent: string;
}

export const Hero = ({ component, parentComponent, ...rest }: Props) => {
  const renderExistingComponent = (id) => {
    return (
      component &&
      component.texts.find((text: any) => {
        return text.mapid === id;
      })
    );
  };
  return (
    <Flex position="relative">
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        height={{ base: "300px", md: "400px", lg: "650px" }}
        minHeight={{ base: "300px", md: "400px", lg: "650px" }}
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        backgroundPosition="center"
        position="relative"
      >
        <Box position="absolute" top="20%">
          <EditableField
            fontSize={{ base: "40px", md: "80px", lg: "100px", xl: "150px" }}
            color="#978C86"
            opacity={".5"}
            component={component}
          >
            {component &&
            component.texts &&
            component.texts.find((text: any) => text.mapid == 1)
              ? renderExistingComponent(1)
              : {
                  mapId: 1,
                  createText: component && !!component.texts,
                  name: "hero",
                  parentComponent: parentComponent,
                  defaultValue: "PAVEL KAPLAN",
                }}
          </EditableField>
        </Box>
        <Box position="absolute" bottom="0">
          <Image
            width={{ base: "400px", md: "500px", lg: "800px" }}
            src={png.src}
            alt="Pavel Kaplan"
          />
        </Box>
      </Box>
    </Flex>
  );
};

Hero.defaultProps = {
  title: "with-chakra-ui-typespt",
};
