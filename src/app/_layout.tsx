import AnimatedSplashScreen from "@/components/AnimatedSplashScreen";
import { AmaticSC_400Regular, AmaticSC_700Bold } from "@expo-google-fonts/amatic-sc";
import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, { FadeOut, FadeIn } from "react-native-reanimated";
// App.js

import { Amplify } from 'aws-amplify';
import amplifyconfig from 'src/amplifyconfiguration.json';
import 'expo-dev-client';
import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react-native";
import BiometricProvider from "@/components/day10/BiometricsProvider";

Amplify.configure(amplifyconfig);

const theme ={
  tokens:{
    colors:{
      font:{
        primary:'black'
      }
    }
  }
}




SplashScreen.preventAutoHideAsync();




export default function RootLayput(){

  const [appReady,setAppReady] =useState(false)
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);
  const handleChange =(isCancelled:boolean)=>{
    //console.log(isCancelled);
    
    if (!isCancelled) {
      setSplashAnimationFinished(true);
    }
    
    
  }
    let [fontsLoaded, fontError] = useFonts({
      Inter: Inter_400Regular,
      InterSemi: Inter_600SemiBold,
      InterBold: Inter_700Bold,
      InterBlack: Inter_900Black,
  
      Amatic: AmaticSC_400Regular,
      AmaticBold: AmaticSC_700Bold,
      });
  
    
      useEffect(() => {
        if (fontsLoaded || fontError) {
          // SplashScreen.hideAsync();
           setAppReady(true)
        }
      }, [fontsLoaded, fontError]);
    
      if (!appReady || !splashAnimationFinished) {
        return <AnimatedSplashScreen onAnimationFinish={handleChange}/>;
      }
    





      const days = [...Array(24)].map((val, index) => {
        return index + 1;
      });

    return( 
      <BiometricProvider>
      <Authenticator.Provider>
    <ThemeProvider theme={theme}>
    <GestureHandlerRootView style={{flex:1}}>  
     <Animated.View 
    exiting={FadeOut.duration(300)}
    entering={FadeIn.duration(1000)}
    style={{flex:1}}> 
    <Stack screenOptions={{title:'december',headerStyle:{backgroundColor:'red'}}}>
        <Stack.Screen name="index" options={{title:'Title ',}}/>
    </Stack>
    </Animated.View>
    </GestureHandlerRootView>
    </ThemeProvider>
    </Authenticator.Provider>
    </BiometricProvider>)
}

