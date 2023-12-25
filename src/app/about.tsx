import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

type Props = {}

const about = (props: Props) => {
  return (
    <View>
      <Stack.Screen options={{title:'About'}}/>
      <Text>about</Text>
      <Link href={'/'}>go Home</Link>
    </View>
  )
}

export default about

const styles = StyleSheet.create({})