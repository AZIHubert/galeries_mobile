import * as Yup from 'yup';

import {
  EMAIL_FIELD,
  REQUIRED,
} from '#helpers/formErrors';

const resetConfirmSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .lowercase()
    .required(REQUIRED)
    .email(EMAIL_FIELD),
});

export default resetConfirmSchema;
