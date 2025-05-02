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


const Templates:React.FC = ()=>{
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
       <CloudBackground mt={8} mb={8} image={Assests.ElectSign_1.src}/>
       <GridView mb={8} isImageLeft IsBgColor image={Assests.FeatureImage_10.src} heading="STREAMLINE YOUR WORK" text="Templates are a great way of saving man-hours when frequently sending the same or similar documents, or when sending the different documents to the very same group of recipients. Templates are created using the document editor and come with the same options as standard documents do: Recipient names, email addresses, signing orders and roles."/>
       <GridView mb={8} image={Assests.FeatureImage_11.src} heading="SAME DOCUMENT, DIFFERENT SIGNERS" text="Upload template documents and use them out of the box whenever you need them or as a starting point for similar agreements or contracts."/>
       <TextOnImage mb={8} bgImage={Assests.EzFeatureBanner_3.src} heading="GREAT FOR COUNTER REGISTRATIONS" text="Templates are a great way of simplifying signatures whenever there is an over-the-counter registration of customers, such as at gyms, hotels or ski resorts. Combined with In-Person Signing you will happily cut document turnaround time, avoid paperwork and preserve the environment."/>
  
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

export default Templates