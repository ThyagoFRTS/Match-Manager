import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Singin from '../screens/Singin';
import AppointmentCreate from '../screens/AppointmentCreate';
import AppointmentDetails from '../screens/AppointmentDetails';
import { AuthParams } from '../global/types';

const Stack = createNativeStackNavigator<AuthParams>();
const { Navigator, Screen } = Stack;

export const AuthRoutes = () => {
    return (
        <Navigator
            screenOptions={
                {
                    headerShown: false,
                }
            }
        >
            
            <Screen name="Home" component={Home} />
            <Screen name="AppointmentDetails" component={AppointmentDetails} />
            <Screen name="AppointmentCreate" component={AppointmentCreate} />
            
        </Navigator>
    );
}

