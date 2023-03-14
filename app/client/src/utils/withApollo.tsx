import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { useRouter } from "next/router";
import nextWithApollo from "next-with-apollo";
import { createUploadLink } from "apollo-upload-client";
const uploadLink = createUploadLink({
  uri: "http://localhost:9091/graphql",
});

const withApollo = nextWithApollo(
  ({ initialState, headers }) => {
    console.log("CACHE STORE", initialState);
    return new ApolloClient({
      ssrMode: typeof window === "undefined",
      link: ApolloLink.from([uploadLink]),
      connectToDevTools: true,
      headers: {
        ...(headers as Record<string, string>),
      },
      defaultOptions: {
        query: {
          fetchPolicy: "no-cache",
          errorPolicy: "all",
        },
      },
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      const router = useRouter();
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} {...router} />
        </ApolloProvider>
      );
    },
  }
);

export default withApollo;