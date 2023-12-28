import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  appartment: any;
  containerStyle?:any
};

const AppartmentListItem = ({ appartment,containerStyle={} }: Props) => {
  return (
    <View style={{...styles.card,...containerStyle}}>
      <Image source={{ uri: appartment.image }} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{appartment.title}</Text>
        <Text style={styles.description}>
          Stay at this apartment for an affordable
        </Text>
        <View style={styles.footer}>
          <Text style={styles.price}>$ {appartment.price}</Text>
          <Text style={styles.rating}>
            🌟 {appartment.rating} ({appartment.numberOfStars})
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AppartmentListItem;

const styles = StyleSheet.create({
  card: {
   // position: "absolute",
     backgroundColor: "white",
    // bottom: 70,
    // left: 10,
    // right: 10,
    flexDirection: "row",
    borderRadius:20,
    overflow:'hidden'
  },
  title: {
    fontFamily: "InterBold",
    marginBottom: 10,
    fontSize:16
  },
  image: {
    width: 150,
    aspectRatio: 1,
  },
  rightContainer: {
    padding: 10,
    flex: 1,
  },
  price: {
    fontFamily: "InterBold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
  rating: {},
  description: {
    color: "gray",
  },
});
