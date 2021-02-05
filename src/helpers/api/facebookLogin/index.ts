import * as Facebook from 'expo-facebook';

import client from '#src/helpers/api/client';

const endpoint = '/users/auth/mobile/facebook';

const facebookLogin: () => Promise<void> = async () => {
  try {
    await Facebook.initializeAsync({
      appId: '688539228486770',
    });
  } catch (err) {
    console.log(err);
  }
  try {
    const response = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
    if (response.type === 'success') {
      const fetchInfo = await fetch(`https://graph.facebook.com/me?access_token=${response.token}&fields=email,gender,name,picture.type(large)`);
      const user = await fetchInfo.json();
      await client({
        data: user,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'post',
        url: endpoint,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export default facebookLogin;
