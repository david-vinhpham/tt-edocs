import * as Yup from 'yup';
import FORM from '../constants/form';
import REGEXP from '../constants/regExp';

export const loginSchemas = Yup.object().shape({
  [FORM.FIELD_NAMES.EMAIL]: Yup.string()
    .email(FORM.MESSAGE.EMAIL.HELPER)
    .required(FORM.MESSAGE.EMAIL.REQUIRED),
  [FORM.FIELD_NAMES.PASSWORD]: Yup.string(REGEXP.PASSWORD)
    .matches(REGEXP.PASSWORD, { message: FORM.MESSAGE.PASSWORD.HELPER })
    .required(FORM.MESSAGE.PASSWORD.REQUIRED),
});

export const registerSchemas = Yup.object().shape({
  [FORM.FIELD_NAMES.USER_NAME]: Yup.string()
    .matches(REGEXP.USER_NAME, { message: FORM.MESSAGE.USER_NAME.HELPER })
    .required(FORM.MESSAGE.USER_NAME.REQUIRED),
  [FORM.FIELD_NAMES.EMAIL]: Yup.string()
    .email(FORM.MESSAGE.EMAIL.HELPER)
    .required(FORM.MESSAGE.EMAIL.REQUIRED),
  [FORM.FIELD_NAMES.PASSWORD]: Yup.string(REGEXP.PASSWORD)
    .matches(REGEXP.PASSWORD, { message: FORM.MESSAGE.PASSWORD.HELPER })
    .required(FORM.MESSAGE.PASSWORD.REQUIRED),
  [FORM.FIELD_NAMES.CONFIRM_PASSWORD]: Yup.string(REGEXP.PASSWORD)
    .oneOf(
      [Yup.ref(FORM.FIELD_NAMES.PASSWORD), null],
      FORM.MESSAGE.CONFIRM_PASSWORD.HELPER,
    )
    .required(FORM.MESSAGE.CONFIRM_PASSWORD.REQUIRED),
  [FORM.FIELD_NAMES.TERMS_CONDITIONS]: Yup.boolean()
    .oneOf([true, null])
    .required(),
});

export const updateSchemas = Yup.object().shape({
  [FORM.FIELD_NAMES.USER_NAME]: Yup.string().matches(REGEXP.USER_NAME, {
    message: FORM.MESSAGE.USER_NAME.HELPER,
  }),
  [FORM.FIELD_NAMES.EMAIL]: Yup.string()
    .email(FORM.MESSAGE.EMAIL.HELPER)
    .required(FORM.MESSAGE.EMAIL.HELPER),
  [FORM.FIELD_NAMES.PHONE]: Yup.string().matches(REGEXP.PHONE, {
    message: FORM.MESSAGE.PHONE.HELPER,
  }),
});

export default null;
