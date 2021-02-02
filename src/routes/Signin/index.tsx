import * as React from 'react';
import {
  ScrollView,
} from 'react-native';

import Header from '#components/Header';
import Screen from '#components/Screen';
import Wrapper from '#components/Wrapper';

import SigninForm from './SigninForm';

const Signin = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  return (
    <Screen
      safeView={false}
    >
      <Header
        title='sign in'
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={{
          flex: 1,
        }}
      >
        <Wrapper
          marginTop={50}
        >
          <SigninForm
            loading={loading}
            setLoading={setLoading}
          />
        </Wrapper>
      </ScrollView>
    </Screen>
  );
};

export default Signin;
