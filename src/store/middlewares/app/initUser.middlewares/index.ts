import AsyncStorage from '@react-native-async-storage/async-storage';
import { Middleware } from 'redux';

import {
  INIT_USER_FETCH,
  fetchUser,
  setInit,
} from '#store/actions';

import {
  getAuthToken,
  getExpiresToken,
} from '#store/helpers';

const fetchInitUser: Middleware = (
  { dispatch },
) => (
  next,
) => async (
  action: store.ActionI,
) => {
  next(action);
  if (action.type === INIT_USER_FETCH) {
    const authToken = getAuthToken();
    const expiresToken = getExpiresToken();
    if (authToken && expiresToken) {
      dispatch(setInit(true));
      dispatch(fetchUser());
    } else {
      await AsyncStorage.clear();
    }
  }
};

export default [
  fetchInitUser,
];
