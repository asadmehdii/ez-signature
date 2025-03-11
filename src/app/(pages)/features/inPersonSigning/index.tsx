import React from "react"
import CloudBackground from "../components/cloudBackground"
import Assests from "@/app/assests/images"
import GridView from "../components/GridView"
import TextOnImage from "../components/textonImage"
const InPersonSigning:React.FC = ()=>{
    return(
       <React.Fragment>
           <CloudBackground image={Assests.ElectSign_1.src} mt={8} mb={8}/> 
           <GridView mb={8} IsBgColor isImageLeft image={Assests.FeatureImage_5.src} heading="GET MORE DONE, FASTER" text="Boost your efficiency and save time by having clients, staff or partners sign agreements in-person. They'll be able to sign documents directly on your device, and post completion the document will be delivered reliably to your signer(s) via email."/>  
           <GridView showLink mb={8} image={Assests.FeatureImage_6.src} heading="SIGN ON ANY DEVICE" text="Just like every Ez Signature Sign feature, In-Person Signing can be used with any device — regardless if you're working on a Mac, PC, tablet or mobile device."/>  
           <TextOnImage mb={8} bgImage={Assests.EzFeatureBanner_2.src} heading="IDEAL FOR NDAs, WAIVERS, ..." text="Signing in-person is ideal for any situation in which your clients, employees or partners need to sign a template or standard agreement in person and without the hassle of managing the paperwork."/> 
       </React.Fragment>
    )
} 

export default InPersonSigning