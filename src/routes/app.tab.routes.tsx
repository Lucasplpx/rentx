import React from 'react';
import { Platform } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import { Profile } from '../screens/Profile';
import { MyCars } from '../screens/MyCars';
import { AppStackRoutes } from './app.stack.routes';

import HomeSvg from '../assets/home.svg';
import CarSvg from '../assets/car.svg';
import PeopleSvg from '../assets/people.svg';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();

  const configScreenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      height: 78,
      paddingVertical: Platform.OS === 'ios' ? 20 : 0,
      backgroundColor: theme.colors.background_primary,
    },
    tabBarActiveTintColor: theme.colors.main,
    tabBarInactiveTintColor: theme.colors.text_detail,
  };

  return (
    <Navigator screenOptions={configScreenOptions}>
      <Screen
        name='HomeTab'
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <HomeSvg width={24} height={24} fill={color} />
          ),
        }}
      />
      <Screen
        name='MyCars'
        component={MyCars}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <CarSvg width={24} height={24} fill={color} />
          ),
        }}
      />
      <Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <PeopleSvg width={24} height={24} fill={color} />
          ),
          tabBarHideOnKeyboard: true,
        }}
      />
    </Navigator>
  );
}
