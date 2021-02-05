import AsyncStorage from '@react-native-async-storage/async-storage';

import client from '#src/helpers/api/client';

const endpoint = '/tickets';

interface ValuesI {
  header: string;
  body: string;
}

export default async (values: ValuesI) => {
  const token = await AsyncStorage.getItem('auThoken');
  return client({
    method: 'post',
    url: endpoint,
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
    data: values,
  });
};
