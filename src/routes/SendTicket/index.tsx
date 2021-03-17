import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import HeaderForm from '#components/HeaderForm';
import ScrollableScreen from '#components/ScrollableScreen';
import Wrapper from '#components/Wrapper';

import SendTicketForm from './SendTicketForm';

import {
  resetSendTicket,
} from '#store/actions';
import {
  sendTicketStatusSelector,
} from '#store/selectors';

const SendTicket = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const sendTicketStatus = useSelector(sendTicketStatusSelector);

  React.useEffect(() => {
    if (sendTicketStatus === 'success') {
      navigation.goBack();
    }
  });
  React.useEffect(() => () => {
    dispatch(
      resetSendTicket(),
    );
  });

  return (
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
};

export default SendTicket;
