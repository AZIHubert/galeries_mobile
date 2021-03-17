import { useFormik } from 'formik';
import * as React from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  Keyboard,
  StyleSheet,
  View,
} from 'react-native';

import AppButtonRadius from '#components/AppButtonRadius';
import AppText from '#components/AppText';
import Field from '#components/Field';

import {
  changePasswordSchema,
} from '#helpers/schemas';

import {
  putUpdatePassword,
  setUpdatePassword,
} from '#store/actions';
import {
  loadingSelector,
  updatePasswordStatusSelector,
  updatePasswordErrorsselector,
} from '#store/selectors';

const initialValues: form.UpdatePasswordI = {
  confirmNewPassword: '',
  currentPassword: '',
  newPassword: '',
};

const ChangePasswordForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      Keyboard.dismiss();
      if (!loading) {
        dispatch(
          putUpdatePassword(values),
        );
      }
    },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: changePasswordSchema,
  });
  const loading = useSelector(loadingSelector);
  const updatePasswordErrors = useSelector(updatePasswordErrorsselector);
  const updatePasswordStatus = useSelector(updatePasswordStatusSelector);

  React.useEffect(() => {
    if (updatePasswordStatus === 'success') {
      formik.resetForm({
        values: initialValues,
      });
    }
  }, [updatePasswordStatus]);

  return (
    <View>
      <Field
        editable={true}
        error={
          formik.errors.currentPassword || updatePasswordErrors.currentPassword
        }
        label='current password'
        onBlur={formik.handleBlur('currentPassword')}
        onChangeText={(e: string) => {
          formik.setFieldError('currentPassword', '');
          formik.setFieldValue('currentPassword', e);
          if (updatePasswordErrors.currentPassword) {
            dispatch(
              setUpdatePassword({
                errors: {
                  ...updatePasswordErrors,
                  currentPassword: '',
                },
              }),
            );
          }
        }}
        requiredField={true}
        secureTextEntry={true}
        touched={formik.touched.currentPassword}
        value={formik.values.currentPassword}
      />
      <Field
        editable={true}
        error={
          formik.errors.newPassword || updatePasswordErrors.newPassword
        }
        label='new password'
        onBlur={formik.handleBlur('newPassword')}
        onChangeText={(e: string) => {
          formik.setFieldError('newPassword', '');
          formik.setFieldValue('newPassword', e);
          if (updatePasswordErrors.newPassword) {
            dispatch(
              setUpdatePassword({
                errors: {
                  ...updatePasswordErrors,
                  newPassword: '',
                },
              }),
            );
          }
        }}
        requiredField={true}
        secureTextEntry={true}
        touched={formik.touched.newPassword}
        value={formik.values.newPassword}
      />
      <Field
        editable={true}
        error={
          formik.errors.confirmNewPassword || updatePasswordErrors.confirmNewPassword
        }
        label='confirm new password'
        onBlur={formik.handleBlur('confirmNewPassword')}
        onChangeText={(e: string) => {
          formik.setFieldError('confirmNewPassword', '');
          formik.setFieldValue('confirmNewPassword', e);
          if (updatePasswordErrors.confirmNewPassword) {
            dispatch(
              setUpdatePassword({
                errors: {
                  ...updatePasswordErrors,
                  confirmNewPassword: '',
                },
              }),
            );
          }
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
        disabled={false}
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
