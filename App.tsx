import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AuthProvider } from './src/hooks/useAuth';
import { PiusProvider } from './src/hooks/usePius';
import { Bitter_400Regular, Bitter_700Bold, useFonts } from '@expo-google-fonts/bitter';

import {AppLoading} from 'expo';

import Routes from './src/routes';

export default function App() {

  let[fontsLoaded] = useFonts({
    Bitter_400Regular,
    Bitter_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading/>
  }

  else{
    return (
      <PiusProvider>
        <AuthProvider>
          <Routes/> 
          <StatusBar style="light" />
        </AuthProvider>
      </PiusProvider>
    );
  }
}

