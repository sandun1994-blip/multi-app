  import { StyleSheet, Text, View } from 'react-native'
  import React from 'react'
import { Link } from 'expo-router'
  
  export default function ProtectedScreen() {
    return (
      <View>
        <Text>ProtectedScreen two</Text>

        <Link href={'/day10/protected'}>Prev page 1</Link>
      </View>
    )
  }
  
  const styles = StyleSheet.create({})