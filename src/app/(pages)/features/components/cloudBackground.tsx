import { Box } from "@mui/material"
import Assests from "@/app/assests/images"

type CloudBgProps = {
  image:any;
  mt?:number
  mb?:number
} 

const CloudBackground:React.FC<CloudBgProps> = ({image,mt,mb})=>{
   return(
    <Box  sx={Style.BgImage} mt={mt} mb={mb}>
        <Box component={"img"} sx={{objectFit:"cover"}} pt={8} maxWidth={921} width={{xs:"70%",md:"100%"}} height={"50%"} src={image} alt="image_here"/>
    </Box>
   )
}

const Style ={
    BgImage:{
      background: `url("${Assests.CloudBg.src}") no-repeat`,
      backgroundPosition:"center",
      backgroundSize:"100%",
      display:"flex",
      justifyContent:"center",
      alignItems:"flex-end",
    }
}
export default CloudBackground