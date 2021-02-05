import { AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import client from '#src/helpers/api/client';

const endpoint = '/users/me/profilePictures/';

const deleteProfilePicture
: (id: string) => Promise<AxiosResponse<any> | null> = async (id: string) => {
  try {
    const token = await AsyncStorage.getItem('auThoken');
    if (token) {
      return await client({
        headers: {
          authorization: token,
          'Content-Type': 'application/json',
        },
        method: 'delete',
        url: endpoint + id,
      });
    }
  } catch (err) {
    throw new Error(err);
  }
  return null;
};

export default deleteProfilePicture;
