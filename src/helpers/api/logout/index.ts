import AsyncStorage from '@react-native-async-storage/async-storage';
import client from '#src/helpers/api/client';

const endpoint = '/users/logout';

export default async () => {
  const token = await AsyncStorage.getItem('auThoken');
  return client({
    method: 'get',
    url: endpoint,
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  });
};
