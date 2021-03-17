import AsyncStorage from '@react-native-async-storage/async-storage';
import { localStorages } from '#store/constant';

export default async () => {
  const token = await AsyncStorage.getItem(localStorages.AUTH_TOKEN);
  return token;
};
