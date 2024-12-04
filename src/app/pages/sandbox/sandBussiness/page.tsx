"use client";
import Navbar from "@/app/components/navbar";
import React from "react";
import SandboxHeader from "../component/header";
import SandboxTabs from "../component/tabs";
import { Grid2 as Grid, Box, Checkbox } from "@mui/material";
import InputText from "@/app/components/inputText";
import Text from "@/app/components/text";
import Route from "@/app/utils/routes";
import Assests from "@/app/assests/images";
import Button from "@/app/components/button";
const SandboxBussiness: React.FC = () => {
  return (
    <main>
      <Navbar />
      <SandboxHeader />
       <Grid mt={4} container justifyContent={"space-evenly"} alignItems={"center"} flexDirection={{xs:"column-reverse",md:"row"}} mb={8} gap={2} px={2}>
        <Box maxWidth={530} width="100%">
          <SandboxTabs isActive="bussiness" />
          <InputText lable="Bussiness Name" type="text" mt={4} />
          <Box display={"flex"}  alignItems={"center"} gap={0.5} mt={2}>
          <Checkbox defaultChecked  size="small" sx={{m:0,p:0,"&.Mui-checked":{color:"#34A853"}}} />
          <Text fontSize="16px" fontWeight="600" color="var(--lightGray-color)">I’m an individual</Text>  
          </Box>
          <InputText lable="Workplace URL" type="text" mt={4} />
          <Box mt={4} display={"flex"} gap={2} justifyContent={"space-between"}>
            <Button width={201} borderRadius={32} color="#fff" fontWeight="500" fontSize={22} backgroundColor="#A0A0A0" to={Route.SANDBOX_ACCOUNT_API}>Back</Button>  
            <Button width={306} borderRadius={32} backgroundColor="var(--secondary-color)" color="#fff" fontWeight="500" fontSize={22}>Start Using</Button>  
          </Box>    
       </Box>
       <Box component={"img"} width={{xs:"80%",md:"320px",lg:"auto"}} src={Assests.SignUpImage.src} alt="img_here"/>

       </Grid>
    </main>
  );
};

export default SandboxBussiness;
