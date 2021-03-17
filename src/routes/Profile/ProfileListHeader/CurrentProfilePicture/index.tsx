import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import {
  useSelector,
} from 'react-redux';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';

import theme from '#helpers/theme';

import {
  profilePictureCurrentSelector,
} from '#store/selectors';

import defaultProfilePicture from '#ressources/images/defaultProfilePicture.png';

const ProfilePicture = () => {
  const { croped } = useSelector(profilePictureCurrentSelector);

  const uri = () => {
    if (typeof croped === 'string') {
      if (croped !== '') {
        return { uri: croped };
      }
      return defaultProfilePicture;
    }
    return croped;
  };

  return (
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
          resizeMode='cover'
          source={uri()}
          style={styles.image}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 126 - 6,
    width: 126 - 6,
  },
  imageContainer: {
    alignItems: 'center',
    borderRadius: 60,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  linearGradient: {
    alignItems: 'center',
    borderRadius: 63,
    height: 126,
    justifyContent: 'center',
    marginBottom: 45,
    width: 126,
  },
});

export default ProfilePicture;
