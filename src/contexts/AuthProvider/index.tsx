import * as React from 'react';

import { UserI } from '#helpers/interfaces';

export const AuthContext = React.createContext<{
  setUser: React.Dispatch<React.SetStateAction<UserI | null>>;
  user: null | UserI;
}>({
  setUser: () => {},
  user: null,
});

export const AuthProvider: React.FC<{}> = ({ children }) => {
  const [user, setUser] = React.useState<null | UserI>(null);
  return (
    <AuthContext.Provider
      value={{
        setUser,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
