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
}

const SignAnytime: FC<AnyTimeProps> = ({
  mt=15,
  mb=15,
  isBtn = true,
  heading = "Sign anytime, anywhere, on any device",
  text = "Experience the ease of signing your documents with EzSignature anytime, anywhere. Use your PC, tablet, or mobile device for secure signing at home, in the office, or on the go.",
  imageSrc = Assests.SignAnytime.src,
  maxWidth = 812
}) => {
  return (
   
    <Grid
      component={"div"}
      container
      sx={{
        position: "relative",
        backgroundColor: "#5AEAD5",
        paddingX: { xs: 2, sm: 5, lg: "100px" },
        justifyContent: { xs: "center", xl: "space-between" },
        flexDirection: { xs: "column-reverse", xl: "row" },
        alignItems: "center",
        py: 8,
        rowGap: 4,
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
          opacity: 0.5, 
          zIndex: 1, 
        },
      }}
    >
      <Box component={"div"} maxWidth={maxWidth}>
        <Typography fontSize={{xs:"34px",md:"60px"}} maxWidth={800} fontWeight="700">{heading}</Typography>
        <Typography mt={2} fontSize={18} fontWeight="600">{text}</Typography>
        {isBtn && <Button  style={{marginTop:'30px'}} borderRadius={19} width={288} height={70} backgroundColor="#22CAB9" color="#fff" fontSize={24} fontWeight="500">Sign Up for free</Button>}
      </Box>
      <Box component={"img"} sx={{zIndex:10, width: {xs:"100%",sm:"430px"}, height: {xs:"100%",sm:"380px",objectFit:"fill"}}} src={imageSrc} alt="image_here"/>
    </Grid>
  );
};

export default SignAnytime;
