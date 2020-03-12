import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Detail from './Detail';
import Feed from './Feed';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        options={({ route }) => ({
          headerTitleAlign: 'left',
        })}
        component={Feed}
      />
      <Stack.Screen
        name="Detail"
        options={({ route }) => ({
          headerBackTitleStyle: {
            color: '#fc381e',
          },
          headerTintColor: '#fc381e',
          headerTitleStyle: {
            color: '#1A1A1A',
          },
          headerTitle: route.params?.item.title,
        })}
        component={Detail}
      />
    </Stack.Navigator>
  );
}
