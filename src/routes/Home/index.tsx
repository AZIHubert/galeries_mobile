import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';

import AppButton from '#components/AppButton';
import AppText from '#components/AppText';
import Screen from '#components/Screen';
import SocialMediaButton from '#components/SocialMediaButton';
import Wrapper from '#components/Wrapper';
import logoG from '#ressources/images/logoG.png';
import logoGaleries from '#ressources/images/logoGaleries.png';
import homeBackground from '#ressources/images/homeBackground.png';

const Home = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const func = () => {
    if (!loading) setLoading(true);
  };
  return (
    <Screen>
      <ImageBackground
        style={{ width: '100%', flex: 1 }}
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
              <View
                style={{ width: '48%' }}
              >
                <AppButton
                  disabled={loading}
                  onPress={() => {}}
                  title='log in'
                />
              </View>
              <View
                style={{ width: '48%' }}
              >
                <AppButton
                  disabled={loading}
                  onPress={() => {}}
                  title='sign in'
                  variant='secondary'
                />
              </View>
            </View>
          </View>
          <View>
            <SocialMediaButton
              disabled={loading}
              marginBottom={10}
              onPress={() => {}}
              variant='facebook'
            />
            <SocialMediaButton
              disabled={loading}
              marginBottom={30}
              onPress={() => {}}
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
    top: 10,
  },
  loggersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  texts: {
    position: 'absolute',
    top: '35%',
  },
});

export default Home;
