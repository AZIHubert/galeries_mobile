import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import * as React from 'react';
import {
  Keyboard,
  StyleSheet,
  View,
} from 'react-native';

import AppButton from '#components/AppButton';
import AppText from '#components/AppText';
import Field from '#components/Field';

import { deleteAccountSchema } from '#helpers/schemas';
import { deleteAccount } from '#helpers/api';

interface DeleteAccountFormI {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValues = {
  password: '',
};

const DeleteAccountForm = ({
  loading,
  setLoading,
}: DeleteAccountFormI) => {
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { setFieldError }) => {
      if (!loading) {
        setLoading(true);
        Keyboard.dismiss();
        try {
          const response = await deleteAccount(values);
          if (response) {
            setLoading(false);
            navigation.reset({
              index: 0,
              routes: [{ name: 'home' }],
            });
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
    validationSchema: deleteAccountSchema,
  });
  return (
    <View
      style={styles.container}
    >
      <View>
        <View
          style={styles.textContainer}
        >
          <AppText
            color='error'
            fontSize={25}
            textAlign='center'
          >
            Are you sure you want
            to do this?
          </AppText>
        </View>
        <View>
          <Field
            editable={!loading}
            error={formik.errors.password}
            label='confirm your password'
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
          <View
            style={styles.requiredFieldIndicator}
          >
            <AppText
              fontSize={15}
            >
              * required fields
            </AppText>
          </View>
        </View>
      </View>
      <AppButton
        disabled={loading}
        fontSize={25}
        marginBottom={30}
        onPress={formik.handleSubmit}
        title='Delete your account'
        variant='danger'
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
  textContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
});

export default DeleteAccountForm;
