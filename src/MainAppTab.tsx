import React, { useContext } from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Center from './components/Center';

type AppParamList = {
  Home: undefined;
  AddArticle: undefined;
  Profile: undefined;
};

function Home() {
  return (
    <Center>
      <Text>HOME</Text>
    </Center>
  );
}
function AddPost() {
  return (
    <Center>
      <Text>ADD ARTICLE</Text>
    </Center>
  );
}
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
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="AddArticle" component={AddPost} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
}
