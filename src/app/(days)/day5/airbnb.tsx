import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { Stack } from "expo-router";
import appartments from "assets/data/day5/appartments.json";
import CustomMarker from "@/components/map/CustomMarker";
import AppartmentListItem from "@/components/map/AppartmentListItem";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
type Props = {};

const AirbnbScreen = (props: Props) => {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [mapRegion,setMapRegion]=useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => [100, "50%", "90%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView
        style={styles.map}
       // initialRegion={mapRegion}
       region={mapRegion}
      >
        {appartments.map((appartment) => (
          <CustomMarker
            appartment={appartment}
            key={appartment.id}
            onPress={() => setSelectedApartment(appartment)}
          />
        ))}
      </MapView>

      {selectedApartment && (
        <View>
          <AppartmentListItem
            appartment={selectedApartment}
            containerStyle={{
              position: "absolute",
              bottom: snapPoints[0] || 10,
              left: 10,
              right: 10,
            }}
          />
        </View>
      )}

      <BottomSheet
        // ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
         onChange={handleSheetChanges}
        style={styles.container}
        enablePanDownToClose
      >
        <View style={styles.contentContainer}>
          <Text style={styles.listTitle}>Over {appartments.length} places 🎉</Text>
          <BottomSheetFlatList
          showsVerticalScrollIndicator ={false}
            data={appartments}
            contentContainerStyle={{ gap: 10, padding: 10 }}
            renderItem={({ item }) => {
              return <AppartmentListItem appartment={item} />;
            }}
          />
        </View>
      </BottomSheet>
    </View>
  );
};

export default AirbnbScreen;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    padding: 24,
  },
  contentContainer: {
    flex: 1,
    // alignItems: "center",
   //  backgroundColor: "red",
  },
  listTitle:{
    textAlign:'center',
    fontFamily:'InterSemi',
    fontSize:16,
    marginBottom:20,
    marginVertical:10,
    
  }
});
