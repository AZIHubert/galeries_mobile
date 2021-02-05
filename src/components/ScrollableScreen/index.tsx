import Constants from 'expo-constants';
import * as React from 'react';
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import theme from '#helpers/theme';

interface ScrollableScreenI {
  children: React.ReactChild | React.ReactChild[];
  header?: () => JSX.Element,
}

interface StyleSheetI {
  asHeader: boolean
}

const ScrollableScreen: React.FC<ScrollableScreenI> = ({
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
      <ScrollView
        contentContainerStyle={styles({
          asHeader,
        }).scrollViewContainer}
        style={styles({
          asHeader,
        }).scrollView}
      >
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
      </ScrollView>
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

export default ScrollableScreen;
