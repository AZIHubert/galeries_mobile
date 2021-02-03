import * as React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import AppButton from '#components/AppButton';
import AppText from '#components/AppText';

interface DeleteAccountI {
  loading: boolean;
}

const DeleteAccount = ({
  loading,
}: DeleteAccountI) => (
  <View>
    <View
      style={styles.textContainer}
    >
      <AppText
        color='black'
        fontSize={16}
      >
        Once you delete your account,
        there is no going back. Please be certain.
      </AppText>
    </View>
    <AppButton
      disabled={loading}
      fontSize={25}
      marginBottom={75}
      onPress={() => {}}
      title='Delete your account'
      variant='danger'
    />
  </View>
);

const styles = StyleSheet.create({
  textContainer: {
    marginBottom: 20,
  },
});

export default DeleteAccount;
