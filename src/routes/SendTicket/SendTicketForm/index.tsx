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
import { sendTicketSchema } from '#helpers/schemas';
import { sendTicket } from '#helpers/api';

interface LoginFormI {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValues = {
  header: '',
  body: '',
};

const LoginForm = ({ loading, setLoading }: LoginFormI) => {
  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { setFieldError, resetForm }) => {
      if (!loading) {
        setLoading(true);
        Keyboard.dismiss();
        try {
          const response = await sendTicket(values);
          if (response) {
            setLoading(false);
            resetForm();
          }
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
    validationSchema: sendTicketSchema,
  });
  return (
    <View
      style={styles.container}
    >
      <View>
        <Field
          editable={!loading}
          error={formik.errors.header}
          label='title'
          onBlur={formik.handleBlur('header')}
          onChangeText={(e: string) => {
            formik.setFieldError('header', '');
            formik.setFieldValue('header', e);
          }}
          requiredField={true}
          touched={formik.touched.header}
          value={formik.values.header}
        />
        <Field
          editable={!loading}
          error={formik.errors.body}
          label='body'
          multiline={true}
          onBlur={formik.handleBlur('body')}
          onChangeText={(e: string) => {
            formik.setFieldError('body', '');
            formik.setFieldValue('body', e);
          }}
          requiredField={true}
          touched={formik.touched.body}
          value={formik.values.body}
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
        title='send a ticket'
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
