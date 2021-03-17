import { Entypo } from '@expo/vector-icons';
import React from 'react';
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import AppText from '#components/AppText';

import theme from '#helpers/theme';

import {
  setNotification,
} from '#store/actions';
import {
  notificationSelector,
} from '#store/selectors';

interface StyleSheetI {
  error: boolean
}

export default function App() {
  const dispatch = useDispatch();
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const notification = useSelector(notificationSelector);
  const [fadeAnim] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    if (notification.text) {
      Animated.timing(fadeAnim, {
        duration: 200,
        toValue: 1,
        useNativeDriver: true,
      }).start();
      timer.current = setTimeout(() => {
        Animated.timing(fadeAnim, {
          duration: 200,
          toValue: 0,
          useNativeDriver: true,
        }).start(() => {
          dispatch(
            setNotification({
              error: false,
              text: '',
            }),
          );
        });
      }, 4000);
    }
  }, [notification]);

  React.useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (timer.current) clearTimeout(timer.current);
        Animated.timing(fadeAnim, {
          duration: 200,
          toValue: 0,
          useNativeDriver: true,
        }).start(() => {
          dispatch(
            setNotification({
              text: '',
            }),
          );
        });
      }}
    >
      <Animated.View
        style={{
          opacity: fadeAnim,
          ...styles({
            error: notification.error,
          }).modalView,
        }}
      >
        <View
          style={styles({
            error: notification.error,
          }).crossContainer}
        >
          <Entypo
            color={notification.error ? theme.color.white : theme.color.primary}
            name="cross"
            size={17}
          />
        </View>
        <AppText
          color={notification.error ? 'white' : 'primary'}
          fontSize={16}
        >
          {notification.text}
        </AppText>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = ({
  error,
}: StyleSheetI) => StyleSheet.create({
  crossContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 8,
    paddingVertical: 2,
    width: '100%',
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: error ? theme.color.danger : theme.color.secondary,
    borderColor: error ? theme.color.secondary : theme.color.primary,
    borderRadius: 7,
    borderWidth: 1,
    elevation: 10,
    marginTop: 95,
    marginHorizontal: 20,
    paddingBottom: 12,
    paddingTop: 3,
    position: 'absolute',
  },
});
