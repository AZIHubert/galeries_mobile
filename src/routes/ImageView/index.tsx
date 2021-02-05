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

import theme from '#helpers/theme';

import FullPageImage from './FullPageImage';
import Informations from './Informations';
import { deleteProfilePicture } from '#helpers/api';
import { AuthContext } from '#src/contexts/AuthProvider';

const ImageView = ({ route }) => {
  const { setUser, user } = React.useContext(AuthContext);
  const navigation = useNavigation();
  const scrollView = React.useRef<ScrollView | null>(null);

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
        stickyHeaderIndices={[0]}
        ref={scrollView}
        contentContainerStyle={styles.contentContainer}
        style={styles.scrollView}
      >
        <View
          style={styles.deleteContainer}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <TouchableOpacity
              activeOpacity={theme.touchableOpacity.defaultOpacity}
              style={styles.buttonDeleteContainer}
              onPress={() => Alert.alert('Delete', 'Are you sure you want to delete this image?', [
                { text: 'no' },
                {
                  text: 'yes',
                  onPress: async () => {
                    await deleteProfilePicture(route.params.profilePicture.id);
                    if (user && route.params.profilePicture.id === user.currentProfilePictureId) {
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
                    }
                    navigation.goBack();
                    route.params.setProfilePictures((prevState) => {
                      const profilePictures = prevState.filter(
                        (pp) => pp.id !== route.params.profilePicture.id,
                      );
                      return [...profilePictures];
                    });
                  },
                },

              ])}
            >
              <MaterialIcons
                name="delete-outline"
                size={20}
                color={theme.color.secondary}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={theme.touchableOpacity.defaultOpacity}
              style={styles.buttonContainer}
              onPress={() => navigation.goBack()}
            >
              <Entypo name="cross" size={20} color={theme.color.secondary} />
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
  buttonDeleteContainer: {
    alignItems: 'center',
    backgroundColor: theme.color.danger,
    borderRadius: 25,
    height: 30,
    justifyContent: 'center',
    width: 30,
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: theme.color.primary,
    borderRadius: 25,
    height: 30,
    justifyContent: 'center',
    width: 30,
  },
  deleteContainer: {
    paddingHorizontal: theme.wrapper.marginHorizontal,
    paddingTop: 25 + Constants.statusBarHeight,
    position: 'absolute',
    right: 0,
    top: 0,
    width: '100%',
  },
  contentContainer: {
    flexGrow: 1,
  },
  scrollView: {
    flex: 1,
    zIndex: -1,
  },
});

export default ImageView;
