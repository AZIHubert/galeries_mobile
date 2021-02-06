import * as React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import AppText from '#components/AppText';

import theme from '#helpers/theme';

interface StyleSheetI {
  danger: boolean;
}

interface TitleFormI {
  danger?: boolean;
  title: string;
}

const TitleForm = ({
  danger = false,
  title,
}: TitleFormI) => (
  <View
    style={styles({
      danger,
    }).container}
  >
    <AppText
      color={danger ? 'error' : 'black'}
      fontSize={24}
      textTransform='capitalize'
    >
      {title}
    </AppText>
  </View>
);

const styles = ({
  danger,
}: StyleSheetI) => StyleSheet.create({
  container: {
    borderBottomColor: danger ? theme.color.danger : theme.color.primary,
    borderBottomWidth: 2,
    marginBottom: 30,
    paddingBottom: 10,
  },
});

export default TitleForm;
