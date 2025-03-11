import React from 'react'
import CloudBackground from '../components/cloudBackground'
import Assests from '@/app/assests/images'
import { Box, Typography, Grid2 as Grid } from '@mui/material'
import Route from '@/app/utils/routes'
import Button from '@/app/components/button'
import ContentBox from '@/app/components/contentBox'
import GridView from '../components/GridView'
import DoubleGrid from '@/app/components/doubleGrid'
const ElectronicSignature:React.FC = ()=> {
    const EsignDocument = [
    {
    heading:"Self Signing",
    text:"Upload an agreement or contract and legally sign it yourself in less than a minute. No paper required.",
    image:Assests.Send.src,
    },
    {
    heading:"In-Person Signing",
    text:"Enable your customers or partners to eSign any document on the spot with in-person signing. Create and sign important agreements directly on a device of your choice.",
     image:Assests.Sign.src,
    },
    {
    heading:"Remote Signing",
    text:"Do you need a purchase order approved, or a contract signed by someone across town? Get your documents signed remotely with secure and reliable electronic signatures.",
     image:Assests.Manage.src,
    }
    ]
  return (
    <React.Fragment>
       <CloudBackground image={Assests.ElectSign_1.src}  mt={8} mb={8}/>
       <Box display="flex" justifyContent={"center"} alignItems={"center"} gap={3} px={2}>
       <Button backgroundColor="var(--secondary-color)" color="#fff" height={76} width={206} borderRadius={15} to={Route.SIGNUP}>Sign up for free</Button>
       <Button borderWidth={1} borderColor="#000000" height={76} width={186} borderRadius={15}
          to={Route.FEATURE_PAGES}

       >Take a tour</Button>
       </Box>
       <ContentBox mt={8} mb={8} sx={{bgcolor:"#F3FEFD"}}>
       <Box py={5}>
        <Typography fontFamily={"var(--text-mada)"} fontSize={{xs:40,md:56}} fontWeight={800} textAlign={"center"}>MANY WAYS TO E-SIGN DOCUMENTS</Typography>
        <Grid flexWrap={{xs:"wrap",md:"nowrap"}} gap={2} container justifyContent={{sm:"flex-start",md:"space-between"}} alignItems={"flex-start"} mt={4}>
           {EsignDocument.map((item)=>    
            <Box key={item.heading} maxWidth={{xs:"90%",sm:310}} width="90%" display={"flex"} justifyContent={"center"} alignItems={"flex-start"} flexDirection={"column"} gap={1}>
             <Box sx={Styles.bgEllipseImage} component={"img"} alt='img_here' src={item.image} />
             <Typography fontFamily={"var(--text-mada)"} fontSize={34} fontWeight={700}>{item.heading}</Typography>
             <Typography fontFamily={"var(--text-mada)"} fontSize={15} fontWeight={600}>{item.text}</Typography>
             </Box>
           )}
        </Grid>
       </Box>
       </ContentBox>
       <GridView mb={8} image={Assests.FeatureImage_2.src} heading='PARALLEL & SEQUENTIAL SIGNING' text='In the process of setting up the signing of a document you will be able to add multiple saved and new contacts as signers or recipients (CCs). You can choose these signers to act in a predefined sequence (Sequential Signing) or at the same time (Parallel Signing). With sequential signing, the document will only be forwarded to the next party if the previous party has fully completed the document.'/>
       <GridView mb={8} isImageLeft IsBgColor image={Assests.FeatureImage_3.src} heading='TYPE, DRAW OR UPLOAD YOUR SIGNATURE' text='There are three ways a signature and initials can be created using Ez Sign. You can type your name and choose from a set of fonts, draw your signature using your mouse or finger, or upload a PNG image of your existing signature. With each option you guarantee that the created signature is a legal representation of your signature and ensure its authenticity.'/>
       <DoubleGrid mb={8}/>
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
    }
}
export default ElectronicSignature