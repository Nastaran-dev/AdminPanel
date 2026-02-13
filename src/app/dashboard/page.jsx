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
  };

  return (
    <Box sx={Style.Style1}>
      <Box sx={Style.Style2}>
        <Box
          sx={{
            width: { xs: "50%", md: "20%" },
            backgroundColor: "red",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <Box>
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              Revenue
            </Typography>
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              $34,129.03
            </Typography>
          </Box>
          <Typography sx={{ color: "white", fontWeight: "bold" }}>
            +8.50% prev month
          </Typography>
        </Box>
        <Box sx={{ width: { xs: "50%", md: "20%" } }}>
          <Box sx={{ minWidth: 120 ,backgroundColor: dark ? "#1e1e1e" : "#ffffff" , borderRadius: "20px",overflow:"hidden"}}>
            <FormControl fullWidth >
              <Select
                sx={{ color:dark?"white":"black"  }} 
                  onChange={(event)=> setAge(event.target.value)}
                value={age}
                // eslint-disable-next-line react/jsx-no-duplicate-props
                sx={{
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
        </Box>
      </Box>
      <Box
        sx={{ ...Style.Style2, backgroundColor: dark ? "#1e1e1e" : "#ffffff" }}
      ></Box>
    </Box>
  );
}
