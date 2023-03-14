import { compose } from "recompose";
import SkillsGallery from "./SkillsGallery";
import { uploadImageHOC } from "../../HOC/uploadImageHOC";
import { getComponentImages } from "src/HOC/getComponentImages";

const enhancer = compose();

export default enhancer(
  uploadImageHOC(
    getComponentImages(SkillsGallery, "SkillsGallery"),
    "SkillsGallery"
  )
);
