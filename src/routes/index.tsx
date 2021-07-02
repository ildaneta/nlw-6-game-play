import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';
import { useAuth } from '../hooks/auth';

import SignIn from '../screens/SignIn';

const Routes = (): JSX.Element => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  );
};

export default Routes;
