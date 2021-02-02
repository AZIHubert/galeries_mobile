import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import AppText from '#components/AppText';
import AppButton from '#components/AppButton';
import DownloadButton from '#components/DownloadButton';
import Wrapper from '#components/Wrapper';
import theme from '#helpers/theme';

interface InformationI {
  onPress: () => void;
  size: string;
  upload: string;
  weight: string;
}

const { height } = Dimensions.get('window');

const Information = ({
  onPress,
  size,
  upload,
  weight,
}: InformationI) => (
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
            style={styles.inforamtionAlignText}
          >
            <AppText
              color='black'
              fontSize={theme.imageView.informations.fontSize}
            >
              Upload the
            </AppText>
            <AppText
              color='secondary'
              fontSize={theme.imageView.informations.fontSize}
            >
              {` ${upload}`}
            </AppText>
          </View>
          <View
            style={styles.inforamtionAlignText}
          >
            <AppText
              color='black'
              fontSize={theme.imageView.informations.fontSize}
            >
              Weight
            </AppText>
            <AppText
              color='secondary'
              fontSize={theme.imageView.informations.fontSize}
            >
              {` ${weight}`}
            </AppText>
          </View>
          <View
            style={styles.inforamtionAlignText}
          >
            <AppText
              color='black'
              fontSize={theme.imageView.informations.fontSize}
            >
              Size
            </AppText>
            <AppText
              color='secondary'
              fontSize={theme.imageView.informations.fontSize}
            >
              {` ${size}`}
            </AppText>
          </View>
        </View>
      </View>
      <AppButton
        disabled={false}
        title='use as profile picture'
        marginBottom={20}
        onPress={() => {}}
        variant='secondary'
        reverse
      />
      <DownloadButton
        disabled={false}
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

const styles = StyleSheet.create({
  container: {
    height: height - Constants.statusBarHeight - theme.imageView.scrollButton.size - 50,
  },
  inforamtionAlignText: {
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
