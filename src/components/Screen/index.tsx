import * as React from 'react';
import Constants from 'expo-constants';
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

import theme from '#helpers/theme';

type SafeView = true | false;
interface ScreenI {
  children: React.ReactChild | React.ReactChild[];
  safeView?: SafeView;
}

interface StyleSheetI {
  safeView: SafeView
}

const Screen: React.FC<ScreenI> = ({ children, safeView = true }) => (
  <TouchableWithoutFeedback
    onPress={() => Keyboard.dismiss()}
  >
    <SafeAreaView
      style={styles({ safeView }).container}
    >
      {children}
    </SafeAreaView>
  </TouchableWithoutFeedback>
);

const styles = ({
  safeView,
}: StyleSheetI) => StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: safeView ? Constants.statusBarHeight : 0,
    backgroundColor: theme.color.secondary,
  },
});

export default Screen;
