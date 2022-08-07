import * as yup from 'yup';

export const registerScheme = yup
  .object({
    username: yup.string().required('Username is a required field'),
    fullname: yup
      .string()
      .required('full name is a required field')
      .matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        'Name can only contain Latin letters.',
      )
      .matches(/^\s*\S+(\s\S+)+\s*$/gms, 'Please enter your full name.'),
    email: yup
      .string()
      .email('Must be a valid email')
      .max(255)
      .required('Email is required'),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  })
  .required();

export const loginScheme = yup
  .object({
    username: yup.string().required('Username is a required field'),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  })
  .required();
