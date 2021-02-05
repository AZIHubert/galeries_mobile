import * as React from 'react';
import {
  View,
} from 'react-native';

import { AuthContext } from '#src/contexts/AuthProvider';

import Header from '#components/Header';
import ScrollableScreen from '#components/ScrollableScreen';
import Wrapper from '#components/Wrapper';

import ChangeEmailForm from './ChangeEmailForm';
import ChangePasswordForm from './ChangePasswordForm';
import DeleteAccount from './DeleteAccount';
import TitleForm from './TitleForm';

const EditInformation = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const { user } = React.useContext(AuthContext);
  return (
    <ScrollableScreen
      header={() => <Header
        returnButton
      />}
    >
      <Wrapper
        marginTop={50}
      >
        {!!user && !user.googleId && !user.facebookId ? (
          <View>
            <TitleForm
              title='change your password'
            />
            <ChangePasswordForm
              loading={loading}
              setLoading={setLoading}
            />
            <TitleForm
              title='change your email'
            />
            <ChangeEmailForm
              loading={loading}
              setLoading={setLoading}
            />
            <TitleForm
              danger
              title='change your email'
            />
            <DeleteAccount
              loading={loading}
            />
          </View>
        ) : null}
      </Wrapper>
    </ScrollableScreen>
  );
};

export default EditInformation;
