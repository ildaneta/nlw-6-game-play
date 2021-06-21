import React from 'react';
import { StatusBar } from 'react-native';
import { theme } from './src/global/styles/theme';

import SignIn from './src/screens/SignIn';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />
      <SignIn />
    </>
  );
}
