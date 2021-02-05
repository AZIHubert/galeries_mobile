import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

import theme from '#helpers/theme';
import { ProfilePictureI } from '#helpers/interfaces';

interface FullPageImageI {
  onPress: () => void;
  profilePicture: ProfilePictureI;
}

interface StyleSheetI {
  width: number;
  height: number;
}

const { height: windowHeight, width: windowWidth } = Dimensions.get('window');

const FullPageImage = ({
  onPress,
  profilePicture,
}: FullPageImageI) => {
  const size = () => {
    const maxHeight = windowHeight
      - 65
      - theme.imageView.scrollButton.size
      - (theme.imageView.scrollButton.paddingBottom * 2)
      - Constants.statusBarHeight;
    const defaultHeight = (profilePicture.originalImage.height
        * (
          windowWidth
          - theme.wrapper.marginHorizontal
          * 2
        )
    ) / profilePicture.originalImage.width;
    const defaultWidth = windowWidth
      - theme.wrapper.marginHorizontal
      * 2;
    if (defaultHeight > maxHeight) {
      return {
        height: maxHeight,
        width: (defaultWidth * maxHeight) / defaultHeight,
      };
    }
    return {
      height: defaultHeight,
      width: defaultWidth,
    };
  };
  return (
    <ImageBackground
      blurRadius={15}
      resizeMode='cover'
      source={{ uri: profilePicture.originalImage.signedUrl }}
      style={styles({
        width: size().width,
        height: size().height,
      }).imageBackground}
    >
      <View
        style={styles({
          width: size().width,
          height: size().height,
        }).imageContainer}
      >
        <Image
          resizeMode='contain'
          source={{ uri: profilePicture.originalImage.signedUrl }}
          style={styles({
            width: size().width,
            height: size().height,
          }).image}
        />
      </View>
      <View
        style={styles({
          width: size().width,
          height: size().height,
        }).scrollButtonContainer}
      >
        <TouchableOpacity
          activeOpacity={theme.touchableOpacity.defaultOpacity}
          onPress={onPress}
          style={styles({
            width: size().width,
            height: size().height,
          }).scrollButton}
        >
          <MaterialIcons
            color={theme.color.secondary}
            name='info'
            size={theme.imageView.scrollButton.size}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = ({
  width,
  height,
}: StyleSheetI) => StyleSheet.create({
  image: {
    height,
    width,
  },
  imageBackground: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: windowHeight,
  },
  imageContainer: {
    alignItems: 'center',
    elevation: 10,
    paddingHorizontal: theme.wrapper.marginHorizontal,
    width: '100%',
  },
  scrollButton: {
    alignItems: 'center',
    backgroundColor: theme.color.primary,
    borderRadius: theme.imageView.scrollButton.size / 2,
    height: theme.imageView.scrollButton.size,
    justifyContent: 'center',
    width: theme.imageView.scrollButton.size,
  },
  scrollButtonContainer: {
    alignItems: 'center',
    bottom: 0,
    paddingBottom: theme.imageView.scrollButton.paddingBottom,
    position: 'absolute',
    width: '100%',
  },
});

export default FullPageImage;
