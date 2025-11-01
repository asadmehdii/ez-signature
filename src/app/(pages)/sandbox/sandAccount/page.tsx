"use client";
import Navbar from "@/app/components/navbar";
import React from "react";
import SandboxHeader from "../component/header";
import SandboxTabs from "../component/tabs";
import { Grid2 as Grid, Box,} from "@mui/material";
import InputText from "@/app/components/inputText";
import Route from "@/app/utils/routes";
import Button from "@/app/components/button";
const SandAccount: React.FC = () => {
  return (
    <main>
      <Navbar />
      <SandboxHeader />
      <SandboxTabs isActive="account"/>
      <Grid container px={2} maxWidth={950} width={"100%"} justifyContent={"center"} rowSpacing={2} m={"auto"} mt={4} mb={8}>
        <Box width={"100%"} display={"flex"} flexDirection={{xs:"column",sm:"row"}} justifyContent={"space-between"} gap={3}>
         <InputText width={{sm:300}} lable="First Name" placeholder="Enter first name"/>
         <InputText width={{sm:300}} lable="Last Name" placeholder="Enter last name"/>
         <InputText width={{sm:300}} lable="Company Name" placeholder="Enter company name"/>
        </Box>
        <Box width={"100%"} display={"flex"} flexDirection={{xs:"column",sm:"row"}} justifyContent={"space-between"} rowGap={3}>
         <InputText width={{sm:600}} lable="Address" placeholder="Enter your address"/>
         <InputText width={{sm:300}} lable="Website URL" placeholder="Enter website URL"/>
        </Box>
        <Box width={"100%"} display={"flex"} flexDirection={{xs:"column",sm:"row"}} justifyContent={"space-between"} gap={3}>
         <InputText width={{sm:300}} lable="Postal Code" placeholder="Enter postal code"/>
         <InputText width={{sm:300}} lable="State" placeholder="Enter state"/>
         <InputText width={{sm:300}} lable="TAX ID or VAT Number" placeholder="Enter TAX ID"/>
        </Box>
        <Box width={"100%"} display={"flex"} flexDirection={{xs:"column",sm:"row"}} gap={2}>
         <InputText width={{sm:300}} lable="City" placeholder="Enter country name"/>
         <InputText width={{sm:300}} lable="Country" placeholder="Enter city name"/>
        </Box>
        <Box mt={4} width="100%" display={"flex"} gap={2} justifyContent={"space-between"}>
            <Button width={201} borderRadius={32} color="#fff" fontWeight="500" fontSize={22} backgroundColor="#A0A0A0" to={Route.SANDBOX_SIGNUP}>Back</Button>  
            <Button width={201} borderRadius={32} backgroundColor="var(--secondary-color)" color="#fff" fontWeight="500" fontSize={22} to={Route.SANDBOX_ACCOUNT_API}>Proceed</Button>  
          </Box> 
      </Grid>
      
    </main>
  );
};

export default SandAccount;
