"use client"
import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { myTheme } from "@/app/store/Store";
export default function Buttons() {
    const{dark}=useContext(myTheme)
  return (
    <Stack spacing={2} sx={{display:"flex" , justifyContent:"space-between"}}>
      <Box
        sx={{ display: "flex", gap: "20px", justifyContent: "space-evenly" ,flexWrap:"wrap",alignItems:"center"}}
      >
         <Typography sx={{display:{xs:"none",lg:"flex"},color:dark?"white":"black"}}>Employee</Typography>
         
        <Button variant="contained" sx={{backgroundColor:"#9ec9ff",color:"#633dfe",fontWeight:"700","&:hover":{backgroundColor:"#633dfe","&:hover":{color:"#fff"}},display:"flex",gap:"5px",justifyContent:"space-between",fontSize:{xs:"10px",md:"15px"}}}><EditCalendarIcon/>Export Report</Button>
        <Button variant="contained" sx={{backgroundColor:"#633dfe",color:"#fff",fontWeight:"700",display:"flex",gap:"5px",justifyContent:"space-between",fontSize:{xs:"10px",md:"15px"}}}><AddIcon/>Add Employee</Button>
         <Button variant="contained" sx={{backgroundColor:"black",color:"#fff",fontWeight:"700",display:"flex",gap:"5px",justifyContent:"space-between",fontSize:{xs:"10px",md:"15px"}}}><AddIcon/>Invite Employee</Button>
      </Box>
    </Stack>
  );
}
