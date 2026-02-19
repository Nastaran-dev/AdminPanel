"use client";
import { useContext } from "react";
import { myTheme } from "../../../store/Store";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import InputBase from "@mui/material/InputBase";

export default function CmBox1() {
  const { dark } = useContext(myTheme);
  const [age, setAge] = useState("Monthly");
  const Style = {
    Style1: {
      display: "flex",
      flexDirection: { xs: "column", lg: "row" },
      justifyContent: "center",
      gap: "20px",
      
      width: "100%",
    },
    Style2: {
      display: "flex",
      padding: 2,
      justifyContent: "space-between",
      width: { xs: "100%", lg: "50%" },
      backgroundColor: "#633dfe",
      backgroundImage: 'url("/images/background.png")',
      backgroundSize: "400px",
      backgroundRepeat: "no-repeat",
      height: "220px",
      borderRadius: "10px",
      border:"1px solid #bebdbd",
      gap: "20px",
    },
    Style3: {
      width: { xs: "50%", md: "20%" },
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "10px",
    },
    Style4: {
      color: "white",
      fontWeight: "bold",
    },
    Style5: {
      width: { xs: "50%", md: "20%" },
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
     
    },
    Style6: {
      backgroundColor: dark ? "#1e1e1e" : "#ffffff",
      borderRadius: "20px",
      overflow: "hidden",
    },
    Style7: {
      width: { xs: "25px", md: "40px" },
      height: 80,
      backgroundColor: "#9278fe",
      outline: "none",
      "&.Mui-focused": { backgroundColor: "#7258de" },
      borderRadius: "3px",
      caretColor: "transparent",
      outline: "none",
    },
  };

  return (
    <Box sx={Style.Style1}>
      <Box sx={Style.Style2}>
        <Box sx={Style.Style3}>
          <Box>
            <Typography
              sx={{
                ...Style.Style4,
                fontSize: { xs: "20px", sm: "30px" },
              }}
            >
              Revenue
            </Typography>
            <Typography
              sx={{
                ...Style.Style4,
                fontSize: { xs: "25px", sm: "40px" },
              }}
            >
              $34,129.03
            </Typography>
          </Box>
          <Typography
            sx={{
              ...Style.Style4,
              fontSize: { xs: "14px", sm: "12.5px" },
            }}
          >
            +8.50% prev month
          </Typography>
        </Box>
        <Box sx={Style.Style5}>
          <Box sx={Style.Style6}>
            <FormControl fullWidth>
              <Select
                onChange={(event) => setAge(event.target.value)}
                value={age}
                sx={{
                  p: 0,
                  color: dark ? "white" : "black",
                  "& .MuiSelect-icon": {
                    color: dark ? "white" : "black",
                  },
                }}
              >
                <MenuItem value="Monthly">Monthly</MenuItem>
                <MenuItem value="Weekly">Weekly</MenuItem>
                <MenuItem value="Yearly">Yearly</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              rotate: "180deg",
              justifyContent: "center",
            }}
          >
            <InputBase sx={{ ...Style.Style7, height: 90 }}></InputBase>
            <InputBase sx={{ ...Style.Style7, height: 30 }}></InputBase>
            <InputBase
              sx={{ ...Style.Style7, height: 60, backgroundColor: "#fff" }}
            ></InputBase>
            <InputBase sx={{ ...Style.Style7, height: 80 }}></InputBase>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ ...Style.Style2, backgroundColor: dark ? "#1e1e1e" : "#ffffff" }}
      >
        <Box sx={Style.Style3}>
          <Box>
            <Typography
              sx={{
                ...Style.Style4,
                fontSize: { xs: "20px", sm: "30px" },
                color: dark ? "white" : "black",
              }}
            >
              Revenue
            </Typography>
            <Typography
              sx={{
                ...Style.Style4,
                fontSize: { xs: "25px", sm: "40px" },
                color: dark ? "white" : "black",
              }}
            >
              $34,129.03
            </Typography>
          </Box>
          <Typography
            sx={{
              ...Style.Style4,
              fontSize: { xs: "14px", sm: "12.5px" },
              color: dark ? "white" : "black",
            }}
          >
            +8.50% prev month
          </Typography>
        </Box>
        <Box sx={Style.Style5}>
          <Box sx={{...Style.Style6 , border:"1px solid gray"}}>
            <FormControl  fullWidth >
              <Select
                onChange={(event) => setAge(event.target.value)}
                value={age}
                sx={{
                  p: 0,
                  color: dark ? "white" : "black",
                  "& .MuiSelect-icon": {
                    color: dark ? "white" : "black",
                  },
                }}
              >
                <MenuItem value="Monthly">Monthly</MenuItem>
                <MenuItem value="Weekly">Weekly</MenuItem>
                <MenuItem value="Yearly">Yearly</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              rotate: "180deg",
              justifyContent: "center",
            }}
          >
            <InputBase sx={{ ...Style.Style7, height: 90 , backgroundColor:dark?"#30343b":"#dadcdf" }}></InputBase>
            <InputBase sx={{ ...Style.Style7, height: 30 , backgroundColor:dark?"#30343b":"#dadcdf" }}></InputBase>
            <InputBase
              sx={{ ...Style.Style7, height: 60, backgroundColor:dark? "#cdd9f6":"black" }}
            ></InputBase>
            <InputBase sx={{ ...Style.Style7, height: 80 , backgroundColor:dark?"#30343b":"#dadcdf" }}></InputBase>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
