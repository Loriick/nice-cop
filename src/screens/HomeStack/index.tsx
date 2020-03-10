import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from './Feed';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
}
