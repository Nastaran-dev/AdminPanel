"use client"
import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import { myTheme } from "../../../store/Store";
export default function CmBox2() {
  const{dark}=useContext(myTheme)
  return (
    <Box sx={{width:"100%" , display:"flex" , p:1 ,gap:"20px"}}>
      <Box sx={{width:{xs:"100%" , md:"70%" , height:"500px" , backgroundColor:"red", borderRadius:"10px" , backgroundColor:dark?"#1e2126":"white" , border:"0.1px solid #35383c"}}}></Box>
      <Box sx={{width:{xs:"100%" , md:"30%" , height:"500px" , backgroundColor:"green", borderRadius:"10px"}}}></Box>
    </Box>
  )
}
