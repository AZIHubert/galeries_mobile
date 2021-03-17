import * as React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Modal,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import theme from '#helpers/theme';

import Header from '#components/Header';
import Screen from '#components/Screen';
import AppText from '#components/AppText';

import {
  fetchProfilePictures,
  refreshProfilePictures,
} from '#store/actions';
import {
  profilePicturesSelector,
  profilePicturesEndSelector,
  profilePicturesStatusSelector,
  profilePictureStatusSelector,
} from '#store/selectors';

import ProfileListHeader from './ProfileListHeader';
import ProfilePicture from './ProfilePicture';

const Profile = () => {
  const dispatch = useDispatch();
  const profilePictures = useSelector(profilePicturesSelector);
  const profilePicturesEnd = useSelector(profilePicturesEndSelector);
  const profilesPictureStatus = useSelector(profilePicturesStatusSelector);
  const profilePictureStatus = useSelector(profilePictureStatusSelector);
  const [status, setStatus] = React.useState<string>('');
  const [refreshing] = React.useState<boolean>(false);

  React.useEffect(() => {
    dispatch(
      fetchProfilePictures(),
    );
  }, []);

  React.useEffect(() => {
    switch (profilePictureStatus) {
      case 'putting':
        setStatus('changing profile picture');
        break;
      case 'delete':
        setStatus('delete profile picture');
        break;
      case 'posting':
        setStatus('upload profile picture');
        break;
      case 'success':
        setStatus('');
        break;
      default:
        setStatus('');
        break;
    }
  }, [profilePictureStatus]);

  const arrayProfilePictures = Object.keys(profilePictures).sort(
    (a, b) => (
      new Date(profilePictures[b].createdAt).getTime()
      - new Date(profilePictures[a].createdAt).getTime()
    ),
  );

  return (
    <Screen
      header={() => <Header
        returnButton
      />}
    >
      <View
        style={styles.container}
      >
        <Modal
          animationType='fade'
          transparent={true}
          visible={!!status}
        >
          <View style={{
            flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.7)',
          }}>
            <View style={{
              width: '50%',
              borderStyle: 'solid',
              backgroundColor: theme.color.secondary,
              elevation: 20,
              padding: 25,
              borderRadius: 4,
            }}>
              <AppText
                textAlign='center'
                color='primary'
                fontSize={15}
                fontFamily='bold'
              >
                {status}
              </AppText>
            </View>
          </View>
        </Modal>
        <FlatList
          columnWrapperStyle={styles.columnWrapperStyle}
          data={arrayProfilePictures}
          keyExtractor={(profilePicture) => profilePicture}
          ListHeaderComponent={() => <ProfileListHeader />}
          numColumns={2}
          onEndReachedThreshold={0}
          onEndReached={() => {
            if (!profilePicturesEnd) {
              dispatch(
                fetchProfilePictures(),
              );
            }
          }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                dispatch(
                  refreshProfilePictures(),
                );
              }}
            />
          }
          renderItem={({ item }) => (
            <ProfilePicture
              profilePicture={profilePictures[item]}
              id={item}
            />
          )}
        />
        {profilesPictureStatus === 'fetching' ? (
          <View
            style={styles.spinnerContainer}
          >
            <ActivityIndicator
              color={theme.color.tertiary}
              size='large'
            />
          </View>
        ) : null}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  spinnerContainer: {
    position: 'absolute',
    height: 40,
    left: 0,
    bottom: 20,
    width: '100%',
  },
});

export default Profile;
