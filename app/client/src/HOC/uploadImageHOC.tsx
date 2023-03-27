import {
  ComponentImagesDocument,
  useImageUploadMutation,
} from "../../generated/index";

import { ComponentImagesMoreComponentsDocument } from "../../generated/index";
import React from "react";
import _ from "lodash";

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
    
      if (validity.valid)
        try {
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
        } catch (error) {}
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
