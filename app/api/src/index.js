import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
// Construct a schema, using GraphQL schema language
import typeDefs from "./schema.js";
import resolvers from "./resolvers/index.js";
import { graphqlUploadExpress } from "graphql-upload";

// Provide resolver functions for your schema fields

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
await server.start();
app.use(graphqlUploadExpress());

server.applyMiddleware({ app });

app.listen({ port: 9091 }, () =>
  console.log(`🚀 Server ready at http://localhost:9091${server.graphqlPath}`)
);
