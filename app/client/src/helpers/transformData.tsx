import _ from "lodash";

export const transformData = (props) => {
  return {
    transformedData: _.get({ props }, "props.props.data", []),
    loading: _.get({ props }, "props.props.loading", true) as boolean,
    ...props,
  };
};
