import * as React from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import theme from '#helpers/theme';

interface ProfilePictureI {
  current?: boolean;
  source: ImageSourcePropType;
}

interface StyleSheetI {
  current: boolean;
}

const { width } = Dimensions.get('window');

const ProfilePicture = ({
  source,
  current = false,
}: ProfilePictureI) => (
  <View
    style={styles({
      current,
    }).container}
  >
    <TouchableOpacity
      activeOpacity={theme.touchableOpacity.defaultOpacity}
      style={styles({
        current,
      }).button}
    />
    <TouchableOpacity
      activeOpacity={theme.touchableOpacity.defaultOpacity}
    >
      <Image
        source={source}
        style={styles({
          current,
        }).image}
      />
    </TouchableOpacity>
  </View>
);

const styles = ({
  current,
}: StyleSheetI) => StyleSheet.create({
  button: {
    backgroundColor: current ? theme.color.tertiary : theme.color.secondary,
    borderRadius: 17,
    bottom: 10,
    elevation: 4,
    height: 34,
    left: 10,
    position: 'absolute',
    width: 34,
    zIndex: 1,
  },
  container: {
    elevation: 4,
    height: width * 0.49,
    marginBottom: '2%',
    width: width * 0.49,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

export default ProfilePicture;
