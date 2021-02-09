import { AxiosResponse } from 'axios';
import * as Google from 'expo-google-app-auth';

import client from '#src/helpers/api/client';

const endpoint = '/users/auth/google';

const googleLogin
: () => Promise<AxiosResponse<any> | null> = async () => {
  try {
    const response = await Google.logInAsync({
      androidClientId: '863840240633-o8dmgid62rummljeen43rqe1gev7ottn.apps.googleusercontent.com',
      iosClientId: '863840240633-6feiofu53fj43d7de2rgpc1qn3epb7d0.apps.googleusercontent.com',
    });
    if (response.type === 'success') {
      const { user } = response;
      return await client({
        data: user,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'post',
        url: endpoint,
      });
    }
  } catch (err) {
    throw new Error(err);
  }
  return null;
};

export default googleLogin;
