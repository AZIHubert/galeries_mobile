import * as React from 'react';

import HeaderForm from '#components/HeaderForm';
import ScrollableScreen from '#components/ScrollableScreen';
import Wrapper from '#components/Wrapper';

import LoginForm from './LoginForm';

const Login = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  return (
    <ScrollableScreen
      header={() => <HeaderForm
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
    </ScrollableScreen>
  );
};

export default Login;
