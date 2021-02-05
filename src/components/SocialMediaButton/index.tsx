import * as React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import AppText from '#components/AppText';

import theme from '#helpers/theme';

import logoFacebook from '#ressources/images/logoFacebook.png';
import logoGoogle from '#ressources/images/logoGoogle.png';

type Variant = 'facebook' | 'google'

interface ButtonI {
  disabled: boolean;
  marginBottom?: number;
  onPress: () => void,
  variant?: Variant;
}

interface StyleSheetI {
  marginBottom: number;
  variant: Variant;
}

const Button = ({
  disabled,
  marginBottom = 0,
  onPress,
  variant = 'facebook',
}: ButtonI) => (
  <TouchableOpacity
    activeOpacity={theme.touchableOpacity.defaultOpacity}
    disabled={disabled}
    onPress={onPress}
    style={styles({
      marginBottom,
      variant,
    }).container}
  >
    <View
      style={variant === 'facebook' ? styles({
        marginBottom,
        variant,
      }).imageContainer : null}
    >
      <Image
        resizeMode='contain'
        source={variant === 'facebook' ? logoFacebook : logoGoogle }
        style={styles({
          marginBottom,
          variant,
        }).image}
      />
    </View>
    <AppText
      color={ variant === 'facebook' ? 'white' : 'black'}
      fontSize={20}
    >
      continue with { variant === 'facebook' ? 'Facebook' : 'Google'}
    </AppText>
  </TouchableOpacity>
);

const styles = ({ marginBottom, variant }: StyleSheetI) => StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: variant === 'facebook' ? theme.color.facebook : theme.color.white,
    borderColor: variant === 'facebook' ? theme.color.facebook : theme.color.white,
    borderRadius: theme.button.borderRadius,
    borderWidth: theme.button.borderWidth,
    elevation: theme.button.elevation,
    flexDirection: 'row',
    height: theme.button.height,
    justifyContent: 'space-between',
    marginBottom,
    paddingHorizontal: 20,
  },
  image: {
    height: '80%',
  },
  imageContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
});

export default Button;
