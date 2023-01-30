import 'react-native-gesture-handler';

import { useCallback } from 'react';

import { ThemeProvider } from 'styled-components';
import THEME from './src/themes';

import { NavigationContainer } from '@react-navigation/native';
import Router from './src/Routes/Router';
import { StatusBar } from 'expo-status-bar';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from "@expo-google-fonts/roboto"
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={THEME}>
      <NavigationContainer>
        <StatusBar style='light' />

        <Router />
      </NavigationContainer>
    </ThemeProvider>
  );
}