import * as React from 'react';
import {
  FlatList,
  StyleSheet,
} from 'react-native';

import Header from '#components/Header';
import Screen from '#components/Screen';
import { profilePictures } from '#helpers/mockDatas';

import ProfileListHeader from './ProfileListHeader';
import ProfilePicture from './ProfilePicture';

const Profile = () => (
  <Screen
    header={Header}
  >
    <FlatList
      columnWrapperStyle={styles.columnWrapperStyle}
      data={profilePictures}
      keyExtractor={(profilePicture) => profilePicture.id.toString()}
      ListHeaderComponent={<ProfileListHeader />}
      numColumns={2}
      renderItem={({ item }) => (
        <ProfilePicture
          current={item.current}
          source={item.profilePicture}
        />
      )}
    />
  </Screen>
);

const styles = StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
});

export default Profile;
