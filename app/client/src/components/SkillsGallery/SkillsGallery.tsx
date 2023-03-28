import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { ComponentImagesDocument, useDeleteImageMutation } from "generated";
import { useRef } from "react";


const SkillsGallery = ({ data, onChange, images, loading: _loading }) => {
  const btnRef = useRef<any>();
  const selectRef = useRef<any>();
  const getImageCloudinarySize = (img, size) => {
    return (
      img.split("/upload")[0] + "/" + "upload/" + size + img.split("/upload")[1]
    );
  };
  const [deleteImage, { loading, error }] = useDeleteImageMutation();
  return (
    <Box backgroundColor="blue">
      <Heading align="center" m={[2, 3]}>
        Použité technologie na webu
      </Heading>
      <Flex flexWrap="wrap">
        <Box flex="1">
          <Heading mb="3" size="md" align="center">
            FRONT END
          </Heading>
          <Flex flexWrap="wrap">
            {images &&
              images.map((img) => {
                if (img.specificLoc === "FE") {
                  return (
                    <Image
                      cursor="pointer"
                      _hover={{
                        background: "black",
                        borderRadius: "5px",
                      }}
                      onClick={() => {
                        if (confirm("Are you sure to delete this image?")) {
                          deleteImage({
                            variables: {
                              id: img.id,
                            },
                            refetchQueries: [
                              {
                                query: ComponentImagesDocument,
                                variables: {
                                  component: "SkillsGallery",
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
                      src={getImageCloudinarySize(img.image, "w_100,c_scale")}
                    />
                  );
                }
              })}
          </Flex>
        </Box>
        <Box flex="1">
          <Heading mb="3" size="md" fontWeight="bold" align="center">
            BACK END
          </Heading>
          <Flex flexWrap="wrap">
            {images &&
              images.map((img) => {
                if (img.specificLoc === "BE") {
                  return (
                    <Image
                      cursor="pointer"
                      _hover={{
                        background: "black",
                        borderRadius: "5px",
                      }}
                      p="3"
                      onClick={() => {
                        if (confirm("Are you sure to delete this image?")) {
                          deleteImage({
                            variables: {
                              id: img.id,
                            },
                            refetchQueries: [
                              {
                                query: ComponentImagesDocument,
                                variables: {
                                  component: "SkillsGallery",
                                },
                              },
                            ],
                          });
                        } else {
                          return;
                        }
                      }}
                      style={{
                        aspectRatio: "3/2",
                        objectFit: "contain",
                      }}
                      src={getImageCloudinarySize(img.image, "w_100,c_scale")}
                    />
                  );
                }
              })}
          </Flex>
        </Box>
      </Flex>
      <Formik initialValues={{ file: null, target: "" }} onSubmit={() => {}}>
        {({ values: { target } }) => (
          <Form>
            <Flex
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <Field
                style={{
                  height: "40px",
                  borderRadius: "5px",
                  width: "100px",
                  margin: "5px",
                }}
                ref={selectRef}
                required
                as="select"
                name="target"
              >
                <option value=""></option>
                <option value="FE">FE</option>
                <option value="BE">BE</option>
              </Field>
              <input
                ref={btnRef}
                hidden
                type="file"
                required
                onChange={(e) =>
                  onChange({ ...e, targetComponent: target }) as any
                }
              />
              {target && (
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
    </Box>
  );
};

SkillsGallery.defaultProps = {};
export default SkillsGallery;
