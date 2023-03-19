import "../styles/styles.global.scss"; // Global styles

import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { MyContextProvider } from "src/context";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MyContextProvider {...pageProps}>
        <DndProvider backend={HTML5Backend}>
          <div id="react-modals" />
          <Component {...pageProps} />
        </DndProvider>
      </MyContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
