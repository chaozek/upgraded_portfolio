import { ChakraProvider } from "@chakra-ui/react";
import "../styles/styles.global.scss"; // Global styles
import theme from "../theme";
import { AppProps } from "next/app";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { MyContextProvider } from "src/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MyContextProvider>
        <DndProvider backend={HTML5Backend}>
          <div id="react-modals" />
          <Component {...pageProps} />
        </DndProvider>
      </MyContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
