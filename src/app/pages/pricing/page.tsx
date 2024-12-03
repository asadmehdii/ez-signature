import Footer from "@/app/components/footer";
import MoreQuestion from "@/app/components/more question";
import Navbar from "@/app/components/navbar";
import SignAnytime from "@/app/components/signAnytime";
import Grid from "@mui/material/Grid2";
import React,{ FC } from "react";
import Text from "@/app/components/text";
import Button from "@/app/components/button";
import { Box } from "@mui/material";
import {PlanCardData,PlanCardDataProps, PricingFaqsQuestion } from "./content";
import Card from "@/app/components/card";
import FAQs from "@/app/components/faqs";
import CustomForm from "@/app/components/customPriceForm";
import ContentBox from "@/app/components/contentBox";
import MoreFeatures from "@/app/components/exploreMoreFeature";




const Pricing:FC = ()=>{
    return(
         <main className="pricing">
           <Navbar/>
            {/* Grid 1 with the background image */}
            <Grid paddingX={3} paddingY={6} component={"div"} className="grid_1" justifyContent={"center"} alignItems={"center"} textAlign={"center"} >
                <Text className="head_1">Plans that Scale With Your Business</Text>
                <Text className="text_1">We&apos;re offering a generous Free Plan and affordable premium pricing plans that grow with your business</Text>
                <Button className="button">Start signing of</Button>
            </Grid>
            {/* --------------------------------- */}
            {/* Grid 2 ------ ezFeatures list */}
             <MoreFeatures mt={8}/>
             {/* --------------------------------- */}
            
             <ContentBox>
            {/* Grid 3 ------ ezFeatures plan cards */}
            <Grid justifyContent={"space-between"} rowSpacing={3} mt={8} component={"div"} container className="yourPlan">
            <Text style={{width:"100%"}} fontSize="65px" fontWeight="700" className="head_1">Select the best plan for your need</Text>
             {PlanCardData.map((data:PlanCardDataProps)=>{
            return(
            <Box key={data.planName} className="planCard" bgcolor={data.popular ? "var(--secondary-color)" : "transparent"}  component={"div"}>
            {data.popular && <Text className="popularText">Popular package</Text> }    
            <Card height="fit-content" style={{maxWidth:"100%"}} borderColor="#43434380" borderWidth={1} borderRadius={20} padding={20}>
             <Text fontSize="24px" fontWeight="700">{data.planName}</Text>
             <Text style={{borderBottom:"1.25px solid #18395B"}} marginTop={10} paddingBottom={5} fontSize="44px" fontWeight="800" color="#18395B">{data.amount}{data.duration && <span style={{fontSize:"24px",color:"#18395B"}}>/{data.duration}</span>}</Text>
             <ul style={{marginTop:"20px",paddingLeft:"18px"}}>
             {data.features.map((feature:string)=><li key={feature}>{feature}</li>)}
             </ul>
             <Button style={{margin:"45px auto 20px auto"}} width={"90%"} height={"47px"} color="#fff" borderRadius={19} backgroundColor="var(--secondary-color)">Select</Button>
             </Card>
             </Box>
                )
             })}
            </Grid>
            </ContentBox>
             {/* --------------------------------- */} 
             {/* Grid 4 -------grid with bg image*/} 
              <Grid container flexDirection={{xs:"column",md:"row"}}  my={3} component={"div"} className="doubleDivWithBg">
                <Box component={"div"} width={{xs:"100%",md:"50%"}} className="rightDiv">
                  <ContentBox sx={{display:"flex",justifyContent:"center",flexDirection:"column",gap:2}}>
                  <Text fontSize={"38px"} fontWeight="800" color="#fff">Ezsignature Enterprise</Text>
                  <Text style={{maxWidth:"350px"}} fontSize={"20px"} fontWeight="500" color="#fff">Request an Enterprise solution tailored for your business.</Text>
                  <Button fontSize={20} fontWeight="500" borderRadius={19} width={"200px"} height={"60px"} color="var(--text-color)" backgroundColor="var(--lightBlue-color)">Contact Us</Button>
                  </ContentBox>
                </Box>
                <Box component={"div"} width={{xs:"100%",md:"50%"}} className="leftDiv">
                <ContentBox sx={{display:"flex",justifyContent:"center",flexDirection:"column",gap:2}}>
                <Text fontSize={"38px"} fontWeight="800" color="#fff">Interested in using the Xodo Sign API?</Text>
                  <Text style={{maxWidth:"350px"}} fontSize={"20px"} fontWeight="500" color="#fff">We&apos;re offering separate pricing plans for more extensive API usage.</Text>
                  <Button fontSize={20} fontWeight="500" borderRadius={19} width={"200px"} height={"60px"} color="var(--text-color)" backgroundColor="var(--lightBlue-color)">API Pricing Plans</Button>
                </ContentBox>
                </Box>
              </Grid>
             {/* --------------------------------- */} 
             <ContentBox>
             <CustomForm mt={8} textWidth={1208} title="Request a solution tailored to your needs" text="Each business has different requirements - if yours are not covered by the subscription plans above, 
                   we are happy to set up a custom solution for you. To request one, please fill out the form below and our Sales team 
                   will be with you shortly."/>
            

            <FAQs faqs={PricingFaqsQuestion} heading="Frequently Asked Questions?" mt={8}/>
            </ContentBox>
           <MoreQuestion mt={8}/>
           <SignAnytime/>
           <Footer/>
         </main>
    )
}



export default Pricing