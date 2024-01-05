import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { signIn, signUp } from "aws-amplify/auth";
import { router } from "expo-router";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSignInPressed = async () => {
    console.log("sign in");
    setError("");

    try {
      const { isSignedIn } = await signIn({ username: email, password });
      if (isSignedIn) {
        router.push("/(days)/day9/protected");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onSignUpPressed = async () => {
    console.log("sign in");
    setError('')
   
    
    try {
        const {}=await signUp({ username: email, password ,options:{autoSignIn:true,userAttributes:{} }});
        // if (isSignedIn) {
        //     router.push('/(days)/day9/protected')
        // }
    } catch (error) {
        console.log(error.message);
        
    }
   
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign-in</Text>
      <TextInput
        placeholder="@mail.com"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="sign In" onPress={onSignInPressed} />

      <Button title="Create an Account" onPress={onSignUpPressed} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontFamily: "InterSemi",
    fontSize: 24,
    color: "gray",
  },
  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "white",
  },
});
