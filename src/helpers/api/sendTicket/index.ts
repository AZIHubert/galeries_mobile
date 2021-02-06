import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosResponse } from 'axios';

import client from '#src/helpers/api/client';

const endpoint = '/tickets';

interface ValuesI {
  header: string;
  body: string;
}

const sendTicket
: (values: ValuesI) => Promise<AxiosResponse<any> | null> = async (values: ValuesI) => {
  try {
    const token = await AsyncStorage.getItem('auThoken');
    if (token) {
      return await client({
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
    throw new Error(err);
  }
  return null;
};

export default sendTicket;
