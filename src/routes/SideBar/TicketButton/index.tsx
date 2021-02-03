import { useNavigation } from '@react-navigation/native';
import {
  SimpleLineIcons,
} from '@expo/vector-icons';
import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import AppText from '#components/AppText';
import theme from '#helpers/theme';

const TicketButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={theme.touchableOpacity.defaultOpacity}
      style={styles.container}
      onPress={() => navigation.navigate('sendticket')}
    >
      <View
        style={styles.imageContainer}
      >
        <SimpleLineIcons
          color={theme.color.primary}
          name="exclamation"
          size={35}
        />
      </View>
      <View>
        <View
          style={styles.textMargin}
        >
          <AppText
            fontSize={10}
          >
          Share your opinion? Find a bug?
          </AppText>
        </View>
        <AppText
          fontSize={15}
        >
        Send a ticket
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: theme.color.primary,
    borderBottomWidth: 1,
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
  textMargin: {
    marginBottom: 5,
  },
});

export default TicketButton;
