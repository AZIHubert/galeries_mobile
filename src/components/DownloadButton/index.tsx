import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import AppText from '#components/AppText';
import theme from '#helpers/theme';

interface ButtonI {
  disabled: boolean;
}

const Button = ({
  disabled,
}: ButtonI) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={() => {}}
    activeOpacity={theme.touchableOpacity.defaultOpacity}
    style={ styles.container }
  >
    <AppText
      color={'primary'}
      fontSize={theme.button.fontSize}
    >
      download image
    </AppText>
    <MaterialCommunityIcons
      color={theme.color.primary}
      name="download"
      size={20}
      style={styles.icon}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.color.secondary,
    borderRadius: theme.button.borderRadius,
    elevation: theme.button.elevation,
    flexDirection: 'row',
    height: theme.button.height,
    justifyContent: 'center',
    paddingHorizontal: theme.button.paddingHorizontal,
    paddingVertical: theme.button.paddingHorizontal,
  },
  icon: {
    marginLeft: 10,
  },
});

export default Button;
