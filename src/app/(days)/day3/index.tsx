import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import EditorScreen from './editor'

type Props = {}

const index = (props: Props) => {
  return (
    <SafeAreaView style={styles.page}>
        <Stack.Screen options={{headerShown:false}}/>
     <EditorScreen/>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
    page:{
        flex:1
    }
})