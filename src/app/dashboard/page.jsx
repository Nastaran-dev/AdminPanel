"use client"
import { useContext } from "react";
import { myTheme } from "../store/Store";
import Box from '@mui/material/Box';
import StyleIcon from '@mui/icons-material/Style';
export default function GroupAvatars() {
  const{dark}=useContext(myTheme)
  const Style={
    Style1:{display: 'flex', flexDirection:{xs:"column" , md:"row"}, justifyContent: 'center' , gap:"20px", width:"100%"},
    Style2:{display:"flex" ,padding:2, flexDirection:"column", alignItems:"center", justifyContent:"center", width:{xs:"100%", md:"50%"}, backgroundColor:"#633dfe" , backgroundImage:'url("/images/background.png")' , backgroundSize:"400px" , backgroundRepeat:"no-repeat" , height:"220px" , borderRadius:"10px"},
  }
 
  return (
    <Box  sx={Style.Style1}>
      <Box sx={Style.Style2}>
      </Box>
      <Box sx={{...Style.Style2 , backgroundColor: dark ? '#1e1e1e' : '#ffffff'}}></Box>
    </Box>
  );
}
