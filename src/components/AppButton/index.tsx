import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import AppText from '#components/AppText';

import theme from '#helpers/theme';

type Align = 'center' | 'left' | 'right';
type Variant = 'danger' | 'primary' | 'secondary' | 'tertiary';

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

const convertBackgroundColor = (variant: Variant) => {
  switch (variant) {
    case 'danger':
      return theme.color.secondary;
    case 'primary':
      return theme.color.primary;
    case 'secondary':
      return theme.color.secondary;
    case 'tertiary':
      return theme.color.primary;
    default:
      return theme.color.secondary;
  }
};

const convertBorderColor = (variant: Variant) => {
  switch (variant) {
    case 'danger':
      return theme.color.danger;
    case 'primary':
      return theme.color.primary;
    case 'secondary':
      return theme.color.primary;
    case 'tertiary':
      return theme.color.secondary;
    default:
      return theme.color.primary;
  }
};

const convertTextColor = (variant: Variant) => {
  switch (variant) {
    case 'danger':
      return 'error';
    case 'primary':
      return 'secondary';
    case 'secondary':
      return 'primary';
    case 'tertiary':
      return 'secondary';
    default:
      return 'secondary';
  }
};
const Button = ({
  align = 'center',
  disabled,
  fontSize = theme.button.fontSize,
  height = theme.button.height,
  marginBottom = 0,
  onPress,
  title,
  variant = 'primary',
}: ButtonI) => (
  <TouchableOpacity
    activeOpacity={theme.touchableOpacity.defaultOpacity}
    disabled={disabled}
    onPress={onPress}
    style={
      styles({
        align,
        height,
        marginBottom,
        variant,
      }).container
    }
  >
    <AppText
      color={convertTextColor(variant)}
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
  variant,
}: StyleSheetI) => StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: convertBackgroundColor(variant),
    borderColor: convertBorderColor(variant),
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
