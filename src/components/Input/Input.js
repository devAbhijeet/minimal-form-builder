import React from "react";
import { Input } from "antd";

const FormInput = ({ onChange, value, ...rest }) => {
  return <Input allowClear onChange={onChange} value={value} />;
};

export default FormInput;
