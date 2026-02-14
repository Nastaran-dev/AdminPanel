"use client";
import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { myTheme } from "../../../store/Store";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DownloadIcon from '@mui/icons-material/Download';
import { BarChart } from '@mui/x-charts/BarChart';
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];
export default function CmBox2() {
  const { dark } = useContext(myTheme);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: "20px",
        flexDirection: { xs: "column", md: "row" },
        marginTop: "20px",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "70%",
            height: "500px",
            backgroundColor: "red",
            borderRadius: "10px",
            backgroundColor: dark ? "#1e2126" : "white",
            border: "0.1px solid #35383c",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", p:{xs:1 , md:3} }}>
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "17px",
                  sm:"30px",
                 
                  color: dark ? "white" : "black",
                  marginTop: "10px",
                },
              }}
            >
              Spending Statistic
            </Typography>
            <Box
              sx={{
                marginTop: "20px",
                display: "flex",
                gap: "10px",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ color: "gray"}}>Income</Typography>
              <Box sx={{display:"flex"  , gap:"10px"}}> <Typography sx={{ color: dark ? "white" : "black",fontSize:{xs:"20px",sm:"35px"}  }}>
                $20,687.69
               
              </Typography>
               <Typography sx={{ color: "green", fontSize:{sm:"20px"} }}>
                  +8.50%
                </Typography></Box>
             
            </Box>
          </Box>
          <Box sx={{display:"flex" , alignItems:"flex-start" , }}><Button sx={{backgroundColor:dark?"#332855":"#c8deff",color:"#273bcc",padding:{sm:"10px 30px"} , "&:hover":{backgroundColor:"#633dfe"}}} variant="outlined" startIcon={<DownloadIcon />}>
            Download
          </Button></Box>
          
        </Box>
        {/* ///////////////////////////////////////////////////////////////////////// */}
          <Box sx={{ width: '100%', height: 300 }}>
      <BarChart
     
        series={[
          { data: pData, label: 'pv', id: 'pvId' },
          { data: uData, label: 'uv', id: 'uvId' },
        ]}
        xAxis={[{ data: xLabels, height: 28,tickLabelStyle:{fill:dark?"white":"black",backgroundColor:"black"} }]}
        yAxis={[{ width: 50 ,tickLabelStyle:{fill:dark?"white":"black"}}]}
      />
    </Box>
      </Box>

      <Box
        sx={{
          width: {
            xs: "100%",
            md: "30%",
            height: "500px",
            backgroundColor: "green",
            borderRadius: "10px",
            backgroundColor: dark ? "#1e2126" : "white",
            border: "0.1px solid #35383c",
            boxShadow: "inset -17px 23px 65px 4px rgba(179,149,43,0.87)",
          },
        }}
      ></Box>
    </Box>
  );
}
