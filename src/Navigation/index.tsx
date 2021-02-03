import {
  AntDesign,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';

import Profile from '#routes/Profile';
import Notification from '#routes/Notification';
import Landing from '#routes/Landing';
import Home from '#routes/Home';
import Login from '#routes/Login';
import Signin from '#routes/Signin';
import CreateGalerie from '#routes/CreateGalerie';
import theme from '#helpers/theme';
import Sidebar from '#routes/SideBar';
import EditInformation from '#routes/EditInformation';
import SendTicket from '#routes/SendTicket';
import ImageView from '#routes/ImageView';
import DeleteAccount from '#routes/DeleteAccount';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const SideMenu = () => (
  <Drawer.Navigator
    drawerContent={() => <Sidebar />}
  >
    <Drawer.Screen name='desktop' component={Desktop} />
    <Drawer.Screen name='profile' component={ProfileNavigator} />
    <Drawer.Screen name='editinformation' component={EditNavigator} />
    <Drawer.Screen name='sendticket' component={SendTicket} />
  </Drawer.Navigator>
);

const ProfileNavigator = () => (
  <Stack.Navigator
    initialRouteName='profile'
    screenOptions={{
      headerShown: false,
    }}
    mode='modal'
  >
    <Stack.Screen name='profile' component={Profile} />
    <Stack.Screen name='Imageviewprofilepicture' component={ImageView} />
  </Stack.Navigator>
);

const EditNavigator = () => (
  <Stack.Navigator
    initialRouteName='profile'
    screenOptions={{
      headerShown: false,
    }}
    mode='modal'
  >
    <Stack.Screen name='editinformation' component={EditInformation} />
    <Stack.Screen name='deleteaccount' component={DeleteAccount} />
  </Stack.Navigator>
);

const Logger = () => (
  <Stack.Navigator
    initialRouteName='home'
    screenOptions={{
      headerShown: false,
    }}
    mode='modal'
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
      name='login'
      component={Login}
    />
    <Stack.Screen
      name='sidemenu'
      component={SideMenu}
    />
  </Stack.Navigator>
);

const Desktop = () => (
  <Tab.Navigator
    tabBarOptions={{
      inactiveTintColor: theme.color.primary,
      activeTintColor: theme.color.primary,
      style: {
        height: 60,
        backgroundColor: theme.color.secondary,
      },
    }}
  >
    <Tab.Screen
      component={Landing}
      name='landing'
      options={{
        title: 'home',
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
      }}
    />
    <Tab.Screen
      component={CreateGalerie}
      name='createGalerie'
      options={{
        title: 'new galerie',
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
      }}
    />
    <Tab.Screen
      component={Notification}
      name='notification'
      options={{
        title: 'notification',
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
      }}
    />
  </Tab.Navigator>
);

const Navigation = () => (
  <NavigationContainer>
    <Logger />
  </NavigationContainer>
);

export default Navigation;
