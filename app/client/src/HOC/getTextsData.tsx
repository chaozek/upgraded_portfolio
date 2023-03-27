import React from "react";
import _ from "lodash";
import { useCreateComponentMutation } from "../../generated/index";

const getTextsData = () => {
  const [addToTextComponent, { data, loading, error }] =
    useCreateComponentMutation();
  {
    _.get(data, "imageUpload.image", "");
  }
  return {
    addToTextComponent,
    initData: _.last(
      _.get(data, "createTextsToComponent.components[0].texts", [])
    ),
    test: "test",
  };
};
export default getTextsData;
