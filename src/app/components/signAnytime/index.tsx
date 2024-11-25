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
  maxWidth = 780,
  px = { xs: 2, sm: 5, lg: "100px" },
}) => {
  return (
   
    <Grid
      component={"div"}
      container
      sx={{
        height:{xs:"100%", md:"500px"},
        px: px, 
        position: "relative",
        backgroundColor: "#5AEAD5",
        flexWrap:"nowrap",
        // paddingX: { xs: 2, sm: 5, lg: "100px" },
        justifyContent: { xs: "center", md: "space-between" },
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
        <Typography fontFamily={"var(--text-mada)"} fontSize={{xs:"38px",md:"40px",lg:"60px"}} fontWeight="700">{heading}</Typography>
        <Typography mt={2} fontFamily={"var(--text-mada)"} fontSize={{xs:18,md:16,lg:18}} fontWeight="600">{text}</Typography>
        {isBtn && <Button  style={{marginTop:'30px'}} borderRadius={19} width={288} height={70} backgroundColor="#22CAB9" color="#fff" fontSize={24} fontWeight="500">Sign Up for free</Button>}
      </Box>
      <Box component={"img"} sx={{zIndex:10, width: {xs:"100%",sm:"500px",md:"45%",xl:"520px"}, height: {xs:"100%",sm:"100%",objectFit:"fit-content"}}} src={imageSrc?.src} alt="image_here"/>
    </Grid>
  );
};

export default SignAnytime;
