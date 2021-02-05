import AsyncStorage from '@react-native-async-storage/async-storage';

import client from '#src/helpers/api/client';

const endpoint = '/users/me/updateEmail';

interface ValuesI {
  password: string;
}

const updatePasswordSendEmail: (values: ValuesI) => Promise<void> = async (values: ValuesI) => {
  try {
    const token = await AsyncStorage.getItem('auThoken');
    if (token) {
      await client({
        data: values,
        headers: {
          authorization: token,
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

export default updatePasswordSendEmail;
