import {
  GraphQLUpload,
  graphqlUploadExpress
} from "graphql-upload";
import { dirname, join } from "path";

import { GraphQLError } from "graphql";
import cloudinary from "cloudinary";
import { finished } from "stream/promises";
import fs from "fs";
/* import multer from "multer"; */
import pkg from "@prisma/client";
import prisma from "../database.js";

cloudinary.config({
  cloud_name: "dsvz1nhky",
  api_key: "639393221736719",
  api_secret: "X_UZjZVyJUq_vZ3AsQBWTjss82E",
});
const { Prisma } = pkg;
const Mutation = {
  createTextsToComponent: async (parent, args) => {
    try {
      const updatedTextsComponent = await prisma.pageComponents.update({
        where: { page: args.page },
        data: {
          components: {
            update: {
              where: {
                name: args.name,
              },
              data: {
                texts: {
                  create: [
                    {
                      title: args.title,
                      textOrder: args.textOrder,
                    },
                  ],
                },
              },
            },
          },
        },
      });
      return updatedTextsComponent;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        return error;
      }
    }
    /*  throw new GraphQLError(err, {
      extensions: { code: "YOUR_ERROR_CODE" },
    });
    throw new Error("Authentication required"); */
  },
  createComponent: async (parent, args) => {
    try {
      const createdComponent = await prisma.pageComponents.create({
        data: {
          page: args.page,
          /*   componentsToRender: {
            create: {
              component: args.parentName,
              pageName: args.page,
            },
          }, */
          components: {
            create: {
              name: args.name,
              parentName: args.parentName,
              title: args.title,
              page: args.page,
              texts: {
                create: args.texts,
                textOrder: args.textOrder,
              },
            },
          },
        },
        include: {
          components: true,
        },
      });
      return createdComponent;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        return error.code;
      }
      console.log(error.message, "ERR");
      throw new GraphQLError(error.message, {
        extensions: {
          code: error.code,
        },
      });
    }
  },
  editComponentPage: async (parent, args) => {
    const foundComponentToEdit = await prisma.pageComponents.update({
      where: { page: args.page },
      data: {
        components: {
          update: {
            where: {
              id: args.component.id,
            },
            data: {
              name: args.component.name,
              title: args.component.title,
              texts: {
                update: {
                  where: { id: Number(args.component.texts.id) },
                  data: {
                    description: args.component.texts.description,
                    title: args.component.texts.title,
                  },
                },
              },
            },
          },
        },
      },
      include: {
        components: true,
      },
    });
    return foundComponentToEdit;
  },
  addComponentToPage: async (parent, args) => {
    const foundComponent = await prisma.ComponentToRender.findUnique({
      where: { component: args.component.name },
    });
    const decideRender = () => {
      if (foundComponent && foundComponent.isUserCreated === true) {
        return {};
      } else {
        return {
          create: {
            component: args.component.parentName,
            pageName: args.page,
          },
        };
      }
    };
    foundComponent && foundComponent.isUserCreated === true;
    const foundComponentToAdd = await prisma.pageComponents.update({
      where: { page: args.page },
      data: {
        componentsToRender: decideRender(),
        components: {
          create: {
            page: args.page,
            title: args.component.title,
            name: args.component.name,
            parentName: args.component.parentName,
            texts: {
              create: [
                {
                  description: args.component.texts.description,
                  title: args.component.texts.title,
                  textOrder: args.component.texts.textOrder,
                },
              ],
            },
          },
        },
      },
      include: {
        components: true,
      },
    });
    return foundComponentToAdd;
  },

  deletePage: async (parent, args) => {
    const foundComponentToAdd = await prisma.pageComponents.delete({
      where: { page: args.page },
    });
  },
  deleteImage: async (parent, args) => {
    const deleted = await prisma.image.delete({
      where: {
        id: Number(args.Id),
      },
    });
    fs.unlink;
    ("");
    const lastIndex = deleted.image.lastIndexOf("/");
    let before = "";
    let after = "";

    if (lastIndex !== -1) {
      before = deleted.image.slice(0, lastIndex);
      after = deleted.image.slice(lastIndex + 1);
    }
    cloudinary.v2.uploader.destroy(
      after.split(".")[0],
      function (error, result) {
        console.log(result, error);
        if (result.result === "ok") return true;
      }
    );
  },
  imageUpload: async (
    parent,
    {
      file: {
        file: { filename, mimetype, encoding, createReadStream },
      },
      component,
      specificLoc,
    }
  ) => {
    const stream = createReadStream();
    const __dirname = dirname(filename);
    /*  await prisma.image.deleteMany({}); */

    let serverFile = join(
      __dirname,
      `/images/${filename.split(".jpg")[0]}-${Date.now()}.${
        filename.split(".")[1]
      }`
    );

    const fstream = fs.createWriteStream(serverFile);
    stream.pipe(fstream);
    await finished(fstream);
 ;
    const uploaded = await cloudinary.v2.uploader.upload(fstream.path);
    const createdImage = await prisma.image.create({
      data: {
        component,
        specificLoc,
        image: uploaded.secure_url,
        path: `/images/${filename.split(".jpg")[0]}-${Date.now()}.${
          filename.split(".")[1]
        }`,
      },
    });
    return createdImage;
  },
  showOrHideComponentOnPage: async (parent, args) => {
    const foundComponentToEdit = await prisma.pageComponents.update({
      where: { page: args.page },
      data: {
        components: {
          update: {
            where: {
              name: args.name,
            },
            data: {
              show: args.show,
            },
          },
        },
        /*  componentsToRender: {
          update: {
            where: {
              component: args.component,
            },
            data: {
              show: args.show,
            },
          },
        }, */
      },
    });
    return foundComponentToEdit;
  },
  addComponentToRender: async (parent, args) => {
    const foundComponentToAdd = await prisma.pageComponents.update({
      where: { page: args.pageName },
      data: {
        componentsToRender: {
          create: {
            component: args.component,
            pageName: args.pageName,
            isUserCreated: true,
          },
        },
      },
      include: {
        components: true,
      },
    });
    return foundComponentToAdd;
  },
  updateOrderInComponents: async (parent, args) => {
    /* 
    const componentsToUpdate = args.componentsToRender.map((component) => ({
      component: component.component,
      pageName: component.pageName,
      isUserCreated: component.isUserCreated,
      show: component.show,
    })); */

    const arrs = args.componentsToRender;
    const componentsWithNumberIds = args.componentsToRender.map((obj) => {
      return { ...obj, id: parseInt(obj.id) };
    });
    await prisma.ComponentToRender.deleteMany({
      where: { pageName: "homepage" },
    });
    /*     const foundComponentToAdd = await prisma.ComponentToRender.createMany({
      data: componentsWithNumberIds,
    }); */

    ///FIND WAY TO ADD HOMEPAGE PAGENAME -- PROBABLY TETURN ON FE AND JUST PAST INTO HERE AND DONT CHANGE ANYTHING HERE
    const newlyCreated = await prisma.ComponentToRender.createMany({
      data: componentsWithNumberIds,
    });
    //STOP HERE

    /*   const foundComponentToAdd = await prisma.pageComponents.update({
      where: { page: "homepage" },
      data: {
        updateMany: {
          componentsToRender: { set: componentsToUpdate },
        },
      },
    }); */
    return newlyCreated;
  },
};
export default Mutation;
