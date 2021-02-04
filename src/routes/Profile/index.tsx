import * as React from 'react';
import {
  FlatList,
  StyleSheet,
} from 'react-native';

import Header from '#components/Header';
import Screen from '#components/Screen';
import { ProfilePictureI } from '#helpers/interfaces';
import { getProfilePictures } from '#helpers/api';
import { AuthContext } from '#src/contexts/AuthProvider';

import ProfileListHeader from './ProfileListHeader';
import ProfilePicture from './ProfilePicture';

const Profile = () => {
  const { user } = React.useContext(AuthContext);
  const [profilePictures, setProfilePictures] = React
    .useState<ProfilePictureI[]>([]);
  React.useEffect(() => {
    getProfilePictures()
      .then((result) => {
        setProfilePictures(result.data);
      });
  }, []);
  return (
    <Screen
      header={() => <Header
        returnButton
      />}
    >
      <FlatList
        columnWrapperStyle={styles.columnWrapperStyle}
        data={profilePictures}
        keyExtractor={(profilePicture) => profilePicture.id.toString()}
        ListHeaderComponent={() => <ProfileListHeader
          setProfilePictures={setProfilePictures}
        />}
        numColumns={2}
        renderItem={({ item }) => (
          <ProfilePicture
            id={item.id}
            current={user ? item.id === user.currentProfilePicture : false}
            source={item.cropedImage.signedUrl}
            setProfilePictures={setProfilePictures}
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
