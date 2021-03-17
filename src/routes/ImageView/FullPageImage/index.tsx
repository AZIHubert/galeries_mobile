import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import theme from '#helpers/theme';

interface FullPageImageI {
  onPress: () => void;
  profilePicture: ProfilePictureI;
}

interface StyleSheetI {
  height: number;
  width: number;
}

const { height: windowHeight, width: windowWidth } = Dimensions.get('window');

const FullPageImage = ({
  onPress,
  profilePicture,
}: FullPageImageI) => {
  const size = () => {
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
    const maxHeight = windowHeight
      - 65
      - theme.imageView.scrollButton.size
      - (theme.imageView.scrollButton.paddingBottom * 2)
      - Constants.statusBarHeight;
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
        height: size().height,
        width: size().width,
      }).imageBackground}
    >
      <View
        style={styles({
          height: size().height,
          width: size().width,
        }).imageContainer}
      >
        <Image
          resizeMode='contain'
          source={{ uri: profilePicture.originalImage.signedUrl }}
          style={styles({
            height: size().height,
            width: size().width,
          }).image}
        />
      </View>
      <View
        style={styles({
          height: size().height,
          width: size().width,
        }).scrollButtonContainer}
      >
        <TouchableOpacity
          activeOpacity={theme.touchableOpacity.defaultOpacity}
          onPress={onPress}
          style={styles({
            height: size().height,
            width: size().width,
          }).scrollButton}
        >
          <MaterialIcons
            color={theme.color.secondary}
            name='info'
            size={35}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = ({
  height,
  width,
}: StyleSheetI) => StyleSheet.create({
  image: {
    height,
    width,
  },
  imageBackground: {
    alignItems: 'center',
    flex: 1,
    height: windowHeight,
    justifyContent: 'center',
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
    borderRadius: 35 / 2,
    height: 35,
    justifyContent: 'center',
    width: 35,
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
