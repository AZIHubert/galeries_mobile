import Constants from 'expo-constants';
import { Entypo } from '@expo/vector-icons';
import * as React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import logoG from '#ressources/images/logoG.png';
import theme from '#helpers/theme';

const Header = () => (
  <View
    style={styles.container}
  >
    <TouchableOpacity
      style={styles.menuContainer}
    >
      <Entypo
        color={theme.color.black}
        name="menu"
        size={theme.header.iconSize}
      />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image
        resizeMode='contain'
        source={logoG}
        style={styles.image}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.color.secondary,
    elevation: 5,
    borderBottomWidth: 2,
    borderBottomColor: theme.color.primary,
    paddingBottom: theme.header.paddingVertical,
    paddingTop: Constants.statusBarHeight + theme.header.paddingVertical,
  },
  image: {
    width: 30,
  },
  menuContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40 / 2,
    position: 'absolute',
    top: Constants.statusBarHeight + theme.header.paddingVertical,
    left: theme.wrapper.marginHorizontal,
  },
});

export default Header;
