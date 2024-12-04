import { Box, Typography } from '@mui/material'
import React from 'react'
import Assests from '@/app/assests/images';

type Props = {
 isActive:"signUp"|"account"|"bussiness"
}

const SandboxTabs:React.FC<Props> = ({isActive}) => {
  return (
    <Box m={"auto"} mt={3} rowGap={0.5} display={"flex"} flexDirection={{xs:"column",sm:"row"}} justifyContent={"space-between"} alignItems={"center"} maxWidth={540}> 
       <Typography bgcolor={isActive === "signUp"?"#21D0B3" :"#BAFFF4"} sx={Styles.tabs}>
        <Box component="img" src={Assests.UserIcon.src} alt='icon_here'/> Sign up
        </Typography>
        <Box sx={Styles.divider} />
       <Typography bgcolor={isActive === "account"?"#21D0B3" :"#BAFFF4"} sx={Styles.tabs}>
       <Box component="img" src={Assests.DocumentIcon.src} alt='icon_here'/>Account
       </Typography>
       <Box sx={Styles.divider} />
       <Typography bgcolor={isActive === "bussiness"?"#21D0B3" :"#BAFFF4"} sx={Styles.tabs}>
        <Box component="img" src={Assests.BussinessIcon.src} alt='icon_here'/>Bussiness
      </Typography>
    </Box>
  )
}

const Styles = {
    tabs:{
    fontSize:16,
    fontWeight:600,
    fontFamily:"var(--text-mada)",
    width:110,
    colors:"#000000",
    textAlign:"center",
    borderRadius:"94px",
    display:"flex",
    justifyContent:"space-evenly",
    alignItems:"center",
    py:1,
    px:2
    },
    divider: {
    width: "1px",
    height: {xs:"40px",sm:"50px"}, 
    backgroundColor: "#000000", 
    colors:"#000000",
    mx: 2, 
    transform:{xs:"", sm:"rotate(90deg)"},
    m:"auto"
    },
}

export default SandboxTabs