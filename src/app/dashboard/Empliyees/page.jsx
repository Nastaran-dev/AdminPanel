import React from 'react'
import Box from '@mui/material/Box';
import Buttons from './Buttons';
import BasicTextFields from './BasicTextFields';
export default function page() {
  return (
    <Box sx={{border:"1px solid gray",borderRadius:"10px",p:2}}>
      <Buttons/>
      <BasicTextFields/>
    </Box>
  )
}
