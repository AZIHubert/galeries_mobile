import * as Facebook from 'expo-facebook';

import client from '#src/helpers/api/client';

const endpoint = '/users/auth/mobile/facebook';

export default async () => {
  await Facebook.initializeAsync({
    appId: '688539228486770',
  });
  let user: any;
  try {
    const response = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
    if (response.type === 'success') {
      const fetchInfo = await fetch(`https://graph.facebook.com/me?access_token=${response.token}&fields=email,gender,name,picture.type(large)`);
      user = await fetchInfo.json();
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
