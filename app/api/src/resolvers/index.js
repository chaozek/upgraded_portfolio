import Query from "./query.js";
import Mutation from "./mutation.js";
import prisma from "../database.js";

const Component = {
  id: (parent) => parent.id,
  name: (parent) => parent.name,
  title: (parent) => parent.title,
  page: (parent) => parent.page,
  texts: (parent, args) => {
    return prisma.component
      .findUnique({
        where: { id: parent.id },
      })
      .texts();
  },
};
const PageComponent = {
  id: (parent) => parent.id,
  page: (parent) => parent.page,
  components: (parent) => {
    return prisma.component.findMany({
      where: { page: parent.page },
    });
  },
  componentsToRender: (parent) => {
    return prisma.ComponentToRender.findMany({
      where: { pageName: parent.page },
    });
  },
};

const addToComponentPage = {
  id: (parent) => parent.id,
  page: (parent) => parent.page,
  components: (parent) => {
    return prisma.component.findMany({
      where: { page: parent.page },
    });
  },
};

const resolvers = {
  PageComponent,
  Component,
  Query,
  Mutation,
};
export default resolvers;
