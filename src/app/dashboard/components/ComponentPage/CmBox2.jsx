"use client";
import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { myTheme } from "../../../store/Store";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import { BarChart } from "@mui/x-charts/BarChart";
import Image from "next/image";
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
            lg: "70%",
           height:{xs:"680px",sm:"800px",md:"680px"},
            backgroundColor: "red",
            borderRadius: "10px",
            backgroundColor: dark ? "#1e2126" : "white",
            border: "0.1px solid #bebdbd",
           
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: { xs: 1, md: 3 },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "17px",
                  sm: "30px",

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
              <Typography sx={{ color: "gray" }}>Income</Typography>
              <Box sx={{ display: "flex", gap: "10px" }}>
                {" "}
                <Typography
                  sx={{
                    color: dark ? "white" : "black",
                    fontSize: { xs: "20px", sm: "35px" },
                  }}
                >
                  $20,687.69
                </Typography>
                <Typography sx={{ color: "green", fontSize: { sm: "20px" } }}>
                  +8.50%
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-start" }}>
            <Button
              sx={{
                backgroundColor: dark ? "#332855" : "#c8deff",
                color: "#273bcc",
                padding: { sm: "10px 30px" },
                "&:hover": { backgroundColor: "#633dfe" },
              }}
              variant="outlined"
              startIcon={<DownloadIcon />}
            >
              Download
            </Button>
          </Box>
        </Box>
        {/* ///////////////////////////////////////////////////////////////////////// */}
        <Box sx={{ width: "100%", height: 300 }}>
          <BarChart
            series={[
              { data: pData, label: "pv", id: "pvId" },
              { data: uData, label: "uv", id: "uvId" },
            ]}
            xAxis={[
              {
                data: xLabels,
                height: 28,
                tickLabelStyle: {
                  fill: dark ? "white" : "black",
                  backgroundColor: "black",
                },
              },
            ]}
            yAxis={[
              { width: 50, tickLabelStyle: { fill: dark ? "white" : "black" } },
            ]}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent:"space-evenly" , flexWrap:"wrap",margin:"0 5px" }}>
          <Box
            sx={{
              width: { xs: "47%", md: "30%" },
              border: "1px solid #bebdbd",
              borderRadius: "10px",
              
              p: 1.5,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Typography variant="body1" color="initial"  sx={{color:"gray"}}>
                Total Revenue
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontWeight: "600",color:dark?"white":"black"  }}
              >
                $201,843.52
              </Typography>
            </Box>
            <Typography variant="body1" color="initial" sx={{ color: "green" }}>
              +5.32%
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "47%", md: "30%" },
              border: "1px solid #bebdbd",
              borderRadius: "10px",
              p: 1.5,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Typography variant="body1" color="initial" sx={{color:"gray"}}>
                Total Revenue 
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontWeight: "600" , color:dark?"white":"black"  }}
              >
                $201,843.52
              </Typography>
            </Box>
            <Typography variant="body1" color="initial" sx={{ color: "red" , fontWeight:"600" }}>
              -2.32%
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "30%" },
              border: "1px solid #bebdbd",
              marginTop:{xs:"10px",md:"0px"},
              borderRadius: "10px",
              padding:"0 10px",
              margin:"10px 5px"
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Typography variant="body1" color="initial "  sx={{color:"gray"}}>
                Total Revenue
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontWeight: "600",color:dark?"white":"black"  }}
              >
                $201,843.52
              </Typography>
            </Box>
            <Typography variant="body1" color="initial" sx={{ color: "green" }}>
              +6.32%
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: {
            xs: "100%",
            lg: "30%",
            height:{xs:"680px",sm:"800px",md:"680px"},
            backgroundColor: "green",
            borderRadius: "10px",
            backgroundColor: dark ? "#1e2126" : "white",
            border: "0.1px solid #bebdbd",
            // boxShadow: "inset -17px 23px 65px 4px rgba(179,149,43,0.87)",
            display:"flex",
            flexDirection:"column",
            gap:"10px",
          
          },
        }}
      >
        <Typography sx={{color:dark?"white":"black",fontSize:"25px",margin:"10px auto",fontWeight:"bold"}}>Congratulation James</Typography>
        <Box sx={{display:"flex" , justifyContent:"center"}}>
         <Image src="/images/best-removebg-preview.png" width={500} height={500}  alt="My"></Image>
        </Box>
        <Box sx={{display:"flex" , gap:"3px",flexDirection:"column"}}>
          <Typography sx={{color:dark?"white":"black",fontWeight:"600",margin:"auto",fontSize:"50px"}}>$1200K</Typography>
          <Typography sx={{color:dark?"white":"#858991",margin:"auto"}}>0.95% since last year</Typography>
          <Typography sx={{color:dark?"white":"#7883a0",margin:"auto",textAlign:"center"}}>You have reached 99.9% of your sales target today.</Typography>
        </Box>
         <Typography sx={{color:"#292df0",margin:"auto",p:1,fontWeight:"700",cursor:"pointer"}}>Updated 20 minutes ago.</Typography>
      </Box>
    </Box>
  );
}
