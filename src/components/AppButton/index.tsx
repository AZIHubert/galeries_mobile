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
  reverse?: boolean;
  title: string;
  variant?: Variant;
}

interface StyleSheetI {
  align: Align;
  height: number;
  marginBottom: number;
  reverse: boolean;
  variant: Variant;
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

const convertBackgroundColor = (variant: Variant, reverse: boolean) => {
  if (reverse) return variant === 'primary' ? theme.color.secondary : theme.color.primary;
  return variant === 'primary' ? theme.color.primary : theme.color.secondary;
};

const convertBorderColor = (reverse: boolean) => {
  if (reverse) return theme.color.secondary;
  return theme.color.primary;
};

const convertTextColor = (variant: Variant, reverse?: boolean) => {
  if (reverse) return variant === 'primary' ? 'primary' : 'secondary';
  return variant === 'primary' ? 'secondary' : 'primary';
};

const Button = ({
  align = 'center',
  disabled,
  fontSize = theme.button.fontSize,
  height = theme.button.height,
  marginBottom = 0,
  onPress,
  reverse = false,
  title,
  variant = 'primary',
}: ButtonI) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onPress}
    activeOpacity={theme.touchableOpacity.defaultOpacity}
    style={
      styles({
        align,
        height,
        marginBottom,
        reverse,
        variant,
      }).container
    }
  >
    <AppText
      color={convertTextColor(variant, reverse)}
      fontSize={fontSize}
    >
      {title}
    </AppText>
  </TouchableOpacity>
);

const styles = ({
  align,
  height,
  marginBottom,
  reverse,
  variant,
}: StyleSheetI) => StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: convertBackgroundColor(variant, reverse),
    borderColor: convertBorderColor(reverse),
    borderRadius: theme.button.borderRadius,
    borderWidth: theme.button.borderWidth,
    elevation: theme.button.elevation,
    flexDirection: 'row',
    height,
    justifyContent: convertAlign(align),
    marginBottom,
    paddingHorizontal: theme.button.paddingHorizontal,
    paddingVertical: theme.button.paddingHorizontal,
  },
});

export default Button;
