import AsyncStorage from '@react-native-async-storage/async-storage';
import client from '#src/helpers/api/client';

const endpoint = '/users/me/profilePictures/';

export default async (uri: string) => {
  const uriParts = uri.split('.');
  const fileType = uriParts[uriParts.length - 1];
  const formData = new FormData();
  formData.append('image', {
    // @ts-ignore
    uri,
    name: `photo.${fileType}`,
    type: `image/${fileType}`,
  });
  const token = await AsyncStorage.getItem('auThoken');
  return client({
    method: 'post',
    url: endpoint,
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
    data: formData,
  });
};
