import * as React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const Column: React.FC = ({ children }) => (
  <View
    style={styles.container}
  >
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '48%',
  },
});

export default Column;
