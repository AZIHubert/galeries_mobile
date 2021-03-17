import { useNavigation } from '@react-navigation/native';
import * as Picker from 'expo-image-picker';
import * as React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import AppButton from '#components/AppButton';
import AppText from '#components/AppText';
import Wrapper from '#components/Wrapper';

import theme from '#helpers/theme';

import {
  postProfilePicture,
  setNotification,
} from '#store/actions';
import {
  userSelector,
} from '#store/selectors';

import CurrentProfilePicture from './CurrentProfilePicture';

const ProfileListHeader = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector(userSelector);

  const selectImage = async () => {
    try {
      const result = await Picker.launchImageLibraryAsync({
        mediaTypes: Picker.MediaTypeOptions.Images,
        quality: 1,
      });
      if (result.cancelled) {
        return;
      }
      const localUri = result.uri;
      const filename = localUri.split('/').pop() || 'filename';
      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : 'image';
      const formData = new FormData();
      formData.append('image', {
        uri: localUri,
        name: filename,
        type,
      });
      setProfilePicture(formData);
    } catch (err) {
      dispatch(
        setNotification({
          error: true,
          text: 'Error reading image',
        }),
      );
    }
  };

  const setProfilePicture = (uri: FormData) => {
    dispatch(
      postProfilePicture(uri),
    );
  };

  const takeImage = async () => {
    try {
      const result = await Picker.launchCameraAsync();
      if (result.cancelled) {
        return;
      }
      const localUri = result.uri;
      const filename = localUri.split('/').pop() || 'filename';
      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : 'image';
      const formData = new FormData();
      formData.append('image', {
        uri: localUri,
        name: filename,
        type,
      });
      setProfilePicture(formData);
    } catch (err) {
      dispatch(
        setNotification({
          error: true,
          text: 'Error reading image',
        }),
      );
    }
  };

  return (
    <Wrapper
      marginTop={50}
    >
      <TouchableWithoutFeedback>
        <View>
          <View
            style={styles.container}
          >
            <CurrentProfilePicture />
            <AppText
              fontFamily='bold'
              fontSize={20}
            >
              {user ? user.pseudonym : 'pseudonym'}
            </AppText>
            <AppText
              color='black'
              fontFamily='bold'
              fontSize={18}
            >
              {user ? user.userName : '@userName'}
            </AppText>
            <View
              style={styles.separator}
            />
          </View>

          <AppButton
            disabled={false}
            height={32}
            marginBottom={10}
            onPress={() => selectImage()}
            title='Add a profile picture'
          />
          <AppButton
            disabled={false}
            height={32}
            marginBottom={25}
            onPress={() => takeImage()}
            title='Take a picture'
          />
          <AppButton
            disabled={false}
            height={32}
            marginBottom={50}
            onPress={() => {
              navigation.navigate('editInformation');
            }}
            title='Edit your info'
            variant='secondary'
          />
        </View>
      </TouchableWithoutFeedback>
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
    height: 2,
    marginBottom: 75,
    marginTop: 20,
    width: 45,
  },
});

export default ProfileListHeader;
