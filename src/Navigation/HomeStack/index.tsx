import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Home from '#routes/Home';
import Login from '#routes/Login';
import Signin from '#routes/Signin';

import SideMenuDrawer from '#src/Navigation/SideMenuDrawer';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName='home'
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
  </Stack.Navigator>
);

export default HomeStack;
