import { useNavigation, DrawerActions } from '@react-navigation/native';
import Constants from 'expo-constants';
import { Entypo } from '@expo/vector-icons';
import * as React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import AppText from '#components/AppText';
import logoG from '#ressources/images/logoG.png';
import theme from '#helpers/theme';

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
        style={styles.iconContainer}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Entypo
          color={theme.color.primary}
          name="menu"
          size={theme.header.iconSize}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={theme.touchableOpacity.defaultOpacity}
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
        onPress={() => navigation.navigate('desktop')}
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
    elevation: 5,
    borderBottomWidth: 2,
    borderBottomColor: theme.color.primary,
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
    right: theme.wrapper.marginHorizontal
      - (theme.header.containerIconSize - theme.header.iconSize) / 2,
    position: 'absolute',
    top: Constants.statusBarHeight
      + theme.header.paddingVertical
      + (theme.header.containerIconSize - theme.header.iconSize) / 2,
  },
});

export default Header;
