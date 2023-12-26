import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import LottieView from 'lottie-react-native';
import { Stack } from 'expo-router';
type Props = {}

const SplashScreen = (props: Props) => {

    const animation = useRef<LottieView>(null);

    useEffect(() => {
      // You can control the ref programmatically, rather than using autoPlay
      // animation.current?.play();
    }, []);


  return (
    <View style={{flex:1,justifyContent:'space-around',alignItems:'center',backgroundColor:'black'}}>
        <Stack.Screen options={{headerShown:false}}/>
       <LottieView   
         autoPlay   
         ref={animation}
         style={{
          maxWidth: 200,
          width:'80%'
         // backgroundColor: '#eee',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('assets/lottie/netflix.json')}
      />

      {/* <Button title='Play' onPress={()=>animation.current?.play()}/>

      <Button title='Pause' onPress={()=>animation.current?.pause()}/> */}
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})