import { useAssets } from 'expo-asset';
import { useFonts } from 'expo-font';
import * as React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

interface LoaderI {
  children: React.ReactChild | React.ReactChild[];
}

const Loader: React.FC<LoaderI> = ({ children }) => {
  const [fontsLoaded] = useFonts({
    'HelveticaLTStd-Bold': require('#ressources/fonts/HelveticaLTStd-Bold.otf'),
    'HelveticaLTStd-Obl': require('#ressources/fonts/HelveticaLTStd-Obl.otf'),
    'HelveticaLTStd-Roman': require('#ressources/fonts/HelveticaLTStd-Roman.otf'),
  });
  const [assets] = useAssets([
    require('#ressources/images/defaultProfilePicture.png'),
    require('#ressources/images/homeBackground.png'),
    require('#ressources/images/logoFacebook.png'),
    require('#ressources/images/logoG.png'),
    require('#ressources/images/logoGaleries.png'),
    require('#ressources/images/logoGFill.png'),
    require('#ressources/images/logoGoogle.png'),
  ]);

  const appLoad = fontsLoaded && !!assets;

  if (!appLoad) {
    return (
      <View />
    );
  }
  return (
    <View style={styles.container}>
      { children }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Loader;
