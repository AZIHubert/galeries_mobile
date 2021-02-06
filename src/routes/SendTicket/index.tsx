import * as React from 'react';

import HeaderForm from '#components/HeaderForm';
import ScrollableScreen from '#components/ScrollableScreen';
import Wrapper from '#components/Wrapper';

import SendTicketForm from './SendTicketForm';

const SendTicket = () => (
  <ScrollableScreen
    header={() => <HeaderForm
      title='send a ticket'
    />}
  >
    <Wrapper
      marginTop={50}
    >
      <SendTicketForm />
    </Wrapper>
  </ScrollableScreen>
);

export default SendTicket;
