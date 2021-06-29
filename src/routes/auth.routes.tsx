import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import AppointmentDetail from '../screens/AppointmentDetail';
import AppointmentCreate from '../screens/AppointmentCreate';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = (): JSX.Element => {
  return (
    <Navigator initialRouteName="SignIn" headerMode="none">
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentDetail" component={AppointmentDetail} />
      <Screen name="AppointmentCreate" component={AppointmentCreate} />
    </Navigator>
  );
};

export default AuthRoutes;
