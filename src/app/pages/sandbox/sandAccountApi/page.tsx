"use client";
import Navbar from "@/app/components/navbar";
import React from "react";
import SandboxHeader from "../component/header";
import SandboxTabs from "../component/tabs";
import { Grid2 as Grid, Box} from "@mui/material";
import Text from "@/app/components/text";
import { APIPricingCardContent } from "./content";
import APIPricingCard from "../../developer/pricingCard";
import ContentBox from "@/app/components/contentBox";
import Button from "@/app/components/button";
import Route from "@/app/utils/routes";
const SandAccountAPI: React.FC = () => {
  return (
    <main>
      <Navbar />
      <SandboxHeader />
      <SandboxTabs isActive="account"/>
      <ContentBox>
      <Box mt={10} component="div" className="APIPricing" mb={8}>
       <Grid container flexDirection={{xs:"column",lg:"row"}} justifyContent={"space-between"} alignItems={"center"} rowSpacing={5}>    
      <Text fontSize="55px" fontWeight="700" className="head_1">Volume EzSignature API Pricing</Text>
      <Button width={201} borderRadius={32} color="#fff" fontWeight="500" fontSize={22} backgroundColor="#A0A0A0" to={Route.SANDBOX_ACCOUNT}>Back</Button>  
    </Grid>
    <Grid container mt={6} justifyContent={{xs:"flex-start",xl:"center"}} rowSpacing={4} columnSpacing={6}>
    {APIPricingCardContent.map((value)=><APIPricingCard key={value.text} props={value}/>)} 
    </Grid> 
    </Box>
    </ContentBox>
      
    </main>
  );
};

export default SandAccountAPI;
