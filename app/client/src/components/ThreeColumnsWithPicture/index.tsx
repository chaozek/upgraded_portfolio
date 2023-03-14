import { compose } from "recompose";
import ThreeColumnsWithPicture from "./ThreeColumnsWithPicture";
import { uploadImageHOC } from "../../HOC/uploadImageHOC";
import { getComponentImages } from "src/HOC/getComponentImages";

const enhancer = compose();

export default enhancer(
  uploadImageHOC(
    getComponentImages(ThreeColumnsWithPicture, "ThreeColumnsWithPicture"),
    "ThreeColumnsWithPicture"
  )
);
