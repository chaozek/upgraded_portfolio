import prisma from "../database.js";

const Query = {
  components: async (parent, args) => {
    await prisma.component.deleteMany({});
    await prisma.pageComponents.deleteMany({});
    await prisma.ComponentToRender.deleteMany({});
    return prisma.component.findMany({});
  },
  componentsToRender: async (parent, args) => {
    return prisma.ComponentToRender.findMany({
      where: { pageName: args.pageName },
    });
  },
  pageComponent: (parent, args) => {
    return prisma.pageComponents.findUnique({ where: { page: args.page } });
  },
  images: (parent, args) => {
    return prisma.image.findMany({});
  },
  componentImages: (parent, args) => {
    return prisma.image.findMany({ where: { component: args.component } });
  },
  componentImagesMoreComponents: (parent, args) => {
    return prisma.image.findMany({
      where: { component: { contains: args.component } },
    });
  },
};
export default Query;
