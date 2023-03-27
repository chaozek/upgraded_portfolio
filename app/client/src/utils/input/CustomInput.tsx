import cx from "classnames";
import styles from "./CustomInput.module.scss";
const CustomInput = ({ field, reference }) => {
  return (
    <textarea
      {...field}
      ref={reference}
      className={cx("border-2", styles.input)}
    />
  );
};
export default CustomInput;
