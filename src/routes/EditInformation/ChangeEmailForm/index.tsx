import { useFormik } from 'formik';
import * as React from 'react';
import {
  Keyboard,
  StyleSheet,
  View,
} from 'react-native';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import AppButtonRadius from '#components/AppButtonRadius';
import AppText from '#components/AppText';
import Field from '#components/Field';

import {
  changeEmailSchema,
} from '#helpers/schemas';

import {
  postUpdateEmail,
  setUpdateEmail,
} from '#store/actions';
import {
  loadingSelector,
  updateEmailErrorSelector,
  updateEmailStatusSelector,
} from '#store/selectors';

const initialValues: form.ChangeEmailI = {
  password: '',
};

const ChangeEmailForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      Keyboard.dismiss();
      if (!loading) {
        dispatch(
          postUpdateEmail(values),
        );
      }
    },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: changeEmailSchema,
  });
  const loading = useSelector(loadingSelector);
  const updateEmailError = useSelector(updateEmailErrorSelector);
  const updateEmailStatus = useSelector(updateEmailStatusSelector);

  React.useEffect(() => {
    if (updateEmailStatus === 'success') {
      formik.resetForm({
        values: initialValues,
      });
    }
  }, [updateEmailStatus]);

  return (
    <View>
      <View
        style={styles.textContainer}
      >
        <AppText
          color='black'
          fontSize={16}
        >
          Enter your password to receive a message
          on your current adress.
          This message contain a link to update your email.
        </AppText>
      </View>
      <Field
        editable={true}
        error={
          formik.errors.password || updateEmailError.password
        }
        label='password'
        onBlur={formik.handleBlur('password')}
        onChangeText={(e: string) => {
          formik.setFieldError('password', '');
          formik.setFieldValue('password', e);
          if (updateEmailError.password) {
            dispatch(
              setUpdateEmail({
                errors: {
                  ...updateEmailError,
                  password: '',
                },
              }),
            );
          }
        }}
        requiredField={true}
        secureTextEntry={true}
        touched={formik.touched.password}
        value={formik.values.password}
      />
      <View style={styles.requiredFieldIndicator}>
        <AppText
          fontSize={15}
        >
          * required fields
        </AppText>
      </View>
      <AppButtonRadius
        disabled={false}
        fontSize={25}
        marginBottom={75}
        onPress={formik.handleSubmit}
        title='change your email'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  requiredFieldIndicator: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  textContainer: {
    marginBottom: 20,
  },
});

export default ChangeEmailForm;
