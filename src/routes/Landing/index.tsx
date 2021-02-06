import * as React from 'react';

import Header from '#components/Header';
import Screen from '#components/Screen';

import { getMe } from '#helpers/api';

import { AuthContext } from '#src/contexts/AuthProvider';

const Landing = () => {
  const { setUser } = React.useContext(AuthContext);
  React.useEffect(() => {
    let unmount = false;
    const getUser = async () => {
      try {
        const response = await getMe();
        if (response && !unmount) {
          setUser(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
    return () => {
      unmount = true;
    };
  }, []);
  return (
    <Screen
      header={() => <Header />}
    >

    </Screen>
  );
};

export default Landing;
