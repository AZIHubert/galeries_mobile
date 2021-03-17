import {
  NavigationContainer,
} from '@react-navigation/native';
import * as React from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  Text,
} from 'react-native';

import HomeStack from './HomeStack';

import { fetchInitUser } from '#store/actions';
import {
  initSelector,
} from '#store/selectors';

import ModalNotification from '#routes/ModalNotification';

const Navigation = () => {
  const dispatch = useDispatch();
  const init = useSelector(initSelector);
  const [allowRedirect, setAllowRedirect] = React.useState<boolean>(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setAllowRedirect(true), 2000);
    dispatch(fetchInitUser());
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (init || !allowRedirect) {
    return (
      <Text>
        loading
      </Text>
    );
  }

  return (
    <NavigationContainer>
      <HomeStack />
      <ModalNotification />
    </NavigationContainer>
  );
};

export default Navigation;
