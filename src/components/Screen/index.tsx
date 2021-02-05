import Constants from 'expo-constants';
import * as React from 'react';
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import theme from '#helpers/theme';

interface ScreenI {
  children: React.ReactChild | React.ReactChild[];
  header?: () => JSX.Element,
}

interface StyleSheetI {
  asHeader: boolean
}

const Screen: React.FC<ScreenI> = ({
  children,
  header: Header,
}) => {
  const asHeader = !!Header;
  return (
    <View
      style={styles({
        asHeader,
      }).container}
    >
      {Header ? (
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <Header />
        </TouchableWithoutFeedback>
      ) : null}
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <SafeAreaView
          style={styles({
            asHeader,
          }).safeArea}
        >
          {children}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = ({
  asHeader,
}: StyleSheetI) => StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    backgroundColor: theme.color.secondary,
    flex: 1,
    paddingTop: asHeader ? 0 : Constants.statusBarHeight,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
});

export default Screen;
