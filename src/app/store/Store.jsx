"use client"
import React, {  createContext, useState } from 'react'
export const myTheme = createContext(null)
export default function Store({children}) {
    const[dark  , setDark]=useState(true)
  return (
    <myTheme.Provider value={{dark , setDark}}>
      {children}
    </myTheme.Provider>
  )
}
