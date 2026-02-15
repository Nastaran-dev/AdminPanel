import React from "react";
import Box from '@mui/material/Box';
import CmBox1 from "./components/ComponentPage/CmBox1";
import CmBox2 from "./components/ComponentPage/CmBox2";
import CmBox3 from "./components/ComponentPage/CmBox3";
export default function page() {
  return (
    <Box sx={{ overflow: "hidden", maxWidth: "90vw" }}>
      <CmBox1 />
      <CmBox2 />
      <CmBox3 />
    </Box>
  );
}
