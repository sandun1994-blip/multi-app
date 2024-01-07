import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


export default function ProtectedScreen() {
  return (
    <View>
      <Text>ProtectedScreen</Text>
      <Link href={'/day10/protected/second'}>Prev page 2</Link>
    </View>
  )
}

const styles = StyleSheet.create({})