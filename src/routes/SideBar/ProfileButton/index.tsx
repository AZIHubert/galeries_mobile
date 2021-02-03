import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

import AppText from '#components/AppText';
import theme from '#helpers/theme';

interface ProfileButtonI {
  profilePicture: ImageSourcePropType;
  userName: string;
}

const ProfileButton = ({
  profilePicture,
  userName,
}: ProfileButtonI) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={theme.touchableOpacity.defaultOpacity}
      onPress={() => navigation.navigate('profile')}
      style={styles.container}
    >
      <View
        style={styles.imageContainer}
      >
        <View
          style={styles.profilePictureContainer}
        >
          <Image
            source={profilePicture}
            resizeMode='contain'
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
            {userName}
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
