import AsyncStorage from '@react-native-async-storage/async-storage';

import client from '#src/helpers/api/client';

const endpoint = '/users/logout';

const logout: () => Promise<void> = async () => {
  try {
    const token = await AsyncStorage.getItem('auThoken');
    if (token) {
      await client({
        headers: {
          'Content-Type': 'application/json',
          authorization: token,
        },
        method: 'get',
        url: endpoint,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export default logout;
