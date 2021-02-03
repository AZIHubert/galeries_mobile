import * as React from 'react';
import {
  FlatList,
  StyleSheet,
} from 'react-native';

import Header from '#components/Header';
import Screen from '#components/Screen';
import { ProfilePictureI } from '#helpers/interfaces';
import { profilePictures } from '#helpers/mockDatas';

import ProfileListHeader from './ProfileListHeader';
import ProfilePicture from './ProfilePicture';

const Profile = () => {
  const [allProfilePictures, setAllProfilePictures] = React
    .useState<ProfilePictureI[]>(profilePictures);
  return (
    <Screen
      header={() => <Header
        returnButton
      />}
    >
      <FlatList
        columnWrapperStyle={styles.columnWrapperStyle}
        data={allProfilePictures}
        keyExtractor={(profilePicture) => profilePicture.id.toString()}
        ListHeaderComponent={() => <ProfileListHeader
          setProfilePictures={setAllProfilePictures}
        />}
        numColumns={2}
        renderItem={({ item }) => (
          <ProfilePicture
            id={item.id}
            current={item.current}
            source={item.profilePicture}
            setProfilePictures={setAllProfilePictures}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
});

export default Profile;
