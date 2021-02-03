import * as React from 'react';
import {
  Alert,
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { ProfilePictureI } from '#helpers/interfaces';
import theme from '#helpers/theme';

interface SingleProfilePictureI {
  id: number;
  current?: boolean;
  source: ImageSourcePropType;
  setProfilePictures: React.Dispatch<React.SetStateAction<ProfilePictureI[]>>;
}

interface StyleSheetI {
  current: boolean;
}

const { width } = Dimensions.get('window');

const ProfilePicture = ({
  source,
  current = false,
  id,
  setProfilePictures,
}: SingleProfilePictureI) => (
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
      onLongPress={() => Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        {
          text: 'yes',
          onPress: () => setProfilePictures((prevState) => {
            const profilePictures = prevState.filter((pp) => pp.id !== id);
            return [...profilePictures];
          }),
        },
        { text: 'no' },
      ])}
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
