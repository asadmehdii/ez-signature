import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import React,{FC} from "react";
import Grid from "@mui/material/Grid2";
import Text from "@/app/components/text";
import Button from "@/app/components/button";
import { Box, TextField, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import {TrustedSignature, TrustedSignatureProps, ProArticle,ProArticleProps, KnowledgeBase} from "./content"
import Assests from "@/app/assests/images";

const HelpPage:FC = ()=>{
const InputStyle = {
     "& .MuiOutlinedInput-root": {borderRadius: "20px",height: "58px",fontSize: "18px",fontWeight: "600",color: "#2c2c2c",border: "1px solid #2C2C2C",
        "& fieldset": {border:"none"},"&.Mui-focused fieldset": {borderColor: "transparent"}},
        width: { xs: "90%", sm: "320px", md: "450px" },margin: "auto"
}
    return(
        <main className="helpPage">
            <Navbar/>
             {/* Grid 1 with the background image */}
             <Grid container flexDirection={"column"} paddingX={3} paddingY={6} component={"div"} className="grid_1" justifyContent={"center"} alignItems={"center"} textAlign={"center"}>
                <Text className="head_1">What can we help you with?</Text>
                <Box component={"div"} display={"flex"}  gap={3} mt={3} width={{xs:"100%",sm:"fit-content"}} justifyContent={"center"} flexDirection={{xs:"column",sm:"row"}}>
                <TextField sx={InputStyle} type="text" placeholder="Type your question here"/>
                <Button className="button">Search</Button>
                </Box>
              </Grid>
                <Typography my={2} py={1} fontSize={18} fontWeight={600} textAlign={"center"} bgcolor={"#f4f4f4"}  variant="body1" style={{width:"100%"}}>For real-time uptime data please visit our Status Page. <Link href={"#"} style={{color:"#1DCDFE"}}>Click here.</Link></Typography>
            {/* --------------------------------- */}
            {/* Grid 2 ---- trusted electronic signature */}
            <Box component={"div"} className="trustedElect" padding={3} marginY={3}>
            <Text fontSize="65px" fontWeight="700" className="head_1">Trusted Electronic Signatures for Your Business</Text>
            <Text className="text_1" fontSize="24px" fontWeight="600">Take your electronic signatures to the next level with Ezsignature API, used by developers 
             worldwide to fully automate eSignature workflows.</Text>
            <Grid container justifyContent={{xs:"center",sm:"flex-start"}} component={"div"} gap={3} rowSpacing={3} mt={3}>
             {TrustedSignature.map((value:TrustedSignatureProps)=>{
                return(
             <Box key={value.title} className="trustedElectCard" component="div" sx={{borderRadius:"60px 60px 40px 40px",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",width:{xs:"300px",sm:"320px"}, height:"300px", border:"1px solid #25252540"}}>
               <Image style={{marginTop:'40px',marginBottom:'20px'}} src={value.icon} alt="icon_here"/>
               <Box style={{width:'250px'}}>
               <Text color="#222222" textAlign="center" fontSize="18px"  fontWeight="700">{value.title}</Text>
               <Text color="#232323" textAlign="center" fontSize="16px" marginTop={12} fontWeight="500">{value.text}</Text>
               </Box>
            </Box>
                )
             })}
            </Grid>
            </Box>
            {/* --------------------------------- */}
            {/* Grid 3 ---- promoted article */}
           <Box component={"div"} className="proArt" padding={3} marginY={3}>
            <Text fontSize="65px" fontWeight="700" className="head_1">Promoted articles</Text>
            <Grid container mt={4} columnGap={5} rowSpacing={3} wrap="wrap">
              {ProArticle.map((value:ProArticleProps)=>{
                return(
                <Box key={value.title} display={"flex"} columnGap={2} width={{xs:"100%",sm:"75%",md:"400px"}} >
                <Image src={Assests.StartWithBg} alt="icon_here"/>
                <Box>
                    <Text fontWeight="700" fontSize="24px">{value.title}</Text>
                    <Text fontWeight="500" fontSize="20px" marginTop={8}>{value.text}</Text>
               </Box>    
                </Box>
                )
              })}           
            </Grid>
           </Box>
            {/* --------------------------------- */}
            {/* Grid 4 ---- promoted article */}
            <Box component={"div"} className="proArt" padding={3} marginY={3}>
            <Text fontSize="65px" fontWeight="700" className="head_1">Knowledge Base</Text>
            <Grid container mt={4} columnGap={3} rowSpacing={3} wrap="wrap">
              {KnowledgeBase.map((value:ProArticleProps)=>{
                return(
                <Box key={value.title} display={"flex"} columnGap={2} width={{xs:"100%",sm:"75%",md:"400px"}} >
                <Image src={Assests.StartWithBg} alt="icon_here"/>
                <Box>
                    <Text fontWeight="700" fontSize="24px">{value.title}</Text>
                    <Text fontWeight="500" fontSize="2q0px" marginTop={8}>{value.text}</Text>
               </Box>    
                </Box>
                )
              })}           
            </Grid>
           </Box>
            {/* --------------------------------- */}

            <Footer/>
        </main>
    )
}
export default HelpPage

