import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext, useEffect, useState } from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
import HomeStack from './screens/HomeStack/index';
import AddArticleStack from './screens/AddArticleStack/index';
import ProfileStack from './screens/Profile/index';
import { AuthContext } from './context/AuthProvider';
import AuthScreen from './screens/Auth';
import Center from './components/Center';

type AppParamList = {
  Home: undefined;
  AddArticle: undefined;
  Profile: undefined;
};

const Tabs = createBottomTabNavigator<AppParamList>();

export default function MainAppTabs() {
  const { isLog } = useContext(AuthContext);
  const [screens, setScreens] = useState({
    Home: HomeStack,
    AddArticle: AuthScreen,
    Profile: AuthScreen,
  });

  useEffect(() => {
    if (isLog) {
      setScreens((c) => ({
        ...c,
        AddArticle: AddArticleStack,
        Profile: ProfileStack,
      }));
    }
  }, [isLog]);

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
          },
        })}
        tabBarOptions={{
          activeTintColor: '#fc381e',
          inactiveTintColor: '#cacaca',
        }}
      >
        <Tabs.Screen name="Home" component={screens.Home} />
        <Tabs.Screen name="AddArticle" component={screens.AddArticle} />
        <Tabs.Screen name="Profile" component={screens.Profile} />
      </Tabs.Navigator>
    </>
  );
}
