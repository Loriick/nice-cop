import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  AsyncStorage,
  ActivityIndicator,
  View,
  Button,
  Alert
} from 'react-native';
import { Linking, AuthSession } from 'expo';
import * as WebBrowser from 'expo-web-browser';
import * as Facebook from 'expo-facebook';

import { AuthContext } from './context/AuthProvider';
import Center from './components/Center';
import AuthScreen from './screens/Auth';
import MainAppTabs from './MainAppTab';

export function Routes() {
  const [loading, setLoading] = useState<boolean>(true);
  const { user, login } = useContext(AuthContext);

  async function logIn() {
    try {
      await Facebook.initializeAsync('', 'Nice Cop');
      const resultA = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email', 'user_location']
      });

      if (resultA.type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?fields=id,name,picture,email,location&access_token=${resultA.token}`
        );
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

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
      {/* <AuthScreen /> */}
    </NavigationContainer>
  );
}
