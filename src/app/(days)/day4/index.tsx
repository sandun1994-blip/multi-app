import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

type Props = {};

const index = (props: Props) => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "DAY 4: LOTTIE" }} />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
