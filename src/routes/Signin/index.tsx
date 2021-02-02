import * as React from 'react';
import {
  ScrollView,
} from 'react-native';

import HeaderLogger from '#components/HeaderLogger';
import Screen from '#components/Screen';
import Wrapper from '#components/Wrapper';

import SigninForm from './SigninForm';

const Signin = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  return (
    <Screen
      safeView={false}
    >
      <HeaderLogger
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
