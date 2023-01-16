import { Box, FlexProps, Link, Text } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { WhiteBlock } from "./WhiteBlock";

export const About = () => {
  const a = moment("Feb 01 2022");
  const b = moment();
  const no_of_days = b.diff(a, "days");
  return (
    <Box id="about">
      <WhiteBlock description="SOME INFO" header="SOME INFO">
        <>
          <Text>
            I'm self taught web developer from{" "}
            <strong>Czech Republic, Brno</strong>.
            <br />
            It has all began back in 2018 when I was working as marketing
            manager. I couldn't find any reliable website developer so I've
            started "developing" websites on pagebuilders on my own. I just felt
            for it and also made some websites for a few first customers.
            <br /> It became serious on April 2020 when I started to deep dive
            into website development. Since then I've done a lot of websites.
            Then I felt in love with <strong>React</strong>.<br />
            <br /> Iam successful{" "}
            <strong>
              {" "}
              2021{" "}
              <Link href="https://www.it-absolvent.cz/" isExternal>
                IT-absolvent
              </Link>{" "}
              graduate
            </strong>{" "}
            where I've gained team & company development experience. <br />{" "}
            <br />{" "}
            <strong>
              Since February 2022 Iam working as a full-time React developer on
              projects like{" "}
              <Link href="http://airbank.cz/" isExternal>
                AirBank
              </Link>
              ,{" "}
              <Link href="http://zonky.cz/" isExternal>
                Zonky
              </Link>
              ,{" "}
              <Link href="http://Bluestyle.cz/" isExternal>
                Bluestyle
              </Link>
              .
            </strong>
          </Text>
          <br />
        </>
      </WhiteBlock>
      <WhiteBlock noSpace>
        <Text
          color="greenTheme"
          textAlign="center"
          fontSize="2xl"
          fontWeight="bold"
        >
          It has been exactly {no_of_days.toString()} days since I'm full-time
          React developer!
        </Text>
      </WhiteBlock>
    </Box>
  );
};
