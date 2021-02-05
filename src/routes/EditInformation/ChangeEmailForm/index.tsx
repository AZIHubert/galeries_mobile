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

import { updatePasswordSendEmail } from '#helpers/api';
import { changeEmailSchema } from '#helpers/schemas';

interface ChangeEmailFormI {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValues = {
  password: '',
};

const ChangeEmailForm = ({ loading, setLoading }: ChangeEmailFormI) => {
  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { setFieldError }) => {
      if (!loading) {
        setLoading(true);
        Keyboard.dismiss();
        try {
          const response = await updatePasswordSendEmail(values);
          if (response) {
            setLoading(false);
          }
        } catch (err) {
          setLoading(false);
          const { errors } = err.response.data;
          if (typeof errors === 'object') {
            Object.keys(errors).map((error) => setFieldError(error, errors[error]));
          }
        }
      }
    },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: changeEmailSchema,
  });
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
      <View style={styles.requiredFieldIndicator}>
        <AppText
          fontSize={15}
        >
          * required fields
        </AppText>
      </View>
      <AppButtonRadius
        disabled={loading}
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
