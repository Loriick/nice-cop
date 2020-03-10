import React, { useContext } from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Center from './components/Center';
import AddArticleScreen from './screens/AddArticleStack/index';
import HomeStack from './screens/HomeStack/index';

type AppParamList = {
  Home: undefined;
  AddArticle: undefined;
  Profile: undefined;
};

function Profile() {
  return (
    <Center>
      <Text>PROFILE</Text>
    </Center>
  );
}

const Tabs = createBottomTabNavigator<AppParamList>();

export default function MainAppTabs() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'ios-home';
          } else if (route.name === 'AddArticle') {
            iconName = 'ios-add-circle';
          } else if (route.name === 'Profile') {
            iconName = 'md-person';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      }}
    >
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="AddArticle" component={AddArticleScreen} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
}
