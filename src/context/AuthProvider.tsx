import React, { useState, useEffect } from 'react';
import { AuthSession } from 'expo';
import { AsyncStorage } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';

type User = null | {
  token: string;
  id: number;
};

export const AuthContext = React.createContext<{
  user: User;
  isLog: Boolean;
  login: (provider: string) => void;
  logout: () => void;
}>({
  user: null,
  isLog: false,
  login: (provider: string) => {},
  logout: () => {},
});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState<User>(null);
  const [isLog, setIsLog] = useState<Boolean>(false);

  async function checkLoginStatus() {
    const token = await AsyncStorage.getItem('token');

    if (!token) {
      setIsLog(false);
      return;
    }

    setIsLog(true);
  }

  useEffect(() => {
    AsyncStorage.removeItem('token');

    checkLoginStatus();
  }, []);

  async function login(provider: string) {
    try {
      let {
        params: {
          access_token,
          raw: { token_type, expires_in },
        },
      } = await AuthSession.startAsync({
        authUrl: `https://nice-cop.kevinmanssat.fr/connect/${provider}`,
      });

      const url = `https://nice-cop.kevinmanssat.fr/auth/${provider}/callback/?access_token=${access_token}&raw%5Baccess_token%5D=${access_token}&raw%5Btoken_type%5D=${token_type}&raw%5Bexpires_in%5D=${expires_in}#_=_`;
      const userData = await fetch(url);
      const {
        jwt: token,
        user: { id },
      } = await userData.json();

      setUser({ token, id });
      AsyncStorage.setItem('token', JSON.stringify(token));
      setIsLog(true);
    } catch (error) {
      throw new Error(`Une erreur est survenue: ${error.message}`);
    }
  }

  function logout() {
    setUser(null);
    AsyncStorage.removeItem('token');
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLog,
        login,
        logout,
      }}
    >
      <ErrorBoundary>{children}</ErrorBoundary>
    </AuthContext.Provider>
  );
}
