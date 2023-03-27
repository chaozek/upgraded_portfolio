import {
  ComponentImagesDocument,
  ComponentImagesMoreComponentsDocument,
  useDeleteImageMutation,
} from "generated";
import { Form, Formik } from "formik";

import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import EditableField from "src/utils/editableField";
import { Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import React from "react";
import defaultImage from "../../assets/CHANGE.png";
import { useRef } from "react";

const Column = ({
  images,
  onChange,
  component,
  textOrder,
  parentName,
  parentComponent,
  loading: _loading,
  index,
  isImageEditable,
  image,
}) => {
  console.log(isImageEditable, "VisImageEditable");
  const [deleteImage, { _, loading, error }]: any = useDeleteImageMutation();
  const getImageCloudinarySize = (img, size) => {
    return (
      img &&
      img.split("/upload")[0] + "/" + "upload/" + size + img &&
      img.split("/upload")[1]
    );
  };
  const selectRef = useRef<any>();
  const btnRef = useRef<any>();
  return (
    <Box>
      <Flex
        height="100%"
        background="#1F1F4B"
        boxShadow="#16173B 0px 8px 24px"
        transition="all 0.15s ease-out"
        p="5"
        _hover={{
          boxShadow: "rgb(33, 12, 222) 0px 20px 30px -10px",
        }}
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        borderRadius="10px"
      >
        <Image
          cursor={image && isImageEditable ? "pointer" : null}
          width={{ base: "100px", md: "300px", lg: "200px" }}
          zIndex="1"
          id="heroImg"
          borderRadius="100%"
          onClick={
            image && isImageEditable
              ? () => {
                  if (
                    confirm(
                      "Are you sure to delete this image? After deleting u can upload new one."
                    )
                  ) {
                    if (image) {
                      deleteImage({
                        variables: {
                          id: image.id,
                        },
                        refetchQueries: [
                          {
                            query: ComponentImagesMoreComponentsDocument,
                            variables: {
                              component: "ThreeColumnsWithPicture",
                            },
                          },
                        ],
                      });
                    } else {
                      return;
                    }
                  }
                }
              : null
          }
          p="3"
          src={
            image
              ? "https://res.cloudinary.com/dsvz1nhky/image/upload/" +
                getImageCloudinarySize(image && image.image, "w_800,c_scale")
              : defaultImage.src
          }
        />
        <>
          <Formik
            initialValues={{ file: null, target: "" }}
            onSubmit={() => {}}
          >
            {({ values: { target } }) => (
              <Form>
                <Flex
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <input
                    ref={btnRef}
                    hidden
                    type="file"
                    required
                    onChange={(e) => {
                      return onChange({
                        ...e,
                        targetComponent: String(index),
                        parentName: parentName,
                      }) as any;
                    }}
                  />
                  {image || !isImageEditable ? null : (
                    <Button
                      isLoading={_loading}
                      onClick={() => btnRef && btnRef.current.click()}
                    >
                      Upload Image
                    </Button>
                  )}
                </Flex>
              </Form>
            )}
          </Formik>
        </>
        <EditableField
          color="white"
          fontWeight={"bold"}
          component={component}
          textAlign="center"
          renderAs="text"
          fontSize={["1xl", "1xl", "2xl"]}
        >
          {component &&
          component.texts.find((text) => text.textOrder == textOrder)
            ? component &&
              component.texts.find((text) => {
                return text.textOrder === textOrder;
              })
            : {
                textOrder: textOrder,
                createText: true,
                name: parentName,
                page: parentName,
                parentComponent: parentComponent,
                defaultValue: "DEFAULT_VALUE",
              }}
        </EditableField>
      </Flex>
    </Box>
  );
};

export default Column;
