import * as React from 'react';

import HeaderForm from '#components/HeaderForm';
import ScrollableScreen from '#components/ScrollableScreen';
import Wrapper from '#components/Wrapper';

import SendTicketForm from './SendTicketForm';

const SendTicket = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  return (
    <ScrollableScreen
      header={() => <HeaderForm
        title='send a ticket'
      />}
    >
      <Wrapper
        marginTop={50}
      >
        <SendTicketForm
          loading={loading}
          setLoading={setLoading}
        />
      </Wrapper>
    </ScrollableScreen>
  );
};

export default SendTicket;
