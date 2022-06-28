import React from 'react';

import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';
import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { Confirmation } from '../screens/Confirmation';
import { MyCars } from '../screens/MyCars';
import { SignUpFirstStep } from '../screens/SignUp/SignUpFirstStep';
import { SignUpSecondtStep } from '../screens/SignUp/SignUpSecondtStep';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName='SignIn'>
      {/* <Screen name='Splash' component={Splash} /> */}
      <Screen name='SignIn' component={SignIn} />
      <Screen name='SignUpFirstStep' component={SignUpFirstStep} />
      <Screen name='SignUpSecondtStep' component={SignUpSecondtStep} />
      <Screen
        name='Home'
        options={{ gestureEnabled: false }}
        component={Home}
      />
      <Screen name='CarDetails' component={CarDetails} />
      <Screen name='Scheduling' component={Scheduling} />
      <Screen name='SchedulingDetails' component={SchedulingDetails} />
      <Screen name='Confirmation' component={Confirmation} />
      <Screen name='MyCars' component={MyCars} />
    </Navigator>
  );
}
