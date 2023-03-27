import React from "react";
import _ from "lodash";
import {
  useComponentImagesQuery,
  useComponentImagesMoreComponentsQuery,
} from "../../generated/index";

export function getComponentImages(Component, component) {
  return function WrappedComponent(props) {
    const { data, loading } = useComponentImagesQuery({
      variables: { component },
    });
    const { data: moreImagesData, loading: moreImagesDataLoading } =
      useComponentImagesMoreComponentsQuery({
        variables: { component },
      });
    return (
      <Component
        component={component}
        images={_.get(data, "componentImages", [])}
        moreImages={_.get(moreImagesData, "componentImagesMoreComponents", [])}
        loading={loading}
        {...props}
      />
    );
  };
}
