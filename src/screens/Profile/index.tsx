import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Profile from './Profile';
import Detail from '../HomeStack/Detail';

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        options={{
          headerTitle: 'Kevin Manssat',
        }}
        component={Profile}
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
          headerTitle: route.params.item.title,
        })}
        component={Detail}
      />
    </Stack.Navigator>
  );
}
