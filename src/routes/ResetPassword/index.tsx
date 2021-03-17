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
import HeaderForm from '#components/HeaderForm';
import ScrollableScreen from '#components/ScrollableScreen';
import Wrapper from '#components/Wrapper';

import {
  allowResetPasswordSchema,
} from '#helpers/schemas';

import {
  fetchSendResetPassword,
  setSendResetPassword,
} from '#store/actions';
import {
  loadingSelector,
  sendResetPasswordErrorSelector,
} from '#store/selectors';

const initialValues: form.SendResetPasswordI = {
  email: '',
};

const ResetPassword = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      Keyboard.dismiss();
      if (!loading) {
        dispatch(
          fetchSendResetPassword({
            email: values.email.trim().toLowerCase(),
          }),
        );
      }
    },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: allowResetPasswordSchema,
  });
  const loading = useSelector(loadingSelector);
  const sendResetPasswordError = useSelector(sendResetPasswordErrorSelector);

  return (
    <ScrollableScreen
      header={() => <HeaderForm
        title='Reset your password'
      />}
    >
      <Wrapper
        marginTop={50}
      >
        <View
          style={styles.container}
        >
          <View>
            <View
              style={styles.titleContainer}
            >
              <AppText
                fontSize={26}
              >
                Enter your email to reset your password
              </AppText>
            </View>
            <Field
              editable={true}
              error={
                formik.errors.email || sendResetPasswordError.email
              }
              label='email'
              onBlur={formik.handleBlur('email')}
              onChangeText={(e: string) => {
                formik.setFieldError('email', '');
                formik.setFieldValue('email', e);
                if (sendResetPasswordError.email) {
                  dispatch(
                    setSendResetPassword({
                      errors: {
                        ...sendResetPasswordError,
                        email: '',
                      },
                    }),
                  );
                }
              }}
              requiredField={true}
              touched={formik.touched.email}
              value={formik.values.email}
            />
          </View>
          <AppButtonRadius
            disabled={false}
            fontSize={25}
            marginBottom={30}
            onPress={formik.handleSubmit}
            title='Send'
          />
        </View>
      </Wrapper>
    </ScrollableScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  titleContainer: {
    marginBottom: 30,
  },
});

export default ResetPassword;
