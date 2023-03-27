import { Text, Box } from "@chakra-ui/react";
interface Props {
  description: string;
  header: string;
}
export const UpperHeader = ({ header, description }: Props) => (
  <Box position="relative" mb="50">
    {description && (
      <Text
        _before={{
          content: '""',
          position: "absolute",
          left: 0,
          top: " 7px",
          width: "50px",
          height: "1px",
          background: "greenTheme",
        }}
        ml="55px"
        fontSize="10px"
        textTransform="uppercase"
      >
        {description}
      </Text>
    )}
    {header && (
      <Text
        fontWeight={"600"}
        as="h2"
        textTransform="uppercase"
        fontSize="25px"
      >
        {header}
      </Text>
    )}
  </Box>
);
