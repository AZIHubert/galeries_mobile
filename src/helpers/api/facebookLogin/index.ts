import { AxiosResponse } from 'axios';
import * as Facebook from 'expo-facebook';

import client from '#src/helpers/api/client';

const endpoint = '/users/auth/facebook';

const facebookLogin
: () => Promise<AxiosResponse<any> | null> = async () => {
  try {
    await Facebook.initializeAsync({
      appId: '688539228486770',
    });
  } catch (err) {
    console.log(err);
  }
  try {
    const facebookResponse = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
    if (facebookResponse.type === 'success') {
      const fetchInfo = await fetch(`https://graph.facebook.com/me?access_token=${facebookResponse.token}&fields=email,gender,name,picture.type(large)`);
      const user = await fetchInfo.json();
      const response = await client({
        data: user,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'post',
        url: endpoint,
      });
      return response;
    }
  } catch (err) {
    throw new Error(err);
  }
  return null;
};

export default facebookLogin;
