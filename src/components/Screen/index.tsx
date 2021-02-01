import * as React from 'react';
import Constants from 'expo-constants';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

interface ScreenI {
  children: React.ReactChild | React.ReactChild[];
}

const Screen: React.FC<ScreenI> = ({ children }) => (
  <SafeAreaView
    style={styles.container}
  >
    {children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFF4',
  },
});

export default Screen;
