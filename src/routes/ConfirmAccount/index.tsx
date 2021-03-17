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
import HeaderForm from '#components/HeaderForm';
import ScrollableScreen from '#components/ScrollableScreen';
import Wrapper from '#components/Wrapper';

import {
  resetConfirmSchema,
} from '#helpers/schemas';

import {
  fetchSendConfirmation,
  setSendConfirmation,
} from '#store/actions';
import {
  loadingSelector,
  sendConfirmationErrorSelector,
} from '#store/selectors';

const initialValues: form.SendConfirmationI = {
  email: '',
};

const ConfirmAccount = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    onSubmit: async ({ email }) => {
      Keyboard.dismiss();
      if (!loading) {
        dispatch(
          fetchSendConfirmation({
            email: email.trim().toLocaleLowerCase(),
          }),
        );
      }
    },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: resetConfirmSchema,
  });
  const loading = useSelector(loadingSelector);
  const sendConfirmationError = useSelector(sendConfirmationErrorSelector);

  return (
    <ScrollableScreen
      header={() => <HeaderForm
        title='confirm your account'
      />}
    >
      <Wrapper
        marginTop={50}
      >
        <View
          style={styles.titleContainer}
        >
          <AppText
            fontSize={26}
          >
            Your account is not confirmed
          </AppText>
        </View>
        <View
          style={styles.firstTextContainer}
        >
          <AppText
            fontSize={19}
          >
            To use Galeries, click the verification
            button in the email we sent to the email you've register.
            This helps keep your account secure.
          </AppText>
        </View>
        <View
          style={styles.secondTextContainer}
        >
          <AppText
            fontSize={19}
          >
            Or resend a confirmation email.
          </AppText>
        </View>
        <Field
          editable={true}
          error={
            formik.errors.email || sendConfirmationError.email
          }
          label='email'
          onBlur={formik.handleBlur('email')}
          onChangeText={(e: string) => {
            formik.setFieldError('email', '');
            formik.setFieldValue('email', e);
            if (sendConfirmationError.email) {
              dispatch(
                setSendConfirmation({
                  errors: {
                    ...sendConfirmationError,
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
        <AppButtonRadius
          disabled={false}
          fontSize={25}
          marginBottom={30}
          onPress={formik.handleSubmit}
          title='Resend'
        />
      </Wrapper>
    </ScrollableScreen>
  );
};

const styles = StyleSheet.create({
  firstTextContainer: {
    marginBottom: 10,
  },
  secondTextContainer: {
    marginBottom: 60,
  },
  titleContainer: {
    marginBottom: 30,
  },
});

export default ConfirmAccount;
