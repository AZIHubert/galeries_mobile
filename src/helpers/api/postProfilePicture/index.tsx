import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosResponse } from 'axios';

import client from '#src/helpers/api/client';

const endpoint = '/users/me/profilePictures/';

const postProfilePicture
: (uri: string) => Promise<AxiosResponse<any> | null> = async (uri: string) => {
  const uriParts = uri.split('.');
  const fileType = uriParts[uriParts.length - 1];
  const formData = new FormData();
  formData.append('image', {
    // @ts-ignore
    name: `photo.${fileType}`,
    type: `image/${fileType}`,
    uri,
  });
  try {
    const token = await AsyncStorage.getItem('auThoken');
    if (token) {
      return await client({
        data: formData,
        headers: {
          authorization: token,
          'Content-Type': 'application/json',
        },
        method: 'post',
        url: endpoint,
      });
    }
  } catch (err) {
    throw new Error(err);
  }
  return null;
};

export default postProfilePicture;
