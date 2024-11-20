"use client"
import Grid  from "@mui/material/Grid2";
import { FC, useState } from "react";
import Text from "../text";
import { Box } from "@mui/material";
import InputField from "./inputField";
import Button from "../button";

type formProps = {
title:string,
text:string,
mt:number
textWidth:number
}

const CustomForm:FC<formProps> = (props)=>{
   const {title,text, mt, textWidth} = props
    const FieldName = {
        apiDocuments:"apiDocuments",
        templates:"templates",
        users:"users",
        fullname:"fullname",
        email:"email",
        companyName:"companyName",
        message:"message"
    }

    const [formValues, setFormValues] = useState({
        apiDocuments: 250,
        templates: 15,
        users: 10,
        fullname:"",
        email:"",
        companyName:"",
        message:"",
    });
      const handleInputChange = (field: string, newValue: number | string) => {
        if (newValue === "") {
          setFormValues((prevValues) => ({
            ...prevValues,
            [field]: undefined,
          }));
        } else {
          setFormValues((prevValues) => ({
            ...prevValues,
            [field]: newValue,
          }));
        }
      };

   return(
    <Grid container component={"div"} padding={3} mt={mt} >
    <Text fontSize="65px" fontWeight="700" className="head_1">{title}</Text>
    <Text style={{maxWidth:`${textWidth}px`,padding:"10px 0"}}  fontSize="24px" fontWeight="600">{text}</Text>
    <Grid border={"1px solid #263238"} borderRadius={8} py={4} px={{xs:1,lg:4}} m={"auto"} container width={"max-content"} mt={4} justifyContent={"center"} columnGap={{xs:0,sm:4, md:6}}> 
    <Box display={"flex"} alignItems={"center"} component="div"width={{xs:"100%",sm:"350px", lg:"400px"}} boxSizing={"border-box"}>
     <Box width={"45%"}>
        <InputField value={formValues.apiDocuments} onChange={(value)=>{handleInputChange(FieldName.apiDocuments,value)}} type="number" label="API Documents"/>
        <InputField value={formValues.templates} onChange={(value)=>{handleInputChange(FieldName.templates,value)}} type="number" label="Templates"/>
        <InputField value={formValues.users} onChange={(value)=>{handleInputChange(FieldName.users,value)}} type="number" label="Users"/>
    </Box>
    <hr style={{height:'90%',border:"1px solid #000000",marginTop:"auto"}}/>
    <Box width={"45%"}>
        <InputField value={formValues.fullname} onChange={(value)=>{handleInputChange(FieldName.fullname,value)}} type="text" label="Full Name"/>
        <InputField value={formValues.email} onChange={(value)=>{handleInputChange(FieldName.email,value)}} type="text" label="Email Address"/>
        <InputField value={formValues.companyName} onChange={(value)=>{handleInputChange(FieldName.companyName,value)}} type="text" label="Company Name (optional)"/>
    </Box>   
   </Box>
   <Box component="div" display={"flex"} flexDirection={"column"}  width={{xs:"100%",sm:"350px", lg:"400px"}} boxSizing={"border-box"}>
   <InputField value={formValues.message} onChange={(value)=>{handleInputChange(FieldName.message,value)}} type="text" label="Message (optional)" multiline rows={6}/>
    <Button fontSize={20} fontWeight="500" style={{marginTop:"auto",marginLeft:"auto"}} width={"200px"} height={"55px"} color="#fff" backgroundColor="#263238" borderRadius={18}>Send Request</Button>
   </Box>
   </Grid>
   <Text style={{margin:'auto',paddingTop:'10px'}} color="#AEAEAE" fontSize="16px" fontWeight="600">Please note that we can only accommodate custom pricing requests for API volumes exceeding those included in the API Light plan.</Text>
    </Grid>    
   )
}

export default CustomForm