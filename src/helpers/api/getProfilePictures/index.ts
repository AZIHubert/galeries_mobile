import AsyncStorage from '@react-native-async-storage/async-storage';

import client from '#src/helpers/api/client';

const endpoint = '/users/me/profilePictures';

const getProfilePictures: () => Promise<void> = async () => {
  try {
    const token = await AsyncStorage.getItem('auThoken');
    if (token) {
      await client({
        headers: {
          authorization: token,
          'Content-Type': 'application/json',
        },
        method: 'get',
        url: endpoint,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export default getProfilePictures;
