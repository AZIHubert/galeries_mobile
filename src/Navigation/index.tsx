import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';

import HomeStack from './HomeStack';

const Navigation = () => (
  <NavigationContainer>
    <HomeStack />
  </NavigationContainer>
);

export default Navigation;
