import { Box, Typography } from '@mui/material'
import React from 'react'

const SandboxHeader:React.FC = () => {
  return (
    <Box mt={8} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} textAlign={'center'}> 
      <Typography fontFamily={"var(--text-mada)"} fontWeight={700} fontSize={{xs:40,md:55}}>Powerful eSignature API</Typography>
      <Typography maxWidth={611} fontFamily={"var(--text-mada)"} fontWeight={600} fontSize={16}>Thank you for choosing Ez Signature Sign. You&apos;re just a few steps away from making the digital leap.</Typography>
    </Box>
  )
}
export default SandboxHeader