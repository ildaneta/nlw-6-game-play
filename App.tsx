import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
  Rajdhani_700Bold,
  Rajdhani_500Medium,
} from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';

import { theme } from './src/global/styles/theme';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />
      <Routes />
    </>
  );
}
