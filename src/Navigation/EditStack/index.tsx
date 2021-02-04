import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import EditInformation from '#routes/EditInformation';
import DeleteAccount from '#routes/DeleteAccount';

const Stack = createStackNavigator();

const EditStack = () => (
  <Stack.Navigator
    initialRouteName='profile'
    mode='modal'
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      component={EditInformation}
      name='editinformation'
    />
    <Stack.Screen
      component={DeleteAccount}
      name='deleteaccount'
    />
  </Stack.Navigator>
);

export default EditStack;
