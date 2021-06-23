import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import SignIn from '../screens/SignIn';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = (): JSX.Element => {
  return (
    <Navigator initialRouteName="SignIn" headerMode="none">
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default AuthRoutes;
