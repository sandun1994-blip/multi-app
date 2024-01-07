import * as LocalAuthentication from 'expo-local-authentication';
import { Slot } from "expo-router"
import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import {FontAwesome5} from '@expo/vector-icons'
import { useBiometrics } from '@/components/day10/BiometricsProvider';

export default function BiometricProtectedLayout(){

    const {unlocked,setUnlocked} =useBiometrics()
    
    const authenticate =async()=>{

    // const enrolled =await LocalAuthentication.getEnrolledLevelAsync()
    // const supported =await LocalAuthentication.supportedAuthenticationTypesAsync()
    // const hasHardwareted =await LocalAuthentication.hasHardwareAsync()

        const res = await LocalAuthentication.authenticateAsync()
        console.log(res);
        if (res.success) {
            setUnlocked(true)
        }
        
    // console.log(hasHardwareted);
    // if (hasHardwareted) {
    //     setUnlocked(true)
    // }
    
       }

    useEffect(()=>{
  if (!unlocked) {
    authenticate()
  }
   
    },[])

    if (!unlocked) {
        return( <View style={{flex:1,alignItems:'center',justifyContent:'center'}}> 
            <Text style={{fontFamily:'Inter',fontSize:20,marginBottom:20}}>Use FaceId to ulock</Text>
            <FontAwesome5 name='fingerprint' size={75} color='black' onPress={authenticate} />
            </View>)
    }

    return <Slot/>
}