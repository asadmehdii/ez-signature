import React from 'react'
import { Box, Grid2 as Grid } from '@mui/material'
import ContentBox from '../contentBox'
import Text from '../text'
import Button from '../button'
import Assests from '@/app/assests/images'
type Props = {
    mt?:number
    mb?:number
  } 
const DoubleGrid:React.FC<Props> = ({mt,mb})=> {

  return (
    <Grid container flexDirection={{xs:"column",md:"row"}}  mt={mt} mb={mb} component={"div"}>
    <Box component={"div"} width={{xs:"100%",md:"50%"}} sx={Styles.rightDiv}>
      <ContentBox sx={{display:"flex",justifyContent:"center",flexDirection:"column",gap:2}}>
      <Text fontSize={"38px"} fontWeight="800" color="#fff">Ezsignature Enterprise</Text>
      <Text style={{maxWidth:"350px"}} fontSize={"20px"} fontWeight="500" color="#fff">Request an Enterprise solution tailored for your business.</Text>
      <Button sx={{mt:3}} hoverStyle={{color:"var(--secondary-color)",bgcolor:"transparent",border:"1px solid var(--secondary-color)"}} fontSize={20} fontWeight="500" borderRadius={"19px"} width={249} height={69} color="var(--text-color)" backgroundColor="var(--secondary-color)">Contact Us</Button>
      </ContentBox>
    </Box>
    <Box component={"div"} width={{xs:"100%",md:"50%"}} sx={Styles.leftDiv}>
    <ContentBox sx={{display:"flex",justifyContent:"center",flexDirection:"column",gap:2}}>
    <Text fontSize={"38px"} fontWeight="800" color="#fff">Interested in using the Xodo Sign API?</Text>
      <Text style={{maxWidth:"350px"}} fontSize={"20px"} fontWeight="500" color="#fff">We&apos;re offering separate pricing plans for more extensive API usage.</Text>
      <Button fontSize={20} fontWeight="500" hoverStyle={{color:"var(--secondary-color)",bgcolor:"transparent",border:"1px solid var(--secondary-color)"}} borderRadius={"19px"} width={249} height={69} color="var(--text-color)" backgroundColor="var(--secondary-color)">API Pricing Plans</Button>
    </ContentBox>
    </Box>
  </Grid>
  )
}

const Styles = {
    rightDiv: {
    background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
          url("${Assests.ContactUsCustomer.src}") no-repeat center`,
    backgroundSize: "cover",
    height: "500px",
    display: "flex",
    boxSizing: "border-box",
      },
    leftDiv: {
    background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
           url("${Assests.ApiPricingPlan.src}") no-repeat
            center`,
    backgroundSize: "cover",
    height: "500px",
    display: "flex",
    boxSizing: "border-box",
    }
}
export default DoubleGrid