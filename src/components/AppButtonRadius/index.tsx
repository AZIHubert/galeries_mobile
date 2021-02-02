import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import AppText from '#components/AppText';
import theme from '#helpers/theme';

type Align = 'left' | 'center' | 'right';
type Variant = 'primary' | 'secondary';

interface ButtonI {
  align?: Align;
  disabled: boolean;
  fontSize?: number;
  height?: number;
  marginBottom?: number;
  onPress: () => void,
  title: string;
  variant?: Variant;
}

interface StyleSheetI {
  align: Align;
  height: number;
  marginBottom: number;
}

const convertAlign = (align?: Align) => {
  switch (align) {
    case 'center':
      return 'center';
    case 'left':
      return 'flex-start';
    case 'right':
      return 'flex-end';
    default:
      return 'center';
  }
};

const Button = ({
  align = 'center',
  disabled,
  height = theme.button.height,
  fontSize = theme.button.fontSize,
  marginBottom = 0,
  onPress,
  title,
  variant = 'primary',
}: ButtonI) => (
  <TouchableOpacity
    activeOpacity={theme.touchableOpacity.defaultOpacity}
    disabled={disabled}
    onPress={onPress}
    style={styles({
      align,
      height,
      marginBottom,
    }).container}
  >
    <LinearGradient
      colors={variant === 'primary'
        ? [theme.color.tertiary, theme.color.primary]
        : [theme.color.primary, theme.color.tertiary]}
      end={[1, 1]}
      start={[0, 0]}
      style={styles({
        align,
        height,
        marginBottom,
      }).gradient}
    >
      <AppText
        color='secondary'
        fontSize={fontSize}
      >
        {title}
      </AppText>
    </LinearGradient>
  </TouchableOpacity>
);

const styles = ({
  align,
  height,
  marginBottom,
}: StyleSheetI) => StyleSheet.create({
  gradient: {
    alignItems: convertAlign(align),
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: theme.button.paddingHorizontal,
    paddingVertical: theme.button.paddingVertical,
  },
  container: {
    borderRadius: theme.button.borderRadius,
    elevation: theme.button.elevation,
    height,
    marginBottom,
    overflow: 'hidden',
  },
});

export default Button;
