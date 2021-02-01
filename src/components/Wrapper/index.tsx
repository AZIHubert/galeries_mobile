import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import theme from '#helpers/theme';

interface WrapperI {
  marginTop?: number;
}

interface StyleSheetI {
  marginTop: number;
}

const Wrapper: React.FC<WrapperI> = ({
  children,
  marginTop = 0,
}) => (
  <View style={styles({
    marginTop,
  }).container}>
    {children}
  </View>
);

const styles = ({
  marginTop,
}: StyleSheetI) => StyleSheet.create({
  container: {
    flex: 1,
    marginTop,
    marginHorizontal: theme.wrapper.marginHorizontal,
  },
});

export default Wrapper;
