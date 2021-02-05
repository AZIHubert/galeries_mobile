import AsyncStorage from '@react-native-async-storage/async-storage';

import client from '#src/helpers/api/client';

const endpoint = '/users/me/profilePictures/';

const setProfilePicture: (id: string) => Promise<void> = async (id: string) => {
  try {
    const token = await AsyncStorage.getItem('auThoken');
    await client({
      headers: {
        authorization: token,
        'Content-Type': 'application/json',
      },
      method: 'put',
      url: endpoint + id,
    });
  } catch (err) {
    console.log(err);
  }
};

export default setProfilePicture;
