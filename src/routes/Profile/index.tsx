import * as React from 'react';
import {
  FlatList,
  StyleSheet,
} from 'react-native';

import Header from '#components/Header';
import Screen from '#components/Screen';

import { AuthContext } from '#src/contexts/AuthProvider';

import ProfileListHeader from './ProfileListHeader';
import ProfilePicture from './ProfilePicture';

const Profile = () => {
  const { user } = React.useContext(AuthContext);
  return (
    <Screen
      header={() => <Header
        returnButton
      />}
    >
      <FlatList
        columnWrapperStyle={styles.columnWrapperStyle}
        data={user && user.profilePictures}
        keyExtractor={(profilePicture) => profilePicture.id.toString()}
        ListHeaderComponent={() => <ProfileListHeader />}
        numColumns={2}
        renderItem={({ item }) => (
          <ProfilePicture
            profilePicture={item}
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
