import * as React from 'react';
import {
  View,
} from 'react-native';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import Header from '#components/Header';
import ScrollableScreen from '#components/ScrollableScreen';
import Wrapper from '#components/Wrapper';

import {
  resetAccount,
  resetUpdateEmail,
  resetUpdatePassword,
  resetPseudonym,
} from '#store/actions';
import {
  userSelector,
} from '#store/selectors';

import ChangePseudonym from './ChangePseudonym';
import ChangeEmailForm from './ChangeEmailForm';
import ChangePasswordForm from './ChangePasswordForm';
import DeleteAccount from './DeleteAccount';
import TitleForm from './TitleForm';

const EditInformation = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);

  React.useEffect(() => () => {
    dispatch(
      resetAccount(),
    );
    dispatch(
      resetPseudonym(),
    );
    dispatch(
      resetUpdateEmail(),
    );
    dispatch(
      resetUpdatePassword(),
    );
  }, []);

  return (
    <ScrollableScreen
      header={() => <Header
        returnButton
      />}
    >
      <Wrapper
        marginTop={50}
      >
        <TitleForm
          title='change your pseudonym'
        />
        {!!user && !user.googleId && !user.facebookId ? (
          <View>
            <ChangePseudonym />
            <TitleForm
              title='change your password'
            />
            <ChangePasswordForm />
            <TitleForm
              title='change your email'
            />
            <ChangeEmailForm />
            <TitleForm
              danger
              title='change your email'
            />
            <DeleteAccount />
          </View>
        ) : null}
      </Wrapper>
    </ScrollableScreen>
  );
};

export default EditInformation;
