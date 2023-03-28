import "../styles/styles.global.scss"; // Global styles

import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import WebsiteIntro from "src/components/WebsiteIntro";
import { MyContextProvider } from "src/context";
import theme from "../theme";
import Layout from "./Layout";


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
