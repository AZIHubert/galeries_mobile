import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

import AppText from '#components/AppText';
import theme from '#helpers/theme';

interface HeaderLoggerI {
  title: string;
}

const HeaderLogger = ({
  title,
}: HeaderLoggerI) => (
  <View
    style={styles.container}
  >
    <TouchableOpacity
      activeOpacity={theme.touchableOpacity.defaultOpacity}
      style={styles.iconContainer}
    >
      <AntDesign
        color={theme.color.secondary}
        name="arrowleft"
        size={theme.headerForm.iconSize}
      />
    </TouchableOpacity>
    <AppText
      color='secondary'
      fontSize={25}
      textTransform='capitalize'
    >
      {title}
    </AppText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.color.primary,
    paddingBottom: theme.headerForm.paddingVertical,
    paddingTop: Constants.statusBarHeight + theme.headerForm.paddingVertical,
  },
  iconContainer: {
    alignItems: 'center',
    borderRadius: theme.headerForm.containerIconSize / 2,
    height: theme.headerForm.containerIconSize,
    justifyContent: 'center',
    left: theme.wrapper.marginHorizontal
      - (theme.headerForm.containerIconSize - theme.headerForm.iconSize) / 2,
    position: 'absolute',
    top: Constants.statusBarHeight
      + theme.headerForm.paddingVertical
      - (theme.headerForm.containerIconSize - theme.headerForm.iconSize) / 2,
    width: theme.headerForm.containerIconSize,
  },
});

export default HeaderLogger;
