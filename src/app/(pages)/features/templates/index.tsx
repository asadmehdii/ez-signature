import React from "react"
import CloudBackground from "../components/cloudBackground"
import Assests from "@/app/assests/images"
import GridView from "../components/GridView"
import TextOnImage from "../components/textonImage"

const Templates:React.FC = ()=>{
   return(
    <React.Fragment>
       <CloudBackground mt={8} mb={8} image={Assests.ElectSign_1.src}/>
       <GridView mb={8} isImageLeft IsBgColor image={Assests.FeatureImage_10.src} heading="STREAMLINE YOUR WORK" text="Templates are a great way of saving man-hours when frequently sending the same or similar documents, or when sending the different documents to the very same group of recipients. Templates are created using the document editor and come with the same options as standard documents do: Recipient names, email addresses, signing orders and roles."/>
       <GridView mb={8} image={Assests.FeatureImage_11.src} heading="SAME DOCUMENT, DIFFERENT SIGNERS" text="Upload template documents and use them out of the box whenever you need them or as a starting point for similar agreements or contracts."/>
       <TextOnImage mb={8} bgImage={Assests.EzFeatureBanner_3.src} heading="GREAT FOR COUNTER REGISTRATIONS" text="Templates are a great way of simplifying signatures whenever there is an over-the-counter registration of customers, such as at gyms, hotels or ski resorts. Combined with In-Person Signing you will happily cut document turnaround time, avoid paperwork and preserve the environment."/>
   </React.Fragment>
   )
}


export default Templates