import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../features/home/container/home';
import Details from '../features/details/container/details';
import {DetailsItem} from '../features/details/container/detailsItem';

const stack = createNativeStackNavigator();

export const FeaturesNavigator = () => {
  return (
    <stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black', // Cambiar el color del encabezado a negro
        },
        headerTintColor: 'yellow', // Cambiar el color del texto del encabezado a blanco
      }}
      initialRouteName="Home">
      <stack.Screen name="Home" component={Home} />
      <stack.Screen name="Details" component={Details} />
      <stack.Screen name="DetailsItem" component={DetailsItem} />
    </stack.Navigator>
  );
};
