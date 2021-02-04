import client from '#src/helpers/api/client';

const endpoint = '/users/signin';

interface ValuesI {
  confirmPassword: string;
  email: string;
  password: string;
  userName: string;
}

export default (values: ValuesI) => client({
  method: 'post',
  url: endpoint,
  headers: {
    'Content-Type': 'application/json',
  },
  data: values,
});
