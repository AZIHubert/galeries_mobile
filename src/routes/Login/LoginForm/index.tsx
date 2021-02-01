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
import { loginSchema } from '#helpers/schemas';

interface LoginFormI {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValues = {
  password: '',
  userNameOrEmail: '',
};

const LoginForm = ({ loading, setLoading }: LoginFormI) => {
  const formik = useFormik({
    initialValues,
    onSubmit: () => {
      if (!loading) {
        setLoading(true);
        Keyboard.dismiss();
      }
    },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: loginSchema,
  });
  return (
    <View
      style={styles.container}
    >

      <View>
        <Field
          editable={!loading}
          error={formik.errors.userNameOrEmail}
          label='user name or email'
          onBlur={formik.handleBlur('userNameOrEmail')}
          onChangeText={(e: string) => {
            formik.setFieldError('userNameOrEmail', '');
            formik.setFieldValue('userNameOrEmail', e);
          }}
          requiredField={true}
          touched={formik.touched.userNameOrEmail}
          value={formik.values.userNameOrEmail}
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
        <View style={{
          marginTop: 30,
          marginBottom: 60,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
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
});

export default LoginForm;
