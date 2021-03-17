import AsyncStorage from '@react-native-async-storage/async-storage';
import { localStorages } from '#store/constant';

export default async (token: string) => {
  await AsyncStorage.setItem(localStorages.AUTH_TOKEN, token);
};
