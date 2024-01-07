import React,{ createContext, useContext, useState } from "react";

const BiometricsContext = createContext<any>({});



const BiometricProvider = ({ children }) => {

    const [unlocked,setUnlocked] =useState(false)
  return (
    <BiometricsContext.Provider value={{unlocked,setUnlocked}}>
      {children}
    </BiometricsContext.Provider>
  );
};


export default BiometricProvider

export const useBiometrics =()=>useContext(BiometricsContext)