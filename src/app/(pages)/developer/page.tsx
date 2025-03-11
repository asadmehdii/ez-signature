"use client"
import React,{FC, useState} from "react"
import Footer from "@/app/components/footer"
import Navbar from "@/app/components/navbar"
import Grid from "@mui/material/Grid2"
import Button from "@/app/components/button"
import Text from "@/app/components/text"
import { Box } from "@mui/material"
import Image from "next/image"
import Assests from "@/app/assests/images"
import { ElectronicSign, EzAPI,EzAPIProps,APIPricingCardContent, FAQsData } from "./content"
import Card from "@/app/components/card"
import APIPricingCard from "./pricingCard"
import CustomForm from "@/app/components/customPriceForm"
import FAQs from "@/app/components/faqs"
import Route from "@/app/utils/routes";

const Developer:FC = ()=>{
    const [activeBtn,setActiveBtn] = useState<string>("monthly")

return(
    <main className="developer">
    <Navbar/>
    {/* Grid 1 with the background image */}
    <Grid paddingX={3} height={{xs:"620px",sm:"520px",md:"600px"}} position={"relative"} component={"div"} py={7} className="grid_1" justifyContent={"center"} alignItems={"center"} textAlign={"center"} >
    <Text className="head_1">Secure & Reliable eSignature API</Text>
    <Text className="text_1">Quickly integrate secure electronic signatures into your applications and workflows using the reliable Ezsignature eSignature REST API.</Text>
    <Box  display={"flex"} flexDirection={{xs:"column",md:"row"}} justifyContent={"center"} alignItems={"center"} rowGap={1} columnGap={3}>
    <Button className="button_1" type="outlined" color="#000" to={Route.SANDBOX_SIGNUP}>Create free Sandbox</Button>
    {/* <Button className="button_2">Book a Demo</Button> */}
    </Box>
    {/* <Text fontSize="22px" fontWeight="500" marginTop={20} >See API Documentation</Text> */}
    <Box width={{xs:"300px",md:"500px"}} sx={{objectFit:"contain",position:"absolute",left:0,right:0,mx:"auto",bottom:{xs:"-100px",sm:"-100px",md:'-170px'}}} component="img" src={Assests.ApiImage.src} alt="Example" />
    </Grid>
    {/* ------------------------- */}
    {/* Grid 2 --- why ezsignture API */}
    <Box paddingX={{xs:2,sm:5,lg:"100px"}} mt={{xs:20,md:35}}>
    <Grid component={"div"} className="whyEzApiI">
            <Text fontSize="60px" fontWeight="700" className="head_1">Why Ezsignature API?</Text>
    <Grid container mt={7} spacing={8}>
    {EzAPI.map((value:EzAPIProps)=>
        <Box key={value.title} component={"div"} maxWidth={"370px"}>
            <Image style={{background: `url('${Assests.BackgroundEllipse.src}') no-repeat`,backgroundSize:"85%",backgroundPosition:"bottom center",padding:8}} src={value.icon} alt="icon_here"/>
            <Text margin={"10px 0"} fontSize="32px" color="var(--text-color)" fontWeight="700">{value.title}</Text>
            <Text fontSize="18px" color="var(--text-color)" fontWeight="500">{value.text}</Text>
        </Box>
    )}
    </Grid>
    </Grid>
    {/* ------------------------- */}
    {/* Grid 3 --- trusted electronic signature */}
    <Box mt={10} component="div" className="grid_3">
    <Text fontSize="60px" fontWeight="700" className="head_1">Trusted Electronic Signatures for Your Business</Text>
    <Text style={{maxWidth:"997px",marginTop:"10px"}} fontSize="26px" fontWeight="600">Take your electronic signatures to the next level with Ezsignature API, used by developers worldwide to fully automate eSignature workflows.</Text>
    <Grid container mt={6} justifyContent={{xs:"center",md:"space-between"}} rowGap={6} columnGap={3}>
     {ElectronicSign.map((value:EzAPIProps)=>
    (
      <Card key={value.text} className="electCard">
        <Image style={{background: `url('${Assests.SemiEllipse.src}') no-repeat`,backgroundSize:"100%",padding:6,backgroundPositionY:"bottom"}} src={value.icon} alt="icon_here"/>
       <Box>
         <Text padding={6} fontSize="18px" fontWeight="700">{value.title}</Text>
         <Text padding={6} style={{maxWidth:"997px",marginTop:"10px"}} fontSize="14px" fontWeight="500">{value.text}</Text>
       </Box>
        <Button type="outlined" className="btn">Learn More</Button>
     </Card>
     ))} 
    </Grid>
    </Box>
     {/* ------------------------- */}
    {/* Grid 4 --- Api pricing */}
    <Box mt={10} component="div" className="APIPricing">
    <Grid container justifyContent={"space-between"} alignItems={"center"} rowSpacing={5}>    
    <Text fontSize="55px" fontWeight="700" className="head_1">Volume EzSignature API Pricing</Text>
     <Box m={{xs:"auto",xl:"0"}} display={"flex"} alignItems={"center"} justifyContent={"space-evenly"} component="div" width={"282px"} height={"65px"} borderRadius={"51px"} bgcolor={"#18395B"}>
        <Button color="#fff" borderColor="#fff" borderWidth={activeBtn === "monthly"? 0 : 1 } onClick={()=>{setActiveBtn("monthly")}} fontSize={18} fontWeight="600" backgroundColor={activeBtn === "monthly"?"var(--secondary-color)":"#18395B"}  width={132} height={59} borderRadius={51}>Monthly</Button>
        <Button color="#fff" borderColor="#fff" borderWidth={activeBtn === "yearly"? 0 : 1 } onClick={()=>{setActiveBtn("yearly")}} fontSize={18} fontWeight="600" backgroundColor={activeBtn === "yearly" ?"var(--secondary-color)":"#18395B"} className="yearlyBtn" width={132} height={59} borderRadius={51}>Yearly</Button>
     </Box>
    </Grid>
    <Grid container mt={6} justifyContent={{xs:"flex-start",xl:"center"}} rowSpacing={4} columnSpacing={6}>
    {APIPricingCardContent.map((value)=><APIPricingCard key={value.text} props={value} />)} 
    </Grid> 
    </Box>
     {/* ------------------------- */}
    <CustomForm textWidth={1521} mt={10} title="SEND A CUSTOM PRICING REQUEST" text="We're happy to set up a custom subscription plan if you require more API documents than API Light offers. Simply fill out the form below, 
     and our team will assist you shortly."/>
    <FAQs faqs={FAQsData} heading="E-signature api FAQ" mt={10}/>
     {/* ------------------------- */}
      <Grid container alignItems={"flex-end"} justifyContent={"space-between"} mt={10} mb={15} rowSpacing={4}>
       <Box component={"div"} maxWidth={"752px"}>
        <Image src={Assests.QuestionMark} alt="img_here"/>
        <Text margin={"8px 0"} fontSize="60px" fontWeight="700" className="head_1">Ready to start Integration?</Text>
        <Text color="#AEAEAE" fontSize="20px" fontWeight="600">Now is the perfect time to embed reliable EzSignature capabilities directly into your applications and workflows using the EzSignature API.</Text>
       </Box>
       <Button borderRadius={50} backgroundColor="var(--text-color)" color="#fff" width={"300px"} 
       height={"100px"} fontSize={25} fontWeight="700" to={Route.SANDBOX_SIGNUP}>Create Free Sandbox </Button>
      </Grid>
    </Box>   
    <Footer/>
    </main>
 )
}

export default Developer