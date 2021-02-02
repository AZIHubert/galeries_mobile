import { useFonts } from 'expo-font';
import { useAssets } from 'expo-asset';
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
    require('#ressources/images/mockImages/profilePicture1.jpg'),
    require('#ressources/images/mockImages/profilePicture2.jpg'),
    require('#ressources/images/mockImages/profilePicture3.jpg'),
    require('#ressources/images/mockImages/profilePicture4.jpg'),
    require('#ressources/images/mockImages/profilePicture5.jpg'),
    require('#ressources/images/mockImages/profilePicture6.jpg'),
    require('#ressources/images/mockImages/profilePicture7.jpg'),
    require('#ressources/images/mockImages/profilePicture8.jpg'),
    require('#ressources/images/mockImages/profilePicture9.jpg'),
    require('#ressources/images/mockImages/profilePicture10.jpg'),
    require('#ressources/images/mockImages/profilePicture11.jpg'),
    require('#ressources/images/mockImages/profilePicture12.jpg'),
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
