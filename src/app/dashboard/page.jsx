import React from "react";
import Box from '@mui/material/Box';
import CmBox1 from "./components/ComponentPage/CmBox1";
import CmBox2 from "./components/ComponentPage/CmBox2";
import CmBox3 from "./components/ComponentPage/CmBox3";
import CmBox4 from "./components/ComponentPage/CmBox4";
export default function page() {
  return (
    <Box>
      <CmBox1 />
      <CmBox2 />
      <CmBox3 />
      <CmBox4 />
    </Box>
  );
}
