import _ from "lodash";

export const transformData = (props) => {
  console.log(props, "TRANSFAORF");
  return {
    transformedData: _.get({ props }, "props.props.data", []),
    loading: _.get({ props }, "props.props.loading", true) as boolean,
    ...props,
  };
};
