import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuthenticator } from '@aws-amplify/ui-react-native'

type Props = {}

const ProtectedScreen = (props: Props) => {

  const {signOut} =useAuthenticator()
  return (
    <View>
      <Text>protected</Text>
      <Button title='Sign Out' onPress={signOut}/>
    </View>
  )
}

export default ProtectedScreen

const styles = StyleSheet.create({})