import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';

import AppButton from '#components/AppButton';
import AppText from '#components/AppText';
import Column from '#components/Column';
import Screen from '#components/Screen';
import SocialMediaButton from '#components/SocialMediaButton';
import Wrapper from '#components/Wrapper';
import logoG from '#ressources/images/logoG.png';
import logoGaleries from '#ressources/images/logoGaleries.png';
import homeBackground from '#ressources/images/homeBackground.png';

import {
  facebookLogin,
  googleLogin,
} from '#helpers/api';

const Home = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState<boolean>(false);
  return (
    <Screen>
      <ImageBackground
        style={styles.ImageBackground}
        source={homeBackground}
      >
        <Wrapper>
          <View
            style={styles.container}
          >
            <Image
              source={logoG}
              style={styles.gLogo}
              resizeMode='contain'
            />
            <View
              style={styles.texts}
            >
              <AppText
                color='black'
                fontFamily='bold'
                fontSize={35}
              >
                Welcome to
              </AppText>
              <Image
                source={logoGaleries}
                style={styles.galerieLogo}
                resizeMode='contain'
              />
              <View
                style={styles.catchPhraseContainer}
              >
                <AppText
                  color='black'
                  fontFamily='oblique'
                  fontSize={20}
                >
                  A web app to share
                </AppText>
                <AppText
                  color='black'
                  fontFamily='oblique'
                  fontSize={20}
                >
                  pictures with
                </AppText>
                <AppText
                  color='black'
                  fontFamily='oblique'
                  fontSize={20}
                >
                  your friends and family.
                </AppText>
              </View>
            </View>
            <View
              style={styles.loggersContainer}
            >
              <Column>
                <AppButton
                  disabled={loading}
                  onPress={() => navigation.navigate('login')}
                  marginBottom={24}
                  title='log in'
                />
              </Column>
              <Column>
                <AppButton
                  disabled={loading}
                  onPress={() => navigation.navigate('signin')}
                  marginBottom={24}
                  title='sign in'
                  variant='secondary'
                />
              </Column>
            </View>
          </View>
          <View>
            <SocialMediaButton
              disabled={loading}
              marginBottom={10}
              onPress={async () => {
                try {
                  const response = await facebookLogin();
                  if (response) {
                    await AsyncStorage.setItem('auThoken', response.data.token);
                  }
                  setLoading(false);
                  navigation.reset({
                    index: 0,
                    routes: [{ name: 'sideMenu' }],
                  });
                } catch (err) {
                  setLoading(false);
                }
              }}
              variant='facebook'
            />
            <SocialMediaButton
              disabled={loading}
              marginBottom={30}
              onPress={() => {
                googleLogin()
                  .then(() => {
                    setLoading(false);
                    navigation.reset({
                      index: 0,
                      routes: [{ name: 'sideMenu' }],
                    });
                  })
                  .catch((err) => {
                    console.log(err);
                    setLoading(false);
                    // set alert
                  });
              }}
              variant='google'
            />
          </View>
        </Wrapper>
      </ImageBackground>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  catchPhraseContainer: {
    paddingLeft: 56,
  },
  galerieLogo: {
    width: 280,
  },
  gLogo: {
    position: 'absolute',
    top: 20,
  },
  ImageBackground: {
    width: '100%',
    flex: 1,
  },
  loggersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  texts: {
    position: 'absolute',
    top: '35%',
  },
});

export default Home;
