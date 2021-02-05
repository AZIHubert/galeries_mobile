import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import AppText from '#components/AppText';

import theme from '#helpers/theme';

const InformationButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={theme.touchableOpacity.defaultOpacity}
      onPress={() => navigation.navigate('editInformation')}
      style={styles.container}
    >
      <View
        style={styles.imageContainer}
      >
        <Octicons
          color={theme.color.primary}
          name="gear"
          size={40}
        />
      </View>
      <View>
        <AppText
          fontSize={15}
        >
          Edit your information
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  imageContainer: {
    alignItems: 'center',
    borderRadius: 30,
    height: 60,
    justifyContent: 'center',
    marginRight: 20,
    overflow: 'hidden',
    width: 60,
  },
});

export default InformationButton;
