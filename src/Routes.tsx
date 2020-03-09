import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AsyncStorage, ActivityIndicator } from 'react-native';

import { AuthContext } from './context/AuthProvider';
import Center from './components/Center';
import MainAppTabs from './MainAppTab';

export function Routes() {
  const [loading, setLoading] = useState<boolean>(true);
  const { user, login } = useContext(AuthContext);

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(userString => {
        if (userString) {
          login();
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  return (
    <NavigationContainer>
      <MainAppTabs />
    </NavigationContainer>
  );
}
