import * as React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';

import profilePicture from '#ressources/images/mockImages/profilePicture10.jpg';

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
    <ScrollView
      ref={scrollView}
      contentContainerStyle={styles.contentContainer}
      style={styles.scrollView}
    >
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
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  scrollView: {
    flex: 1,
  },
});

export default ImageView;
