import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';
import Singin from '../screens/Singin';
import { useAuthContext } from '../hooks/auth';

export function Routes() {
    const { user } = useAuthContext();
    return (
        <NavigationContainer>
            {user.id ? <AppRoutes /> : <Singin />}
        </NavigationContainer>
    );
}