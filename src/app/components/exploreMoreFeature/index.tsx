import { Grid2 as Grid,Box, Typography } from "@mui/material"
import ContentBox from "../contentBox"
import Text from "../text"
import {EzFeature,EzFeatureProps} from "./content"
import Assests from "@/app/assests/images"
import Link from "next/link"; 

type props = {
  mt?:number
  mb?:number
}
const MoreFeatures:React.FC<props> = ({mt,mb})=>{
   return(
    <ContentBox sx={{marginTop:mt,marginBottom:mb}}>
        <Grid component={"div"}>
        <Typography fontFamily="var(--mada-text)" fontSize={{xs:40,md:65}} fontWeight={700}>Explore more Ezsignature features</Typography>
        <Typography maxWidth={1160}  fontSize={{sxmd:24}} margin={"10px 0"} fontWeight="600">Go paperless and accelerate your business — using Ezsignature you will be equipped with all the tools you need to increase your efficiency working with contracts and agreements of any kind.</Typography>
        <Grid container component={"div"} mt={4} rowSpacing={4} justifyContent={"space-between"}>
        {EzFeature.map((item) => (
          <Link
          key={item.featureName}
          href={`${item.navigate}?feature=${item.featureName.replace(/\s+/g, "-")}`}
          passHref
        >
                
                <Box key={item.featureName} component="div" sx={{width:{xs:"100%",sm:"277px"},display:{xs:"flex",sm:"block"},justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                  <Box component={"img"} sx={Styles.bgEllipseImage} src={item.icon.src} alt="ion_here"/>
                  <Text fontWeight="800" fontSize="22px" marginTop={12}>{item.featureName}</Text>
                </Box>
                </Link>
            ))}
        </Grid>
        </Grid>
    </ContentBox>    
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

export default MoreFeatures