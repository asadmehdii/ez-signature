import { Grid2 as Grid, Box } from "@mui/material"
import React, { ReactNode } from "react"
import Text from "@/app/components/text"
type props = {
    leftChild?:ReactNode,
    rightChild?:ReactNode,
    heading?:string,
    title?:string,
    id?:string
}

const GridText:React.FC<props> =({leftChild,rightChild,heading,title,id})=>{
  return(
    <Grid component={"div"} id={id} container  flexDirection={{xs:"column",md:"row"}} m={0} borderLeft={"1px solid #000000"} width={"100%"}>
        <Box mt={0} boxSizing={"border-box"} width={{xs:"100%",md:"50%"}}> 
        {heading && <Text fontSize={"42px"} fontWeight="700" style={{marginBottom:"8px",padding:0,marginTop:0,marginLeft:"10px"}}>{heading}</Text>} 
        <Box p={2} border={"1px solid #000000"} borderBottom={0} borderLeft={0}> 
        {title && <Text fontSize={"24px"} fontWeight="700" style={{borderBottom:"1px solid #000000",marginTop:"0px",paddingBottom:10}}>{title}</Text>}  
        {leftChild}
        </Box>    
        </Box> 
         <Box boxSizing={"border-box"} border={"1px solid #fff"} borderLeft={0} width={{xs:"100%",md:"50%"}} bgcolor="#002A1E" mt={0}>
          {rightChild}
        </Box>
    </Grid>
  )
}

export default GridText