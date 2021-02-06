import * as React from 'react';

import HeaderForm from '#components/HeaderForm';
import ScrollableScreen from '#components/ScrollableScreen';
import Wrapper from '#components/Wrapper';

import SigninForm from './SigninForm';

const Signin = () => (
  <ScrollableScreen
    header={() => <HeaderForm
      title='sign in'
    />}
  >
    <Wrapper
      marginTop={50}
    >
      <SigninForm />
    </Wrapper>
  </ScrollableScreen>
);

export default Signin;
