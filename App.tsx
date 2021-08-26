import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter'
import {Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani'
import AppLoading from 'expo-app-loading';
import Singin from './src/screens/Singin';
import Home from './src/screens/Home';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  })

  if (!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <>
      <StatusBar
                barStyle='light-content'
            />
      <Home/>
        
    </>    
  );
}


