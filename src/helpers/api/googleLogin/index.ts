import * as Google from 'expo-google-app-auth';

import client from '#src/helpers/api/client';

const endpoint = '/users/auth/mobile/google';

export default async () => {
  let user: any;
  try {
    const response = await Google.logInAsync({
      androidClientId: '863840240633-o8dmgid62rummljeen43rqe1gev7ottn.apps.googleusercontent.com',
      iosClientId: '863840240633-6feiofu53fj43d7de2rgpc1qn3epb7d0.apps.googleusercontent.com',
    });
    if (response.type === 'success') {
      user = response.user;
    }
  } catch (err) {
    console.log(err);
  }
  return client({
    method: 'post',
    url: endpoint,
    headers: {
      'Content-Type': 'application/json',
    },
    data: user,
  });
};
