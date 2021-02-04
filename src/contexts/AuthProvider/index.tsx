import * as React from 'react';

interface UserI {
  createdAt: string;
  currentProfilePicture: null;
  defaultProfilePicture: string | null;
  email: string;
  facebookkId: string | null;
  id: string;
  role: string;
  updatedAt: string;
  userName: string;
}

export const AuthContext = React.createContext<{
  user: null | UserI;
  setUser: React.Dispatch<React.SetStateAction<UserI | null>>;
}>({
  user: null,
  setUser: () => {},
});

export const AuthProvider: React.FC<{}> = ({ children }) => {
  const [user, setUser] = React.useState<null | UserI>(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
