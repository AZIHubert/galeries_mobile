import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

import { endPoints } from '#store/constant';

import {
  getAuthToken,
  getExpiresToken,
  request,
  setAuthToken,
  setExpiresToken,
} from '#store/helpers';

export default async () => {
  const token = await getAuthToken();
  const expiresIn = await getExpiresToken();
  if (token && expiresIn) {
    const isExpired = moment().isAfter(JSON.parse(expiresIn));
    if (isExpired) {
      try {
        const response = await request(
          null,
          'GET',
          endPoints.REFRESH_TOKEN,
          token,
        );
        await setAuthToken(response.data.token);
        await setExpiresToken(response.data.expiresIn);
      } catch (err) {
        await AsyncStorage.clear();
      }
    }
  }
};
