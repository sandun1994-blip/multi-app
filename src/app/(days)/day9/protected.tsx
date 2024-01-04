import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const ProtectedScreen = (props: Props) => {
  return (
    <View>
      <Text>protected</Text>
    </View>
  )
}

export default ProtectedScreen

const styles = StyleSheet.create({})