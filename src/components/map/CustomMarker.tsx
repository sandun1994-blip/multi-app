import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps'

type Props = {}

const CustomMarker = ({appartment,onPress}) => {
  return (
    <Marker
            key={appartment.id}
            coordinate={{
              latitude: appartment.latitude,
              longitude: appartment.longitude,
            }}
            title={appartment.title}
            description={'hey there'}
            onPress={onPress}
          >
            <View
              style={{
                backgroundColor: "white",
                padding: 5,
                paddingHorizontal:10,
                borderWidth: 1,
                borderColor: "gray",
                borderRadius: 20,
              }}
            >
              <Text style={{fontFamily:'InterBold'}}>${appartment.price}</Text>
            </View>
          </Marker>
  )
}

export default CustomMarker

const styles = StyleSheet.create({})