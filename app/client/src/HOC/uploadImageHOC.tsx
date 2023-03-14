import React from "react";
import _ from "lodash";
import { ComponentImagesMoreComponentsDocument } from "../../generated/index";
import {
  ComponentImagesDocument,
  useImageUploadMutation,
} from "../../generated/index";

export function uploadImageHOC(Component, componentName) {
  return function WrappedComponent(props) {
    const [addToUploadMutation, { data, loading, error }] =
      useImageUploadMutation();
    const onChange = ({
      target: {
        validity,
        files: [file],
      },
      targetComponent,
      parentName,
    }) => {
      console.log(parentName, "parentNameparentNameparentName");
      console.log(
        targetComponent,
        "targetComponenttargetComponenttargetComponent"
      );
      if (validity.valid)
        try {
          console.log("TRYING HITTING");
          addToUploadMutation({
            variables: {
              file,
              component: parentName ? parentName : componentName,
              specificLoc: targetComponent,
            },
            refetchQueries: [
              {
                query: ComponentImagesDocument,
                variables: {
                  component: parentName ? parentName : componentName,
                },
              },
              parentName
                ? {
                    query: ComponentImagesMoreComponentsDocument,
                    variables: {
                      component: parentName.replace(/[0-9]/g, ""),
                    },
                  }
                : null,
            ],
          });
        } catch (error) {
          console.log(error, "ERROORRR");
        }
    };
    return (
      <Component
        data={_.get(data, "imageUpload.image", "")}
        loading={loading}
        error={error}
        onChange={onChange}
        addToUploadMutation={addToUploadMutation}
        {...props}
      />
    );
  };
}
