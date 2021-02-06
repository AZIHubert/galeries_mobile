import { useNavigation } from '@react-navigation/native';
import * as Picker from 'expo-image-picker';
import * as React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import AppButton from '#components/AppButton';
import AppText from '#components/AppText';
import Wrapper from '#components/Wrapper';

import { postProfilePicture } from '#helpers/api';
import theme from '#helpers/theme';

import { AuthContext } from '#src/contexts/AuthProvider';

import CurrentProfilePicture from './CurrentProfilePicture';

const ProfileListHeader = () => {
  const { setUser, user } = React.useContext(AuthContext);
  const navigation = useNavigation();
  const selectImage = async () => {
    try {
      const result = await Picker.launchImageLibraryAsync({
        mediaTypes: Picker.MediaTypeOptions.Images,
        quality: 1,
      });
      if (!result.cancelled) {
        await setProfilePicture(result.uri);
      }
    } catch (err) {
      console.log('Error reading image', err);
    }
  };
  const setProfilePicture = async (uri: string) => {
    try {
      const response = await postProfilePicture(uri);
      if (response) {
        setUser((prevState) => {
          if (prevState) {
            return {
              ...prevState,
              currentProfilePictureId: response.data.id,
              currentProfilePicture: response.data,
              profilePictures: [
                response.data,
                ...prevState.profilePictures,
              ],
            };
          }
          return null;
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const takeImage = async () => {
    try {
      const result = await Picker.launchCameraAsync();
      if (!result.cancelled) {
        setProfilePicture(result.uri);
      }
    } catch (err) {
      console.log('Error reading image', err);
    }
  };
  return (
    <Wrapper
      marginTop={50}
    >
      <View
        style={styles.container}
      >
        <CurrentProfilePicture />
        <AppText
          fontFamily='bold'
          fontSize={18}
        >
          {user ? user.userName : 'user name'}
        </AppText>
        <View
          style={styles.separator}
        />
      </View>
      <AppButton
        disabled={false}
        height={35}
        marginBottom={16}
        onPress={() => selectImage()}
        title='Add a profile picture'
      />
      <AppButton
        disabled={false}
        height={35}
        marginBottom={32}
        onPress={() => takeImage()}
        title='Take a picture'
      />
      <AppButton
        disabled={false}
        height={35}
        marginBottom={40}
        onPress={() => {
          navigation.navigate('editInformation');
        }}
        title='Edit your info'
        variant='secondary'
      />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  separator: {
    backgroundColor: theme.color.primary,
    borderRadius: 1.5,
    height: 3,
    marginBottom: 75,
    marginTop: 20,
    width: 45,
  },
});

export default ProfileListHeader;
