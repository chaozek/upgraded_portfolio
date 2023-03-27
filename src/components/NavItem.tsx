import React from "react";
import { Flex, Text, Icon, Link, Menu } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import { capitalizeFirstLetter } from "../helpers/helpers";
interface Props {
  icon: IconType;
  title: string;
  active?: boolean;
  navSize: string;
  onClick: () => void;
}
export default function NavItem({
  icon,
  title,
  active,
  navSize,
  ...rest
}: Props) {
  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      height="100%"
      //  alignItems={navSize == "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <Link
          backgroundColor={active && "greenTheme"}
          p={3}
          borderRadius={8}
          _hover={{
            textDecor: "none",
            backgroundColor: "greenLightTheme",
          }}
          w={navSize == "large" && "100%"}
          href={"#" + title}
          {...rest}
        >
          <Flex
            transition="all cubic-bezier(0, 0.52, 1, 1) .3s"
            justifyContent={navSize == "small" ? "center" : "flex-start"}
            ml={navSize == "small" ? "0px" : "5px"}
          >
            <Flex justifyContent={"center"}>
              <Icon
                as={icon}
                fontSize="xl"
                color={active ? "#82AAAD" : "gray.500"}
                display="flex"
              />
            </Flex>

            <Text
              transition="background cubic-bezier(0, 0.52, 1, 1) .1s"
              ml={5}
              display={navSize == "small" ? "none" : "block"}
            >
              {capitalizeFirstLetter(title)}
            </Text>
          </Flex>
        </Link>
      </Menu>
    </Flex>
  );
}
