import * as React from 'react';

import HeaderLogger from '#components/HeaderLogger';
import Screen from '#components/Screen';
import Wrapper from '#components/Wrapper';

import LoginForm from './LoginForm';

const Login = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  return (
    <Screen
      header={() => <HeaderLogger
        title='log in'
      />}
    >
      <Wrapper
        marginTop={50}
      >
        <LoginForm
          loading={loading}
          setLoading={setLoading}
        />
      </Wrapper>
    </Screen>
  );
};

export default Login;
