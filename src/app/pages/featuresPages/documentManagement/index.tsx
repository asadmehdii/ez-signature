import React from "react"
import GridView from "../components/GridView"
import Assests from "@/app/assests/images"
import TextOnImage from "../components/textonImage"

const DocumentManagement:React.FC = ()=>{
return(
    <React.Fragment>
      <GridView mt={5} isImageLeft mb={0} image={Assests.FeatureImage_9.src} heading="IMPORT YOUR DOCUMENTS" text="Using Ez Signature Sign you'll be able to easily import documents directly from Google Drive, Dropbox, Box and many more places using our out-of-the-box integrations."/>    
      <GridView mb={8} image={Assests.FeatureImage_8.src} heading="AUTO-EXPIRE DOCUMENTS" text="Schedule your in-process documents' content to auto-expire after a certain time period post creation. Ideal to save space, stay organised and manage your document lifecycle."/>    
      <TextOnImage mb={8} bgImage={Assests.EzFeatureBanner_1.src} heading="SECURE CLOUD STORAGE" text="Each and every transaction happening on the Xodo Sign platform is processed by a closely monitored server infrastructure and encrypted using industry-standard 256-bit HTTPS Encryption."/>
    </React.Fragment>
)
}

export default DocumentManagement