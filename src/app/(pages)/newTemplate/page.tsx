"use client";
import React, { useState } from "react";
import { ToggleButtonGroup, ToggleButton, IconButton, Button, Box } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import Grid from "@mui/material/Grid2";
import DropBoxIcon from "@mui/icons-material/Storage"; // Placeholder for Dropbox
import GoogleDriveIcon from "@mui/icons-material/DriveFileMove"; // Placeholder for Google Drive
import Topbar from "@/app/components/dashboardTopbar/topbar";
import CustomButton from "@/app/components/button";
import Text from "@/app/components/text";
import Link from "next/link";
import { Diversity1Outlined, PersonPinOutlined, AddLink, NoteOutlined, ClearOutlined, DraftsOutlined, SettingsOutlined } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import CustomPopover from "@/app/components/popover";
import { useRouter } from "next/navigation"; // Use `next/navigation` instead of `next/router`


export default function NewTemplatePage() {
  const [selection, setSelection] = useState("me-only");
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [roles, setRoles] = useState([{ rolename: "" }]);
  const [availableToStaff, setAvailableToStaff] = useState(false);
  const [lockForStaff, setLockForStaff] = useState(false);
  const router = useRouter(); // Initialize the router from `next/navigation`

  const handleSelectionChange = (event: React.MouseEvent<HTMLElement>, newSelection: string) => {
    if (newSelection) setSelection(newSelection);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleRoleChange = (index: number, value: string) => {
    const newRoles = [...roles];
    newRoles[index].rolename = value;
    setRoles(newRoles);
  };

  const handleAddRole = () => {
    setRoles([...roles, { rolename: "" }]);
  };

  const handleSaveDraft = async () => {
    if (!file) {
      alert("Please select a file before saving draft.");
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    formData.append('data', JSON.stringify({
      title,
      message,
      roles,
      availableToStaff,
      lockForStaff,
      status: "draft"
    }));

    try {
      const token = localStorage.getItem("token");
      const response = await fetch('http://ezsignature.org/api/template/create', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Draft saved successfully:', result);
        alert('Draft saved successfully!');
      } else {
        const errorText = await response.text();
        console.error('Error saving draft:', errorText);
        alert(`Error saving draft: ${errorText}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert("An error occurred while saving the draft.");
    }
  };

  const handlePrepareClick = async () => {
    if (!file) {
      alert("Please select a file before saving.");
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    formData.append('data', JSON.stringify({
      title,
      message,
      roles,
      availableToStaff,
      lockForStaff,
      status: "active"
    }));

    try {
      const token = localStorage.getItem("token");
      const response = await fetch('http://ezsignature.org/api/template/create', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Saved successfully:', result);
        alert('Saved successfully!');
      router.push("/prepare");

      } else {
        const errorText = await response.text();
        console.error('Error saving:', errorText);
        alert(`Error saving: ${errorText}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert("An error occurred while saving.");
    }
  };

  return (
    <Topbar
  title='New Template'
  outlinedBtn='Save Draft'
  buttonText='Prepare'
  onFirstBtnClick={handlePrepareClick}  // Calls handlePrepareClick on Prepare button click
  onSecondBtnClick={handleSaveDraft}  // Calls handleSaveDraft on Save Draft button click

>

      <Grid component={"section"} marginLeft={"30px"} marginRight={"30px"} paddingBottom={"20px"}>
        <form>
          <ToggleButtonGroup
            value={selection}
            exclusive
            onChange={handleSelectionChange}
            className="signature.who"
            sx={{ display: "flex", justifyContent: "center", gap: "19px", marginBottom: "20px" }}
          >
            <ToggleButton className="who.li" value="me-only" sx={{
              '&:hover': {
                backgroundColor: 'rgba(25, 118, 210, 0.08) !important',
              },
              '&.Mui-selected': {
                borderColor: 'rgb(2, 6, 168) !important',
                backgroundColor: 'rgba(25, 118, 210, 0.08) !important',
              },
              textTransform: "none", width: "100%", height: "100%", justifyContent: "start", padding: "26px 20px", gap: "1", border: "1px solid #d7d7d9"
            }}>
              <NoteOutlined sx={{ marginRight: "5px" }} />
              Template
            </ToggleButton>
            <ToggleButton className="who.li" value="me-and-others" sx={{
              '&:hover': {
                backgroundColor: 'rgba(25, 118, 210, 0.08) !important',
              },
              '&.Mui-selected': {
                borderColor: 'rgb(2, 6, 168) !important',
                backgroundColor: 'rgba(25, 118, 210, 0.08) !important',
              },
              display: "flex", textTransform: "none", width: "100%", justifyContent: "space-between", padding: "26px 20px", gap: "1", border: "1px solid #d7d7d9"
            }}>
              <Box sx={{ display: "flex" }}>
                <AddLink sx={{ marginRight: "5px" }} />
                Template Link
              </Box>
              <Box sx={{ display: "flex" }}>
                <Text fontSize="14px" color="rgb(0 8 61)">1 Signer Only</Text>
              </Box>
            </ToggleButton>
          </ToggleButtonGroup>

          {/* File Upload Section */}
          <Grid
            component={"div"}
            container
            direction={"column"}
            marginTop={"30px"}
            border={"1px solid #d7d7d9"}
            borderRadius={"3px"}
            gap={2}
          >
            <Grid component={"section"} container direction={"row"} padding={"15px 20px"} justifyContent={"space-between"} borderBottom={"1px solid #d7d7d9"}>
              <Grid component={"div"} container direction={"column"}>
                <Button component="label"
                  sx={{ color: "var(--secondary-color)", padding: "0 28px", display: "flex", alignItems: "center", fontWeight: "500", fontSize: "16", borderRadius: "20px", border: "1px solid var(--secondary-color)", height: "35px", width: "fit-content" }}>
                  Choose Files
                  <input hidden type="file" onChange={handleFileChange} />
                </Button>
                <Text color="rgb(123 129 145)" fontSize="0.75rem" margin={5}>
                  Supported formats: .pdf, .docx, .txt, .png, .jpg, .ppt. You can find more details about File Upload
                  <Link href="" style={{ color: "rgb(2 6 168)", fontWeight: "400" }}> here.</Link>
                </Text>
              </Grid>
              <Grid component={"div"} container alignItems={"center"} gap={2}>
                <IconButton>
                  <DropBoxIcon />
                </IconButton>
                <IconButton>
                  <GoogleDriveIcon />
                </IconButton>
                <CustomButton color="#fff" fontWeight="500" fontSize={16} borderRadius={20} borderWidth={1} borderColor="var(--secondary-color)" height={"35px"} width={"fit-content"} style={{ padding: "0 28px", display: "flex", alignItems: "center" }}>New Template</CustomButton>
              </Grid>
            </Grid>
            <Grid component={"section"} container direction={"row"} padding={"15px 20px"} justifyContent={"center"} color="rgb(123 129 145)" borderBottom={"1px solid #d7d7d9"}>
              Drag files here
            </Grid>
          </Grid>

          {/* Roles */}
          <Grid component={"div"} container marginTop={"30px"} border={"1px solid #d7d7d9"} borderRadius={"3px"}>
            <Grid component={"div"} container direction={"row"} justifyContent={"space-between"} borderBottom={"1px solid #e8e8e9"} sx={{ background: "rgba(25, 118, 210, 0.08)" }} height={"50%"} width={"100%"} padding={"3px 20px"}>
              <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"}>
                <Diversity1Outlined fontSize="small" />
                <Text fontSize="0.875rem" color="rgb(0 8 61)">Roles</Text>
              </Grid>
              <Grid component={"div"} container direction={"row"} alignItems={"center"}>
                <Checkbox size="small" />
                <Text fontSize="0.875rem" color="rgb(0 8 61)">Signing Order</Text>
              </Grid>
            </Grid>
            <Grid component={"section"} container padding={"15px 20px"} borderBottom={"1px solid #d7d7d9"} justifyContent={"space-between"} width={"100%"}>
              <Text fontSize="14px" color="rgb(0 8 61)">Enter the roles this document&apos;s signers will represent. You can also specify CCs (recipients).</Text>
            </Grid>

            {/* Role Input */}
            {roles.map((role, index) => (
              <Grid component={"section"} container padding={"15px 20px"} borderBottom={"1px solid #d7d7d9"} justifyContent={"space-between"} width={"100%"} key={index}>
                <Grid component={"div"} container>
                  <Grid component={"div"} container direction={"row"} gap={1}>
                    <Box sx={{ display: "flex", alignItems: "center", height: 32, my: "auto", border: "1px solid #d7d7d9", borderRadius: "3px", }}>
                      <PersonPinOutlined sx={{ color: grey[500], borderRight: "1px solid #d7d7d9", background: "rgba(25, 118, 210, 0.08)", height: 32, px: 0.5 }} />
                      <input type="text" placeholder="Example: Client, Partner" style={{ border: "none", width: "100%", height: "100%", background: "transparent", outline: "none" }} onChange={(e) => handleRoleChange(index, e.target.value)} />
                    </Box>
                    <CustomPopover title="Signer" options={["Select Role", "Signer", "CC"]} />
                    <Box sx={{ display: "flex", alignItems: "center", my: "auto", background: "rgba(25, 118, 210, 0.08)", border: "1px solid #d7d7d9", borderRadius: "3px", height: 32, px: 1, cursor: "pointer" }}>EN
                    </Box>
                  </Grid>
                </Grid>
                <Grid component={"div"} container gap={2}>
                  <Grid component={"div"} container direction={"row"} alignItems={"center"}>
                    <Checkbox disabled defaultChecked size="small" />
                    <Text fontSize="0.875rem" color="rgb(0 8 61)">Required role</Text>
                  </Grid>
                  <Box sx={{ display: "flex", alignItems: "center", background: "rgba(25, 118, 210, 0.08)", border: "1px solid #d7d7d9", borderRadius: "3px", height: 32, px: 0.5, my: "auto" }}>
                    <ClearOutlined fontSize="medium" sx={{ color: grey[500] }} />
                  </Box>
                </Grid>
              </Grid>
            ))}

            {/* Add Role Button */}
            <Grid component={"section"} container padding={"15px 20px"} justifyContent={"space-between"} width={"100%"}>
              <CustomButton onClick={handleAddRole} color="#fff" fontWeight="500" fontSize={16} borderRadius={20} borderWidth={1} borderColor="var(--secondary-color)" height={"35px"} width={"fit-content"} style={{ padding: "0 28px", display: "flex", alignItems: "center" }}>Add Role</CustomButton>
            </Grid>
          </Grid>

          {/* Title & Messages */}
          <Grid component={"div"} container marginTop={"30px"} border={"1px solid #d7d7d9"} borderRadius={"3px"}>
            <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"} borderBottom={"1px solid #e8e8e9"} sx={{ background: "rgba(25, 118, 210, 0.08)" }} height={"50%"} width={"100%"} padding={"10px 20px"}>
              <DraftsOutlined fontSize="small" />
              <Text fontSize="0.875rem" color="rgb(0 8 61)">Title & Message</Text>
            </Grid>
            <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
              <label htmlFor="" className="title_label">Document Title</label>
              <input type="text" className="title_input" placeholder="Please sign this document" style={{ height: "35px" }} onChange={(e) => setTitle(e.target.value)} />
            </Grid>
            <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
              <label htmlFor="" className="title_label">Message</label>
              <textarea name="" id="" placeholder="Enter Message(optional)" className="title_input" style={{ padding: "5px 3px" }} onChange={(e) => setMessage(e.target.value)} />
            </Grid>
          </Grid>

          {/* Settings */}
          <Grid component={"div"} container marginTop={"30px"} border={"1px solid #d7d7d9"} borderRadius={"3px"}>
            <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"} borderBottom={"1px solid #e8e8e9"} sx={{ background: "rgba(25, 118, 210, 0.08)" }} height={"50%"} width={"100%"} padding={"10px 20px"}>
              <SettingsOutlined fontSize="small" />
              <Text fontSize="0.875rem" color="rgb(0 8 61)">Document settings</Text>
            </Grid>
            <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
              <Grid component={"div"} container alignItems={"center"}>
                <Checkbox size="small" onChange={(e) => setAvailableToStaff(e.target.checked)} />
                <Text fontSize="0.875rem" color="rgb(0 8 61)">Make this template available to Staff members</Text>
              </Grid>
              <Grid component={"div"} container alignItems={"center"}>
                <Checkbox size="small" onChange={(e) => setLockForStaff(e.target.checked)} />
                <Text fontSize="0.875rem" color="rgb(0 8 61)">Prevent Staff members from modifying this template</Text>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Topbar>
  );
};

