"use client";
import React, { useState,useEffect } from 'react';
import Topbar from '@/app/components/dashboardTopbar/topbar';
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams, useRouter } from "next/navigation";

const NewTeamMember: React.FC = () => {
   const searchParams = useSearchParams();
  const router = useRouter();
  const [id, setId] = useState<string | null>(null);
const [selectedRole, setSelectedRole] = useState("Super Admin");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);
  
useEffect(() => {
  const idParam = searchParams.get("id");
  const emailParam = searchParams.get("email");
  const roleParam = searchParams.get("role");

  if (idParam) {
    setId(idParam);
    setEmail(emailParam || "");

    const roleMap: { [key: string]: string } = {
      super_admin: "Super Admin",
      manager: "Manager",
      staff: "Staff",
      read_only: "Read-Only",
    };

   if (roleParam) {
  const normalizedRole = roleParam.toLowerCase();
  const displayRole = roleMap[normalizedRole];
  if (displayRole) {
    setSelectedRole(displayRole);
  }
}

  }
}, [searchParams]);


  
  const role = [
    { backendRole: "super_admin", displayRole: "Super Admin" },
    { backendRole: "manager", displayRole: "Manager" },
    { backendRole: "staff", displayRole: "Staff" },
    { backendRole: "read_only", displayRole: "Read-Only" }
  ];

  

  const validateEmail = (value: string) => {
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

const handleSave = async () => {
  if (!email.trim()) {
    toast.error("Please enter an email address.");
    return;
  }

  const userId = localStorage.getItem("userId");
  if (!userId) {
    toast.error("User  ID not found. Please log in again.");
    return;
  }

  const roleMap: { [key: string]: string } = {
    "Super Admin": "super_admin",
    "Manager": "manager",
    "Staff": "staff",
    "Read-Only": "read_only",
  };

  const backendRole = roleMap[selectedRole] || "super_admin";

  setLoading(true);

  try {
    const url = id
      ? `http://ezsignature.org/api/teams/${id}/role` // Update role endpoint
      : `http://ezsignature.org/api/${userId}/invite`; // Invite endpoint

    const method = id ? 'PATCH' : 'POST'; // Use PATCH for updating role
    const payload = id ? { role: backendRole } : { email, role: backendRole };

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to process request");
    }

    toast.success(id ? "Role updated successfully!" : "Invitation sent successfully!");

     // Redirect to Team page after successful update
setTimeout(() => {
  router.push(Route.TEAM);
}, 1000); // Wait for 3 seconds before redirecting

  } catch (error) {
    console.error("Error:", error);
    toast.error("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};



  return (
    <>
      <Topbar
        title="New Team Member"
        leftBtnUrl={Route.TEAM}
        leftBtnStyle={{ backgroundColor: '#fff', color: "var(--secondary-color)", border: "1px solid var(--secondary-color)" }}
        leftBtnText={<><ArrowBackIosNewIcon sx={{ fontSize: 15, mr: 0.5, mb: 0.2 }} /> Team</>}
        onFirstBtnClick={handleSave}
        buttonText="Save"
      >
        <Grid container px={3}>
          <Box width="100%" border="1px solid #E8EFF6">
            <Text fontSize="16px" fontWeight="400" marginTop={0} style={{ width: "auto", backgroundColor: "#E8EFF6", height: 44, paddingLeft: "20px", display: "flex", alignItems: "center" }} color="var(--secondary-color)">Basic Information</Text>
            <Box pl={"20px"} borderBottom={"1px solid #E8EFF6"}>
              <div>
                <InputText
                  lableStyle={{ color: 'var(--secondary-color)' }}
                  mt={3} mb={2}
                  value={email}
                  onChange={(e) => validateEmail(e.target.value)}
                  lable="Email Address"
                  height={35} width={250} important borderRadius={2}
                />
                {emailError && <p style={{ color: 'red', fontSize: '12px' }}>{emailError}</p>}
              </div>
            </Box>
          <InputSelect
  labelStyle={{ color: 'var(--secondary-color)' }}
  label="Role"
  margin={"20px 0 0 20px"} important
  value={selectedRole}
  onChange={(e) => setSelectedRole(e.target.value)}
  itemStyle={{
    backgroundColor: "#E8EFF6",
    "&:hover": { color: "#fff", bgcolor: "var(--secondary-color)" },
    "&.Mui-selected": {
      backgroundColor: "#E8EFF6",
      "&:hover": { color: "#fff", bgcolor: "var(--secondary-color)" },
    },
  }}
  options={role.map((r) => r.displayRole)}
  height={35}
  borderRadius={2}
  sx={{ bgcolor: "#E8EFF6" }}
  width={250}
/>

            <Box px={"20px"} mt={3}>
              <Text color='var(--secondary-color)' fontSize='16px' fontWeight='400' style={{ display: "flex", alignItems: "center", gap: "8px", margin: "0px" }}><AdminPanelSettingsOutlinedIcon /> Super Admin:</Text>
              <Text fontSize='16px' fontWeight='400' style={{ maxWidth: "750px", marginTop: "6px" }}>Comes with all business-level permissions, except for deleting the business. Business Super Admins cannot make any changes to your Xodo Sign account, only to your business "An Um".</Text>

              <Text color='var(--secondary-color)' fontSize='16px' fontWeight='400' style={{ display: "flex", alignItems: "center", gap: "8px", margin: "0px" }}><WorkOutlineOutlinedIcon /> Manager:</Text>
              <Text fontSize='16px' fontWeight='400' style={{ maxWidth: "750px", marginTop: "6px" }}>Managers can view, create, edit, delete and use all business documents and templates, and cancel ongoing documents.</Text>

              <Text color='var(--secondary-color)' fontSize='16px' fontWeight='400' style={{ display: "flex", alignItems: "center", gap: "8px", margin: "0px" }}><GroupAddOutlinedIcon /> Staff:</Text>
              <Text fontSize='16px' fontWeight='400' style={{ maxWidth: "750px", marginTop: "6px" }}>Staff members can create, edit and cancel their own documents. They can also use global templates.</Text>

              <Text color='var(--secondary-color)' fontSize='16px' fontWeight='400' style={{ display: "flex", alignItems: "center", gap: "8px", margin: "0px" }}><RemoveRedEyeOutlinedIcon /> Read-Only:</Text>
              <Text fontSize='16px' fontWeight='400' style={{ maxWidth: "750px", marginTop: "6px" }}>Read-Only members can view all business documents and templates.</Text>
            </Box>
          </Box>
          <Text fontSize="16px" fontWeight="400" marginTop={0} style={{ width: "100%", backgroundColor: "#E8EFF6", height: "100%", minHeight: 44, padding: "0 20px", display: "flex", alignItems: "center" }} color="var(--secondary-color)">Upon your confirmation our systems will automatically deliver an email invitation to your team member.</Text>
        </Grid>
      </Topbar>

      {/* Toast container for notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
};

export default NewTeamMember;
