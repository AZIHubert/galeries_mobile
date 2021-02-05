import * as React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import theme from '#helpers/theme';

type Color = 'black' | 'error' | 'primary' | 'secondary' | 'white';
type FontFamily = 'bold' | 'oblique' | 'roman';
type TextAlign = 'auto' | 'center' | 'justify' | 'left' | 'right';
type TextTransform = 'capitalize' | 'lowercase' | 'none' | 'uppercase';

interface LoaderI {
  children: string | string[];
  color?: Color;
  fontFamily?: FontFamily
  fontSize?: number;
  textAlign?: TextAlign;
  textTransform?: TextTransform;
}

interface StyleSheetI {
  color: Color;
  fontFamily: FontFamily
  fontSize: number;
  textAlign: TextAlign;
  textTransform: TextTransform;
}

const convertFontFamily = (fontFamily: FontFamily) => {
  switch (fontFamily) {
    case 'bold':
      return theme.fonts.helvetica.bold;
    case 'oblique':
      return theme.fonts.helvetica.oblique;
    case 'roman':
      return theme.fonts.helvetica.roman;
    default:
      return theme.fonts.helvetica.roman;
  }
};

const converColor = (color: Color) => {
  switch (color) {
    case 'black':
      return theme.color.black;
    case 'error':
      return theme.color.error;
    case 'primary':
      return theme.color.primary;
    case 'secondary':
      return theme.color.secondary;
    case 'white':
      return theme.color.white;
    default:
      return theme.color.black;
  }
};

const AppText: React.FC<LoaderI> = ({
  children,
  color = 'primary',
  fontFamily = 'roman',
  fontSize = theme.text.fontSize,
  textAlign = 'auto',
  textTransform = 'none',
}) => (
  <Text
    style={styles({
      color,
      fontFamily,
      fontSize,
      textAlign,
      textTransform,
    }).text}
  >
    { children }
  </Text>
);

const styles = ({
  color,
  fontFamily,
  fontSize,
  textAlign,
  textTransform,
}: StyleSheetI) => StyleSheet.create({
  text: {
    color: converColor(color),
    fontFamily: convertFontFamily(fontFamily),
    fontSize,
    textTransform,
    textAlign,
  },
});

export default AppText;
