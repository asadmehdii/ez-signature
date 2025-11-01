"use client"
import React, { FC, useState } from "react";
import Button from "../button";
import { Box, Drawer } from "@mui/material";
import ContentBox from "../contentBox";
import Navigate from "../linkText";
import Route from "@/app/utils/routes";

type NavbarProps = {
  showBtn?: boolean
}

const Navbar: FC<NavbarProps> = ({showBtn = true}) => {
  const [showDrawer,setShowDrawer] = useState<boolean>(false)
  const handleDrawer = ()=>{
    setShowDrawer(!showDrawer)
  }
  return (
    <nav className="navbar">
    <ContentBox sx={{height:"97px",display:"flex",alignItems:'center',justifyContent:'space-between'}}  mt={0} >
      <Box display={{xs:"inline-block",lg:"none"}} zIndex={1300} bgcolor={"red"} width={"fit-content"}>
      <label className="bar" htmlFor="check">
      <input checked={showDrawer} onChange={handleDrawer} type="checkbox" id="check"/>

      <span className="top"></span>
      <span className="middle"></span>
      <span className="bottom"></span>
      </label>
      </Box>
     <Navigate sx={{display:{xs:"none",lg:"inline-block"}}} to={Route.HOME} fontSize={28} fontWeight="800" text="EzSignature"/>
     <Box component="div" columnGap={5} display={{xs:"none",lg:"flex"}}>
      <Navigate to={Route.FEATURE} fontSize={18} fontWeight="400" text="Feature" hoverColor="#21D0B3"/>
      <Navigate to={Route.PRICING} fontSize={18} fontWeight="400" text="Pricing" hoverColor="#21D0B3"/>
      <Navigate to={Route.HELP} fontSize={18} fontWeight="400" text="Help Center" hoverColor="#21D0B3"/>
      <Navigate to={Route.DEVELOPER} fontSize={18} fontWeight="400" text="Developer" hoverColor="#21D0B3"/>
    </Box>
    <Box columnGap={{xs:1,sm:2,md:3}} display={"flex"} pl={0.5}>
    {showBtn && <>
    <Button to={Route.LOGIN} type="outlined" borderRadius={"14px"} width={134} height={49} fontSize={18} fontWeight="400" hoverStyle={{bgcolor:"var(--text-color)",borderColor:"transparent",color:"#fff"}}>Login </Button>
    <Button to={Route.SIGNUP} borderRadius={"14px"} width={134} height={49} fontSize={18} fontWeight="400" hoverStyle={{bgcolor:"#fff",border:"1px solid  var(--secondary-color)",color:"var(--secondary-color)"}} >  Sign up </Button>
    </>}
    </Box>
    </ContentBox>
    <Drawer
       sx={{
        display: { xs: 'block', lg: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280,bgcolor:"#E9F1FE",height:"100vh",overflow:"hidden" },
      }}
      anchor={"left"}
      open={showDrawer}
      onClose={()=>{setShowDrawer(false)}}
    >
      <Navigate sx={{textAlign:"center",mt:4.3,mr:2}} to={Route.HOME} text="EzSignature" fontSize={21} fontWeight="800"  />
      <Box width={"100%"} display={"flex"} flexDirection={"column"} mt={4}>
      <Navigate to={Route.FEATURE} fontSize={18} sx={{ml:4}} fontWeight="400" text="Feature"/><hr style={{width:"100%",border:"1px solid #DBDBDB"}}/>
      <Navigate to={Route.PRICING} fontSize={18} sx={{ml:4}} fontWeight="400" text="Pricing"/><hr style={{width:"100%",border:"1px solid #DBDBDB"}}/>
      <Navigate to={Route.HELP} fontSize={18} sx={{ml:4}} fontWeight="400" text="Help Center"/><hr style={{width:"100%",border:"1px solid #DBDBDB"}}/>
      <Navigate to={Route.DEVELOPER} fontSize={18} sx={{ml:4}} fontWeight="400" text="Developer"/><hr style={{width:"100%",border:"1px solid #DBDBDB"}}/>
      </Box>
    </Drawer>
    </nav>
  );
};


export default Navbar;
