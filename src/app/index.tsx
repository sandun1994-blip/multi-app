import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { AmaticSC_400Regular } from "@expo-google-fonts/amatic-sc";
import DayListItem from "../components/core/DayListItem";
import { Link } from "expo-router";
import React from "react";

SplashScreen.preventAutoHideAsync();
export default function HomeScreen() {
  const days = [...Array(24)].map((val, index) => {
    return index + 1;
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        columnWrapperStyle={styles.column}
        numColumns={2}
        contentContainerStyle={styles.content}
        renderItem={({ item }) => <DayListItem item={item} />}
      />
      <Link href={"/day10/protected"}>go to about</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    gap: 10,
  },
  content: {
    // backgroundColor:'red',
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  },
});
