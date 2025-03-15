"use client"
import React, { useState } from 'react'
import Topbar from '@/app/components/dashboardTopbar/topbar'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Text from '@/app/components/text';
import { Box, Grid2 as Grid } from '@mui/material';
import InputText from '@/app/components/inputText';
import InputSelect from '@/app/components/inputSelect';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Route from '@/app/utils/routes';

const NewTeamMember:React.FC = ()=> {
  const role = ["Super Admin", "Manager", "Staff", "Read-Only"];
  const [selectedRole, setSelectedRole] = useState("Super Admin");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState('');

  
  const validateEmail = (value: string) => {
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };
  const [loading, setLoading] = useState(false);
  
  const handleSave = async () => {
    console.log("Save button clicked!"); // Debug log
    if (!email.trim()) {
      alert("Please enter an email address.");
      return;
    }
  
    const userId = localStorage.getItem("userId"); // Retrieve stored userId
    if (!userId) {
      alert("User ID not found. Please log in again.");
      return;
    }
  
    setLoading(true);
    try {
      const response = await fetch('https://ezsignature-backend-production.up.railway.app/teams', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          name: "", // You can make this dynamic
          email,
          role: selectedRole
        })
      });
  
      console.log("API Response Status:", response.status); // Debug log
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add team member");
      }
  
      alert("Team member added successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding team member. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Topbar title='New Team Member' leftBtnUrl={Route.TEAM} leftBtnStyle={{backgroundColor:'#fff',color:"var(--secondary-color)",border:"1px solid var(--secondary-color)"}}
     leftBtnText={<><ArrowBackIosNewIcon sx={{fontSize:15,mr:0.5,mb:0.2}}/> Team</>} 
     onFirstBtnClick={handleSave}
     buttonText='Save'>
    <Grid  container px={3}>
    <Box width="100%" border="1px solid #E8EFF6">
    <Text fontSize="16px" fontWeight="400" marginTop={0} style={{width:"auto",backgroundColor:"#E8EFF6",height:44,paddingLeft:"20px",display:"flex",alignItems:"center"}} color="var(--secondary-color)">Basic Information</Text>
     <Box pl={"20px"} borderBottom={"1px solid #E8EFF6"}>
      <div><InputText lableStyle={{color:'var(--secondary-color)'}} mt={3} mb={2}   value={email} 
                     onChange={(e) => validateEmail(e.target.value)}   
                     lable='Email Address' height={35} width={250} important borderRadius={2}/>
                           {emailError && <p style={{ color: 'red', fontSize: '12px' }}>{emailError}</p>}

                     </div>
     </Box>
      <InputSelect labelStyle={{color:'var(--secondary-color)'}} label='Role' margin={"20px 0 0 20px"} important  value={selectedRole}   onChange={(e) => setSelectedRole(e.target.value)}  itemStyle={{backgroundColor:"#E8EFF6","&:hover":{color:"#fff",bgcolor:"var(--secondary-color)"},"&.Mui-selected":{backgroundColor:"#E8EFF6","&:hover":{color:"#fff",bgcolor:"var(--secondary-color)"}}}} options={role} height={35} borderRadius={2} sx={{bgcolor:"#E8EFF6"}} width={250}/>
      <Box px={"20px"}  mt={3}>
      <Text color='var(--secondary-color)' fontSize='16px' fontWeight='400' style={{display:"flex",alignItems:"center",gap:"8px",margin:"0px"}}><AdminPanelSettingsOutlinedIcon/> Super Admin:</Text>
      <Text fontSize='16px' fontWeight='400' style={{maxWidth:"750px",marginTop:"6px"}}>Comes with all business-level permissions, except for deleting the business. Business Super Admins cannot make any changes to your Xodo Sign account, only to your business &quot;An Um&quot;.</Text>

      <Text color='var(--secondary-color)' fontSize='16px' fontWeight='400' style={{display:"flex",alignItems:"center",gap:"8px",margin:"0px"}}><WorkOutlineOutlinedIcon/> Manager:</Text>
      <Text fontSize='16px' fontWeight='400' style={{maxWidth:"750px",marginTop:"6px"}}>Managers can view, create, edit, delete and use all business documents and templates, and cancel ongoing documents.</Text>

      <Text color='var(--secondary-color)' fontSize='16px' fontWeight='400' style={{display:"flex",alignItems:"center",gap:"8px",margin:"0px"}}><GroupAddOutlinedIcon/> Staff:</Text>
      <Text fontSize='16px' fontWeight='400' style={{maxWidth:"750px",marginTop:"6px"}}>Staff members can create, edit and cancel their own documents. They can also use global templates.</Text>

      <Text color='var(--secondary-color)' fontSize='16px' fontWeight='400' style={{display:"flex",alignItems:"center",gap:"8px",margin:"0px"}}><RemoveRedEyeOutlinedIcon/> Read-Only:</Text>
      <Text fontSize='16px' fontWeight='400' style={{maxWidth:"750px",marginTop:"6px"}}>Read-Only members can view all business documents and templates.</Text>
      </Box> 
     </Box>
    <Text fontSize="16px" fontWeight="400" marginTop={0} style={{width:"100%",backgroundColor:"#E8EFF6",height:"100%",minHeight:44, padding:"0 20px",display:"flex",alignItems:"center"}} color="var(--secondary-color)">Upon your confirmation our systems will automatically deliver an email invitation to your team member.</Text>
    </Grid>
    </Topbar>
  )
}

export default NewTeamMember