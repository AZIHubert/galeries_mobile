import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';

import theme from '#helpers/theme';
import defaultProfilePicture from '#ressources/images/defaultProfilePicture.png';

const ProfilePicture = () => (
  <LinearGradient
    colors={[theme.color.tertiary, theme.color.primary]}
    end={[1, 1]}
    start={[0, 0]}
    style={styles.linearGradient}
  >
    <View
      style={styles.imageContainer}
    >
      <Image
        resizeMode='contain'
        source={defaultProfilePicture}
        style={styles.image}
      />
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  image: {
    height: 120 - 6,
    width: 120 - 6,
  },
  imageContainer: {
    alignItems: 'center',
    borderRadius: 60,
    elevation: 6,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  linearGradient: {
    alignItems: 'center',
    borderRadius: 63,
    height: 120,
    justifyContent: 'center',
    marginBottom: 15,
    width: 120,
  },
});

export default ProfilePicture;
