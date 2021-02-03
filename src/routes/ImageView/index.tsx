import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import * as React from 'react';
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import theme from '#helpers/theme';
import profilePicture from '#ressources/images/mockImages/profilePicture9.jpg';

import FullPageImage from './FullPageImage';
import Informations from './Informations';

const ImageView = () => {
  const scrollView = React.useRef<ScrollView | null>(null);

  const scollToBottom = () => {
    if (scrollView.current) {
      scrollView.current.scrollToEnd({ animated: true });
    }
  };
  const scrollToTop = () => {
    scrollView.current?.scrollTo({ x: 0, animated: true });
  };

  return (
    <View
      style={{ flex: 1 }}
    >
      <ScrollView
        stickyHeaderIndices={[0]}
        ref={scrollView}
        contentContainerStyle={styles.contentContainer}
        style={styles.scrollView}
      >
        <View
          style={styles.container}
        >
          <TouchableOpacity
            activeOpacity={theme.touchableOpacity.defaultOpacity}
            style={styles.buttonContainer}
          >
            <AntDesign
              color={theme.color.primary}
              name="closecircle"
              size={30}
            />
          </TouchableOpacity>
        </View>
        <FullPageImage
          onPress={scollToBottom}
          source={profilePicture}
        />
        <Informations
          onPress={scrollToTop}
          size='2000x3000'
          upload='24th Septembre 2020'
          weight='6ko'
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: theme.color.secondary,
    borderRadius: 25,
    height: 30,
    justifyContent: 'center',
    width: 30,
  },
  container: {
    paddingRight: theme.wrapper.marginHorizontal,
    paddingTop: 25 + Constants.statusBarHeight,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  contentContainer: {
    flexGrow: 1,
  },
  scrollView: {
    flex: 1,
    zIndex: -1,
  },
});

export default ImageView;
