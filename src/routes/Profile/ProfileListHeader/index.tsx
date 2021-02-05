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
import { ProfilePictureI } from '#helpers/interfaces';
import theme from '#helpers/theme';

import CurrentProfilePicture from './CurrentProfilePicture';
import { AuthContext } from '#src/contexts/AuthProvider';
import { postProfilePicture } from '#helpers/api';

interface ProfileListHeaderi {
  setProfilePictures: React.Dispatch<React.SetStateAction<ProfilePictureI[]>>;
}

const ProfileListHeader = ({
  setProfilePictures,
}: ProfileListHeaderi) => {
  const { user, setUser } = React.useContext(AuthContext);
  const navigation = useNavigation();
  const selectImage = async () => {
    try {
      const result = await Picker.launchImageLibraryAsync({
        quality: 1,
      });
      if (!result.cancelled) {
        const response = await postProfilePicture(result.uri);
        setProfilePictures((prevData) => [
          response.data,
          ...prevData,
        ]);
        setUser((prevState) => {
          if (prevState) {
            return {
              ...prevState,
              currentProfilePictureId: response.data.id,
              currentProfilePicture: response.data,
            };
          }
          return null;
        });
      }
    } catch (err) {
      console.log('Error reading image', err);
    }
  };
  const takeImage = async () => {
    try {
      const result = await Picker.launchCameraAsync();
      if (!result.cancelled) {
        const response = await postProfilePicture(result.uri);
        setProfilePictures((prevData) => [
          response.data,
          ...prevData,
        ]);
        setUser((prevState) => {
          if (prevState) {
            return {
              ...prevState,
              currentProfilePictureId: response.data.id,
              currentProfilePicture: response.data,
            };
          }
          return null;
        });
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
        onPress={selectImage}
        title='Add a profile picture'
      />
      <AppButton
        disabled={false}
        height={35}
        marginBottom={32}
        onPress={takeImage}
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
