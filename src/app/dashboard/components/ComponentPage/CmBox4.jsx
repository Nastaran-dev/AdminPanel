import React from 'react'
import Box from '@mui/material/Box';
export default function CmBox4() {
  return (
    <Box  sx={{
        width: "100%",
        display: "flex",
        gap: "20px",
        flexDirection: { xs: "column", md: "row" },
        marginTop: "20px",
        overflowX: "hidden",
      }}>
      <Box  sx={{
          width: {
            xs: "100%",
            md: "60%",
          },
          height: "400px",
          borderRadius: "10px",
          backgroundColor: dark ? "#1e2126" : "white",
          border: "0.1px solid #35383c",
        }}>
          
        </Box>








        {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Box  sx={{
          width: {
            xs: "100%",
            md: "40%",
          },
          height: "400px",
          borderRadius: "10px",
          backgroundColor: dark ? "#1e2126" : "white",
          border: "0.1px solid #35383c",
        }}></Box>
    </Box>
  )
}
