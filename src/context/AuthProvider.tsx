import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';

type User = null | { token: string };

export const AuthContext = React.createContext<{
  user: User;
  login: () => void;
  logout: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {}
});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState<User>(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          const token = { token: '2345FDSG456TGFTR67YHGFU67546TZFDSZR324' };
          setUser(token);
          AsyncStorage.setItem('token', JSON.stringify(token));
        },
        logout: () => {
          setUser(null);
          AsyncStorage.removeItem('token');
        }
      }}
    >
      <ErrorBoundary>{children}</ErrorBoundary>
    </AuthContext.Provider>
  );
}
