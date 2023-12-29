import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import TinderCard from "@/components/day6/TinderCard";
import { Stack } from "expo-router";
import { interpolate, useDerivedValue, useSharedValue, withDecay, withSpring } from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
type Props = {};
const users = [
  {
    id: 1,
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/1.jpg",
    name: "Dani",
  },
  {
    id: 2,
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/2.jpg",
    name: "Jon",
  },
  {
    id: 3,
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/3.jpg",
    name: "Dani",
  },
  {
    id: 4,
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/4.jpeg",
    name: "Alice",
  },
  {
    id: 5,
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/5.jpg",
    name: "Dani",
  },
  {
    id: 6,
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/6.jpg",
    name: "Kelsey",
  },
];

const TinderScreen = (props: Props) => {

  const activeIndex = useSharedValue(0);
  const translationX =useSharedValue(0)

  // useDerivedValue(()=>{
  //   activeIndex.value = interpolate(Math.abs(translationX.value),[0,500],[0,activeIndex.value +1])
  // })


  const gesture = Gesture.Pan()
    .onBegin((e) => {
      console.log("begin");
    })
    .onFinalize((e) => {
      console.log("fin");
    })
    .onChange((e) => {
      console.log("chnge",e.translationX);
      translationX.value =e.translationX
      //activeIndex.value =interpolate()
    })
    .onStart((e) => {
      console.log("start");
    })
    .onEnd((e) => {
      console.log("end");
      translationX.value=withSpring(0)
      if (Math.abs(e.velocityX)>400) {
       // translationX.value = withDecay({velocity:e.velocityX})
       translationX.value = withSpring(Math.sign(e.velocityX)*500,{velocity:e.velocityX},(finished)=>{
        if (finished) {
          activeIndex.value =activeIndex.value +1
        }
       
       })
     //  activeIndex.value = interpolate(translationX.value,[Math.abs(e.velocityX)*500,0],[activeIndex.value +1,0])
     
      }
    });
console.log('render');
const onResponse = (res: boolean) => {
  console.log('on Response: ', res);
};

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen options={{ headerShown: false }} />
      {/* <Text style={{ top: 70, position: 'absolute' }}>
        Current index: {index}
      </Text> */}
      {users.map((user, index) => (
        <TinderCard
          key={`${user.id}-${index}`}
          user={user}
          numOfCards={users.length}
          index={index}
          activeIndex={activeIndex}
          onResponse={onResponse}
        />
      ))}
    </View>
  );
};

export default TinderScreen;

const styles = StyleSheet.create({});
