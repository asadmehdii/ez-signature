import React from "react"
import CloudBackground from "../components/cloudBackground"
import Assests from "@/app/assests/images"
import GridView from "../components/GridView"
import TextOnImage from "../components/textonImage"
import MoreFeatures from "@/app/components/exploreMoreFeature"

const AuditTrails:React.FC=()=>{
return(
    <React.Fragment>
    <CloudBackground image={Assests.ElectSign_1.src} mt={8} mb={8}/>
    <GridView isImageLeft IsBgColor mb={8} image={Assests.FeatureImage_7.src} heading="ENSURE COMPLIANCE" text="Storing and being able to submit comprehensive and detailed audit trails for every internal and outgoing contractual business transaction ensures your compliance to external auditors when undergoing a compliance audit. Auditors may demand records for every instance where important contracts or agreements are touched."/>
    <TextOnImage mb={8} bgImage={Assests.EzFeatureBanner_1.src} heading="RETENTION" text="Completed documents and audit trails are stored by Xodo Sign's closely monitored server infrastructure, providing you with immediate and secure access." />
    <MoreFeatures/>
    </React.Fragment>
)
}

export default AuditTrails