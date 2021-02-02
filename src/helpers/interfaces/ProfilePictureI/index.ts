import {
  ImageSourcePropType,
} from 'react-native';

interface ProfilePictureI {
  id: number;
  current?: boolean;
  profilePicture: ImageSourcePropType;
}

export default ProfilePictureI;
