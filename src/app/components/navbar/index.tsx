import React, { FC } from "react";
import Button from "../button";
import Assests from "@/app/assests/images";
import { Box } from "@mui/material";
import ContentBox from "../contentBox";
import Navigate from "../linkText";
import Route from "@/app/utils/routes";

type NavbarProps = {
  showBtn?: boolean
}

const Navbar: FC<NavbarProps> = ({showBtn = true}) => {
  return (
    <nav>
    <ContentBox sx={{width:"100%",height:"97px",boxSizing:"border-box",display:"flex",alignItems:'center',justifyContent:'space-between'}}  mt={0} >
      <Navigate to={Route.HOME} fontSize={28} fontWeight="800" text="EzSignature"/>
     <Box component="div" columnGap={5} display={{xs:"none",lg:"flex"}}>
      <Navigate to={Route.FEATURE} fontSize={18} fontWeight="400" text="Feature" hoverColor="#21D0B3"/>
      <Navigate to={Route.PRICING} fontSize={18} fontWeight="400" text="Pricing" hoverColor="#21D0B3"/>
      <Navigate to={Route.HELP} fontSize={18} fontWeight="400" text="Help Center" hoverColor="#21D0B3"/>
      <Navigate to={Route.DEVELOPER} fontSize={18} fontWeight="400" text="Developer" hoverColor="#21D0B3"/>
    </Box>
    <Box columnGap={3} display={{xs:"none",lg:"flex"}}>
    {showBtn && <>
    <Button to={Route.LOGIN} borderRadius={19} width={149} height={63} fontSize={18} fontWeight="400" borderWidth={2} backgroundColor="#ffffff">Login </Button>
    <Button to={Route.SIGNUP} borderRadius={19} width={149} height={63} fontSize={18} fontWeight="400" backgroundColor="var(--secondary-color)">  Sign up </Button>
    </>}
    </Box>
      <Box style={{objectFit:'contain',cursor:"pointer",padding:5,border:"5px solid var(--secondary-color)",borderRadius:"8px"}} display={{xs:"block",lg:"none"}} width={25} height={25} component={"img"} src={Assests.HamburgerIcon.src} alt="icon_here" /> 
    </ContentBox>
    </nav>
  );
};

export default Navbar;
