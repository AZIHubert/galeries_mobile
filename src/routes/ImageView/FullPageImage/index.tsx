import { MaterialIcons } from '@expo/vector-icons';
import * as React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

import theme from '#helpers/theme';

interface FullPageImageI {
  onPress: () => void
  source: ImageSourcePropType,
}

const { height } = Dimensions.get('window');

const FullPageImage = ({
  onPress,
  source,
}: FullPageImageI) => (
  <ImageBackground
    blurRadius={15}
    resizeMode='cover'
    source={source}
    style={styles.imageBackground}
  >
    <View
      style={styles.imageContainer}
    >
      <Image
        resizeMode='contain'
        source={source}
        style={styles.image}
      />
    </View>
    <View
      style={styles.scrollButtonContainer}
    >
      <TouchableOpacity
        activeOpacity={theme.touchableOpacity.defaultOpacity}
        onPress={onPress}
        style={styles.scrollButton}
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

const styles = StyleSheet.create({
  image: {
    height,
    width: '100%',
  },
  imageBackground: {
    alignItems: 'center',
    flex: 1,
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
