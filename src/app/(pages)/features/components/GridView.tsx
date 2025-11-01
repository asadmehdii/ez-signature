import { Grid2 as Grid, Box, Typography } from "@mui/material"
import ContentBox from "@/app/components/contentBox"
import Link from "next/link";
import CallMadeIcon from '@mui/icons-material/CallMade';

type GridViewProps = {
  isImageLeft?: boolean;
  IsBgColor?: boolean;
  heading:string;
  text:string;
  image:any;
  mt?:number;
  mb?:number;
  showLink?:boolean
}
const GridView:React.FC<GridViewProps> = ({
    isImageLeft,
    IsBgColor,
    showLink,
    heading,
    text,
    image,
    mt,
    mb
})=>{
 return(
    <ContentBox sx={{backgroundColor:IsBgColor? "#F3FEFD" : "",marginBottom:mb,marginTop:mt,py:5}}>
    <Grid gap={3} flexWrap={{md:"nowrap"}} flexDirection={{xs:"column-reverse",md:isImageLeft?"row-reverse":"row"}} container justifyContent={"space-evenly"} alignItems={"center"}>
        <Box maxWidth={{xs:"90%",md:500}} width="100%">
            <Typography sx={Styles.title}>{heading}</Typography>    
            <Typography sx={Styles.text}>{text}</Typography>    
           {showLink && <Typography sx={Styles.link}><Link href="#">Learn more about Electronic Signatures <CallMadeIcon sx={{border:"2px solid var(--secondary-color)",ml:1,borderRadius:"100%",p:0.5,fontSize:16}}/></Link></Typography> }   
        </Box>
        <Box component={"img"} src={image} alt="img_here" maxHeight={400} sx={{objectFit:"contain"}} maxWidth={450} width={"100%"} />
    </Grid>
    </ContentBox>
 )
}

const Styles = {
    title:{
     fontFamily: "var(--mada-text)",
     fontSize:28,
     fontWeight:700,
     color:"var(--secondary-color)"    
    },
    text:{
    fontFamily: "var(--mada-text)",
    fontSize:16,
    fontWeight:600,
    my:2
    },
    link:{
    fontFamily: "var(--mada-text)",
    fontSize:16,
    fontWeight:600,
    color:"var(--secondary-color)" 
    }
}

export default GridView