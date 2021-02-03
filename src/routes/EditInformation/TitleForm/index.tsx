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
      textTransform='capitalize'
      color={danger ? 'error' : 'black'}
      fontSize={24}
    >
      {title}
    </AppText>
  </View>
);

const styles = ({
  danger,
}: StyleSheetI) => StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderBottomColor: danger ? theme.color.error : theme.color.primary,
    marginBottom: 30,
    paddingBottom: 10,
  },
});

export default TitleForm;
