import { Box, Typography } from '@mui/material'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <Box display={"flex"} flexDirection={"column"} px={40}>
            <Typography fontSize={"40px"} textAlign={"left"} sx={{letterSpacing : 1}}>Welcome,</Typography>
            <Typography fontSize={"40px"} textAlign={"left"} fontWeight={500} sx={{letterSpacing : 3 , color : "#8093F1"}}>Parth Nandkumar Jathar</Typography>
        </Box>
    </div>
  )
}

export default HomePage