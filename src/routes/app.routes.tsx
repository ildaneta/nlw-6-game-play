import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import AppointmentDetail from '../screens/AppointmentDetail';
import AppointmentCreate from '../screens/AppointmentCreate';

const { Navigator, Screen } = createStackNavigator();

export const AppRoutes = (): JSX.Element => {
  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentDetail" component={AppointmentDetail} />
      <Screen name="AppointmentCreate" component={AppointmentCreate} />
    </Navigator>
  );
};
