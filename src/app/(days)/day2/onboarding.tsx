import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Link, Stack, router } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
// import Animated, { useSharedValue } from 'react-native-reanimated';
import Animated, {
  FadeIn,
  FadeOut,
  BounceInRight,
  SlideOutLeft,
  BounceOutLeft,
  SlideInRight,
  BounceOut,
  BounceIn,
} from "react-native-reanimated";
type Props = {};

const onboardingSteps = [
  {
    icon: "snowflake",
    title: "Welcome app",
    description: `Daily may Project during december`,
  },
  {
    icon: "people-arrows",
    title: "Learn and Together",
    description: `Lern by during Rn and expo align
with your famuily asporations`,
  },
  {
    icon: "people-arrows",
    title: "TEducation for freshers",
    description: `Conteribyte the help and orgabnixzation jkdl aah`,
  },
];

const OnboardingScreen = (props: Props) => {
  const [screenIndex, setScreenIndex] = useState(0);

  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
    if (isLastScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const onBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const endOnboarding = () => {
    setScreenIndex(0);
    router.back();
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  );

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style={"light"} />

      <View style={styles.pagestepIndicatorContainer}>
        {onboardingSteps.map((item, i) => (
          <View
            key={i}
            style={[
              styles.stepIndicator,
              { backgroundColor: i === screenIndex ? "#FFDA11" : "gray" },
            ]}
          />
        ))}
      </View>

      <GestureDetector gesture={swipes}>
        <View style={styles.pageContent}>
        <Animated.View entering={BounceInRight} exiting={BounceOutLeft}  key={screenIndex}>
            <FontAwesome5
              style={styles.image}
              name={data.icon}
              size={100}
              color="#CEF202"
            />
          
          <View style={styles.footer}>
            <Animated.Text style={styles.title}   entering={SlideInRight.duration(1500)} exiting={BounceOut}>{data.title}</Animated.Text>
            <Text style={styles.description}>{data.description}</Text>

            <View style={styles.buttonRow}>
              <Text style={styles.buttonText} onPress={endOnboarding}>
                Skip
              </Text>

              <Pressable style={styles.button} onPress={onContinue}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
          </Animated.View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  page: {
    // alignItems:'center',
    flex: 1,
    justifyContent: "center",
    backgroundColor:"blue",
    padding: 20,
  },
  image: {
    alignSelf: "center",
    margin: 100,
  },
  title: {
    color: "#FDFDFD",
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "InterBold",
    letterSpacing: 1.3,
    marginVertical: 10,
  },
  description: {
    color: "gray",
    fontSize: 20,
    lineHeight: 28,
  },
  footer: {
    marginTop: "auto",
  },
  pageContent: {
    padding: 20,
    flex: 1,
    
  },
  button: {
    backgroundColor: "#302E38",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    flex: 1,
  },
  buttonRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#FDFDFD",
    fontFamily: "InterBold",
    padding: 10,
    paddingHorizontal: 25,
  },
  pagestepIndicatorContainer: {
    flexDirection: "row",
    gap: 5,
    marginHorizontal: 100,
  },
  stepIndicator: {
    width: 100,
    height: 3,
    flex: 1,
    borderRadius: 10,
  },
});
