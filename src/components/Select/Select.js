import React from "react";
import { Select } from "antd";

const { Option } = Select;
const FormSelect = ({ options, onChange, value, ...rest }) => {
  return (
    <Select
      showSearch
      style={{ width: 200 }}
      optionFilterProp="children"
      onChange={onChange}
      value={value}
    >
      {options.length > 0 &&
        options.map((option, index) => (
          <Option key={option.label} value={option.value}>
            {option.label}
          </Option>
        ))}
    </Select>
  );
};

export default FormSelect;
