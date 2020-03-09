import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AsyncStorage, ActivityIndicator, View, Button } from 'react-native';
import { Linking } from 'expo';
import * as WebBrowser from 'expo-web-browser';

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
      {/* <MainAppTabs /> */}
      <Center>
        <Button
          title="log with Facebook"
          onPress={() => {
            //   Linking.openURL(');
            WebBrowser.openBrowserAsync(
              'http://localhost:1337/connect/facebook'
            );
          }}
        />
        <Button
          title="log with Google"
          onPress={() => {
            WebBrowser.openBrowserAsync('http://localhost:1337/connect/google');
          }}
        />
      </Center>
    </NavigationContainer>
  );
}
