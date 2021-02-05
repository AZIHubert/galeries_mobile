import { Entypo } from '@expo/vector-icons';
import {
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';
import Constants from 'expo-constants';
import * as React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import AppText from '#components/AppText';

import theme from '#helpers/theme';

import logoG from '#ressources/images/logoG.png';

interface HeaderI {
  returnButton?: boolean;
}

const Header = ({
  returnButton = false,
}: HeaderI) => {
  const navigation = useNavigation();
  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity
        activeOpacity={theme.touchableOpacity.defaultOpacity}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        style={styles.iconContainer}
      >
        <Entypo
          color={theme.color.primary}
          name="menu"
          size={theme.header.iconSize}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={theme.touchableOpacity.defaultOpacity}
        onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: 'desktop' }],
        })}
      >
        <Image
          resizeMode='contain'
          source={logoG}
          style={styles.image}
        />
      </TouchableOpacity>
      {returnButton && <TouchableOpacity
        activeOpacity={theme.touchableOpacity.defaultOpacity}
        style={styles.returnContainer}
        onPress={() => navigation.goBack()}
      >
        <AppText
          fontSize={20}
        >
          return
        </AppText>
      </TouchableOpacity>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.color.secondary,
    borderBottomColor: theme.color.primary,
    borderBottomWidth: 2,
    elevation: 5,
    paddingBottom: theme.header.paddingVertical,
    paddingTop: Constants.statusBarHeight + theme.header.paddingVertical,
  },
  image: {
    width: 30,
  },
  iconContainer: {
    alignItems: 'center',
    borderRadius: theme.header.containerIconSize / 2,
    height: theme.header.containerIconSize,
    justifyContent: 'center',
    left: theme.wrapper.marginHorizontal
      - (theme.header.containerIconSize - theme.header.iconSize) / 2,
    position: 'absolute',
    top: Constants.statusBarHeight
      + theme.header.paddingVertical
      + (theme.header.containerIconSize - theme.header.iconSize) / 2,
    width: theme.header.containerIconSize,
  },
  returnContainer: {
    alignItems: 'center',
    borderRadius: theme.header.containerIconSize / 2,
    height: theme.header.containerIconSize,
    justifyContent: 'center',
    position: 'absolute',
    right: theme.wrapper.marginHorizontal
      - (theme.header.containerIconSize - theme.header.iconSize) / 2,
    top: Constants.statusBarHeight
      + theme.header.paddingVertical
      + (theme.header.containerIconSize - theme.header.iconSize) / 2,
  },
});

export default Header;
