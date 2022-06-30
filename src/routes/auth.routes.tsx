import React from 'react';

import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';

import { Confirmation } from '../screens/Confirmation';
import { SignUpFirstStep } from '../screens/SignUp/SignUpFirstStep';
import { SignUpSecondtStep } from '../screens/SignUp/SignUpSecondtStep';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
      <Screen name='Splash' component={Splash} />
      <Screen name='SignIn' component={SignIn} />
      <Screen name='SignUpFirstStep' component={SignUpFirstStep} />
      <Screen name='SignUpSecondtStep' component={SignUpSecondtStep} />
      <Screen name='Confirmation' component={Confirmation} />
    </Navigator>
  );
}
