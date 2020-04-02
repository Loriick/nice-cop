import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainAppTabs from './MainAppTab';

export function Routes() {
  return (
    <NavigationContainer>
      <MainAppTabs />
      {/* <AuthScreen /> */}
    </NavigationContainer>
  );
}
