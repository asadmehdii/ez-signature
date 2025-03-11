import { Box } from "@mui/material"
import Text from "@/app/components/text"
import React from "react"
import Button from "@/app/components/button"
import { APICardProps } from "./content"
const APIPricingCard = (data:{props:APICardProps})=>{
    const {title,text,price,duration,buttonText,provideFeature, popular} = data.props
    return(
       <Box key={title} width={{xs:"100%",sm:"400px"}}>
       <Box component={"div"} mx={"auto"} bgcolor={popular?"#21D0B3":""} minHeight={"430px"} pb={3} borderRadius={"20px"} >
       <Text style={{height:"60px",display:"flex",justifyContent:"center",alignItems:"center"}} textAlign="center" color="#fff" fontSize="24px" fontWeight="700">{popular && "Popular Package"}</Text>
       <Box component={"div"}>
        <Box bgcolor={"#fff"} borderRadius={"20px"} component={"div"} minHeight={popular?"430px":"400px"} p={3} border={"1px solid #434343"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Text color="#2F455C" fontSize="48px" fontWeight="800" style={{borderBottom:'1px solid #18395B',width:"90%"}}>{title}</Text>
          <Text textAlign="center" fontSize="20px" fontWeight="700" marginTop={35} style={{padding:"0 30px"}}>{text}</Text>
          <Text textAlign="center" color="#2F455C" fontSize="48px" fontWeight="800" style={{margin:'auto 0'}}>{price}<span style={{fontSize:"14px",marginLeft:'10px', color:"#2F455C"}}>{duration && duration}</span></Text>
          <Button style={{marginTop:popular? "30px" :"0"}} borderRadius={20} width={300} height={52} color="#fff" backgroundColor="#2F455C">{buttonText}</Button> 
        </Box>
        </Box>
        </Box>
        <ul style={{marginLeft:"10px",fontSize:'20px',fontWeight:'700',marginTop:"8px"}}>
        {provideFeature.map((text:string)=><li key={text}>{text}</li>)}
        </ul>
        </Box>
    )
} 

export default APIPricingCard