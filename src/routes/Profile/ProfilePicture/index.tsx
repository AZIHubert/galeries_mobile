import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { ProfilePictureI } from '#helpers/interfaces';
import theme from '#helpers/theme';
import { setProfilePicture, deleteProfilePicture } from '#helpers/api';
import { AuthContext } from '#src/contexts/AuthProvider';

interface SingleProfilePictureI {
  profilePicture: ProfilePictureI;
  current?: boolean;
  setProfilePictures: React.Dispatch<React.SetStateAction<ProfilePictureI[]>>;
}

interface StyleSheetI {
  current: boolean;
}

const { width } = Dimensions.get('window');

const ProfilePicture = ({
  profilePicture,
  current = false,
  setProfilePictures,
}: SingleProfilePictureI) => {
  const { setUser, user } = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigation = useNavigation();
  return (
    <View
      style={styles({
        current,
      }).container}
    >
      <TouchableOpacity
        activeOpacity={theme.touchableOpacity.defaultOpacity}
        onPress={async () => {
          if (!loading) {
            setLoading(true);
            await setProfilePicture(profilePicture.id);
            setLoading(false);
            setUser((prevState) => {
              if (prevState) {
                const remove = profilePicture.id !== prevState.currentProfilePictureId;
                return {
                  ...prevState,
                  currentProfilePictureId: remove
                    ? profilePicture.id
                    : null,
                  currentProfilePicture: remove
                    ? profilePicture
                    : null,
                };
              }
              return null;
            });
          }
        }}
        style={styles({
          current,
        }).button}
      />
      <TouchableOpacity
        activeOpacity={theme.touchableOpacity.defaultOpacity}
        onPress={() => {
          navigation.navigate('imageView', {
            profilePicture,
            setProfilePictures,
          });
        }}
        onLongPress={() => Alert.alert('Delete', 'Are you sure you want to delete this image?', [
          { text: 'no' },
          {
            text: 'yes',
            onPress: async () => {
              await deleteProfilePicture(profilePicture.id);
              if (user && profilePicture.id === user.currentProfilePictureId) {
                setUser((prevState) => {
                  if (prevState) {
                    return {
                      ...prevState,
                      currentProfilePictureId: null,
                      currentProfilePicture: null,
                    };
                  }
                  return null;
                });
              }
              setProfilePictures((prevState) => {
                const profilePictures = prevState.filter((pp) => pp.id !== profilePicture.id);
                return [...profilePictures];
              });
            },
          },

        ])}
      >
        <Image
          source={{ uri: profilePicture.cropedImage.signedUrl }}
          style={styles({
            current,
          }).image}
        />
      </TouchableOpacity>
    </View>
  );
};

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
