import "../../styles/styles.global.scss"; // Global styles

import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "../layout";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
