import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";

const fonts = {
  heading: `'Alexandria', sans-serif`,
  body: `'Roboto', sans-serif`,
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ["48px", "72px"],
      fontWeight: "light",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: ["36px", "48px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
  },
  semanticTokens: {
    colors: {
      "chakra-body-text": { _light: "white" },
      text: {
        default: "#16161D",
        _dark: "#ade3b8",
      },
      heroGradientStart: {
        default: "#7928CA",
        _dark: "#e3a7f9",
      },
      heroGradientEnd: {
        default: "#00000",
        _dark: "#fbec8f",
      },
    },
    radii: {
      button: "12px",
    },
  },
  colors: {
    black: "#1B1B42",
  },
  fonts,
  breakpoints,
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#1B1B42", "white")(props),
        color: mode("#1B1B42", "white")(props),
      },
    }),
  },
  config: {
    cssVarPrefix: "ck",
  },
});

export default theme;
