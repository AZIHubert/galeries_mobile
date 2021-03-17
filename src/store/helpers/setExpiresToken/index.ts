import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

import { localStorages } from '#store/constant';

export default async (token: string) => {
  await AsyncStorage.setItem(
    localStorages.EXPIRES_DATE_TOKEN,
    JSON.stringify(moment().add(token, 's').valueOf()),
  );
};
