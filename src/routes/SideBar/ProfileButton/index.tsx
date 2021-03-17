import {
  useNavigation,
} from '@react-navigation/native';
import * as React from 'react';
import {
  useSelector,
} from 'react-redux';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import AppText from '#components/AppText';

import theme from '#helpers/theme';

import defaultProfilePicture from '#ressources/images/defaultProfilePicture.png';

import {
  profilePictureCurrentSelector,
  userSelector,
} from '#store/selectors';

const ProfileButton = () => {
  const navigation = useNavigation();
  const { croped } = useSelector(profilePictureCurrentSelector);
  const user = useSelector(userSelector);

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
    <TouchableOpacity
      activeOpacity={theme.touchableOpacity.defaultOpacity}
      onPress={() => navigation.navigate('profileStack')}
      style={styles.container}
    >
      <View
        style={styles.imageContainer}
      >
        <View
          style={styles.profilePictureContainer}
        >
          <Image
            resizeMode='contain'
            source={uri()}
            style={styles.profilePicture}
          />
        </View>
      </View>
      <View>
        <View
          style={styles.textMargin}
        >
          <AppText
            fontFamily='bold'
            fontSize={20}
          >
            {user ? user.userName : 'user name'}
          </AppText>
        </View>
        <AppText
          fontSize={15}
        >
          See your profile
        </AppText>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: theme.color.primary,
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingVertical: 20,
  },
  profilePicture: {
    height: 50,
    width: 50,
  },
  profilePictureContainer: {
    alignItems: 'center',
    backgroundColor: theme.color.primary,
    borderColor: theme.color.primary,
    borderRadius: 25,
    borderWidth: 2,
    height: 50,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 50,
  },
  imageContainer: {
    marginRight: 20,
    width: 60,
  },
  textMargin: {
    marginBottom: 2,
  },
});

export default ProfileButton;
