import { useNavigation } from '@react-navigation/native';
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

import { signinSchema } from '#helpers/schemas';

import {
  fetchSignin,
  resetSignin,
  setSignin,
} from '#store/actions';
import {
  loadingSelector,
  signinErrorSelector,
  signinStatusSelector,
} from '#store/selectors';

const initialValues: form.SigninI = {
  confirmPassword: '',
  email: '',
  password: '',
  userName: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      Keyboard.dismiss();
      if (!loading) {
        dispatch(
          fetchSignin(values),
        );
      }
    },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: signinSchema,
  });
  const navigation = useNavigation();
  const loading = useSelector(loadingSelector);
  const signinError = useSelector(signinErrorSelector);
  const signinStatus = useSelector(signinStatusSelector);

  React.useEffect(() => {
    if (signinStatus === 'success') {
      dispatch(resetSignin());
      navigation.navigate('signinLanding', {
        email: formik.values.email,
      });
    }
  }, [signinStatus]);

  return (
    <View
      style={styles.container}
    >
      <View>
        <Field
          editable={true}
          error={
            formik.errors.userName || signinError.userName
          }
          label='user name'
          onBlur={formik.handleBlur('userName')}
          onChangeText={(e: string) => {
            formik.setFieldError('userName', '');
            formik.setFieldValue('userName', e);
            if (signinError.userName) {
              dispatch(
                setSignin({
                  errors: {
                    ...signinError,
                    userName: '',
                  },
                }),
              );
            }
          }}
          requiredField={true}
          touched={formik.touched.userName}
          value={formik.values.userName}
        />
        <Field
          editable={true}
          error={
            formik.errors.email || signinError.email
          }
          label='email'
          onBlur={formik.handleBlur('email')}
          onChangeText={(e: string) => {
            formik.setFieldError('email', '');
            formik.setFieldValue('email', e);
            if (signinError.email) {
              dispatch(
                setSignin({
                  errors: {
                    ...signinError,
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
        <Field
          editable={true}
          error={
            formik.errors.password || signinError.password
          }
          label='password'
          onBlur={formik.handleBlur('password')}
          onChangeText={(e: string) => {
            formik.setFieldError('password', '');
            formik.setFieldValue('password', e);
            if (signinError.password) {
              dispatch(
                setSignin({
                  errors: {
                    ...signinError,
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
        <Field
          editable={true}
          error={
            formik.errors.confirmPassword || signinError.confirmPassword
          }
          label='confirm password'
          onBlur={formik.handleBlur('confirmPassword')}
          onChangeText={(e: string) => {
            formik.setFieldError('confirmPassword', '');
            formik.setFieldValue('confirmPassword', e);
            if (signinError.password) {
              dispatch(
                setSignin({
                  errors: {
                    ...signinError,
                    confirmPassword: '',
                  },
                }),
              );
            }
          }}
          requiredField={true}
          secureTextEntry={true}
          touched={formik.touched.confirmPassword}
          value={formik.values.confirmPassword}
        />
        <View style={styles.requiredFieldIndicator}>
          <AppText
            fontSize={15}
          >
            * required fields
          </AppText>
        </View>
      </View>
      <AppButtonRadius
        disabled={false}
        fontSize={25}
        marginBottom={30}
        onPress={formik.handleSubmit}
        title='signin'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  requiredFieldIndicator: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 30,
    marginBottom: 60,
  },
});

export default LoginForm;
