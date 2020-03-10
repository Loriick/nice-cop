import React from 'react';
import { Button } from 'react-native';
import Center from '../../components/Center';
import * as WebBrowser from 'expo-web-browser';

export default function AuthScreen() {
  return (
    <Center>
      <Button
        title="log with Facebook"
        onPress={async () => {
          let res = await WebBrowser.openAuthSessionAsync(
            'http://localhost:1337/connect/facebook',
            'https://google.fr'
          );

          console.log(res);
        }}
      />
      <Button
        title="log with Google"
        onPress={() => {
          WebBrowser.openBrowserAsync('http://localhost:1337/connect/google');
        }}
      />
    </Center>
  );
}
