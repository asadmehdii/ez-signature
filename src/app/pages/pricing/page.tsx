import Footer from "@/app/components/footer";
import MoreQuestion from "@/app/components/more question";
import Navbar from "@/app/components/navbar";
import SignAnytime from "@/app/components/signAnytime";
import Grid from "@mui/material/Grid2";
import React,{ FC } from "react";
import Text from "@/app/components/text";
import Button from "@/app/components/button";
import Image from "next/image";
import { Box } from "@mui/material";
import { EzFeatureProps,EzFeature,PlanCardData,PlanCardDataProps, PricingFaqsQuestion } from "./content";
import Card from "@/app/components/card";
import FAQs from "@/app/components/faqs";
import CustomForm from "@/app/components/customPriceForm";




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
            <Grid  component={"div"} className="EzFeature" padding={3} marginY={3}>
            <Text fontSize="65px" fontWeight="700" className="head_1">Explore more Ezsignature features</Text>
            <Text className="text_1" fontSize="24px" fontWeight="600">Go paperless and accelerate your business — using Ezsignature you will be equipped with all the tools you need to increase your efficiency working with contracts and agreements of any kind.</Text>
            <Grid container component={"div"} marginY={3} rowSpacing={4} columnGap={4}>
             {EzFeature.map((data:EzFeatureProps)=>{
                return(
                <Box key={data.feature} component="div" sx={{minWidth:{xs:"100%",sm:"290px"},display:{xs:"flex",sm:"block"},justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                  <Image style={{background:""}} src={data.icon} alt="ion_here"/>
                  <Text fontWeight="800" fontSize="22px" marginTop={12}>{data.feature}</Text>
                </Box>
                ) 
             })}
            </Grid>
            </Grid>
             {/* --------------------------------- */}
            
            {/* Grid 3 ------ ezFeatures plan cards */}
            <Grid gap={3} component={"div"} container padding={3} className="yourPlan">
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
             {/* --------------------------------- */} 
             {/* Grid 4 -------grid with bg image*/} 
              <Grid container flexDirection={{xs:"column",md:"row"}} rowGap={3} my={3} component={"div"} className="doubleDivWithBg">
                <Box component={"div"} width={{xs:"100%",md:"50%"}} className="rightDiv">
                  <Text fontSize={"38px"} fontWeight="800" color="#fff">Ezsignature Enterprise</Text>
                  <Text style={{maxWidth:"350px"}} fontSize={"20px"} fontWeight="500" color="#fff">Request an Enterprise solution tailored for your business.</Text>
                  <Button fontSize={20} fontWeight="500" borderRadius={19} width={"200px"} height={"60px"} color="var(--text-color)" backgroundColor="var(--lightBlue-color)">Contact Us</Button>
                </Box>
                <Box component={"div"} width={{xs:"100%",md:"50%"}} className="leftDiv">
                <Text fontSize={"38px"} fontWeight="800" color="#fff">Interested in using the Xodo Sign API?</Text>
                  <Text style={{maxWidth:"350px"}} fontSize={"20px"} fontWeight="500" color="#fff">We&apos;re offering separate pricing plans for more extensive API usage.</Text>
                  <Button fontSize={20} fontWeight="500" borderRadius={19} width={"200px"} height={"60px"} color="var(--text-color)" backgroundColor="var(--lightBlue-color)">API Pricing Plans</Button>
                </Box>
              </Grid>
             {/* --------------------------------- */} 
             <CustomForm mt={8} textWidth={1208} title="Request a solution tailored to your needs" text="Each business has different requirements - if yours are not covered by the subscription plans above, 
                   we are happy to set up a custom solution for you. To request one, please fill out the form below and our Sales team 
                   will be with you shortly."/>
            

            <FAQs faqs={PricingFaqsQuestion} heading="Frequently Asked Questions?" mt={8}/>
           <MoreQuestion mt={8} mb={8}/>
           <SignAnytime/>
           <Footer/>
         </main>
    )
}



export default Pricing