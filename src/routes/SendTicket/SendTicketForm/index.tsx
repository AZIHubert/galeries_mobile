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

import AppButtonRadius from '#components/AppButtonRadius';
import AppText from '#components/AppText';
import Field from '#components/Field';

import {
  sendTicketSchema,
} from '#helpers/schemas';

import {
  fetchSendTicket,
  setSendTicket,
} from '#store/actions';
import {
  sendTicketErrorSelector,
} from '#store/selectors';

const initialValues: form.SendTicketI = {
  header: '',
  body: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      Keyboard.dismiss();
      dispatch(
        fetchSendTicket(values),
      );
    },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: sendTicketSchema,
  });
  const sendTicketError = useSelector(sendTicketErrorSelector);

  return (
    <View
      style={styles.container}
    >
      <View>
        <Field
          editable={true}
          error={
            formik.errors.header || sendTicketError.header
          }
          label='title'
          onBlur={formik.handleBlur('header')}
          onChangeText={(e: string) => {
            formik.setFieldError('header', '');
            formik.setFieldValue('header', e);
            if (sendTicketError.header) {
              dispatch(
                setSendTicket({
                  errors: {
                    ...sendTicketError,
                    header: '',
                  },
                }),
              );
            }
          }}
          requiredField={true}
          touched={formik.touched.header}
          value={formik.values.header}
        />
        <Field
          editable={true}
          error={
            formik.errors.body || sendTicketError.body
          }
          label='body'
          multiline={true}
          onBlur={formik.handleBlur('body')}
          onChangeText={(e: string) => {
            formik.setFieldError('body', '');
            formik.setFieldValue('body', e);
            if (sendTicketError.body) {
              dispatch(
                setSendTicket({
                  errors: {
                    ...sendTicketError,
                    body: '',
                  },
                }),
              );
            }
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
        disabled={false}
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
