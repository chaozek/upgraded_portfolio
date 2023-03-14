import React, { useState } from "react";
import { getComponentImages } from "src/HOC/getComponentImages";
import { uploadImageHOC } from "src/HOC/uploadImageHOC";
import { compose } from "recompose";
import { SimpleGrid } from "@chakra-ui/react";
import Column from "./Column";
import { useEffect } from "react";

const ThreeColumnsWithPicture = ({
  component,
  parentComponent,
  images,
  loading: _loading,
  onChange,
  parentName,
  moreImages,
  ...rest
}) => {
  const renderColumns = () => {
    console.log(parentComponent, "parentComponentparentComponent");
    console.log(parentName, "parentNameparentName");
    console.log(moreImages, "moreImmoreImagesages");
    const [imageComp, setImagesComp] = useState([]);
    const columns = [];
    useEffect(() => {
      setImagesComp(moreImages);
    }, [moreImages]);
    console.log(imageComp, "imageCompimageCompimageComp");
    for (let i = 0; i < 3; i++) {
      console.log(
        moreImages.find(
          (x) => x.component === parentName && Number(x.specificLoc) == i
        ),
        "XY"
      );
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
            />
          );
      }
    }
    return columns;
  };
  console.log(renderColumns(), "column");
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
