import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function DayListItem({ item }: any) {
  return (
    <Link href={`/${item}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{item}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9b4521",
    borderRadius: 20,
  },
  text: {
    color: "#9b4521",
    fontSize: 56,
    fontFamily: "Asmatic",
  },
});
