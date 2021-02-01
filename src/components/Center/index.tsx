import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const Center: React.FC = ({ children }) => (
  <View style={styles.container}>
    { children }
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Center;
