import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import * as React from 'react';
import {
  Keyboard,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  useSelector,
  useDispatch,
} from 'react-redux';

import AppButtonRadius from '#components/AppButtonRadius';
import AppText from '#components/AppText';
import Field from '#components/Field';

import { loginSchema } from '#helpers/schemas';

import {
  fetchLogin,
  setLogin,
} from '#store/actions';
import {
  loadingSelector,
  loginErrorSelector,
  notificationSelector,
} from '#store/selectors';

const initialValues: form.LoginI = {
  password: '',
  userNameOrEmail: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      Keyboard.dismiss();
      if (!loading) {
        dispatch(
          fetchLogin(values),
        );
      }
    },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: loginSchema,
  });
  const navigation = useNavigation();
  const loading = useSelector(loadingSelector);
  const loginError = useSelector(loginErrorSelector);
  const notification = useSelector(notificationSelector);

  React.useEffect(() => {
    if (notification.text === 'You\'re account need to be confimed') {
      navigation.navigate('confirmAccount');
    }
  }, [notification]);

  return (
    <View
      style={styles.container}
    >
      <View>
        <Field
          editable={true}
          error={
            formik.errors.userNameOrEmail || loginError.userNameOrEmail
          }
          label='user name or email'
          onBlur={formik.handleBlur('userNameOrEmail')}
          onChangeText={(e: string) => {
            formik.setFieldError('userNameOrEmail', '');
            formik.setFieldValue('userNameOrEmail', e);
            if (loginError.userNameOrEmail) {
              dispatch(
                setLogin({
                  errors: {
                    ...loginError,
                    userNameOrEmail: '',
                  },
                }),
              );
            }
          }}
          requiredField={true}
          touched={formik.touched.userNameOrEmail}
          value={formik.values.userNameOrEmail}
        />
        <Field
          editable={true}
          error={
            formik.errors.password || loginError.password
          }
          label='password'
          onBlur={formik.handleBlur('password')}
          onChangeText={(e: string) => {
            formik.setFieldError('password', '');
            formik.setFieldValue('password', e);
            if (loginError.password) {
              dispatch(
                setLogin({
                  errors: {
                    ...loginError,
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
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('resetPassword');
          }}
        >
          <View>
            <AppText
              color='black'
              fontSize={17}
              textDecorationLine='underline'
            >
              Forgot your password?
            </AppText>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <AppButtonRadius
        disabled={false}
        fontSize={25}
        marginBottom={30}
        onPress={formik.handleSubmit}
        title='login'
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
    marginTop: 30,
    marginBottom: 60,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default LoginForm;
