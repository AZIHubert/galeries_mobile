import * as React from 'react';
import { ImageSourcePropType } from 'react-native';

import { UserI } from '#helpers/interfaces';
import defaultProfilePicture from '#ressources/images/defaultProfilePicture.png';

export const AuthContext = React.createContext<{
  user: null | UserI;
  setUser: React.Dispatch<React.SetStateAction<UserI | null>>;
  profilePicture:() => ImageSourcePropType | { uri: string};
}>({
      user: null,
      setUser: () => {},
      profilePicture: () => defaultProfilePicture,
    });

export const AuthProvider: React.FC<{}> = ({ children }) => {
  const [user, setUser] = React.useState<null | UserI>(null);
  const profilePicture: () => ImageSourcePropType | { uri: string} = () => {
    if (user && user.currentProfilePicture) {
      return { uri: user.currentProfilePicture.cropedImage.signedUrl };
    }
    if (user && user.defaultProfilePicture) {
      return { uri: user.defaultProfilePicture };
    }
    return defaultProfilePicture;
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        profilePicture,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
