import * as React from 'react';

import HeaderForm from '#components/HeaderForm';
import ScrollableScreen from '#components/ScrollableScreen';
import Wrapper from '#components/Wrapper';

import LoginForm from './LoginForm';

const Login = () => (
  <ScrollableScreen
    header={() => <HeaderForm
      title='log in'
    />}
  >
    <Wrapper
      marginTop={50}
    >
      <LoginForm />
    </Wrapper>
  </ScrollableScreen>
);

export default Login;
