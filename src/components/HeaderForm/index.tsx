import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import * as React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

import AppText from '#components/AppText';

import theme from '#helpers/theme';

type Variant = 'danger' | 'primary';

interface HeaderLoggerI {
  title: string;
  variant?: Variant;
}

interface StyleSheetI {
  variant: Variant;
}

const convertBackgroundColor = (variant: Variant) => {
  switch (variant) {
    case 'danger':
      return theme.color.danger;
    case 'primary':
      return theme.color.primary;
    default:
      return theme.color.secondary;
  }
};

const HeaderLogger = ({
  title,
  variant = 'primary',
}: HeaderLoggerI) => {
  const navigation = useNavigation();
  return (
    <View
      style={styles({
        variant,
      }).container}
    >
      <TouchableOpacity
        activeOpacity={theme.touchableOpacity.defaultOpacity}
        onPress={() => navigation.goBack()}
        style={styles({
          variant,
        }).iconContainer}
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
};

const styles = ({
  variant,
}: StyleSheetI) => StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: convertBackgroundColor(variant),
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
