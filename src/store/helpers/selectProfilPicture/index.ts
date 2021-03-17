import { ImageSourcePropType } from 'react-native';
import defaultProfilePicture from '#ressources/images/defaultProfilePicture.png';

const profilePicture: (
  user: UserI | null
) => {
  croped: string | ImageSourcePropType;
  original?: string | ImageSourcePropType;
  pending?: string | ImageSourcePropType;
} = (
  user: UserI | null,
) => {
  if (user) {
    if (user.currentProfilePicture) {
      return {
        croped: user.currentProfilePicture.cropedImage.signedUrl,
        original: user.currentProfilePicture.originalImage.signedUrl,
        pending: user.currentProfilePicture.pendingImage.signedUrl,
      };
    }
    if (user.defaultProfilePicture) {
      return {
        croped: user.defaultProfilePicture,
      };
    }
  }
  return {
    croped: defaultProfilePicture as ImageSourcePropType,
  };
};

export default profilePicture;
