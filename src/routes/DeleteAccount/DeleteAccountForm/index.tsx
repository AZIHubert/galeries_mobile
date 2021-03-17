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

import AppButton from '#components/AppButton';
import AppText from '#components/AppText';
import Field from '#components/Field';

import {
  deleteAccountSchema,
} from '#helpers/schemas';

import {
  accountErrorsSelector,
  accountStatusSelector,
  loadingSelector,
} from '#store/selectors';
import {
  deleteAccount,
  setAccount,
} from '#store/actions';

const initialValues: form.AccountI = {
  deleteAccountSentence: '',
  password: '',
  userNameOrEmail: '',
};

const DeleteAccountForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      Keyboard.dismiss();
      if (!loading) {
        dispatch(
          deleteAccount(values),
        );
      }
    },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: deleteAccountSchema,
  });
  const navigation = useNavigation();
  const accountErrors = useSelector(accountErrorsSelector);
  const accountStatus = useSelector(accountStatusSelector);
  const loading = useSelector(loadingSelector);

  React.useEffect(() => () => {
    if (accountStatus === 'success') {
      navigation.reset({
        index: 0,
        routes: [{ name: 'home' }],
      });
    }
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
            editable={true}
            error={
              formik.errors.userNameOrEmail || accountErrors.userNameOrEmail
            }
            label='user name or email'
            onBlur={formik.handleBlur('userNameOrEmail')}
            onChangeText={(e: string) => {
              formik.setFieldError('userNameOrEmail', '');
              formik.setFieldValue('userNameOrEmail', e);
              if (accountErrors.userNameOrEmail) {
                dispatch(
                  setAccount({
                    errors: {
                      ...accountErrors,
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
              formik.errors.deleteAccountSentence || accountErrors.deleteAccountSentence
            }
            label='To verify, type "delete my account" below:'
            onBlur={formik.handleBlur('deleteAccountSentence')}
            onChangeText={(e: string) => {
              formik.setFieldError('deleteAccountSentence', '');
              formik.setFieldValue('deleteAccountSentence', e);
              if (accountErrors.deleteAccountSentence) {
                dispatch(
                  setAccount({
                    errors: {
                      ...accountErrors,
                      deleteAccountSentence: '',
                    },
                  }),
                );
              }
            }}
            requiredField={true}
            touched={formik.touched.deleteAccountSentence}
            value={formik.values.deleteAccountSentence}
          />
          <Field
            editable={true}
            error={
              formik.errors.password || accountErrors.password
            }
            label='confirm your password'
            onBlur={formik.handleBlur('password')}
            onChangeText={(e: string) => {
              formik.setFieldError('password', '');
              formik.setFieldValue('password', e);
              if (accountErrors.password) {
                dispatch(
                  setAccount({
                    errors: {
                      ...accountErrors,
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
        disabled={false}
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
