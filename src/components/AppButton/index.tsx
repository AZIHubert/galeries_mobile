import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import AppText from '#components/AppText';

type Align = 'left' | 'center' | 'right';

interface ButtonI {
  align?: Align;
  color?: string,
  disabled: boolean;
  onPress: () => void,
  title: string;
  variant?: 'primary' | 'secondary';
  image?: string;
}

interface StyleSheetI {
  align?: Align;
  color?: string;
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

const convertColor = (color?: string) => (color || '#7483FF');

const Button = ({
  align = 'center',
  color,
  disabled,
  onPress,
  title,
  variant = 'primary',
}: ButtonI) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onPress}
    activeOpacity={0.8}
    style={
      styles({
        align,
        color,
        variant,
      }).container
    }
  >
    <AppText
      color={variant === 'primary' ? 'secondary' : 'primary'}
      fontSize={20}
    >
      {title}
    </AppText>
  </TouchableOpacity>
);

const styles = ({
  align,
  color,
  variant,
}: StyleSheetI) => StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: variant === 'primary' ? convertColor(color) : '#FFFFF4',
    borderColor: convertColor(color),
    borderRadius: 8,
    borderWidth: 2,
    elevation: 2,
    flexDirection: 'row',
    height: 45,
    justifyContent: convertAlign(align),
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
});

export default Button;
