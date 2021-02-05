import { AxiosResponse } from 'axios';

import client from '#src/helpers/api/client';

const endpoint = '/users/login';

interface ValuesI {
  password: string;
  userNameOrEmail: string;
}

const login
: (values: ValuesI) => Promise<AxiosResponse<any>> = async (values: ValuesI) => {
  try {
    return await client({
      data: values,
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      url: endpoint,
    });
  } catch (err) {
    throw new Error(err);
  }
};

export default login;
