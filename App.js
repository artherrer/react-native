import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigations';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}