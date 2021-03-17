import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import moment from 'moment';
import * as React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import AppText from '#components/AppText';
import AppButton from '#components/AppButton';
import Wrapper from '#components/Wrapper';

import theme from '#helpers/theme';

import {
  putProfilePicture,
} from '#store/actions';
import {
  loadingSelector,
  userSelector,
} from '#store/selectors';

const formatBytes = (a: number, b = 2) => {
  if (a === 0) return '0 Bytes'; const c = b < 0 ? 0 : b;
  const d = Math.floor(Math.log(a) / Math.log(1024));
  return `${parseFloat((a / 1024 ** d).toFixed(c))} ${['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][d]}`;
};

interface InformationI {
  onPress: () => void;
  profilePicture: ProfilePictureI
}

const { height } = Dimensions.get('window');

const Information = ({
  onPress,
  profilePicture,
}: InformationI) => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const user = useSelector(userSelector);

  const changeProfilePictureText = () => {
    if (user && user.currentProfilePictureId === profilePicture.id) {
      return 'remove profile picture';
    }
    return 'use as profile picture';
  };

  return (
    <LinearGradient
      colors={[theme.color.primary, theme.color.tertiary]}
      style={styles.container}
    >
      <Wrapper
        marginTop={60}
      >
        <View
          style={styles.informationsContainer}
        >
          <View
            style={styles.informationsContainerShadow}
          />
          <View
            style={styles.informationInnerContainer}
          >
            <View
              style={styles.informationAlignText}
            >
              <AppText
                color='black'
                fontSize={theme.imageView.informations.fontSize}
              >
                Upload the
              </AppText>
              <AppText
                color='secondary'
                fontFamily='bold'
                fontSize={theme.imageView.informations.fontSize}
              >
                {` ${moment(profilePicture.createdAt).format('MMMM Do YYYY')}`}
              </AppText>
            </View>
            <View
              style={styles.informationAlignText}
            >
              <AppText
                color='black'
                fontSize={theme.imageView.informations.fontSize}
              >
                Weight:
              </AppText>
              <AppText
                color='secondary'
                fontFamily='bold'
                fontSize={theme.imageView.informations.fontSize}
              >
                {` ${formatBytes(profilePicture.originalImage.size)}`}
              </AppText>
            </View>
            <View
              style={styles.informationAlignText}
            >
              <AppText
                color='black'
                fontSize={theme.imageView.informations.fontSize}
              >
                Size:
              </AppText>
              <AppText
                color='secondary'
                fontFamily='bold'
                fontSize={theme.imageView.informations.fontSize}
              >
                {` ${profilePicture.originalImage.width} x ${profilePicture.originalImage.height}`}
              </AppText>
            </View>
          </View>
        </View>
        <AppButton
          disabled={false}
          marginBottom={20}
          onPress={async () => {
            if (!loading) {
              dispatch(
                putProfilePicture({
                  id: profilePicture.id,
                }),
              );
            }
          }}
          title={changeProfilePictureText()}
          variant='tertiary'
        />
        <View
          style={styles.scrollButtonContainer}
        >
          <TouchableOpacity
            activeOpacity={theme.touchableOpacity.defaultOpacity}
            style={styles.scrollButton}
            onPress={onPress}
          >
            <MaterialIcons
              name="arrow-circle-up"
              size={theme.imageView.scrollButton.size}
              color={theme.color.secondary}
            />
          </TouchableOpacity>
        </View>
      </Wrapper>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height - Constants.statusBarHeight - theme.imageView.scrollButton.size - 50,
  },
  informationAlignText: {
    flexDirection: 'row',
  },
  informationsContainer: {
    borderColor: theme.color.secondary,
    borderWidth: 3,
    marginBottom: 60,
    width: '100%',
  },
  informationsContainerShadow: {
    backgroundColor: theme.color.secondary,
    height: '100%',
    position: 'absolute',
    right: 8,
    top: 8,
    width: '100%',
  },
  informationInnerContainer: {
    backgroundColor: theme.color.primary,
    paddingHorizontal: 25,
    paddingVertical: 30,
  },
  scrollButton: {
    alignItems: 'center',
    borderRadius: theme.imageView.scrollButton.size / 2,
    justifyContent: 'center',
  },
  scrollButtonContainer: {
    alignItems: 'center',
    bottom: 0,
    paddingBottom: theme.imageView.scrollButton.paddingBottom,
    position: 'absolute',
    width: '100%',
  },
});

export default Information;
