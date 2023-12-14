import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn} from '../container/signIn';
import {SignUp} from '../container/signUp';

const stack = createNativeStackNavigator();

export const LoginNavigator = () => {
    return (
        <stack.Navigator 
            initialRouteName="SignIn" 
            screenOptions={{headerShown: false}}
        >
            <stack.Screen name="SignIn" component={SignIn} />
            <stack.Screen name="SignUp" component={SignUp} />
        </stack.Navigator>
    );
};
