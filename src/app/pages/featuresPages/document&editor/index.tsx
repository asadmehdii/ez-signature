import React from "react"
import CloudBackground from "../components/cloudBackground"
import Assests from "@/app/assests/images"
import GridView  from "../components/GridView"
import MoreFeatures from "@/app/components/exploreMoreFeature"
const DocumentandEditor:React.FC = ()=>{
 return(
    <React.Fragment>
        <CloudBackground image={Assests.ElectSign_1.src} mt={8} mb={8}/>
        <GridView mb={8} isImageLeft IsBgColor image={Assests.FeatureImage_1.src} heading="BUILT WITH USABILITY IN MIND" text="The Ez Signature Sign document editor has been built to integrate smoothly with your daily workflow and increase your efficiency setting up agreements and contracts. Fields are placed using drag-and-drop, resized using alignment points in each corner, styled using a floating options bar at the top, and copied, pasted and reassigned using key combinations or a straightforward right-click menu."/>
        <GridView mb={8} image={Assests.FeatureImage_3.src} heading="ENRICH YOUR DOCUMENTS" text="Have your signer fill in basic data such as their name, company name, email address, or provide a custom input field with a placeholder of your own. Place signature and initials fields, mark fields as required or read-only, and insert entire text paragraphs into your document."/>
        <GridView mb={8} isImageLeft IsBgColor image={Assests.FeatureImage_4.src} heading="ADVANCED FIELDS" text="Use advanced fields to create checkboxes, radio buttons and dropdown menus, or have your signers upload required or optional attachments."/>
        <MoreFeatures/>
    </React.Fragment>
 )
}

export default DocumentandEditor