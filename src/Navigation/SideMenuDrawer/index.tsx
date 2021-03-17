import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { useSelector } from 'react-redux';

import SendTicket from '#routes/SendTicket';
import Sidebar from '#routes/SideBar';

import DesktopTab from '#src/Navigation/DesktopTab';
import EditStack from '#src/Navigation/EditStack';
import ProfileStack from '#src/Navigation/ProfileStack';

import { userSelector } from '#store/selectors';

const Drawer = createDrawerNavigator<navigation.SideMenuParamList>();

const SideMenuDrawer = ({
  navigation,
}: navigation.HomeNavProps<'sideMenu'>) => {
  const user = useSelector(userSelector);

  React.useEffect(() => {
    if (!user) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'home' }],
      });
    }
  }, [user]);

  return (
    <Drawer.Navigator
      drawerContent={() => <Sidebar />}
      initialRouteName='desktop'
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
};

export default SideMenuDrawer;
