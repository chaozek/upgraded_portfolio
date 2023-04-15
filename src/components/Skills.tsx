import { Text } from "@chakra-ui/react";
import { personalSkills, profiSkills } from "../helpers/skills";
import { ItemList } from "./ItemList";
import { WhiteBlock } from "./WhiteBlock";


export const Skills = () => (
  <div id="skills">
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
  </div>
);
