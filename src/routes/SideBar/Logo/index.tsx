import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';

import galeriesLogo from '#ressources/images/logoGaleries.png';

const Logo = () => (
  <View
    style={styles.logoContainer}
  >
    <Image
      resizeMode='contain'
      source={galeriesLogo}
      style={styles.logo}
    />
  </View>
);

const styles = StyleSheet.create({
  logo: {
    width: 180,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default Logo;
