import { useFormik } from 'formik';
import * as React from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  Keyboard,
  View,
} from 'react-native';

import AppButtonRadius from '#components/AppButtonRadius';
import Field from '#components/Field';

import {
  pseudonymSchema,
} from '#helpers/schemas';

import {
  putPseudonym,
  setPseudonym,
} from '#store/actions';
import {
  loadingSelector,
  pseudonymErrorsSelector,
  pseudonymStatusSelector,
} from '#store/selectors';

const initialValues: form.PseudonymI = {
  pseudonym: '',
};

const ChangePseudonym = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      Keyboard.dismiss();
      if (!loading) {
        dispatch(
          putPseudonym(values),
        );
      }
    },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: pseudonymSchema,
  });
  const loading = useSelector(loadingSelector);
  const pseudonymErrors = useSelector(pseudonymErrorsSelector);
  const pseudonymStatus = useSelector(pseudonymStatusSelector);

  React.useEffect(() => {
    if (pseudonymStatus === 'success') {
      formik.resetForm({
        values: initialValues,
      });
    }
  }, [pseudonymStatus]);

  return (
    <View>
      <Field
        editable={true}
        error={
          formik.errors.pseudonym || pseudonymErrors.pseudonym
        }
        label='pseudonym'
        onBlur={formik.handleBlur('pseudonym')}
        onChangeText={(e: string) => {
          formik.setFieldError('pseudonym', '');
          formik.setFieldValue('pseudonym', e);
          if (pseudonymErrors.pseudonym) {
            dispatch(
              setPseudonym({
                errors: {
                  ...pseudonymErrors,
                  pseudonym: '',
                },
              }),
            );
          }
        }}
        requiredField={true}
        touched={formik.touched.pseudonym}
        value={formik.values.pseudonym}
      />
      <AppButtonRadius
        disabled={false}
        fontSize={25}
        marginBottom={75}
        onPress={formik.handleSubmit}
        title='change your pseudonym'
      />
    </View>
  );
};

export default ChangePseudonym;
