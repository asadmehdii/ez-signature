import React, { FC } from "react";
import Grid from "@mui/material/Grid2";
import Button from "../button";
import { Box,Typography } from "@mui/material";
import Assests from "@/app/assests/images";

type AnyTimeProps = {
  mt?:number;
  mb?:number;
  isBtn?:boolean;
  heading?:string;
  text?:string;
  imageSrc?:any
  maxWidth?:number
  smPadding?:number,
  xsPadding?: number,
  lgPadding?:string|number
  homeScreen?:boolean
  px?: {
    xs?: number | string;
    sm?: number | string;
    md?: number | string;
    lg?: number | string;
    xl?: number | string;
  };
}

const SignAnytime: FC<AnyTimeProps> = ({
  mt,
  mb,
  isBtn = true,
  heading = "Sign anytime, anywhere, on any device",
  text = "Experience the ease of signing your documents with EzSignature anytime, anywhere. Use your PC, tablet, or mobile device for secure signing at home, in the office, or on the go.",
  imageSrc = Assests.SignAnytime,
  maxWidth = 570,
  homeScreen,
  px = { xs: 2, sm: 5, lg: "100px" },
}) => {
  return (
   
    <Grid
      component={"div"}
      container
      columnGap={4}
      sx={{
        height:{xs:"100%", md:"500px"},
        px: px, 
        position: "relative",
        backgroundColor: "#66EFDC",
        flexWrap:"nowrap",
        // paddingX: { xs: 2, sm: 5, lg: "100px" },
        justifyContent: { xs: "center", md:homeScreen?"space-evenly" : "space-between" },
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: "center",
        py: 8,
        rowGap: 3,
        mt: mt,
        mb: mb,
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url("${Assests.anytimeBGSkeleton.src}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.2, 
          zIndex: 1, 
        },
      }}
    >
      <Box maxWidth={{md:"70%",lg:maxWidth}} zIndex={2}>
        <Typography fontFamily={"var(--text-mada)"} fontSize={{xs:"38px",lg:"42px"}} fontWeight="700">{heading}</Typography>
        <Typography mt={2} fontFamily={"var(--text-mada)"} fontSize={12} fontWeight="600">{text}</Typography>
        {isBtn && <Button  style={{marginTop:'30px'}} hoverStyle={{bgcolor:"transparent",color:"var(--text-color)",border:"1px solid var(--text-color)"}} borderRadius={"19px"} width={271} height={70} backgroundColor="#22CAB9" color="#fff" fontSize={24} fontWeight="500">Sign Up for free</Button>}
      </Box>
      <Box component={"img"} sx={{zIndex:10, width: {xs:"100%",sm:"500px",md:"50%",xl:"520px"},objectFit:"cover"}} src={imageSrc?.src} alt="image_here"/>
    </Grid>
  );
};

export default SignAnytime;
