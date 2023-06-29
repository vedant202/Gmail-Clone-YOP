import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'

export default function SuspenceLoader() {
  return (
   <Box>
    <CircularProgress />
    <Typography>Loading</Typography>
   </Box>
  )
}
