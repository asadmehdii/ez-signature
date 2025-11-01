"use client";
import Navbar from "@/app/components/navbar";
import React from "react";
import SandboxHeader from "./component/header";
import SandboxTabs from "./component/tabs";
import { Grid2 as Grid, Box, Typography,Checkbox } from "@mui/material";
import InputText from "@/app/components/inputText";
import Text from "@/app/components/text";
import Link from "next/link";
import Route from "@/app/utils/routes";
import Assests from "@/app/assests/images";
import Button from "@/app/components/button";
const Sandbox: React.FC = () => {
  return (
    <main>
      <Navbar />
      <SandboxHeader />
       <Grid mt={4} container justifyContent={"space-evenly"} alignItems={"center"} flexDirection={{xs:"column-reverse",md:"row"}} mb={8} gap={2} px={2}>
        <Box maxWidth={530} width="100%">
          <SandboxTabs isActive="signUp" />
          <InputText lable="Email Address" type="email" mt={4} />
          <InputText lable="Password" type="password" protect mt={4} validationMsg="Use 8 or more characters with a mix of letters, numbers & symbols"/>
          <Typography width={"100%"} mt={3} mb={4} textAlign={"center"} fontFamily={"var(--text-mada)"} variant="body1" fontSize="16px" color="var(--lightGray-color)" fontWeight="500" >By creating an account, you agree to our <Link href={Route.TERM_CONDITION} style={{fontWeight:"700",color:"#111111",textDecoration:'underline'}}> Terms of use </Link> and <Link href={Route.PRIVACY_POLICY} style={{fontWeight:"700",color:"#111111",textDecoration:'underline'}}>Privacy Policy</Link> </Typography>
            {/* -------------- captcha box ---------*/}
          <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} border={"1px solid #333333"} width={"100%"} margin={"auto"} borderRadius={"18px"} height={"68px"} >
          <Box display={"flex"}  alignItems={"center"} gap={0.5} pl={2}>
          <Checkbox defaultChecked  size="small" sx={{m:0,p:0,"&.Mui-checked":{color:"#34A853"}}} />
          <Text fontSize="16px" fontWeight="600" color="var(--lightGray-color)">I’m not a robot</Text>  
          </Box>
          <Box pr={2} component="img" src={Assests.Recaptcha.src} alt="image_here" width={35} height={35} />
          </Box>
          {/* ------------------------ */}
          <Button to={Route.SANDBOX_ACCOUNT} style={{margin:"40px 0"}} fontSize={18} color="#fff" fontWeight="600" backgroundColor="var(--secondary-color)" borderRadius={25} width={"100%"} height={"50px"}>Create an account</Button>
          <Text color="#cdcdcd" fontSize="14px" fontWeight="500" textAlign="center">Alread have an account? <Link href={Route.LOGIN} style={{color:"var(--secondary-color)",cursor:'pointer'}}>Login</Link></Text>
       </Box>
       <Box component={"img"} width={{xs:"80%",md:"320px",lg:"auto"}} src={Assests.SignUpImage.src} alt="img_here"/>

       </Grid>
    </main>
  );
};

export default Sandbox;
