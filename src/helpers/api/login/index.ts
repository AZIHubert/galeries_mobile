import client from '#src/helpers/api/client';

const endpoint = '/users/login';

interface ValuesI {
  password: string;
  userNameOrEmail: string;
}

const login: (values: ValuesI) => Promise<void> = async (values: ValuesI) => {
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

export default login;
