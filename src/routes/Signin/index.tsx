import * as React from 'react';

import HeaderForm from '#components/HeaderForm';
import ScrollableScreen from '#components/ScrollableScreen';
import Wrapper from '#components/Wrapper';

import SigninForm from './SigninForm';

const Signin = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  return (
    <ScrollableScreen
      header={() => <HeaderForm
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
    </ScrollableScreen>
  );
};

export default Signin;
