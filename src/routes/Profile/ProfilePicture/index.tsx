import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import theme from '#helpers/theme';

import {
  deleteProfilePicture,
  putProfilePicture,
} from '#store/actions';
import {
  loadingSelector,
  userSelector,
} from '#store/selectors';

interface SingleProfilePictureI {
  profilePicture: ProfilePictureI;
  id: string;
}

interface StyleSheetI {
  current: boolean;
}

const { width } = Dimensions.get('window');

const ProfilePicture = ({
  profilePicture,
  id,
}: SingleProfilePictureI) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const loading = useSelector(loadingSelector);
  const user = useSelector(userSelector);

  const current = user ? user.currentProfilePictureId === id : false;

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
            dispatch(
              putProfilePicture({ id }),
            );
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
            profilePicture: {
              ...profilePicture,
              id,
            },
          });
        }}
        onLongPress={() => Alert.alert(
          'Delete',
          'Are you sure you want to delete this image?',
          [
            { text: 'no' },
            {
              text: 'yes',
              onPress: async () => {
                if (!loading) {
                  dispatch(
                    deleteProfilePicture({ id }),
                  );
                }
              },
            },

          ],
        )}
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
