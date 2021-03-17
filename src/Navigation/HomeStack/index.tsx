import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useSelector } from 'react-redux';

import ConfirmAccount from '#routes/ConfirmAccount';
import Home from '#routes/Home';
import Login from '#routes/Login';
import Signin from '#routes/Signin';
import SigninLanding from '#routes/SigninLanding';
import ResetPassword from '#routes/ResetPassword';

import SideMenuDrawer from '#src/Navigation/SideMenuDrawer';

import { userSelector } from '#store/selectors';

const Stack = createStackNavigator<navigation.HomeParamList>();

const HomeStack = () => {
  const user = useSelector(userSelector);
  return (
    <Stack.Navigator
      initialRouteName={user ? 'sideMenu' : 'home'}
      mode='modal'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        component={Home}
        name='home'
      />
      <Stack.Screen
        component={Signin}
        name='signin'
      />
      <Stack.Screen
        component={Login}
        name='login'
      />
      <Stack.Screen
        component={SideMenuDrawer}
        name='sideMenu'
      />
      <Stack.Screen
        component={ConfirmAccount}
        name='confirmAccount'
      />
      <Stack.Screen
        component={SigninLanding}
        name='signinLanding'
      />
      <Stack.Screen
        component={ResetPassword}
        name='resetPassword'
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
