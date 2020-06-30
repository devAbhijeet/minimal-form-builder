const data = {
  profile: {
    user_name: {
      name: "user_name",
      label: "User Name",
      placeholder: "User Name",
      dependencies: "",
      visible: true,
      type: "text",
      help: "Please enter user name",
      hasFeedback: "User name should be alphanumeric",
      defaultValue: "",
      value: "",
      validateTrigger: "submit",
      valuePropName: "value",
      validateStatus: true,
      inputClass: "",
      errorClass: "error",
      loading: false,
      required: true,
      groupId: "profile",
      children: {
        name: {
          first_name: {
            name: "first_name",
            label: "First Name",
            placeholder: "First Name",
            dependencies: "",
            visible: true,
            type: "text",
            help: "Please enter first name",
            hasFeedback: "First name should be alphanumeric",
            defaultValue: "",
            value: "",
            validateTrigger: "submit",
            valuePropName: "value",
            validateStatus: true,
            inputClass: "",
            errorClass: "error",
            loading: false,
            required: true,
            groupId: "profile.user_name.children.name",
            children: {}
          },
          last_name: {
            name: "last_name",
            label: "Last Name",
            placeholder: "Last Name",
            dependencies: "",
            visible: true,
            type: "text",
            help: "Please enter last name",
            hasFeedback: "Last name should be alphanumeric",
            defaultValue: "",
            value: "",
            validateTrigger: "submit",
            valuePropName: "value",
            validateStatus: true,
            inputClass: "",
            errorClass: "error",
            loading: false,
            required: true,
            groupId: "profile.user_name.children.name",
            children: {}
          }
        }
      }
    },
    with_age: {
      name: "with_age",
      label: "Is Age required",
      type: "checkbox",
      placeholder: "",
      dependencies: "",
      toggles: "profile.age",
      visible: true,
      help: "",
      hasFeedback: "",
      defaultValue: false,
      checked: false,
      validateTrigger: "submit",
      valuePropName: "checked",
      validateStatus: true,
      inputClass: "",
      errorClass: "error",
      loading: false,
      required: false,
      groupId: "profile",
      children: {}
    },
    age: {
      name: "age",
      label: "Age",
      type: "select",
      placeholder: "Select Age",
      dependencies: "",
      visible: false,
      options: [
        {
          label: 17,
          value: 17
        },
        {
          label: 18,
          value: 18
        },
        {
          label: 19,
          value: 19
        },
        {
          label: 20,
          value: 20
        },
        {
          label: 21,
          value: 21
        },
        {
          label: 22,
          value: 22
        },
        {
          label: 23,
          value: 23
        },
        {
          label: 24,
          value: 24
        },
        {
          label: 25,
          value: 25
        }
      ],
      help: "Please enter your age",
      hasFeedback: "Age should be greater than 18",
      defaultValue: 17,
      value: 19,
      validateTrigger: "submit",
      valuePropName: "value",
      validateStatus: true,
      inputClass: "",
      errorClass: "error",
      loading: false,
      required: false,
      groupId: "profile",
      children: {}
    }
  },
  login: {
    email_address: {
      name: "email_address",
      label: "Email Address",
      placeholder: "Email Address",
      dependencies: "",
      visible: true,
      type: "email",
      help: "Please enter email address",
      hasFeedback: "email should be <example>@<example>.<domain>",
      defaultValue: "",
      value: "",
      validateTrigger: "submit",
      valuePropName: "value",
      validateStatus: true,
      inputClass: "",
      errorClass: "error",
      loading: false,
      required: true,
      groupId: "login",
      children: {}
    },
    password: {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
      dependencies: "",
      visible: true,
      help: "Please enter password",
      hasFeedback: "password should be alphanumeric",
      defaultValue: "",
      value: "",
      validateTrigger: "submit",
      valuePropName: "value",
      validateStatus: true,
      inputClass: "",
      errorClass: "error",
      loading: false,
      required: true,
      groupId: "login",
      children: {}
    },
    confirmation_password: {
      name: "confirmation_password",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm Password",
      dependencies: "login.password",
      visible: true,
      help: "Please enter confirm password",
      hasFeedback: "confirm password should match password",
      defaultValue: "",
      value: "",
      validateTrigger: "submit",
      valuePropName: "value",
      validateStatus: true,
      inputClass: "",
      errorClass: "error",
      loading: false,
      required: true,
      groupId: "login",
      children: {}
    }
  },
  comment: {
    feedback: {
      name: "feedback",
      label: "Feedback",
      placeholder: "Please provide feedback",
      dependencies: "",
      visible: true,
      type: "textarea",
      help: "Please enter feedback",
      hasFeedback: "Feedback should be alphanumeric",
      defaultValue: "",
      value: "",
      validateTrigger: "submit",
      valuePropName: "value",
      validateStatus: true,
      inputClass: "",
      errorClass: "error",
      loading: false,
      required: false,
      groupId: "comment",
      plugin: true,
      children: {}
    }
  }
};

export default data;
