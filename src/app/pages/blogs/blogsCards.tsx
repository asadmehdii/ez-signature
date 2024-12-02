"use client"
import { Box,  Typography } from "@mui/material"
import {BLogCardProps} from "./content"
import { useRouter } from "next/navigation"
import Route from "@/app/utils/routes"

const BlogsCards:React.FC<BLogCardProps> = ({data})=>{
    const navigate = useRouter()
     return(
     <Box component={"div"} my={2} onClick={()=>navigate.push(Route.EXTENDED_BLOGS)} sx={Styles.card}>
        <Box component={"img"} width={"100%"} height={230} sx={{objectFit:'cover',borderRadius:'12px'}} src={data.img} alt="thumbnail_here" />
         <Box mt={0.5} display={"flex"} justifyContent={"space-between"} alignItems={'center'}>
            <Typography px={2} my={"auto"} sx={Styles.textPill}>{data.category}</Typography>
            <Typography sx={Styles.dateText}>{data.date}</Typography>
         </Box>
         <Typography sx={Styles.title} mt={0.5}>{data.title}</Typography>
         <Typography mt={0.5} sx={Styles.text}>{data.text}</Typography>
     </Box>
     )
}
const Styles = {
    card:{
    bgcolor:"#fff",
    p:2,
    boxShadow:"0 4px 4px  rgba(0, 0, 0, 0.25)",
    cursor:"pointer",
    width:"90%",
    maxWidth:380,
    borderRadius:"12px",
    height:550,
    overflow:"hidden",
    },
    textPill:{
     fontFamily:"var(--mada-text)",
     fontSize:12,
     fontWeight:"500",
     background:"#21D1B3",
     borderRadius:"19px",
     color:'#fff'
    },
    dateText:{
     fontFamily:"var(--mada-text)",
     fontSize:18,
     fontWeight:"400",
     color:"#818AA6",
    },
    title:{
    fontFamily:"var(--mada-text)",
    fontSize:20,
    fontWeight:"700",
    color:"#121212",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 2, 
    WebkitBoxOrient: "vertical",
    },
    text: {
    fontFamily: "var(--mada-text)",
    fontSize: 18,
    fontWeight: "600",
    color: "#57687D",
    height: "220px", 
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 8, 
    WebkitBoxOrient: "vertical",
    },
      

}

export default BlogsCards