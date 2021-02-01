import * as React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

type Color = 'primary' | 'secondary' | 'black' | 'white';
type FontFamily = 'bold' | 'oblique' | 'roman';

interface LoaderI {
  children: string | string[];
  color?: Color;
  fontFamily?: FontFamily
  fontSize?: number;
}

interface StyleSheetI {
  color: Color;
  fontFamily: FontFamily
  fontSize: number;
}

const convertFontFamily = (fontFamily: FontFamily) => {
  switch (fontFamily) {
    case 'bold':
      return 'HelveticaLTStd-Bold';
    case 'oblique':
      return 'HelveticaLTStd-Obl';
    case 'roman':
      return 'HelveticaLTStd-Roman';
    default:
      return 'HelveticaLTStd-Obl';
  }
};

const converColor = (color: Color) => {
  switch (color) {
    case 'primary':
      return '#7483FF';
    case 'secondary':
      return '#FFFFF4';
    case 'black':
      return '#000';
    case 'white':
      return '#fff';
    default:
      return '#7483FF';
  }
};

const AppText: React.FC<LoaderI> = ({
  children,
  color = 'primary',
  fontFamily = 'roman',
  fontSize = 12,
}) => (
  <Text
    style={styles({
      color,
      fontFamily,
      fontSize,
    }).text}
  >
    { children }
  </Text>
);

const styles = ({
  color,
  fontFamily,
  fontSize,
}: StyleSheetI) => StyleSheet.create({
  text: {
    color: converColor(color),
    fontFamily: convertFontFamily(fontFamily),
    fontSize,
  },
});

export default AppText;
