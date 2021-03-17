import * as React from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import AppText from '#components/AppText';
import HeaderForm from '#components/HeaderForm';
import ScrollableScreen from '#components/ScrollableScreen';
import Wrapper from '#components/Wrapper';

import {
  fetchSendConfirmation,
} from '#store/actions';
import {
  loadingSelector,
} from '#store/selectors';

const SigninLanding = ({
  route,
}: navigation.HomeNavProps<'signinLanding'>) => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);

  return (
    <ScrollableScreen
      header={() => <HeaderForm
        title='Verify your account'
      />}
    >
      <Wrapper
        marginTop={50}
      >
        <View
          style={styles.textContainer}
        >
          <AppText
            fontSize={19}
          >
            To use Galeries, click the verification button
            in the email we sent to {route.params.email}.
            This helps keep your account secure.
          </AppText>
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            if (!loading) {
              dispatch(
                fetchSendConfirmation({
                  email: route.params.email.trim().toLowerCase(),
                }),
              );
            }
          }}
        >
          <View>
            <AppText
              fontSize={19}
            >
              No email in your inbox or spam folder?
            </AppText>
            <AppText
              fontSize={19}
            >
              Let’s resend it.
            </AppText>
          </View>
        </TouchableWithoutFeedback>
      </Wrapper>
    </ScrollableScreen>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginBottom: 20,
  },
});

export default SigninLanding;
