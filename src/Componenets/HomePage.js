import { Box, Typography } from '@mui/material'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <Box display={"flex"} flexDirection={"column"} px={40}>
            <Typography fontSize={"30px"} textAlign={"left"} sx={{letterSpacing : 1}}>Welcome,</Typography>
            <Typography fontSize={"30px"} textAlign={"left"} fontWeight={500} sx={{letterSpacing : 2 , color : "#8093F1"}}>Parth Nandkumar Jathar</Typography>
        </Box>
    </div>
  )
}

export default HomePage