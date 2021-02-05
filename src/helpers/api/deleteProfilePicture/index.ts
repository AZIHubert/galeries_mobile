import AsyncStorage from '@react-native-async-storage/async-storage';
import client from '#src/helpers/api/client';

const endpoint = '/users/me/profilePictures/';

export default async (id: string) => {
  const token = await AsyncStorage.getItem('auThoken');
  return client({
    method: 'delete',
    url: endpoint + id,
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  });
};
