import AsyncStorage from '@react-native-async-storage/async-storage';

import client from '#src/helpers/api/client';

const endpoint = '/users/me/profilePictures/';

const deleteProfilePicture: (id: string) => Promise<void> = async (id: string) => {
  try {
    const token = await AsyncStorage.getItem('auThoken');
    if (token) {
      await client({
        headers: {
          authorization: token,
          'Content-Type': 'application/json',
        },
        method: 'delete',
        url: endpoint + id,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export default deleteProfilePicture;
