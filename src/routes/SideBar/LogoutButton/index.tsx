import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import {
  MaterialIcons,
} from '@expo/vector-icons';
import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { AuthContext } from '#src/contexts/AuthProvider';

import AppText from '#components/AppText';
import theme from '#helpers/theme';
import { logout } from '#helpers/api';

const LogoutButton = () => {
  const navigation = useNavigation();
  const { setUser } = React.useContext(AuthContext);
  return (
    <TouchableOpacity
      activeOpacity={theme.touchableOpacity.defaultOpacity}
      style={styles.container}
      onPress={async () => {
        try {
          await logout();
          await AsyncStorage.clear();
          setUser(null);
          navigation.navigate('home');
        } catch (err) {
          console.log(err);
        }
      }}
    >
      <View
        style={styles.imageContainer}
      >
        <MaterialIcons
          color={theme.color.primary}
          name="logout"
          size={40}
        />
      </View>
      <View>
        <AppText
          fontFamily='bold'
          fontSize={15}
        >
        Loug out
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
});

export default LogoutButton;
