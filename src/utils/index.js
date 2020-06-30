import FormInput from "../components/Input/Input";
import FormCheckbox from "../components/Checkbox/Checkbox";
import FormSelect from "../components/Select/Select";
import FormTextArea from "../components/TextArea/TextArea";

const alphaNumericRegex = /^[a-z0-9]+$/i;
const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const getNestedObject = (groupId, state) => {
  let groupKeys = groupId.split(".");
  return groupKeys.reduce((acc, key) => {
    if (acc && acc[key]) {
      return acc[key];
    }
    return {};
  }, state);
};

const getInputComponent = type => {
  switch (type) {
    case "text":
    case "password":
    case "email":
      return FormInput;
    case "checkbox":
      return FormCheckbox;
    case "select":
      return FormSelect;
    case "textarea":
      return FormTextArea;
    default:
      return FormInput;
  }
};

const isValidInput = (value, field, state) => {
  switch (field.type) {
    case "text":
    case "password":
      let passwordState = getNestedObject(field.dependencies, state);
      if (field.name === "confirmation_password") {
        return value.trim() === passwordState.value.trim();
      }
      return alphaNumericRegex.test(String(value).toLowerCase());
    case "email":
      return emailRegex.test(String(value).toLowerCase());
    case "select":
      return value > 18;
    default:
      return true;
  }
};

export { getInputComponent, isValidInput, getNestedObject };
