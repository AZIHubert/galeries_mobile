import * as React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import AppButton from '#components/AppButton';
import AppText from '#components/AppText';
import Wrapper from '#components/Wrapper';
import CurrentProfilePicture from './CurrentProfilePicture';
import theme from '#helpers/theme';

const ProfileListHeader = () => (
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
        Allan Aoudji
      </AppText>
      <View
        style={styles.separator}
      />
    </View>
    <AppButton
      disabled={false}
      height={35}
      marginBottom={16}
      onPress={() => {}}
      title='Add a profile picture'
    />
    <AppButton
      disabled={false}
      height={35}
      marginBottom={40}
      onPress={() => {}}
      title='Edit your info'
      variant='secondary'
    />
  </Wrapper>
);

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
