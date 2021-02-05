import { AxiosResponse } from 'axios';

import client from '#src/helpers/api/client';

const endpoint = '/users/signin';

interface ValuesI {
  confirmPassword: string;
  email: string;
  password: string;
  userName: string;
}

const signin
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

export default signin;
