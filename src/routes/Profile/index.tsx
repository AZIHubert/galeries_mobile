import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import {
  Image,
  View,
} from 'react-native';

import AppButton from '#components/AppButton';
import AppText from '#components/AppText';
import Header from '#components/Header';
import Screen from '#components/Screen';
import Wrapper from '#components/Wrapper';
import theme from '#helpers/theme';
import defaultProfilePicture from '#ressources/images/defaultProfilePicture.png';

const Profile = () => (
  <Screen
    header={Header}
  >
    <Wrapper
      marginTop={50}
    >
      <View
        style={{
          alignItems: 'center',
          marginBottom: 90,
        }}
      >
        <LinearGradient
          colors={[theme.color.tertiary, theme.color.primary]}
          end={[1, 1]}
          start={[0, 0]}
          style={{
            borderRadius: 63,
            justifyContent: 'center',
            alignItems: 'center',
            width: 126,
            height: 126,
            marginBottom: 24,
          }}
        >
          <View
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              justifyContent: 'center',
              overflow: 'hidden',
              alignItems: 'center',
            }}
          >
            <Image
              resizeMode='contain'
              source={defaultProfilePicture}
              style={{
                width: 120,
                height: 120,
              }}
            />
          </View>
        </LinearGradient>
        <AppText
          fontFamily='bold'
          fontSize={26}
        >
          Allan Aoudji
        </AppText>
      </View>
      <AppButton
        disabled={false}
        height={40}
        marginBottom={16}
        onPress={() => {}}
        title='Add a profile picture'
      />
      <AppButton
        disabled={false}
        height={40}
        onPress={() => {}}
        title='Add a profile picture'
        variant='secondary'
      />
    </Wrapper>
  </Screen>
);

export default Profile;
