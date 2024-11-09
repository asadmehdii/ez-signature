"use client"
import Navbar from "@/app/components/navbar";
import TextField from "@mui/material/TextField";
import { Box, Checkbox, Typography } from "@mui/material";
import styled from "@emotion/styled/base";
import Grid from "@mui/material/Grid2";
import { FC, useState } from "react";
import Image from "next/image";
import Assests from "@/app/assests/images";
import Text from "@/app/components/text";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from "@/app/components/button";
import Link from "next/link";

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
        <Box component={"div"}>
        <Navbar/>
        <Grid container rowGap={5} component={"div"} py={2} flexDirection={{xs:"column-reverse",md:"row"}} alignItems={"center"}>
        <Box display="flex" justifyContent={"center"} style={{boxSizing:"border-box"}} component={"div"} width={{xs:"100%",md:"50%"}}>
        <Box>
          <Text fontWeight="700" style={{width:"100%"}} textAlign="center" fontSize="42px">Create an account</Text>
          <Box component={"div"} margin={"auto"} my={2} width={{xs:"300px",sm:"450px"}}>
           <Text fontSize="16px" fontWeight="600" color="var(--lightGray-color)" >Username</Text>
           <CustomTextField sx={{width:{xs:"300px",sm:"450px"}}} variant="outlined" type="text"/>  
          </Box>
          <Box component={"div"} my={2} mx={"auto"} width={{xs:"300px",sm:"450px"}}>
           <Text fontSize="16px" fontWeight="600" color="var(--lightGray-color)">Email Address</Text>
           <CustomTextField sx={{width:{xs:"300px",sm:"450px"}}} variant="outlined" type="email"/>  
          </Box>
          <Box my={2} mx={"auto"} width={{xs:"300px",sm:"450px"}}>
           <Box component={"div"} m={0} p={0} display={"flex"} justifyContent={"space-between"} maxWidth={"450px"}>
           <Text fontSize="16px" fontWeight="600" color="var(--lightGray-color)">Your Password</Text>
           {hidePassword? (<Text color="var(--lightGray-color)" onclick={()=>setHidePassword(false)} style={{cursor:"pointer",display:"flex",alignItems:"center",gap:3}} fontSize="18px" fontWeight="600" ><RemoveRedEyeIcon/> Show</Text>):
           (<Text color="var(--lightGray-color)" onclick={()=>setHidePassword(true)} style={{cursor:"pointer",display:"flex",alignItems:"center",gap:3}} fontSize="18px" fontWeight="600" ><VisibilityOffIcon sx={{color:"red"}}/> Hide</Text>)
           }
           </Box>
           <CustomTextField sx={{width:{xs:"300px",sm:"450px"}}}  variant="outlined" type={hidePassword?"password":"text"}/>  
           <Text  color="var(--lightGray-color)" fontSize="14px" fontWeight="600" style={{marginTop:'7px'}}>Use 8 or more characters with a mix of letters, numbers & symbols</Text>
          </Box>
          <Typography variant="body1" fontSize="16px" color="var(--lightGray-color)" fontWeight="500" sx={{maxWidth:"300px",marginX:{xs:"auto",sm:0}}}>By creating an account, you agree to our <span style={{fontWeight:"700",cursor:"pointer"}}> Terms of use </span> and <span style={{fontWeight:"700", cursor:"pointer"}}>Privacy Policy</span> </Typography>
          <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} border={"1px solid #333333"} width={"260px"} px={2} margin={"auto"} mt={2} borderRadius={"18px"} height={"50px"} >
          <Box display={"flex"}  alignItems={"center"} gap={0.5}>
          <Checkbox defaultChecked size="small" sx={{color: "#121212",m:0,p:0}} />
          <Text fontSize="16px" fontWeight="600" color="var(--lightGray-color)">I’m not a robot</Text>  
          </Box>
          <Image src={Assests.Recaptcha} alt="image_here" width={35} height={35} />
          </Box>
          <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} my={1} maxWidth={"450px"}>
             <Button style={{margin:"20px 0"}} fontSize={18} color="#fff" fontWeight="600" backgroundColor="var(--secondary-color)" borderRadius={25} width={"300px"} height={"50px"}>Create an account</Button>
             <Box my={1} color={"#cdcdcd"} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={3}>
             <hr style={{ width: '30px', borderColor: "#cdcdcd", borderWidth: "1px", borderStyle: "solid" }} />
             <Text fontSize="14px" fontWeight="500" color="#cdcdcd">Or Sign up With</Text>
             <hr style={{ width: '30px', borderColor: "#cdcdcd", borderWidth: "1px", borderStyle: "solid" }} />
             </Box>
             <Box display={"flex"} alignItems={"center"} columnGap={2}>
              <Image style={{objectFit:"contain",cursor:'pointer'}} src={Assests.Google} alt="icon_here"/>
              <Image style={{objectFit:"contain",cursor:'pointer'}} src={Assests.Facebook} alt="icon_here"/>
              <Image style={{objectFit:"contain",cursor:'pointer'}} src={Assests.Instagram} alt="icon_here"/>
              <Image style={{objectFit:"contain",cursor:'pointer'}} src={Assests.Linkedin} alt="icon_here"/>
             </Box>
             <Text color="#cdcdcd" fontSize="14px" fontWeight="500" marginTop={20}>Alread have an account? <Link href="/pages/auth/login" style={{color:"var(--secondary-color)",cursor:'pointer'}}>Login</Link></Text>
          </Box>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"center"} boxSizing={"border-box"} component={"div"}  width={{xs:"100%",md:"50%"}}>   
        <Image style={{width:"75%",height:"75%"}} src={Assests.SignUpImage} alt="img_here" priority/>
        </Box>
        </Grid>
        </Box>
    )
}

export default Login