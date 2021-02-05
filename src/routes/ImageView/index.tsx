import {
  Entypo,
  MaterialIcons,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import * as React from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { deleteProfilePicture } from '#helpers/api';

import theme from '#helpers/theme';

import { AuthContext } from '#src/contexts/AuthProvider';

import FullPageImage from './FullPageImage';
import Informations from './Informations';

const ImageView = ({ route }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const { setUser, user } = React.useContext(AuthContext);
  const scrollView = React.useRef<ScrollView | null>(null);
  const navigation = useNavigation();

  const scollToBottom = () => {
    if (scrollView.current) {
      scrollView.current.scrollToEnd({ animated: true });
    }
  };
  const scrollToTop = () => {
    if (scrollView.current) {
      scrollView.current.scrollTo({ x: 0, animated: true });
    }
  };

  return (
    <View
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        ref={scrollView}
        stickyHeaderIndices={[0]}
        style={styles.container}
      >
        <View
          style={styles.buttonsContainer}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <TouchableOpacity
              activeOpacity={theme.touchableOpacity.defaultOpacity}
              onPress={
                () => Alert.alert('Delete', 'Are you sure you want to delete this image?', [
                  { text: 'no' },
                  {
                    text: 'yes',
                    onPress: async () => {
                      if (!loading) {
                        setLoading(true);
                        try {
                          const response = await deleteProfilePicture(
                            route.params.profilePicture.id,
                          );
                          if (response
                            && user
                            && route.params.profilePicture.id === user.currentProfilePictureId
                          ) {
                            setUser((prevState) => {
                              if (prevState) {
                                return {
                                  ...prevState,
                                  currentProfilePictureId: null,
                                  currentProfilePicture: null,
                                };
                              }
                              return null;
                            });
                            route.params.setProfilePictures((prevState) => {
                              const profilePictures = prevState.filter(
                                (pp) => pp.id !== route.params.profilePicture.id,
                              );
                              return [...profilePictures];
                            });
                            navigation.goBack();
                          }
                        } catch (err) {
                          setLoading(false);
                        }
                      }
                    },
                  },
                ])
              }
              style={[
                styles.buttonDeleteContainer,
                styles.buttonsInnerContainer,
              ]}
            >
              <MaterialIcons
                color={theme.color.secondary}
                name="delete-outline"
                size={20}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={theme.touchableOpacity.defaultOpacity}
              onPress={() => navigation.goBack()}
              style={[
                styles.buttonCloseContainer,
                styles.buttonsInnerContainer,
              ]}
            >
              <Entypo
                color={theme.color.secondary}
                name="cross"
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
        <FullPageImage
          onPress={scollToBottom}
          profilePicture={route.params.profilePicture}
        />
        <Informations
          onPress={scrollToTop}
          profilePicture={route.params.profilePicture}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonCloseContainer: {
    backgroundColor: theme.color.primary,
  },
  buttonDeleteContainer: {
    backgroundColor: theme.color.danger,
  },
  buttonsContainer: {
    paddingHorizontal: theme.wrapper.marginHorizontal,
    paddingTop: 25 + Constants.statusBarHeight,
    position: 'absolute',
    right: 0,
    top: 0,
    width: '100%',
  },
  buttonsInnerContainer: {
    alignItems: 'center',
    borderRadius: 25,
    height: 30,
    justifyContent: 'center',
    width: 30,
  },
  container: {
    flex: 1,
    zIndex: -1,
  },
  contentContainer: {
    flexGrow: 1,
  },
});

export default ImageView;
