"use client";
import React, { useEffect, useState } from "react";
import { Box, Grid2 as Grid, IconButton, Typography } from "@mui/material";
import ContentBox from "@/app/components/contentBox";
import MoreQuestion from "@/app/components/more question";
import SignAnytime from "@/app/components/signAnytime";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
// import DocumentandEditor from "./document&editor";
// import AuditTrails from "./auditTrail/index";
import InPersonSigning from "./inPersonSigning/index";
// import ElectronicSignature from "./electronicSignature";
// import { useSearchParams } from "next/navigation";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { CarouselData } from "./content";
// import DocumentManagement from "./documentManagement";
// import Templates from "./templates";
import MoreFeatures from "@/app/components/exploreMoreFeature";
// import Integration from "./integration";



const FeaturesContent = ({props}:any) => {
const [currentIndex, setCurrentIndex] = useState(0);
const [feature,setFeature] = useState("Document Editor")
console.log(props)
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

  return (
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
     {/* ---Render page accordint to the condition------------ */}
      {/* {feature === "Document Editor" && <DocumentandEditor/>} */}
      {/* {feature === "Audit Trail" && <AuditTrails/>} */}
      {/* {feature === "In-Person Signing" && <InPersonSigning/>} */}
      {/* {feature === "Electronic Signatures" && <ElectronicSignature/>} */}
      {/* {feature === "Document Management & Security" && <DocumentManagement/>} */}
      {/* {feature === "Templates" && <Templates/>} */}
      {/* {feature === "Integration" && <Integration/>} */}

     {/* ------------------------------ */}
    <MoreFeatures/>
    <MoreQuestion mt={8}/>
    <SignAnytime/>
    <Footer/>
    </React.Fragment>
  );
};

const Styles = {
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
export default FeaturesContent;
