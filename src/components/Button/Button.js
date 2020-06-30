import React from "react";
import { Button } from "antd";

const FormButton = props => {
  return <Button {...props}>{props.text}</Button>;
};

export default FormButton;
