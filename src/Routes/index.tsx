import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from './Auth';

export default () => (
    <NavigationContainer>
        <AuthRoutes />
    </NavigationContainer>
);
