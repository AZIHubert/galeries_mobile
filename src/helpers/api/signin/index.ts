import client from '#src/helpers/api/client';

const endpoint = '/users/signin';

interface ValuesI {
  confirmPassword: string;
  email: string;
  password: string;
  userName: string;
}

const signin: (values: ValuesI) => Promise<void> = async (values: ValuesI) => {
  try {
    await client({
      data: values,
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      url: endpoint,
    });
  } catch (err) {
    console.log(err);
  }
};

export default signin;
