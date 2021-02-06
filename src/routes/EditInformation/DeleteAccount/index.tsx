import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import AppButton from '#components/AppButton';
import AppText from '#components/AppText';

const DeleteAccount = () => {
  const navigation = useNavigation();
  return (
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
        disabled={false}
        fontSize={25}
        marginBottom={75}
        onPress={() => navigation.navigate('deleteaccount')}
        title='Delete your account'
        variant='danger'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginBottom: 20,
  },
});

export default DeleteAccount;
