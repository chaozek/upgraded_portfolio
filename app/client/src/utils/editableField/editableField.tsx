import { Box, useDisclosure } from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  PageComponentDocument,
  useCreateTextsToComponentMutation,
  useEditComponentPageMutation,
} from "../../../generated";
import { compose, withProps, withState } from "recompose";

import BasicModal from "../modal/Modal";
import CustomInput from "../input/CustomInput";
import { EditIcon } from "@chakra-ui/icons";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import getTextsData from "../../HOC/getTextsData";
import { useAddComponentToPageMutation } from "../../../generated/index";
import { useEffect } from "react";
import { useState } from "react";

const EditableField = ({
  children,
  component,
  isHovering,
  initData,
  renderAs,
  color,
  fontSize,
  opacity,
  setIsHovering,
  isTextEditable,
  ...rest
}) => {
  const [initTitle, _] = useState(initData && initData.title);
  const [addToComponentPageMutation, { data, loading, error }] =
    useAddComponentToPageMutation();
  const [
    editComponentPageTextMutation,
    { data: __data, loading: __loading, error: __error },
  ] = useEditComponentPageMutation();
  const [
    createTextToComponentMutation,
    { data: _data, loading: _loading, error: _error },
  ] = useCreateTextsToComponentMutation();
  createTextToComponentMutation;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const renderForm = (isSubmitting, submitForm) => (
    <BasicModal
      isSubmitting={isSubmitting}
      onOpen={onOpen}
      isOpen={isOpen}
      onClose={onClose}
      submitForm={submitForm}
    >
      <Form>
        <Field
          component={CustomInput}
          placeholder="Edit"
          size="lg"
          type="text"
          name="newValue"
        />
        <ErrorMessage name="newValue" component="div" />
      </Form>
    </BasicModal>
  );

  const Wrapper =
    renderAs === "text"
      ? ({ children }) => (
          <Text
            opacity={opacity}
            fontSize={fontSize}
            color={color}
            onClick={() => isTextEditable && onOpen()}
            {...rest}
          >
            {children}
          </Text>
        )
      : ({ children }) => (
          <Heading
            onClick={() => isTextEditable && onOpen()}
            opacity={opacity}
            fontSize={fontSize}
            color={color}
            id="add"
            {...rest}
          >
            {children}
          </Heading>
        );
  useEffect(() => {
    if (!component && children && children.textOrder) {
      try {
        if (component) return;
        addToComponentPageMutation({
          variables: {
            component: {
              name: children.name,
              parentName: children.name,
              title: "TEST",
              texts: {
                title: `EDITABLE FIELD ${children.name}, ${children.textOrder}`,
                textOrder: children.textOrder,
              },
            },
            page: children.parentComponent,
          },
          errorPolicy: "all",
          refetchQueries: [
            {
              query: PageComponentDocument,
              variables: {
                page: children.parentComponent,
              },
            },
          ],
        });
      } catch (error) {
        console.log(error, "ERR");
      }
    } else if (children && children.createText) {
      createTextToComponentMutation({
        variables: {
          textOrder: children.textOrder,
          page: component.page,
          name: component.name,
          title: children.defaultValue,
        },
        refetchQueries: [
          {
            query: PageComponentDocument,
            variables: {
              page: children.parentComponent,
            },
          },
        ],
      });
    }
  }, [component]);

  return (
    <>
      {isHovering && (
        <Box
          background="none"
          color="tomato"
          position="absolute"
          top="-0%"
          right="0%"
        >
          <EditIcon w={5} h={5} />
        </Box>
      )}
      <>
        <Box
          //   cursor="pointer"
          border="1px dashed transparent"
          _hover={
            isTextEditable && {
              borderRadius: "5px",
              border: "1px dashed green",
            }
          }
          position="relative"
        >
          <Wrapper>
            {initTitle ? initTitle : children && children.title}
          </Wrapper>
        </Box>
      </>
      <>
        <Formik
          initialValues={{ newValue: children && children.title }}
          enableReinitialize
          validate={(formValues) => {
            const errors: any = {};
            if (!formValues.newValue) {
              errors.newValue = "Invalid name";
            }
          }}
          onSubmit={({ newValue }, { setSubmitting }) => {
            editComponentPageTextMutation({
              variables: {
                component: {
                  id: Number(component.id),
                  //  name: component.page,
                  texts: {
                    textOrder: children.textOrder,
                    id: children.id,
                    description: "TEST",
                    title: newValue,
                  },
                  title: "TEST",
                },
                page: component.page,
              },
            });

            setSubmitting(false);
          }}
        >
          {({ isSubmitting, submitForm, isValid, dirty, errors, values }) => (
            <div>{renderForm(isSubmitting, submitForm)}</div>
          )}
        </Formik>
        <pre style={{ color: "red" }}>
          {error &&
            error.graphQLErrors.map(({ message }, i) => (
              <span key={i}>{message}</span>
            ))}
        </pre>
      </>
    </>
  );
};

const enhanced = compose(
  withState("isHovering", "setIsHovering", false),
  withProps(({ edit, setEdit }) => getTextsData())
);

export default enhanced(EditableField);
