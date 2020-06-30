import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FormButton from "./Button/Button";
import {
  getInputComponent,
  isValidInput,
  getNestedObject
} from "../utils/index";
import { Storage } from "../utils/Storage";

const FormContainer = styled.form`
  max-width: 600px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5715;
  list-style: none;
  margin: 0 auto;
  padding-top: 1vh;
`;

const GroupRow = styled.div`
  border: 1px solid #d9d9d9;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const NestedGroup = styled.div`
  border: 1px solid #d9d9d9;
  margin-top: 10px;
  &.nested-group > div {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
`;

const GroupHeader = styled.div`
  color: rgba(0, 0, 0, 0.65);
  font-weight: 600;
  font-size: 15px;
  padding: 10px;
  background-color: #d9d9d9;
  text-transform: capitalize;
`;

const GroupBody = styled.div`
  padding: 10px;
`;

const InputLabel = styled.label`
  flex-grow: 0;
  display: block;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5715;
  list-style: none;
  margin-bottom: 10px;
  vertical-align: top;
  &.error > span.ant-input-affix-wrapper {
    border-color: #ff4d4f;
    box-shadow: 0 0 0 2px rgba(255, 109, 24, 0.2);
  }
  &.warning > span.ant-input-affix-wrapper,
  &.warning .ant-select-selector {
    border-color: #faad14 !important;
    box-shadow: 0 0 0 2px rgba(255, 184, 24, 0.2) !important;
  }
  &.with-select {
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
  }
`;

const WarningTxt = styled.div`
  color: #faad14 !important;
  min-height: 24px;
  padding-top: 0;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  line-height: 1.5;
  transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
`;

const ErrorTxt = styled.div`
  color: #ff4d4f !important;
  min-height: 24px;
  padding-top: 0;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  line-height: 1.5;
  transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
`;

const FormBuilder = ({ data }) => {
  const [formState, setFormState] = useState(() => {
    const storage = Storage.getData("formData");
    console.log("The storage is ", storage);
    if (storage && Object.keys(storage).length > 0) {
      return {
        ...storage
      };
    }
    return data;
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    console.log("formState ", formState);
  }, [formState]);

  const checkError = state => {
    return Object.keys(state).filter(group => {
      const groupHasError = Object.keys(state[group]).filter(field => {
        const fieldToCheck = state[group][field];
        const noValue =
          fieldToCheck.required &&
          (fieldToCheck.value === "" || !fieldToCheck.value);
        const validateStatus = fieldToCheck.validateStatus;
        const childrenLen = Object.keys(fieldToCheck.children).length;
        const isChildrenValid =
          childrenLen > 0 ? checkError(fieldToCheck.children) : true;
        return noValue || !validateStatus || !isChildrenValid;
      });
      return groupHasError.length > 0;
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    let hasError = checkError({ ...formState });
    if (hasError.length === 0) {
      Storage.clear();
      Storage.setData("formData", formState);
    }
    setFormSubmitted(true);
  };

  const handleInputChange = (e, fieldKey, field) => {
    const getUpdatedFormState = (e, fieldKey, field) => {
      let groupId = field.groupId;
      let formStateCopy = { ...formState };
      let newState = getNestedObject(groupId, formStateCopy);

      newState[fieldKey] = {
        ...newState[fieldKey],
        [field.valuePropName]:
          fieldKey === "age" ? Number(e) : e.target[field.valuePropName],
        validateStatus: isValidInput(
          fieldKey === "age" ? e : e.target[field.valuePropName],
          field,
          formStateCopy
        )
      };

      if (fieldKey === "with_age") {
        let stateBlock = getNestedObject(field.toggles, formStateCopy);
        stateBlock.visible = e.target[field.valuePropName];
      }
      return formStateCopy;
    };
    if ((e && e.target && fieldKey) || fieldKey === "age") {
      let updatedState = getUpdatedFormState(e, fieldKey, field);
      setFormState({
        ...formState,
        ...updatedState
      });
    }
  };

  const generateForm = formState => {
    return Object.keys(formState).map((groupKey, index) => {
      let groupFields = formState[groupKey];
      return (
        <GroupRow key={`${groupKey}-${index}`}>
          <GroupHeader>{groupKey}</GroupHeader>
          <GroupBody>
            {Object.keys(groupFields).map(fieldKey => {
              if (!groupFields[fieldKey].visible) {
                return null;
              }
              let field = groupFields[fieldKey];
              let Component = getInputComponent(field.type);
              let className =
                formSubmitted && !field.value && field.required
                  ? field.errorClass
                  : !field.validateStatus
                  ? "warning"
                  : "";
              return (
                <InputRow
                  key={field.name}
                  className={
                    field.type === "select"
                      ? `with-select ${className}`
                      : className
                  }
                >
                  {["text", "password", "select", "email", "textarea"].indexOf(
                    field.type
                  ) > -1 ? (
                    <InputLabel>{field.label}</InputLabel>
                  ) : null}
                  <Component
                    onChange={e => handleInputChange(e, fieldKey, field)}
                    {...field}
                  />
                  {field.value && !field.validateStatus && (
                    <WarningTxt>{field.hasFeedback}</WarningTxt>
                  )}
                  {formSubmitted && !field.value && field.required && (
                    <ErrorTxt>{field.help}</ErrorTxt>
                  )}
                  {field.children && Object.keys(field.children).length > 0 ? (
                    <NestedGroup className="nested-group">
                      {generateForm(field.children)}
                    </NestedGroup>
                  ) : null}
                </InputRow>
              );
            })}
          </GroupBody>
        </GroupRow>
      );
    });
  };

  return (
    <FormContainer noValidate>
      {generateForm(formState)}
      <FormButton
        text="Submit"
        htmlType="submit"
        type="primary"
        onClick={handleFormSubmit}
      />
    </FormContainer>
  );
};

export default FormBuilder;
