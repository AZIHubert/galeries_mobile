import * as Permissions from 'expo-permissions';
import * as React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

interface PermissionI {
  children: React.ReactChild | React.ReactChild[];
}

const Permission: React.FC<PermissionI> = ({ children }) => {
  React.useEffect(() => {
    const requestPermission = async () => {
      await Permissions.askAsync(Permissions.CAMERA);
    };
    requestPermission();
  }, []);

  return (
    <View
      style={styles.container}
    >
      { children }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Permission;
