import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'
import MarkdownDisplay from '@/components/EditorScreen'

type Props = {}

const description =` # AirBNB Maps`

const DayDetailScreen = (props: Props) => {
  return (
    <SafeAreaView edges={['bottom']} style={{flex:1}}>
        <Stack.Screen options={{title:'Maps'}}/>
    <MarkdownDisplay>{description}</MarkdownDisplay>
    </SafeAreaView>
  )
}

export default DayDetailScreen