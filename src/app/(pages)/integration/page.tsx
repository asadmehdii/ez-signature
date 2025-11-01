"use client"
import React,{useState,useEffect} from 'react'
import CloudBackground from '../features/components/cloudBackground'
import Assests from '@/app/assests/images'
import Route from '@/app/utils/routes'
import Button from '@/app/components/button'
import ContentBox from '@/app/components/contentBox'
import GridView from '../features/components/GridView'
import DoubleGrid from '@/app/components/doubleGrid'
import Navbar from "@/app/components/navbar";
import { Box, Grid2 as Grid, IconButton, Typography } from "@mui/material";
import { CarouselData } from "./content";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import MoreFeatures from "@/app/components/exploreMoreFeature";
import MoreQuestion from "@/app/components/more question";
import SignAnytime from "@/app/components/signAnytime";
import Footer from "@/app/components/footer";
import TextOnImage from "../features/components/textonImage"

const Integration:React.FC = ()=>{


    const [currentIndex, setCurrentIndex] = useState(0);
      const [feature,setFeature] = useState("Document Editor")
      const handlePrev = () => {
          setCurrentIndex((prevIndex) => {
              return  prevIndex === 0 ? CarouselData.length - 1 : prevIndex - 1
          });
        };
      
        const handleNext = () => {
          setCurrentIndex((prevIndex) => (prevIndex === CarouselData.length - 1 ? 0 : prevIndex + 1));
        };
      
        useEffect(() => {
          const searchParams = new URLSearchParams(window.location.search);
          const searchValue = searchParams.get("feature");
          if (searchValue) {
            const index = CarouselData.findIndex(
              (value) => value.heading?.toLowerCase() === searchValue.toLowerCase()
            );
            setCurrentIndex(index !== -1 ? index : 0);
          }
        }, []); 
      
        useEffect(()=>
          {
            setFeature(CarouselData[currentIndex].heading)
          },[currentIndex])


   return(
    <React.Fragment>
       <Navbar/>
       <ContentBox>
    <Box sx={{position: "relative", width: "100%", margin: "0 auto",marginTop:5}}>
    <Grid rowSpacing={4} flexWrap={{sm:"wrap",md:"nowrap"}} container flexDirection={{xs:"column-reverse",md:"row"}} alignItems={"center"} justifyContent={"space-between"}>
     <Box maxWidth={636} width={"100%"}>
       <Typography sx={Styles.featureName}>Features &gt; <span style={{color:"var(--secondary-color)"}}>{CarouselData[currentIndex]?.feature ||"Feature Not Found"}</span></Typography>        
       <Typography sx={Styles.heading}>{CarouselData[currentIndex]?.heading || "Feature Not Found"}</Typography>        
       <Typography sx={Styles.text}>{CarouselData[currentIndex]?.text || ""}</Typography>        
     </Box>
        <Box maxWidth={580} width={"100%"} height={431} sx={{objectFit:"contain"}} component={"img"} src={CarouselData[currentIndex]?.image || "/fallback-image.png"} alt="img_here"/>
    </Grid>
    {/* -----Navigation Buttons----- */}
    <IconButton onClick={handlePrev} sx={Styles.leftBtn}><KeyboardBackspaceIcon /> </IconButton>
    <IconButton onClick={handleNext} sx={Styles.rightBtn}> <ArrowForwardIcon /> </IconButton> 
    </Box>
    </ContentBox>
       <CloudBackground mt={12} mb={8} image={Assests.Integration_1.src}/>
       <Box mb={8} display="flex" justifyContent={"center"} alignItems={"center"} gap={3} px={2}>
       <Button backgroundColor="var(--secondary-color)" color="#fff" height={76} width={206} borderRadius={15} to={Route.SIGNUP}>Sign up for free</Button>
       <Button borderWidth={1} borderColor="#000000" height={76} width={186} borderRadius={15}
                     to={Route.FEATURE_PAGES}
       
       >Take a tour</Button>
       </Box>
       <GridView mb={8} IsBgColor image={Assests.FeatureImage_12.src} heading="AN INTEGRATION TAKES SECONDS" text="App integration processes are straightforward and sleek in design — it will take you only a few seconds to set up a connection and get started."/>
       <GridView mb={8} isImageLeft image={Assests.FeatureImage_9.src} heading="Integrate With Your Favorite Apps" text="Seamlessly connect your Xodo Sign account to popular cloud storage solutions like Dropbox, Box, OneDrive or Evernote, and even sign documents right from within Gmail, Google Drive, Google Docs and the Google Chrome browser."/>
       <GridView mb={8} IsBgColor image={Assests.FeatureImage_13.src} heading="ZAPIER INTEGRATION" text="Our Zapier integration allows you to connect Xodo Sign with many of the third-party services you are already using. You will make use of triggers and automations, such as automatically sending a template for signature when a deal is updated in your CRM and directly uploading it to your cloud storage after signing is completed. Click below to browse available integrations."/>
       <TextOnImage mb={8} bgImage={Assests.EzFeatureBanner_3.src} heading="AUTOMATE WHAT SHOULD BE AUTOMATED" text="Looking to automate the document creation, delivery or signing process or integrate Ez Signature Sign into an application of your own? You're in the right place — your Ez Signature Sign account comes with free, unlimited access to a fully-featured and straightforward JSON-based REST API." />
    <MoreFeatures/>
             <MoreQuestion mt={8}/>
             <SignAnytime/>
             <Footer/>
       
   </React.Fragment>
   )
}

const Styles = {
   bgEllipseImage:{
       width: "45px",
       height: "45px",
       objectFit: "contain",
       background:` url("${Assests.BackgroundEllipse.src}")`,
       backgroundSize: "90%",
       backgroundRepeat: "no-repeat",
       padding: "8px",
       backgroundPosition: "bottom left",
   },
   featureName:{
     fontFamily:"var(--mada-text)",
     fontWeight:600,
     fontSize:16,
     },
     heading:{
     fontFamily:"var(--mada-text)",
     fontWeight:800,
     fontSize:{xs:40,md:55},
     lineHeight:1,  
     my:2    
     },
     text:{
        fontFamily:"var(--mada-text)",
        fontWeight:600,
        fontSize:16,
        },
        leftBtn:{
        position: "absolute",
        top: "50%",
        left: {xs:"0px",md:"-30px",lg:"-70px"},
        zIndex:100,
        transform: "translateY(-50%)",
        color: "white",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
     },
        rightBtn:{
           position: "absolute",
           top: "50%",
           right: {xs:"0px",md:"-30px",lg:"-60px"},
           transform: "translateY(-50%)",
           color: "white",
           backgroundColor: "rgba(0, 0, 0, 0.4)",
           "&:hover": {
           backgroundColor: "rgba(0, 0, 0, 0.6)",
           },    
       }
   
}

export default Integration