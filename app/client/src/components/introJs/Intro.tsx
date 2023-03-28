import "intro.js/introjs.css";

import { Button, Flex } from "@chakra-ui/react";
import { Hints, Steps } from "intro.js-react";
import { useState } from "react";


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
        intro: "continue...",
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
    <Flex width="90%" flexDirection="column" gap="5">
      <Steps
        enabled={stepsEnabled}
        steps={tour.steps}
        initialStep={initialStep}
        onExit={onExit}
        options={tour.options}
      />
      <Hints enabled={hintsEnabled} hints={tour.hints} />
      <Button backgroundColor="#1F1F4B" onClick={handleHelp}>
        Help
      </Button>
      <Button backgroundColor="#1F1F4B" onClick={handleHint}>
        Hint
      </Button>
    </Flex>
  );
};

export default IntroJs;
