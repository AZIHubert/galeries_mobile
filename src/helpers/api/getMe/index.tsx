import AsyncStorage from '@react-native-async-storage/async-storage';

import client from '#src/helpers/api/client';

const getMe = async () => {
  try {
    const token = await AsyncStorage.getItem('auThoken');
    if (token) {
      await client({
        headers: {
          authorization: token,
          'Content-Type': 'application/json',
        },
        method: 'get',
        url: 'http://192.168.1.84:5000/users/me',
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export default getMe;
