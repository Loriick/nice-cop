import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StatusBar } from 'react-native';
import HomeStack from './screens/HomeStack/index';
import AddArticleStack from './screens/AddArticleStack/index';
import ProfileStack from './screens/Profile/index';

type AppParamList = {
  Home: undefined;
  AddArticle: undefined;
  Profile: undefined;
};

const Tabs = createBottomTabNavigator<AppParamList>();

export default function MainAppTabs() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#6a51ae" />
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
          activeTintColor: '#fff',
          inactiveTintColor: '#F0F0F0',
          style: {
            backgroundColor: '#fc381e'
          }
        }}
      >
        <Tabs.Screen name="Home" component={HomeStack} />
        <Tabs.Screen name="AddArticle" component={AddArticleStack} />
        <Tabs.Screen name="Profile" component={ProfileStack} />
      </Tabs.Navigator>
    </>
  );
}
