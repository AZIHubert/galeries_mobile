import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import ImageView from '#routes/ImageView';
import Profile from '#routes/Profile';

const Stack = createStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator
    initialRouteName='profile'
    mode='modal'
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      component={ImageView}
      name='imageView'
    />
    <Stack.Screen
      component={Profile}
      name='profile'
    />
  </Stack.Navigator>
);

export default ProfileStack;
