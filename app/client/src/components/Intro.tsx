import { Box } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import EditableField from "src/utils/editableField";


export const Intro = ({
  component,
  isAdmin = true,
  parentComponent,
  parentName,
  isDragging,
  text,
}) => {
  const [localComp, setLocalComp] = useState([]);

  useEffect(() => {
    if (!component) return;
    else setLocalComp(component);
  }, [component, localComp]);

  if (!localComp) {
    return;
  }

  return (
    <SimpleGrid my="8" columns={[1, 2, 2, 2]} spacing={10}>
      <Box>
        <Card
          boxShadow="#16173B 0px 8px 24px"
          transition="all 0.15s ease-out"
          p="10"
          background="#1F1F4B"
          height="100%"
          zIndex="3"
        >
          <EditableField fontSize={"1rem"} component={component}>
            {component &&
            component.texts.find((text) => text.textOrder == "text1")
              ? component &&
                component.texts.find((text) => {
                  return text.textOrder === "text1";
                })
              : {
                  textOrder: "text1",
                  createText: component && !!component.texts,
                  name: parentName,
                  page: parentName,
                  parentComponent: parentComponent,
                  defaultValue: "DEFAULT_VALUE",
                }}
          </EditableField>
        </Card>
      </Box>
      <Box>
        {component && (
          <Card
            boxShadow="#16173B 0px 8px 24px"
            transition="all 0.15s ease-out"
            p="10"
            background="#1F1F4B"
            height="100%"
          >
            <EditableField fontSize={"1rem"} component={component}>
              {component &&
              component &&
              component.texts.find((text) => text.textOrder == "text2")
                ? component &&
                  component.texts.find((text) => {
                    return text.textOrder === "text2";
                  })
                : {
                    textOrder: "text2",
                    createText: component && !!component.texts,
                    name: parentName,
                    page: parentName,
                    parentComponent: parentComponent,
                    defaultValue: "DEFAULT_VALUE",
                  }}
            </EditableField>
          </Card>
        )}
      </Box>
    </SimpleGrid>
  );
};
