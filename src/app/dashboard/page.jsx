"use client";
import { useContext } from "react";
import { myTheme } from "../store/Store";
import Box from "@mui/material/Box";
import StyleIcon from "@mui/icons-material/Style";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";   
import Input from '@mui/material/Input';
import InputBase from '@mui/material/InputBase';
export default function GroupAvatars() {
  const { dark } = useContext(myTheme);
    const [age, setAge] =useState("Monthly");
  const Style = {
    Style1: {
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      justifyContent: "center",
      gap: "20px",
      width: "100%",
    },
    Style2: {
      display: "flex",
      padding: 2,
      justifyContent: "space-between",
      width: { xs: "100%", md: "50%" },
      backgroundColor: "#633dfe",
      backgroundImage: 'url("/images/background.png")',
      backgroundSize: "400px",
      backgroundRepeat: "no-repeat",
      height: "220px",
      borderRadius: "10px",
      gap: "20px",
    },
    Style3:{
      width:{xs:"25px" , md:"40px"} , height:80 , backgroundColor:"#9278fe"  ,outline:"none" , "&.Mui-focused":{backgroundColor:"#7258de"} , borderRadius:"3px" , caretColor:"transparent", outline:"none"
    }
  };

  return (
    <Box sx={Style.Style1}>
      <Box sx={Style.Style2}>
        <Box
          sx={{
            width: { xs: "50%", md: "20%" },
           
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <Box>
            <Typography sx={{ color: "white", fontWeight: "bold" , fontSize:{xs:"20px" , sm:"30px"} }}>
              Revenue
            </Typography>
            <Typography sx={{ color: "white", fontWeight: "bold" , fontSize:{xs:"25px" , sm:"40px"} }}>
              $34,129.03
            </Typography>
          </Box>
          <Typography sx={{ color: "white", fontWeight: "bold" ,fontSize:{xs:"14px" , sm:"12.5px"} }}>
            +8.50% prev month
          </Typography>
        </Box>
        <Box sx={{ width: { xs: "50%", md: "20%" } , display:"flex" , flexDirection:"column" , justifyContent:"space-between" }}>
          <Box sx={{  backgroundColor: dark ? "#1e1e1e" : "#ffffff" , borderRadius: "20px",overflow:"hidden"}}>
            <FormControl fullWidth >
              <Select
                onChange={(event)=> setAge(event.target.value)}
                value={age}
                sx={{
                  p:0,
                  color:dark?"white":"black",
                  "& .MuiSelect-icon":{
                    color:dark?"white":"black"
                  }}}
              
              >
                <MenuItem value="Monthly">Monthly</MenuItem>
                <MenuItem value="Weekly">Weekly</MenuItem>
                <MenuItem value="Yearly">Yearly</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{display:"flex" , gap:"5px" , rotate:"180deg" , justifyContent:"center"}}>
           <InputBase sx={{...Style.Style3 , height:90}}></InputBase>
           <InputBase sx={{...Style.Style3 , height:30}}></InputBase>
           <InputBase sx={{...Style.Style3 , height:60 , backgroundColor:"#fff"}}></InputBase>
           <InputBase sx={{...Style.Style3 , height:80}}></InputBase>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ ...Style.Style2, backgroundColor: dark ? "#1e1e1e" : "#ffffff" }}
      ></Box>
    </Box>
  );
}
