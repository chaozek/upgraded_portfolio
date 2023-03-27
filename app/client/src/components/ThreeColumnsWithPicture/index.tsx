import ThreeColumnsWithPicture from "./ThreeColumnsWithPicture";
import { compose } from "recompose";
import { getComponentImages } from "src/HOC/getComponentImages";
import { uploadImageHOC } from "../../HOC/uploadImageHOC";
import { withContextData } from "../../HOC/withContextData";

const enhancer = compose();

export default enhancer(
  withContextData(
    uploadImageHOC(
      getComponentImages(ThreeColumnsWithPicture, "ThreeColumnsWithPicture"),
      "ThreeColumnsWithPicture"
    )
  )
);
