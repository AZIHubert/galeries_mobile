import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import DeleteAccount from '#routes/DeleteAccount';
import EditInformation from '#routes/EditInformation';

const Stack = createStackNavigator<navigation.EditParamList>();

const EditStack = () => (
  <Stack.Navigator
    initialRouteName='editinformation'
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
