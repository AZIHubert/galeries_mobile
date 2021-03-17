import {
  useNavigation,
} from '@react-navigation/native';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import AppButton from '#components/AppButton';
import AppText from '#components/AppText';
import Column from '#components/Column';
import Screen from '#components/Screen';
import SocialMediaButton from '#components/SocialMediaButton';
import Wrapper from '#components/Wrapper';

import homeBackground from '#ressources/images/homeBackground.png';
import logoG from '#ressources/images/logoG.png';
import logoGaleries from '#ressources/images/logoGaleries.png';

import {
  fetchLoginFacebook,
  fetchLoginGoogle,
  setNotification,
} from '#store/actions';
import {
  userSelector,
} from '#store/selectors';

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector(userSelector);

  React.useEffect(() => {
    if (user) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'sideMenu' }],
      });
    }
  }, [user]);

  return (
    <Screen>
      <ImageBackground
        source={homeBackground}
        style={styles.ImageBackground}
      >
        <Wrapper>
          <View
            style={styles.container}
          >
            <Image
              resizeMode='contain'
              source={logoG}
              style={styles.gLogo}
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
                resizeMode='contain'
                source={logoGaleries}
                style={styles.galerieLogo}
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
                  disabled={false}
                  marginBottom={24}
                  onPress={() => navigation.navigate('login')}
                  title='log in'
                />
              </Column>
              <Column>
                <AppButton
                  disabled={false}
                  marginBottom={24}
                  onPress={() => navigation.navigate('signin')}
                  title='sign in'
                  variant='secondary'
                />
              </Column>
            </View>
          </View>
          <View>
            <SocialMediaButton
              disabled={false}
              marginBottom={10}
              onPress={async () => {
                try {
                  await Facebook.initializeAsync({
                    appId: '688539228486770',
                  });
                } catch (err) {
                  dispatch(
                    setNotification({
                      text: 'Something went wrong. Please try again.',
                    }),
                  );
                }
                const facebookResponse = await Facebook
                  .logInWithReadPermissionsAsync({
                    permissions: ['public_profile'],
                  });
                if (facebookResponse.type === 'success') {
                  const fetchInfo = await fetch(`https://graph.facebook.com/me?access_token=${facebookResponse.token}&fields=email,gender,name,picture.type(large)`);
                  const facebookUser = await fetchInfo.json();
                  dispatch(
                    fetchLoginFacebook(facebookUser),
                  );
                }
              }}
              variant='facebook'
            />
            <SocialMediaButton
              disabled={false}
              marginBottom={30}
              onPress={async () => {
                try {
                  const response = await Google.logInAsync({
                    androidClientId: '863840240633-o8dmgid62rummljeen43rqe1gev7ottn.apps.googleusercontent.com',
                    iosClientId: '863840240633-6feiofu53fj43d7de2rgpc1qn3epb7d0.apps.googleusercontent.com',
                  });
                  if (response.type === 'success') {
                    const { user: googleUser } = response;
                    dispatch(
                      fetchLoginGoogle(googleUser),
                    );
                  }
                } catch (err) {
                  dispatch(
                    setNotification({
                      text: 'Something went wrong. Please try again.',
                    }),
                  );
                }
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
    flex: 1,
    width: '100%',
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
