"use client"
import Navbar from "@/app/components/navbar";
import TextField from "@mui/material/TextField";
import { Box, Checkbox } from "@mui/material";
import styled from "@emotion/styled/base";
import Grid from "@mui/material/Grid2";
import { FC, useState } from "react";
import Assests from "@/app/assests/images";
import Text from "@/app/components/text";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from "@/app/components/button";
import Link from "next/link";
import ContentBox from "@/app/components/contentBox";
import Route from "@/app/utils/routes";

const Login:FC = ()=>{
  const [hidePassword,setHidePassword] = useState<boolean>(true)
    const CustomTextField = styled(TextField)({
        '& .MuiOutlinedInput-root': {
          height:"47px",  
          borderRadius: '8px', 
          borderColor: '#666666', 
          fontSize: '20px', 
          padding: '10px 0px', 
          '& fieldset': {
            borderColor: '666666',
          },
          '&:hover fieldset': {
            borderColor: '666666', 
          },
          '&.Mui-focused fieldset': {
            borderColor: '#666666', 
          },
        },
        '& .MuiInputBase-input': {
          color: '#333', 
          fontSize: '20px', 
        },
      });
    return(
        <main>
        <Navbar showBtn={false}/>
        <ContentBox mt={8}>
        <Grid pb={2} container rowGap={5} columnSpacing={0.5} height={"100%"} flexDirection={{xs:"column-reverse",md:"row"}} justifyContent={{xs:"flex-start",md:"space-evenly"}} alignItems={"center"}>
        <Box display="flex" width={{xs:"100%",sm:"auto"}}>
        <Box width={{xs:"90%",sm:"430px",md:"370px",lg:"430px"}} m={"auto"}>
          <Text fontWeight="700" fontSize="42px">Welcome Back!</Text>
          <Box component={"div"} width="100%" my={3}>
           <Text fontSize="16px" fontWeight="600" color="var(--lightGray-color)">Email Address</Text>
           <CustomTextField fullWidth variant="outlined" type="email"/>  
          </Box>
          <Box my={3}>
           <Box component={"div"} m={0} p={0} display={"flex"} justifyContent={"space-between"} width="100%">
           <Text fontSize="16px" fontWeight="600" color="var(--lightGray-color)">Your password</Text>
           {hidePassword? (<Text color="var(--lightGray-color)" onclick={()=>setHidePassword(false)} style={{cursor:"pointer",display:"flex",alignItems:"center",gap:3}} fontSize="18px" fontWeight="600" ><RemoveRedEyeIcon /> Show</Text>):
           (<Text color="var(--lightGray-color)" onclick={()=>setHidePassword(true)} style={{cursor:"pointer",display:"flex",alignItems:"center",gap:3}} fontSize="18px" fontWeight="600" ><VisibilityOffIcon /> Hide</Text>)
           }
           </Box>
           <CustomTextField fullWidth variant="outlined" type={hidePassword?"password":"text"}/>  
           <Text fontSize="16px" fontWeight="600" style={{marginLeft:"auto",cursor:"pointer",borderBottom:"1px solid #000000",width:"fit-content",marginTop:'15px'}}>Forget your password</Text>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={1}>
          <Checkbox defaultChecked sx={{color: "#121212",m:0,p:0}} />
          <Text fontSize="16px" fontWeight="600">Keep me signed in until I sign out</Text>  
          </Box>
          <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} my={1} maxWidth={"450px"}>
             <Button style={{margin:"20px 0"}} fontSize={18} color="#fff" fontWeight="600" backgroundColor="var(--secondary-color)" borderRadius={25} width={"300px"} height={"50px"} to={Route.DASHBOARD}>Login</Button>
             <Box my={1} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={3}>
             <hr style={{ width: '40px', borderColor: "#cdcdcd", borderWidth: "1px", borderStyle: "solid" }} />
             <Text fontSize="14px" fontWeight="500" color="#cdcdcd">Or Login With</Text>
             <hr style={{ width: '40px', borderColor: "#cdcdcd", borderWidth: "1px", borderStyle: "solid" }} />
             </Box>
             <Box display={"flex"} alignItems={"center"} columnGap={2}>
              <Box component={"img"} sx={{cursor:'pointer',transition: "transform 0.3s ease","&:hover":{transform: "scale(1.2)",}}} src={Assests.Google.src} alt="icon_here"/>
              <Box component={"img"} sx={{cursor:'pointer',transition: "transform 0.3s ease","&:hover":{transform: "scale(1.2)",}}} src={Assests.Facebook.src} alt="icon_here"/>
              <Box component={"img"} sx={{cursor:'pointer',transition: "transform 0.3s ease","&:hover":{transform: "scale(1.2)",}}} src={Assests.Instagram.src} alt="icon_here"/>
              <Box component={"img"} sx={{cursor:'pointer',transition: "transform 0.3s ease","&:hover":{transform: "scale(1.2)",}}} src={Assests.Linkedin.src} alt="icon_here"/>
             </Box>
             <Text color="#cdcdcd" fontSize="14px" fontWeight="500" marginTop={20}>Don’t have an account?  <Link href={Route.SIGNUP} style={{color:"var(--secondary-color)",cursor:'pointer'}} >Sign up</Link></Text>
          </Box>
          </Box>
        </Box>
        {/* <Box display={"flex"} justifyContent={"center"} boxSizing={"border-box"} component={"div"} >    */}
        <Box component={"img"} width={{xs:"90%",sm:"430px",lg:"auto"}} src={Assests.LoginImg.src} alt="img_here"/>
        {/* </Box> */}
        </Grid>
        </ContentBox>
        </main>
    )
}

export default Login