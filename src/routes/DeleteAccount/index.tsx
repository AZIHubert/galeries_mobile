import * as React from 'react';

import HeaderForm from '#components/HeaderForm';
import ScrollableScreen from '#components/ScrollableScreen';
import Wrapper from '#components/Wrapper';

import DeleteAccountForm from './DeleteAccountForm';

const DeleteAccount = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  return (
    <ScrollableScreen
      header={() => <HeaderForm
        title='delete your account'
        variant='danger'
      />}
    >
      <Wrapper
        marginTop={50}
      >
        <DeleteAccountForm
          loading={loading}
          setLoading={setLoading}
        />
      </Wrapper>
    </ScrollableScreen>
  );
};

export default DeleteAccount;
