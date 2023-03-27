import "../styles/styles.global.scss"; // Global styles

import { ChakraProvider, Flex, Heading } from "@chakra-ui/react";

import { AppProps } from "next/app";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Layout from "./Layout";
import { MyContextProvider } from "src/context";
import WebsiteIntro from "src/components/WebsiteIntro";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MyContextProvider {...pageProps}>
        <Layout {...pageProps}>
          <WebsiteIntro />
          <DndProvider backend={HTML5Backend}>
            <div id="react-modals" />
            <Component {...pageProps} />
          </DndProvider>
        </Layout>
      </MyContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
