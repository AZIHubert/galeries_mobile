import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as React from 'react';

import Header from '#components/Header';
import Screen from '#components/Screen';
import { AuthContext } from '#src/contexts/AuthProvider';

const Landing = () => {
  const { setUser } = React.useContext(AuthContext);
  React.useEffect(() => {
    const getMe = async () => {
      try {
        const token = await AsyncStorage.getItem('auThoken');
        const response = await axios({
          method: 'get',
          url: 'http://192.168.1.84:5000/users/me',
          headers: {
            'Content-Type': 'application/json',
            authorization: token,
          },
        });
        setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMe();
  }, []);
  return (
    <Screen
      header={() => <Header />}
    >

    </Screen>
  );
};

export default Landing;
