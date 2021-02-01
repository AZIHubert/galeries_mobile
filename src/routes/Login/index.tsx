import * as React from 'react';
import {
  ScrollView,
} from 'react-native';

import Header from '#components/Header';
import Screen from '#components/Screen';
import Wrapper from '#components/Wrapper';

import LoginForm from './LoginForm';

const Login = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  return (
    <Screen
      safeView={false}
    >
      <Header
        title='login'
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
          <LoginForm
            loading={loading}
            setLoading={setLoading}
          />
        </Wrapper>
      </ScrollView>
    </Screen>
  );
};

export default Login;
