import React from 'react';
import { Text, View } from 'react-native';

export default function Detail({ navigation, route }) {
  return (
    <View>
      <Text>{route.params.item.title}</Text>
    </View>
  );
}
