

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TweetDetail from '../screens/TweetDetail';
import Profile from '../screens/Profile';
import Notifications from '../screens/Notifications';
import Settings from '../screens/Settings';
import Search from '../screens/Search';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigation} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="StackNavigation" component={StackNavigation} options={{ title: "Home" }} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Notifications" component={Notifications} options={{ tabBarBadge: 3 }} />
    </Tab.Navigator>
  );
}


function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TweetDetail" component={TweetDetail} />
    </Stack.Navigator>
  )
}


export default function Navigations() {
  return (
    <DrawerNavigation />
  );
}