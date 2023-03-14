import { Image } from "@chakra-ui/react";
import { ComponentImagesDocument, useDeleteImageMutation } from "generated";
import React from "react";
import { getComponentImages } from "src/HOC/getComponentImages";
import { uploadImageHOC } from "src/HOC/uploadImageHOC";
import EditableField from "src/utils/editableField";
import { compose } from "recompose";
import { Flex } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRef } from "react";
import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import IntroJs from "./introJs/Intro";

const ComponentWIthImage = ({
  component,
  parentComponent,
  images,
  loading: _loading,
  onChange,
  parentName,
  ...rest
}) => {
  const [deleteImage, { _, loading, error }]: any = useDeleteImageMutation();
  const getImageCloudinarySize = (img, size) => {
    return (
      img.split("/upload")[0] + "/" + "upload/" + size + img.split("/upload")[1]
    );
  };
  const selectRef = useRef<any>();
  const btnRef = useRef<any>();
  return (
    <Box
      marginTop="5"
      width="100%"
      display="flex"
      justifyContent="center"
      height={{ base: "300px", md: "400px", lg: "650px" }}
      minHeight={{ base: "300px", md: "400px", lg: "650px" }}
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
      backgroundPosition="center"
      position="relative"
    >
      <Box position="absolute" top="20%">
        <EditableField
          fontSize={{ base: "40px", md: "80px", lg: "100px", xl: "150px" }}
          color="#6565FD"
          textShadow="3px 4px 7px rgba(81,67,21,0.8)"
          component={component}
        >
          {component &&
          component.texts.find((text) => text.textOrder == "text1")
            ? component &&
              component.texts.find((text) => {
                return text.textOrder === "text1";
              })
            : {
                textOrder: "text1",
                createText: true,
                name: parentName,
                page: parentName,
                parentComponent: parentComponent,
                defaultValue: "DEFAULT_VALUE",
              }}
        </EditableField>
      </Box>
      <Flex flexWrap="wrap" justifyContent="end" alignItems="end">
        {images &&
          images.map((img) => {
            return (
              <Image
                cursor="pointer"
                width={{ base: "400px", md: "500px", lg: "800px" }}
                zIndex="1"
                id="heroImg"
                onClick={() => {
                  if (
                    confirm(
                      "Are you sure to delete this image? After deleting u can upload new one."
                    )
                  ) {
                    deleteImage({
                      variables: {
                        id: img.id,
                      },
                      refetchQueries: [
                        {
                          query: ComponentImagesDocument,
                          variables: {
                            component: "ComponentWIthImage",
                          },
                        },
                      ],
                    });
                  } else {
                    return;
                  }
                }}
                p="3"
                style={{
                  aspectRatio: "3/2",
                  objectFit: "contain",
                }}
                src={getImageCloudinarySize(img.image, "w_800,c_scale")}
              />
            );
          })}

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
                    onChange={(e) =>
                      onChange({ ...e, targetComponent: target }) as any
                    }
                  />
                  {images.length ? null : (
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
      </Flex>
    </Box>
  );
};
const enhancer = compose();

export default enhancer(
  uploadImageHOC(
    getComponentImages(ComponentWIthImage, "ComponentWIthImage"),
    "ComponentWIthImage"
  )
);
