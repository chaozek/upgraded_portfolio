import { ChakraProvider } from "@chakra-ui/react";
import "../../styles/styles.global.scss"; // Global styles
import theme from "../theme";
import { AppProps } from "next/app";
import { Layout } from "../layout";

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
