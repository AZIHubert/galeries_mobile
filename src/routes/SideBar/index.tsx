import * as React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import AppText from '#components/AppText';
import Screen from '#components/Screen';
import Wrapper from '#components/Wrapper';

import InformationButton from './InformationButton';
import Logo from './Logo';
import LogoutButton from './LogoutButton';
import ProfileButton from './ProfileButton';
import TicketButton from './TicketButton';

const SideBar = () => (
  <Screen>
    <Wrapper
      marginTop={70}
    >
      <View
        style={styles.container}
      >
        <View>
          <Logo />
          <ProfileButton />
          <InformationButton />
          <TicketButton />
          <LogoutButton />
        </View>
        <View
          style={styles.copywriteContainer}
        >
          <AppText
            color='black'
            fontSize={10}
          >
            Allan Aoudji @2020
          </AppText>
        </View>
      </View>
    </Wrapper>
  </Screen>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  copywriteContainer: {
    marginBottom: 20,
    marginLeft: 80,
  },
});

export default SideBar;
