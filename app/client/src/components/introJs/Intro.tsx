import React, { useState } from "react";
import { Steps, Hints } from "intro.js-react";

import "intro.js/introjs.css";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

const IntroJs = (): JSX.Element => {
  const [stepsEnabled, setStepsEnabled] = useState(false);
  const [hintsEnabled, setHintEnabled] = useState(false);
  const [initialStep] = useState(0);
  const [tour] = useState({
    options: {
      showProgress: true,
    },
    steps: [
      {
        element: "#add",
        intro: "Hover over Text & change it",
      },
      {
        element: "#heroImg",
        intro: "Hover over Image # click to change it",
      },
      {
        element: ".header",
        intro: "Tittel film liste",
      },
    ],
    hints: [
      {
        element: "#add",
        hint: "Hallo legg til film",
        hintPosition: "middle-right",
      },
      {
        element: "#remove",
        hint: "Hallo fjern",
        hintPosition: "middle-middle",
      },
      {
        element: ".header",
        hint: "En liste av filmer",
        hintPosition: "middle-middle",
      },
    ],
  });

  const onExit = () => {
    setStepsEnabled(false);
  };

  const handleHelp = () => {
    setStepsEnabled((prev) => !prev);
  };

  const handleHint = () => {
    setHintEnabled((prev) => !prev);
  };

  return (
    <Box>
      <Flex gap="5">
        <Steps
          enabled={stepsEnabled}
          steps={tour.steps}
          initialStep={initialStep}
          onExit={onExit}
          options={tour.options}
        />
        <Hints enabled={hintsEnabled} hints={tour.hints} />
        <Button onClick={handleHelp}>Help</Button>
        <Button onClick={handleHint}>Hint</Button>
      </Flex>
    </Box>
  );
};

export default IntroJs;
