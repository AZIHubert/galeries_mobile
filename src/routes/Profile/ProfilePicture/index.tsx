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

import { setProfilePicture, deleteProfilePicture } from '#helpers/api';
import { ProfilePictureI } from '#helpers/interfaces';
import theme from '#helpers/theme';

import { AuthContext } from '#src/contexts/AuthProvider';

interface SingleProfilePictureI {
  profilePicture: ProfilePictureI;
}

interface StyleSheetI {
  current: boolean;
}

const { width } = Dimensions.get('window');

const ProfilePicture = ({
  profilePicture,
}: SingleProfilePictureI) => {
  const { setUser, user } = React.useContext(AuthContext);
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigation = useNavigation();
  const current = user ? user.currentProfilePictureId === profilePicture.id : false;
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
            try {
              const response = await setProfilePicture(profilePicture.id);
              if (response) {
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
            } catch (err) {
              setLoading(false);
              console.log(err);
            }
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
          });
        }}
        onLongPress={() => Alert.alert('Delete', 'Are you sure you want to delete this image?', [
          { text: 'no' },
          {
            text: 'yes',
            onPress: async () => {
              if (!loading) {
                setLoading(true);
                try {
                  const response = await deleteProfilePicture(profilePicture.id);
                  if (response
                    && user
                    && profilePicture.id === user.currentProfilePictureId
                  ) {
                    setUser((prevState) => {
                      if (prevState) {
                        const profilePictures = prevState.profilePictures
                          .filter((pp) => pp.id !== profilePicture.id);
                        return {
                          ...prevState,
                          currentProfilePictureId: null,
                          currentProfilePicture: null,
                          profilePictures,
                        };
                      }
                      return null;
                    });
                    setLoading(false);
                  }
                } catch (err) {
                  console.log(err);
                  setLoading(false);
                }
              }
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
