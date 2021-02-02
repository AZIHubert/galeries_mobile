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
    <TouchableOpacity style={{
      width: 40,
      height: 40,
      position: 'absolute',
      top: Constants.statusBarHeight + theme.header.paddingVertical - (40 - 25) / 2,
      left: theme.wrapper.marginHorizontal,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 40 / 2,
    }}>
      <AntDesign
        name="arrowleft"
        size={theme.header.iconSize}
        color={theme.color.secondary}
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
    paddingBottom: theme.header.paddingVertical,
    paddingTop: Constants.statusBarHeight + theme.header.paddingVertical,
  },
});

export default HeaderLogger;
