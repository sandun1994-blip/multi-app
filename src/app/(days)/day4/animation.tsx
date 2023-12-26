import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import LottieView from 'lottie-react-native';
type Props = {}

const AnimationScreen = (props: Props) => {

    const animation = useRef<LottieView>(null);

    useEffect(() => {
      // You can control the ref programmatically, rather than using autoPlay
      // animation.current?.play();
    }, []);


  return (
    <View>
       <LottieView      
         ref={animation}
         style={{
          width: 200,
          height: 200,
          backgroundColor: '#eee',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('assets/lottie/netflix.json')}
      />

      <Button title='Play' onPress={()=>animation.current?.play()}/>

      <Button title='Pause' onPress={()=>animation.current?.pause()}/>
    </View>
  )
}

export default AnimationScreen

const styles = StyleSheet.create({})