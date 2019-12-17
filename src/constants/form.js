const FORM = {
  LABEL: {
    LOGIN: 'Login',
    REGISTRATION: 'Registration',
    REGISTER: 'Create an account',
    EMAIL: 'Email',
    PASSWORD: 'Password',
    CONFIRM_PASSWORD: 'Confirm Password',
    TERMS_CONDITIONS: 'Agree with terms and conditions',
    USER_NAME: 'User name',
    PHONE: 'Phone number',
  },
  MESSAGE: {
    EMAIL: {
      REQUIRED: 'Email is required',
      HELPER: 'Email format is not correct',
    },
    PASSWORD: {
      REQUIRED: 'Password is required',
      HELPER: 'Password format is not correct',
    },
    CONFIRM_PASSWORD: {
      REQUIRED: 'Confirm password is required',
      HELPER: 'Enter password that matches the above one',
    },
    USER_NAME: {
      REQUIRED: 'Please to provide your name',
      HELPER: 'Name or nick name has at least 3 characters',
    },
    PHONE: {
      REQUIRED: 'Phone number is required!',
      HELPER: 'Phone number is not valid',
    },
  },
  FIELD_NAMES: {
    LANGUAGE: 'language',
    EMAIL: 'email',
    PASSWORD: 'password',
    CONFIRM_PASSWORD: 'confirmPassword',
    TERMS_CONDITIONS: 'termsAndConditions',
    USER_NAME: 'username',
    PHONE: 'phone',
  },
  get LOGIN() {
    return [
      {
        label: this.LABEL.EMAIL,
        type: 'email',
        id: 'email',
        name: this.FIELD_NAMES.EMAIL,
      },
      {
        label: this.LABEL.PASSWORD,
        type: 'password',
        id: 'password',
        name: this.FIELD_NAMES.PASSWORD,
      },
    ];
  },
  get REGISTER() {
    return [
      {
        label: this.LABEL.USER_NAME,
        type: 'text',
        id: this.FIELD_NAMES.USER_NAME,
        name: this.FIELD_NAMES.USER_NAME,
      },
      {
        label: this.LABEL.EMAIL,
        type: 'email',
        id: 'email',
        name: this.FIELD_NAMES.EMAIL,
      },
      {
        label: this.LABEL.PASSWORD,
        type: 'password',
        id: 'password',
        name: this.FIELD_NAMES.PASSWORD,
      },
      {
        label: this.LABEL.CONFIRM_PASSWORD,
        type: 'password',
        id: 'confirm_password',
        name: this.FIELD_NAMES.CONFIRM_PASSWORD,
      },
    ];
  },
  get UPDATE() {
    return [
      {
        label: this.LABEL.EMAIL,
        type: 'email',
        id: this.FIELD_NAMES.EMAIL,
        name: this.FIELD_NAMES.EMAIL,
        disabled: true,
      },
      {
        label: this.LABEL.USER_NAME,
        type: 'text',
        id: this.FIELD_NAMES.USER_NAME,
        name: this.FIELD_NAMES.USER_NAME,
      },
      {
        label: this.LABEL.PHONE,
        type: 'text',
        id: this.FIELD_NAMES.PHONE,
        name: this.FIELD_NAMES.PHONE,
      },
    ];
  },
};

export default FORM;
