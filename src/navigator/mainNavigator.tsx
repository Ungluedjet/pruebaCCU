import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginNavigator} from '../features/login/navigator/loginNavigator';
import { FeaturesNavigator } from './featuresNavigator';

const stack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black', // Cambiar el color del encabezado a negro
        },
        headerTintColor: 'yellow', // Cambiar el color del texto del encabezado a blanco
      }}
      initialRouteName="LoginNavigator"
    >
      <stack.Screen
        name="LoginNavigator"
        component={LoginNavigator}
        options={{headerTitle: 'Login'}}
      />
      <stack.Screen
        name="FeaturesNavigator"
        component={FeaturesNavigator}
        options={{headerShown: false}}
      />
    </stack.Navigator>
  );
};
