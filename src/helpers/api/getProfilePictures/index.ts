import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosResponse } from 'axios';

import client from '#src/helpers/api/client';

const endpoint = '/users/me/profilePictures';

const getProfilePictures
: () => Promise<AxiosResponse<any> | null> = async () => {
  try {
    const token = await AsyncStorage.getItem('auThoken');
    if (token) {
      return await client({
        headers: {
          authorization: token,
          'Content-Type': 'application/json',
        },
        method: 'get',
        url: endpoint,
      });
    }
  } catch (err) {
    throw new Error(err);
  }
  return null;
};

export default getProfilePictures;
