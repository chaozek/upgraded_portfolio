import { SimpleGrid } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import EditableField from "src/utils/editableField";
import { useDrag } from "react-dnd";
import { PhoneIcon, AddIcon, WarningIcon, StarIcon } from "@chakra-ui/icons";

export const LightBigBox = ({
  component,
  isAdmin = true,
  parentComponent,
  parentName,
  isDragging,
  text,
}) => {
  const [localComp, setLocalComp] = useState([]);
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "INTRO",
      item: { text },
      collect: (monitor) => {
        return {
          opacity: monitor.isDragging() ? 0.9 : 1,
        };
      },
    }),
    []
  );
  useEffect(() => {
    if (!component) return;
    else setLocalComp(component);
  }, [component, localComp]);

  if (!localComp) {
    return;
  }

  return (
    <SimpleGrid ref={dragRef} style={{ opacity }} my="5" spacing={10}>
      <Box>
        <Card
          boxShadow="#16173B 0px 8px 24px"
          transition="all 0.15s ease-out"
          _hover={{
            boxShadow: "rgb(33, 12, 222) 0px 20px 30px -10px",
          }}
          p="10"
          background="#6565FD"
          height="100%"
        >
          <StarIcon top="20px" right="20px" boxSize={10} position="absolute" />
          <EditableField mb="5" component={component}>
            {component &&
            component &&
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
          {component && (
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
          )}
        </Card>
      </Box>
    </SimpleGrid>
  );
};
