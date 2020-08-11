import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Landing from './src/pages/Landing';
import { AppLoading } from 'expo';
import {Archivo_400Regular, Archivo_700Bold} from '@expo-google-fonts/archivo';
import {Poppins_400Regular, Poppins_600SemiBold, useFonts} from '@expo-google-fonts/poppins';
import AppStack from './src/routes/AppStack';

export default function App() {
  
  let [fonstLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if(!fonstLoaded){
    return <AppLoading />;
  }else{
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
  
}
