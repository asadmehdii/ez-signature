import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import React, { FC } from "react";
import Grid from "@mui/material/Grid2";
import Text from "@/app/components/text";
import Button from "@/app/components/button";
import { Box } from "@mui/material";
import Image from "next/image";
import MoreQuestion from "@/app/components/more question";
import SignAnytime from "@/app/components/signAnytime";
import { SignCardContent, SignCardContentProps } from "./content";
import Card from "@/app/components/card";
import FAQs from "@/app/components/faqs";
import Assests from "@/app/assests/images";
const Features:FC= ()=>{
    return(
        <main className="feature">
            <Navbar/>
            {/* Grid 1 with the background image */}
              <Grid paddingX={3} paddingY={6} component={"div"} className="grid_1" justifyContent={"center"} alignItems={"center"} textAlign={"center"} >
                   <Text className="head_1">Features at a Glance</Text>
                   <Text className="text_1">Your EzSignature experience will not stop at eSignatures — you&apos;ll be given all the tools you need to securely manage your documents in the cloud, keep your team in the loop, manage business contacts and to automate your work with a fully-fledged REST API.</Text>
                   <Button className="button">Start Tour</Button>
              </Grid>
            {/* --------------------------------- */}

            {/*grid 2 ---- Sign as easy steps  */}
          <Grid  component={"div"} className="signSteps" padding={3} marginY={3}>
          <Text fontSize="65px" fontWeight="700" className="head_1">Sign as easy steps</Text>
           <Grid container marginY={2} columnSpacing={8} rowSpacing={6}>
            <Box component={"div"} width={"310px"}>
                <Image src={Assests.Send} alt="icon_here"/>
                <Text className="heading">Send</Text>
                <Text className="text">Upload your document, declare signers and recipients, prepare your document for signature and deliver it to all parties.</Text>
                <Text className="textWithBg">Document Preparation</Text>
            </Box>
            <Box component={"div"} width={"310px"}>
                <Image src={Assests.Sign} alt="icon_here"/>
                <Text className="heading">Sign</Text>
                <Text className="text">Each signer receives a secure Ezsignature signing link taking them to your document.They sign using their PC, tablet or phone.</Text>
                <Text className="textWithBg">Electronic Signatures</Text>
            </Box>
            <Box component={"div"} width={"310px"}>
                <Image src={Assests.Manage} alt="icon_here"/>
                <Text className="heading">Manage</Text>
                <Text className="text">Post completion your signed documents are stored securely in your Ezsignature account — you can also choose to export or delete them.</Text>
                <Text className="textWithBg">Document Management & Security</Text>
            </Box>
           </Grid>
          </Grid>
            {/* --------------------------------- */}

            {/*grid 3 ---- Sign as easy steps cards  */}
            <Grid rowSpacing={6} component={"div"} className="signStepsCard" padding={3} columnSpacing={3} container justifyContent={"space-between"} alignItems={"center"}>
              {SignCardContent.map((value:SignCardContentProps,index:number)=>{
                return(
                    <Card key={`${value.text}_${index}`} className="cards">
                    <Image src={value.icon} alt="icoon_here"/>
                    <Text className="heading">{value.heading}</Text>
                    <Text className="text">{value.text}</Text>
                    <Button className="button">{value.buttonText}</Button>
                 </Card>
                )
              })}
            </Grid>
            {/* --------------------------------- */}
             <FAQs/>
             <MoreQuestion/>
             <SignAnytime/>
            <Footer/>
        </main>
    )
}


export default Features