import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from './Feed';
import Detail from './Detail';

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
          headerTitle: route.params.item.title,
        })}
        component={Detail}
      />
    </Stack.Navigator>
  );
}
