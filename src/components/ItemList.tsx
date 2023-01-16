import { Image, List, ListItem, Text } from "@chakra-ui/react";
interface Props {
  items: { path: HTMLImageElement; name: string }[];
}
export const ItemList = ({ items }: Props) => (
  <List
    display="grid"
    gridTemplateColumns="repeat(auto-fill, minmax(80px, 1fr))"
    gridColumnGap="50px"
    gridRowGap="50px"
  >
    {items.map((item) => {
      return (
        <ListItem
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          boxShadow="0px 4px 8px rgb(134 151 168 / 10%)"
          border="1px solid textBlockBackground"
          transition="all 0.3s ease-in"
          _hover={{
            boxShadow: "0 10px 28px rgb(0 0 0 / 20%)",
          }}
          padding="10px"
          borderRadius="15px"
          width="80px"
        >
          <Image
            objectFit="contain"
            src={item.path.src}
            width="35px"
            height="35px"
          />

          <Text textTransform="uppercase" mt="5px" fontSize="11px">
            {item.name}
          </Text>
        </ListItem>
      );
    })}
  </List>
);
