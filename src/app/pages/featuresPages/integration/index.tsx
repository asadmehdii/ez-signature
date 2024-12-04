import React from "react"
import CloudBackground from "../components/cloudBackground"
import Assests from "@/app/assests/images"
import GridView from "../components/GridView"
import TextOnImage from "../components/textonImage"
import { Box } from "@mui/material"
import Button from "@/app/components/button"
import Route from "@/app/utils/routes"

const Integration:React.FC = ()=>{
   return(
    <React.Fragment>
       <CloudBackground mt={8} mb={8} image={Assests.ElectSign_1.src}/>
       <Box mb={8} display="flex" justifyContent={"center"} alignItems={"center"} gap={3} px={2}>
       <Button backgroundColor="var(--secondary-color)" color="#fff" height={76} width={206} borderRadius={15} to={Route.SIGNUP}>Sign up for free</Button>
       <Button borderWidth={1} borderColor="#000000" height={76} width={186} borderRadius={15}>Take a tour</Button>
       </Box>
       <GridView mb={8} IsBgColor image={Assests.FeatureImage_12.src} heading="AN INTEGRATION TAKES SECONDS" text="App integration processes are straightforward and sleek in design — it will take you only a few seconds to set up a connection and get started."/>
       <GridView mb={8} isImageLeft image={Assests.FeatureImage_9.src} heading="Integrate With Your Favorite Apps" text="Seamlessly connect your Xodo Sign account to popular cloud storage solutions like Dropbox, Box, OneDrive or Evernote, and even sign documents right from within Gmail, Google Drive, Google Docs and the Google Chrome browser."/>
       <GridView mb={8} IsBgColor image={Assests.FeatureImage_13.src} heading="ZAPIER INTEGRATION" text="Our Zapier integration allows you to connect Xodo Sign with many of the third-party services you are already using. You will make use of triggers and automations, such as automatically sending a template for signature when a deal is updated in your CRM and directly uploading it to your cloud storage after signing is completed. Click below to browse available integrations."/>
       <TextOnImage mb={8} bgImage={Assests.EzFeatureBanner_3.src} heading="AUTOMATE WHAT SHOULD BE AUTOMATED" text="Looking to automate the document creation, delivery or signing process or integrate Ez Signature Sign into an application of your own? You're in the right place — your Ez Signature Sign account comes with free, unlimited access to a fully-featured and straightforward JSON-based REST API." />
   </React.Fragment>
   )
}


export default Integration