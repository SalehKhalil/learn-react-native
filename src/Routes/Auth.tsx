import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login, Register } from '../Pages/Auth'

const Auth = createStackNavigator();

const AuthRoutes = () => (
    <Auth.Navigator screenOptions={{
        headerShown: false,
    }}>
        <Auth.Screen
            name='Login'
            component={Login}
        />
        <Auth.Screen
            name='Register'
            component={Register}
        />
    </Auth.Navigator>
)

export default AuthRoutes;
