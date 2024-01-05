import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { AuthUser, getCurrentUser } from "aws-amplify/auth";
import { Slot } from "expo-router";
import React, { useEffect, useState } from "react";


export default function Day9Layout(){
    const [user,setUser] = useState<AuthUser>()

    //const authStatus =useAuthenticator(context=>[context.authStatus])
   
    const fetchUser =async()=>{
        const res = await getCurrentUser()
        setUser(res)

    }

    useEffect(()=>{
       // fetchUser()
    },[])

    console.log(user);
    
    return <Slot/>
}