import * as React from 'react';

import HeaderForm from '#components/HeaderForm';
import ScrollableScreen from '#components/ScrollableScreen';
import Wrapper from '#components/Wrapper';

import DeleteAccountForm from './DeleteAccountForm';

const DeleteAccount = () => (
  <ScrollableScreen
    header={() => <HeaderForm
      title='delete your account'
      variant='danger'
    />}
  >
    <Wrapper
      marginTop={50}
    >
      <DeleteAccountForm />
    </Wrapper>
  </ScrollableScreen>
);

export default DeleteAccount;
