import React from 'react';
import {
  Button,
  ImageBackground,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from '@expo/vector-icons';
import { AuthSession } from 'expo';

export default function AuthScreen() {
  return (
    <ImageBackground
      source={require('../../../assets/imgs/0e1bc81938dc62733266232095cdf99d.jpg')}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={styles.facebook}>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          onPress={async () => {
            let res = await AuthSession.startAsync({
              authUrl: `https://nice-cop.kevinmanssat.fr/connect/facebook`,
            });

            console.log(res);
          }}
        >
          <Ionicons
            name="logo-facebook"
            size={30}
            style={{ color: 'white', marginRight: 10 }}
          />
          <Text style={{ fontSize: 20, fontWeight: '600', color: 'white' }}>
            Se connecter avec Facebook
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.google}>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          onPress={() => {
            WebBrowser.openBrowserAsync(
              'https://nice-cop.kevinmanssat.fr/connect/google'
            );
          }}
        >
          <Ionicons name="logo-google" size={30} style={{ marginRight: 10 }} />
          <Text style={{ fontSize: 20, fontWeight: '600' }}>
            Se connecter avec Google
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  facebook: {
    width: '80%',
    height: 60,
    backgroundColor: '#3b5998',
    borderRadius: 7,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  google: {
    width: '80%',
    height: 60,
    backgroundColor: 'white',
    borderRadius: 7,
    paddingHorizontal: 15,
  },
});
