import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import * as React from 'react';
import {
  Keyboard,
  StyleSheet,
  View,
} from 'react-native';

import AppButtonRadius from '#components/AppButtonRadius';
import AppText from '#components/AppText';
import Field from '#components/Field';

import { signin } from '#helpers/api';
import { signinSchema } from '#helpers/schemas';

interface SigninFormI {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValues = {
  confirmPassword: '',
  email: '',
  password: '',
  userName: '',
};

const LoginForm = ({ loading, setLoading }: SigninFormI) => {
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { setFieldError }) => {
      if (!loading) {
        setLoading(true);
        Keyboard.dismiss();
        try {
          const response = await signin(values);
          await AsyncStorage.setItem('auThoken', response.data.token);
          navigation.reset({
            index: 0,
            routes: [{ name: 'sideMenu' }],
          });
        } catch (err) {
          const { errors } = err.response.data;
          if (typeof errors === 'object') {
            Object.keys(errors).map((error) => setFieldError(error, errors[error]));
          }
          setLoading(false);
        }
      }
    },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: signinSchema,
  });
  return (
    <View
      style={styles.container}
    >
      <View>
        <Field
          editable={!loading}
          error={formik.errors.userName}
          label='user name'
          onBlur={formik.handleBlur('userName')}
          onChangeText={(e: string) => {
            formik.setFieldError('userName', '');
            formik.setFieldValue('userName', e);
          }}
          requiredField={true}
          touched={formik.touched.userName}
          value={formik.values.userName}
        />
        <Field
          editable={!loading}
          error={formik.errors.email}
          label='email'
          onBlur={formik.handleBlur('email')}
          onChangeText={(e: string) => {
            formik.setFieldError('email', '');
            formik.setFieldValue('email', e);
          }}
          requiredField={true}
          touched={formik.touched.email}
          value={formik.values.email}
        />
        <Field
          editable={!loading}
          error={formik.errors.password}
          label='password'
          onBlur={formik.handleBlur('password')}
          onChangeText={(e: string) => {
            formik.setFieldError('password', '');
            formik.setFieldValue('password', e);
          }}
          requiredField={true}
          secureTextEntry={true}
          touched={formik.touched.password}
          value={formik.values.password}
        />
        <Field
          editable={!loading}
          error={formik.errors.confirmPassword}
          label='confirm password'
          onBlur={formik.handleBlur('confirmPassword')}
          onChangeText={(e: string) => {
            formik.setFieldError('confirmPassword', '');
            formik.setFieldValue('confirmPassword', e);
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
        disabled={loading}
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
