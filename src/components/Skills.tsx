import { Text } from "@chakra-ui/react";
import { WhiteBlock } from "./WhiteBlock";
import { ItemList } from "./ItemList";
import { profiSkills, personalSkills } from "../helpers/skills";
export const Skills = () => (
  <WhiteBlock description="CHECK OUT MY" header="Skills">
    <>
      <Text
        fontWeight={"600"}
        as="h2"
        textTransform="uppercase"
        fontSize="1xl"
        mb="5"
      >
        Main focus (making a living from)
      </Text>
      <ItemList items={profiSkills} />

      <Text
        fontWeight={"600"}
        as="h2"
        textTransform="uppercase"
        fontSize="1xl"
        my="5"
      >
        Working with in personal projects (FE & BE)
      </Text>
      <ItemList items={personalSkills} />
    </>
  </WhiteBlock>
);
