import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import LottieView from 'lottie-react-native';
import Animated, { FadeIn, FadeOut, ZoomIn, ZoomOut } from 'react-native-reanimated';
type Props = {}

const AnimatedLottieView =Animated.createAnimatedComponent(LottieView)

const AnimatedSplashScreen = ({onAnimationFinish}:{onAnimationFinish:(isCancelled:boolean)=>void}) => {

    const animation = useRef<LottieView>(null);

    useEffect(() => {
      // You can control the ref programmatically, rather than using autoPlay
      // animation.current?.play();
    }, []);


  return (
    <View 
    style={{flex:1,justifyContent:'space-around',alignItems:'center',backgroundColor:'black'}}>
       <AnimatedLottieView  
       exiting={ZoomOut.duration(300)}
        loop={false} 
       autoPlay  
      //  speed={1} 
         ref={animation}
         style={{
          width: '80%',
          maxWidth: 400,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('assets/lottie/netflix.json')}
        onAnimationFinish={onAnimationFinish}
      />

     
    </View>
  )
}

export default AnimatedSplashScreen

const styles = StyleSheet.create({})