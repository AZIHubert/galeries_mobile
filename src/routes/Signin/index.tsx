import * as React from 'react';

import HeaderLogger from '#components/HeaderLogger';
import Screen from '#components/Screen';
import Wrapper from '#components/Wrapper';

import SigninForm from './SigninForm';

const Signin = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  return (
    <Screen
      header={() => <HeaderLogger
        title='sign in'
      />}
    >
      <Wrapper
        marginTop={50}
      >
        <SigninForm
          loading={loading}
          setLoading={setLoading}
        />
      </Wrapper>
    </Screen>
  );
};

export default Signin;
