import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import AppText from '#components/AppText';
import theme from '#helpers/theme';

type Align = 'left' | 'center' | 'right';

interface ButtonI {
  align?: Align;
  color?: string,
  disabled: boolean;
  fontSize?: number;
  height?: number;
  marginBottom?: number;
  onPress: () => void,
  title: string;
  variant?: 'primary' | 'secondary';
}

interface StyleSheetI {
  align: Align;
  color?: string;
  height: number;
  marginBottom: number;
  variant?: 'primary' | 'secondary';
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

const convertColor = (color?: string) => (color || theme.color.primary);

const Button = ({
  align = 'center',
  color,
  disabled,
  fontSize = theme.button.fontSize,
  height = theme.button.height,
  marginBottom = 0,
  onPress,
  title,
  variant = 'primary',
}: ButtonI) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onPress}
    activeOpacity={theme.button.activeOpacity}
    style={
      styles({
        align,
        color,
        height,
        marginBottom,
        variant,
      }).container
    }
  >
    <AppText
      color={variant === 'primary' ? 'secondary' : 'primary'}
      fontSize={fontSize}
    >
      {title}
    </AppText>
  </TouchableOpacity>
);

const styles = ({
  align,
  color,
  height,
  marginBottom,
  variant,
}: StyleSheetI) => StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: variant === 'primary' ? convertColor(color) : theme.color.secondary,
    borderColor: convertColor(color),
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
