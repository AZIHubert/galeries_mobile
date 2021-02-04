import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';

import SendTicket from '#routes/SendTicket';
import Sidebar from '#routes/SideBar';

import DesktopTab from '#src/Navigation/DesktopTab';
import EditStack from '#src/Navigation/EditStack';
import ProfileStack from '#src/Navigation/ProfileStack';

const Drawer = createDrawerNavigator();

const SideMenuDrawer = () => (
  <Drawer.Navigator
    initialRouteName='desktop'
    drawerContent={() => <Sidebar />}
  >
    <Drawer.Screen
      component={DesktopTab}
      name='desktop'
    />
    <Drawer.Screen
      component={ProfileStack}
      name='profileStack'
    />
    <Drawer.Screen
      component={EditStack}
      name='editInformation'
    />
    <Drawer.Screen
      component={SendTicket}
      name='sendTicket'
    />
  </Drawer.Navigator>
);

export default SideMenuDrawer;
