import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
// import { Container } from './styles';
import Home from '../screens/Home';
import Singin from '../screens/Singin';
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
            <Screen name="Singin" component={Singin} />
            <Screen name="Home" component={Home} />
        </Navigator>
    );
}

