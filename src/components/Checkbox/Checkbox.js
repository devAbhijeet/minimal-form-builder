import React from "react";
import { Checkbox } from "antd";

const FormCheckbox = ({ onChange, label, checked, ...rest }) => {
  return (
    <Checkbox onChange={onChange} checked={checked}>
      {label}
    </Checkbox>
  );
};

export default FormCheckbox;
