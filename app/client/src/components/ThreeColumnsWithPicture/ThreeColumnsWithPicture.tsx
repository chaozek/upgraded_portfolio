import React, { useState } from "react";

import Column from "./Column";
import { SimpleGrid } from "@chakra-ui/react";
import { compose } from "recompose";
import { getComponentImages } from "src/HOC/getComponentImages";
import { uploadImageHOC } from "src/HOC/uploadImageHOC";
import { useEffect } from "react";

const ThreeColumnsWithPicture = ({
  component,
  parentComponent,
  images,
  loading: _loading,
  onChange,
  parentName,
  moreImages,
  isAdmin,
  setAdmin,
  setIsDraggable,
  isDraggable,
  isImageEditable,
  ...rest
}) => {
  const renderColumns = () => {
    const [imageComp, setImagesComp] = useState([]);
    const columns = [];
    useEffect(() => {
      setImagesComp(moreImages);
    }, [moreImages]);
    for (let i = 0; i < 3; i++) {
      if (i === 0) {
        columns.push(
          <Column
            images={images}
            image={moreImages.find(
              (x) => x.component === parentName && Number(x.specificLoc) == i
            )}
            onChange={onChange}
            component={component}
            textOrder={`text${i + 1}`}
            parentName={parentName}
            parentComponent={parentComponent}
            loading={_loading}
            index={i}
            key={i}
            isImageEditable={isImageEditable}
          />
        );
      } else {
        component &&
          columns.push(
            <Column
              images={images}
              image={moreImages.find(
                (x) => x.component === parentName && Number(x.specificLoc) == i
              )}
              onChange={onChange}
              component={component}
              textOrder={`text${i + 1}`}
              parentName={parentName}
              parentComponent={parentComponent}
              loading={_loading}
              index={i}
              key={i}
              isImageEditable={isImageEditable}
            />
          );
      }
    }
    return columns;
  };
  return (
    <SimpleGrid gap="10" py={5} columns={[1, 2, 2, 3]}>
      {renderColumns()}
    </SimpleGrid>
  );
};
const enhancer = compose();

export default enhancer(
  uploadImageHOC(
    getComponentImages(ThreeColumnsWithPicture, "ThreeColumnsWithPicture"),
    "ThreeColumnsWithPicture"
  )
);
