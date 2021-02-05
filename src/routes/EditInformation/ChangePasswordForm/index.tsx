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
import { changePasswordSchema } from '#helpers/schemas';

interface ChangePasswordFormI {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValues = {
  confirmNewPassword: '',
  currentPassword: '',
  newPassword: '',
};

const ChangePasswordForm = ({ loading, setLoading }: ChangePasswordFormI) => {
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
    validationSchema: changePasswordSchema,
  });
  return (
    <View>
      <Field
        editable={!loading}
        error={formik.errors.currentPassword}
        label='current password'
        onBlur={formik.handleBlur('currentPassword')}
        onChangeText={(e: string) => {
          formik.setFieldError('currentPassword', '');
          formik.setFieldValue('currentPassword', e);
        }}
        requiredField={true}
        secureTextEntry={true}
        touched={formik.touched.currentPassword}
        value={formik.values.currentPassword}
      />
      <Field
        editable={!loading}
        error={formik.errors.newPassword}
        label='new password'
        onBlur={formik.handleBlur('newPassword')}
        onChangeText={(e: string) => {
          formik.setFieldError('newPassword', '');
          formik.setFieldValue('newPassword', e);
        }}
        requiredField={true}
        secureTextEntry={true}
        touched={formik.touched.newPassword}
        value={formik.values.newPassword}
      />
      <Field
        editable={!loading}
        error={formik.errors.confirmNewPassword}
        label='confirm new password'
        onBlur={formik.handleBlur('confirmNewPassword')}
        onChangeText={(e: string) => {
          formik.setFieldError('confirmNewPassword', '');
          formik.setFieldValue('confirmNewPassword', e);
        }}
        requiredField={true}
        secureTextEntry={true}
        touched={formik.touched.confirmNewPassword}
        value={formik.values.confirmNewPassword}
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
        title='change your password'
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
});

export default ChangePasswordForm;
