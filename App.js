import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigations';
import {LogBox} from 'react-native';
import { NativeBaseProvider } from "native-base";

LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
