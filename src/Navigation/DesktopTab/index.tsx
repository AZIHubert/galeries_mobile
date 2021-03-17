import {
  AntDesign,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import theme from '#helpers/theme';

import CreateGalerie from '#routes/CreateGalerie';
import Landing from '#routes/Landing';
import Notification from '#routes/Notification';

const Tab = createBottomTabNavigator<navigation.DesktopParamList>();

const DesktopTab = () => (
  <Tab.Navigator
    initialRouteName='landing'
    tabBarOptions={{
      activeTintColor: theme.color.primary,
      inactiveTintColor: theme.color.primary,
      style: styles.tabBar,
    }}
  >
    <Tab.Screen
      component={Landing}
      name='landing'
      options={{
        tabBarIcon: ({
          focused,
          size,
        }) => (
          focused ? (
            <Ionicons
              color={theme.color.primary}
              name="ios-home-sharp"
              size={size}
            />
          ) : (
            <Ionicons
              color={theme.color.primary}
              name="ios-home-outline"
              size={size}
            />
          )
        ),
        title: 'home',
      }}
    />
    <Tab.Screen
      component={CreateGalerie}
      name='createGalerie'
      options={{
        tabBarIcon: ({
          focused,
          size,
        }) => (
          focused ? (
            <MaterialIcons
              color={theme.color.primary}
              name="add-circle"
              size={size}
            />
          ) : (
            <MaterialIcons
              color={theme.color.primary}
              name="add-circle-outline"
              size={size}
            />
          )
        ),
        title: 'new galerie',
      }}
    />
    <Tab.Screen
      component={Notification}
      name='notification'
      options={{
        tabBarIcon: ({
          focused,
          size,
        }) => (
          focused ? (
            <AntDesign
              color={theme.color.primary}
              name="heart"
              size={size}
            />
          ) : (
            <AntDesign
              color={theme.color.primary}
              name="hearto"
              size={size}
            />
          )
        ),
        title: 'notification',
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: theme.color.secondary,
    height: 60,
  },
});

export default DesktopTab;
