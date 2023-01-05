import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";
const fonts = {
  mono: `'Poppins', Menlo`,
  heading: `'Poppins', sans-serif`,
  body: `'Poppins', sans-serif`,
};

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({
  semanticTokens: {
    colors: {
      "chakra-body-bg": {
        _light: "#F7F7F7",
        _dark: "#1A202C",
      },
      text: {
        default: "#16161D",
        _dark: "#ade3b8",
      },
      heroGradientStart: {
        default: "#7928CA",
        _dark: "#e3a7f9",
      },
      heroGradientEnd: {
        default: "#FF0080",
        _dark: "#fbec8f",
      },
      greenTheme: {
        default: "#319795",
        _dark: "#81E6D9",
      },
      greenLightTheme: {
        default: "#B2F5EA",
        _dark: "#B2F5EA",
      },
      textBlockBackground: {
        default: "white",
        _dark: "#171923",
      },
    },
    radii: {
      button: "12px",
    },
  },
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
});

export default theme;
