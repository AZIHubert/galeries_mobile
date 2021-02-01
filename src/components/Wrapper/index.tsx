import * as React from 'react';
import { StyleSheet, View } from 'react-native';

const Wrapper: React.FC = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
  },
});

export default Wrapper;
