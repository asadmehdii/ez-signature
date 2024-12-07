"use client";
import React, { useState } from "react";
import { ToggleButtonGroup, ToggleButton, IconButton, Button, Typography, Box, Popover } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import Grid from "@mui/material/Grid2";
import DropBoxIcon from "@mui/icons-material/Storage"; // Placeholder for Dropbox
import GoogleDriveIcon from "@mui/icons-material/DriveFileMove"; // Placeholder for Google Drive
import Topbar from "@/app/components/dashboardTopbar/topbar";
import who_just_me from "@/app/assests/images/who_just_me.png";
import who_just_others from "@/app/assests/images/who_just_others.png";
import who_me_others from "@/app/assests/images/who_me_others.png";
import Image from "next/image";
import CustomButton from "@/app/components/button";
import Text from "@/app/components/text";
import Link from "next/link";
import { Diversity1Outlined, PersonOutlineOutlined, ClearOutlined, DraftsOutlined, ContentPasteOutlined, SettingsOutlined, Help, ArrowDropDown} from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import CustomPopover from "@/app/components/popover";
import ModelToggle from "@/app/components/modelToggle";


export default function NewDocumentPage() {
  const [selection, setSelection] = useState("me-only");

  const handleSelectionChange = (
    event: React.MouseEvent<HTMLElement>,
    newSelection: string
  ) => {
    if (newSelection) setSelection(newSelection);
  };
  const options = [
    "1 day (December 06)",
    "3 days",
    "7 days",
    "2 weeks",
    "3 weeks",
    "1 month",
    "3 months",
    "6 months",
    "Choose Date",
  ];
const signerOptions =[
  "Select Role",
  "Signer",
  "CC",
]
  return (
    <Topbar  title='New Document' buttonText='prepare' secondText='Quick Send' outlinedBtn='Save Draft'>
      <Grid component={"section"} marginLeft={"30px"} marginRight={"30px"} paddingBottom={"20px"}>
        <form>
            <ToggleButtonGroup
        value={selection}
        exclusive
        onChange={handleSelectionChange}
        className="signature.who"
        sx={{ display: "flex", justifyContent: "center", gap: "19px", marginBottom: "20px"}}
      >
        <ToggleButton className="who.li" value="me-only" sx={{
          '&:hover': {
        backgroundColor: 'rgba(25, 118, 210, 0.08) !important',
      },
      '&.Mui-selected': {
        borderColor: 'rgb(2, 6, 168) !important',
        backgroundColor: 'rgba(25, 118, 210, 0.08) !important',
      },
          textTransform: "none", width: "100%", justifyContent: "start", padding: "5px 5px 7px 5px", border: "1px solid #d7d7d9"  }}>
        <Image
            style={{ width: "75px", height: "75px" }}
            src={who_just_me}
            alt="image_here"
          />
          Me Only
        </ToggleButton>
        <ToggleButton className="who.li" value="me-and-others" sx={{ 
          '&:hover': {
        backgroundColor: 'rgba(25, 118, 210, 0.08) !important',
      },
      '&.Mui-selected': {
        borderColor: 'rgb(2, 6, 168) !important',
        backgroundColor: 'rgba(25, 118, 210, 0.08) !important',
      },
          textTransform: "none", width: "100%", justifyContent: "start", padding: "5px 5px 7px 5px", border: "1px solid #d7d7d9" }}>
        <Image
            style={{ width: "75px", height: "75px", margin: "0 20px" }}
            src={who_me_others}
            alt="image_here"
          />
          Me & Others
        </ToggleButton>
        <ToggleButton className="who.li" value="others-only" sx={{ 
          '&:hover': {
        backgroundColor: 'rgba(25, 118, 210, 0.08) !important',
      },
      '&.Mui-selected': {
        borderColor: 'rgb(2, 6, 168) !important',
        backgroundColor: 'rgba(25, 118, 210, 0.08) !important',
      },
          textTransform: "none", width: "100%", justifyContent: "start", padding: "5px 5px 7px 5px", border: "1px solid #d7d7d9" }}>
        <Image
            style={{ width: "75px", height: "75px", margin: "0 20px" }}
            src={who_just_others}
            alt="image_here"
          />
          Others Only
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
        <Grid  component={"section"} container direction={"row"} padding={"15px 20px"} justifyContent={"space-between"} borderBottom={"1px solid #d7d7d9"}>
          <Grid  component={"div"} container direction={"column"}>
         <Button component="label"
          sx={{color: "var(--secondary-color)", padding:"0 28px",  display:"flex", alignItems:"center", fontWeight: "500", fontSize:"16",  borderRadius: "20px", border:"1px solid var(--secondary-color)", height:"35px", width:"fit-content" }}>
        Choose Files
        <input hidden type="file" multiple />
          </Button>
        <Text color="rgb(123 129 145)" fontSize="0.75rem" margin={5}>
          Supported formats: .pdf, .docx, .txt, .png, .jpg, .ppt. You can find more details about File Upload 
          <Link href="" style={{color: "rgb(2 6 168)", fontWeight: "400"}}>  here.</Link> 
        </Text>

          </Grid>
        <Grid
          component={"div"}
          container
          alignItems={"center"}
          gap={2}
        >
          <IconButton>
            <DropBoxIcon />
          </IconButton>
          <IconButton>
            <GoogleDriveIcon />
          </IconButton>
        <CustomButton color="var(--secondary-color)" fontWeight="500" fontSize={16} borderRadius={20} borderWidth={1} borderColor="var(--secondary-color)" height={"35px"} width={"fit-content"} style={{padding:"0 28px", display:"flex",alignItems:"center"}}>New Template</CustomButton>
        </Grid>
        </Grid>
          {/* Add other cloud storage icons here */}
        <Grid  component={"section"} container direction={"row"} padding={"15px 20px"} justifyContent={"center"} color="rgb(123 129 145)" borderBottom={"1px solid #d7d7d9"}>
          Drag files here
        
        </Grid>
      </Grid>

      {/* -----------------------signers & CC------------------------- */}
        <Grid component={"div"} container marginTop={"30px"} border= {"1px solid #d7d7d9"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} justifyContent={"space-between"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"3px 20px"}>
            <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"}>
              <Diversity1Outlined fontSize="small" />
              <Text fontSize="0.875rem" color="rgb(0 8 61)">Signers & CCs</Text>
            </Grid>
            <Grid component={"div"} container direction={"row"} alignItems={"center"}>
          <Checkbox size="small" />
          <Text fontSize="0.875rem" color="rgb(0 8 61)">Signing Order</Text>

          </Grid>
          </Grid>

{/* 2nd div */}

    <Grid component={"section"} container padding={"15px 20px"} borderBottom= {"1px solid #d7d7d9"} justifyContent={"space-between"} width={"100%"}>
      <Grid component={"div"} container>
        <Grid component={"div"} container direction={"row"} gap={1}>
          <Box sx={{display: "flex", alignItems: "center", border:"1px solid #d7d7d9", borderRadius:"3px", padding: "0 3px 0 0"}}>
         < PersonOutlineOutlined fontSize="large" sx={{color: grey[500], borderRight:"1px solid #d7d7d9", background: "rgba(25, 118, 210, 0.08)"}}/>
            <input type="text" placeholder="Signer's Name" style={{border: "none"}} />
          </Box>
          <Box sx={{display: "flex", alignItems: "center", border:"1px solid #d7d7d9", borderRadius:"3px", padding: "0 3px 0 0"}}>
         <DraftsOutlined fontSize="large" sx={{color: grey[500], borderRight:"1px solid #d7d7d9", background: "rgba(25, 118, 210, 0.08)"}}/>
            <input type="text" placeholder="Signer's Name" style={{border: "none"}} />
          </Box>
        <CustomPopover title="Signer" options={signerOptions}/>
        <ModelToggle/>
        </Grid>
      </Grid>
      <Grid  component={"div"} container gap={1}>
      <Box sx={{display: "flex", alignItems: "center",background: "rgba(25, 118, 210, 0.08)", border:"1px solid #d7d7d9", borderRadius:"3px", padding: "5px"}}>EN
</Box>
<Box sx={{display: "flex", alignItems: "center",background: "rgba(25, 118, 210, 0.08)", border:"1px solid #d7d7d9", borderRadius:"3px", padding: "5px"}}>
  <ClearOutlined fontSize="medium" sx={{color: grey[500]}}/>
</Box>
      </Grid>
    </Grid>
{/* 3rd div */}
<Grid component={"section"} container padding={"15px 20px"} justifyContent={"space-between"} width={"100%"}>
      <CustomButton color="var(--secondary-color)" fontWeight="500" fontSize={16} borderRadius={20} borderWidth={1} borderColor="var(--secondary-color)" height={"35px"} width={"fit-content"} style={{padding:"0 28px", display:"flex",alignItems:"center"}}>Add Signer to CC</CustomButton>
      <Grid component={"div"} container direction={"row"} alignItems={"center"}>
          <Checkbox defaultChecked size="small" />
          <Text fontSize="0.875rem" color="rgb(0 8 61)">Save Contacts</Text>

          </Grid>
      </Grid>
        </Grid>


{/* -------------------------------title $ messages---------------------------------- */}

<Grid component={"div"} container marginTop={"30px"} border= {"1px solid #d7d7d9"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <DraftsOutlined fontSize="small" />
              <Text fontSize="0.875rem" color="rgb(0 8 61)">Title & Message</Text>
          </Grid>
          {/* 2nd div */}
          <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
            <label htmlFor="" className="title_label">Document Title</label>
            <input type="text" className="title_input" placeholder="Please sign this document"/>
          </Grid>
          {/* 3rd div */}
          <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
            <label htmlFor="" className="title_label">Message</label>
            <textarea name="" id="" className="title_input" style={{padding: "5px 3px"}}>Enter Message(optional)</textarea>
          </Grid>
          </Grid>

          {/*---------------------------------------settings------------------------------------------------ */}

          <Grid component={"div"} container marginTop={"30px"} border= {"1px solid #d7d7d9"} borderRadius={"3px"} >
          {/* 1st div */}
          <Grid component={"div"} container direction={"row"} gap={1} alignItems={"center"} borderBottom={"1px solid #e8e8e9"} sx={{background: "rgba(25, 118, 210, 0.08)"}} height={"50%"} width={"100%"} padding= {"10px 20px"}>
              <SettingsOutlined fontSize="small" />
              <Text fontSize="0.875rem" color="rgb(0 8 61)">Document settings</Text>
          </Grid>
      {/* 2nd div */}
      <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container alignItems={"center"}>
        <Checkbox defaultChecked size="small" sx={{padding: "9px 9px 9px 0"}} />
        <Text fontSize="0.875rem" color="rgb(0 8 61)">Enable auto reminders</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid>
        <Grid component={"div"} container alignItems={"center"}>
        <Checkbox defaultChecked size="small" sx={{padding: "9px 9px 9px 0"}}/>
        <Text fontSize="0.875rem" color="rgb(0 8 61)">Require all signers to sign to complete document</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid>      
      </Grid>
          {/* 3rd div */}
          <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container direction={"column"}>
        <Text marginBottom={6} fontSize="0.875rem" color="rgb(0 8 61)">Expire Document After</Text>
       <CustomPopover options={options} title="3 months"/>
        </Grid>      
      </Grid>
          </Grid>

        </form>
      </Grid>
    </Topbar>
  );
};

