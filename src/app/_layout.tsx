import { AmaticSC_400Regular, AmaticSC_700Bold } from "@expo-google-fonts/amatic-sc";
import { Inter_600SemiBold, Inter_700Bold, Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
SplashScreen.preventAutoHideAsync();
export default function RootLayput(){

    let [fontsLoaded, fontError] = useFonts({
        Inter:Inter_900Black,
        InterSemi:Inter_600SemiBold,
        InterBold:Inter_700Bold, 
        AmaticBold:AmaticSC_700Bold,
        Asmatic: AmaticSC_400Regular,
      });
    
      useEffect(() => {
        if (fontsLoaded || fontError) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError]);
    
      if (!fontsLoaded && !fontError) {
        return null;
      }
    
      const days = [...Array(24)].map((val, index) => {
        return index + 1;
      });

    return( <GestureHandlerRootView style={{flex:1}}>   
    <Stack screenOptions={{title:'december',headerStyle:{backgroundColor:'red'}}}>
        <Stack.Screen name="index" options={{title:'Title ',}}/>
    </Stack></GestureHandlerRootView>)
}

