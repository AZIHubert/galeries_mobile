import client from '#src/helpers/api/client';

const endpoint = '/users/login';

interface ValuesI {
  password: string;
  userNameOrEmail: string;
}

export default (values: ValuesI) => client({
  method: 'post',
  url: endpoint,
  headers: {
    'Content-Type': 'application/json',
  },
  data: values,
});
