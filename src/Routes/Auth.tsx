import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login, Register } from '../Pages/Auth'

const Auth = createStackNavigator();

const AuthRoutes = () => (
    <Auth.Navigator screenOptions={{
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerStyle: {
            backgroundColor: '#312e38',
        },
        cardStyle: {
            backgroundColor: '#312e35'
        },
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
