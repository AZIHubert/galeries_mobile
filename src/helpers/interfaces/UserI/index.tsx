import ProfilePictureI from '../ProfilePictureI';

interface UserI {
  createdAt: Date;
  currentProfilePictureId: string | null;
  currentProfilePicture: null | ProfilePictureI;
  defaultProfilePicture: string | null;
  email: string | null;
  facebookId: string | null;
  googleId: string | null;
  id: string;
  role: string;
  updatedAt: string;
  userName: string;
}

export default UserI;
