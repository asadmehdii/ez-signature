"use client";
import React, { useState } from "react";
import { ToggleButtonGroup, ToggleButton, IconButton, Button, Box,Typography} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import Grid from "@mui/material/Grid2";
import DropBoxIcon from "@mui/icons-material/Storage"; 
import GoogleDriveIcon from "@mui/icons-material/DriveFileMove"; 
import Topbar from "@/app/components/dashboardTopbar/topbar";
import who_just_me from "@/app/assests/images/who_just_me.png";
import who_just_others from "@/app/assests/images/who_just_others.png";
import who_me_others from "@/app/assests/images/who_me_others.png";
import Image from "next/image";
import CustomButton from "@/app/components/button";
import Text from "@/app/components/text";
import Link from "next/link";
import { Diversity1Outlined, PersonOutlineOutlined, ClearOutlined, DraftsOutlined, SettingsOutlined, Help} from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import CustomPopover from "@/app/components/popover";
import ModelToggle from "@/app/components/modelToggle";
import { useRouter } from "next/navigation"; 
import { supabase } from "@/app/utils/supabase"; // adjust path if needed


export default function NewDocumentPage() {
  const [selection, setSelection] = useState("me-only");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const router = useRouter(); 
const [documentTitle, setDocumentTitle] = useState("");
const [documentMessage, setDocumentMessage] = useState("");
  const [recipient, setRecipient] = useState({ name: "", email: "" });
    const [file, setFile] = useState<File | null>(null);
  
const [settings, setSettings] = useState({
  autoReminder: true,
  requireAllSigners: true,
  expireAfter: "3 months", 
});

 const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipient((prev) => ({ ...prev, [name]: value }));
  };
const readFileAsDataURL = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(new Error('File reading failed'));
      reader.readAsDataURL(file);
    });
  }

const handleFileUpload = async (event) => {
  const files = Array.from(event.target.files);
  console.log("Selected files:", files); // Debugging line
  if (files.length > 0) {
    setFile(files[0]); 
  }
  const filePreviews = await Promise.all(
    files.map(async (file) => {
      const base64 = await readFileAsDataURL(file);
      return {
        name: file.name,
        type: file.type,
        base64,
        file,
        preview: base64,
      };
    })
  );
  setUploadedFiles((prev) => [...prev, ...filePreviews]);
};




  const removeFile = (index) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };
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

const expiryDaysMap = {
  "1 day": 1,
  "3 days": 3,
  "7 days": 7,
  "2 weeks": 14,
  "3 weeks": 21,
  "1 month": 30,
  "3 months": 90,
  "6 months": 180,
};

const parseExpiryToDays = (expiry) => {
  const cleanExpiry = expiry.split(" (")[0]; 
  return expiryDaysMap[cleanExpiry] || 30; 
};
;


const handleSaveDraftClick = async () => {
  if (uploadedFiles.length === 0) {
    alert("Please upload a file.");
    return;
  }

  if (!documentTitle.trim()) {
    alert("Please enter a document title.");
    return;
  }

  const file = uploadedFiles[0];
  const fileName = `${Date.now()}-${file.name}`;

  let currentUser = { name: "", email: "" };
  try {
    const userFromStorage = localStorage.getItem("user");
    if (userFromStorage) {
      currentUser = JSON.parse(userFromStorage);
    }
  } catch (err) {
    console.error("Failed to parse user from localStorage", err);
  }

  const token = localStorage.getItem('token');
  if (!token) {
    alert("Authentication token not found.");
    return;
  }

  try {
    // Upload to Supabase
const { data, error } = await supabase.storage
  .from("document")
  .upload(`document/${fileName}`, file.file, {
    cacheControl: "3600",
    upsert: true,
  });

    if (error) {
      console.error("Supabase upload error:", error);
      alert("File upload failed.");
      return;
    }

const fileUrl = `https://dmiboomlaxybbzwlrohz.supabase.co/storage/v1/object/public/document/document/${fileName}`;

    const dataPayload = {
      title: documentTitle,
      signingOption: "",
      recipients: [],
      message: documentMessage || (selection === "others-only" ? "Please review and sign this document" : "Please sign this document"),
      enableAutoReminder: settings.autoReminder,
      requireAllSigners: settings.requireAllSigners,
      expireAfterDays: parseExpiryToDays(settings.expireAfter),
      status: "draft",
      fileUrl: fileUrl,
      fileType: file.type,
    };

    if (selection === "me-only") {
      dataPayload.signingOption = "Me Only";
      dataPayload.currentUser = currentUser;
    } else if (selection === "me-and-others") {
      dataPayload.signingOption = "Me & Others";
      dataPayload.recipients = [recipient];
      dataPayload.currentUser = currentUser;
    } else if (selection === "others-only") {
      dataPayload.signingOption = "Others Only";
      dataPayload.recipients = [recipient];
    }

    const response = await fetch("http://ezsignature.org/api/document/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(dataPayload),
    });

    const result = await response.json();

    if (response.ok) {
      if (result && result._id) {
        alert("Draft saved successfully.");
              router.push("/documents"); // Redirect to drafts page or wherever appropriate

      } else {
        alert("Document created but no ID returned.");
      }
    } else {
      console.error("Create API Error:", result);
      alert("Failed to create document.");
    }
  } catch (error) {
    console.error("Error in handleSaveDraftClick:", error);
    alert("Error while saving document: " + error.message);
  }
};

const handlePrepareClick = async () => {
  if (uploadedFiles.length === 0) {
    alert("Please upload a file.");
    return;
  }

  if (!documentTitle.trim()) {
    alert("Please enter a document title.");
    return;
  }

  const file = uploadedFiles[0];
  const fileName = `${Date.now()}-${file.name}`;

  let currentUser = { name: "", email: "" };
  try {
    const userFromStorage = localStorage.getItem("user");
    if (userFromStorage) {
      currentUser = JSON.parse(userFromStorage);
    }
  } catch (err) {
    console.error("Failed to parse user from localStorage", err);
  }

  const token = localStorage.getItem('token');
  if (!token) {
    alert("Authentication token not found.");
    return;
  }

  try {
    // Upload to Supabase
const { data, error } = await supabase.storage
  .from("document")
  .upload(`document/${fileName}`, file.file, {
    cacheControl: "3600",
    upsert: true,
  });

    if (error) {
      console.error("Supabase upload error:", error);
      alert("File upload failed.");
      return;
    }

const fileUrl = `https://dmiboomlaxybbzwlrohz.supabase.co/storage/v1/object/public/document/document/${fileName}`;

    const dataPayload = {
      title: documentTitle,
      signingOption: "",
      recipients: [],
      message: documentMessage || (selection === "others-only" ? "Please review and sign this document" : "Please sign this document"),
      enableAutoReminder: settings.autoReminder,
      requireAllSigners: settings.requireAllSigners,
      expireAfterDays: parseExpiryToDays(settings.expireAfter),
      status: "in_process",
      fileUrl: fileUrl,
      fileType: file.type,
    };

    if (selection === "me-only") {
      dataPayload.signingOption = "Me Only";
      dataPayload.currentUser = currentUser;
    } else if (selection === "me-and-others") {
      dataPayload.signingOption = "Me & Others";
      dataPayload.recipients = [recipient];
      dataPayload.currentUser = currentUser;
    } else if (selection === "others-only") {
      dataPayload.signingOption = "Others Only";
      dataPayload.recipients = [recipient];
    }

    const response = await fetch("http://ezsignature.org/api/document/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(dataPayload),
    });

    const result = await response.json();

    if (response.ok) {
      if (result && result._id) {
        alert("Document created successfully.");
        router.push(`/prepare/${result._id}`);
      } else {
        alert("Document created but no ID returned.");
      }
    } else {
      console.error("Create API Error:", result);
      alert("Failed to create document.");
    }
  } catch (error) {
    console.error("Error in handlePrepareClick:", error);
    alert("Error while creating document: " + error.message);
  }
};





  return (
    <Topbar  title='New Document' buttonText='prepare' secondText='Quick Send' outlinedBtn='Save Draft' onFirstBtnClick={handlePrepareClick}   onSecondBtnClick={handleSaveDraftClick} // Save Draft button
>
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
        backgroundColor: 'rgba(25, 118, 210, 0.08)',
      },
      '&.Mui-selected': {
        borderColor: 'rgb(2, 6, 168)',
        backgroundColor: 'rgba(25, 118, 210, 0.08)',
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
            backgroundColor: 'rgba(25, 118, 210, 0.08)',
      },
      '&.Mui-selected': {
        borderColor: 'rgb(2, 6, 168)',
        backgroundColor: 'rgba(25, 118, 210, 0.08)',
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
      container
      direction="column"
      marginTop="30px"
      border="1px solid #d7d7d9"
      borderRadius="3px"
      gap={2}
    >
      {/* Upload Section */}
   {/* Upload Section */}
<Grid
  container
  direction="row"
  padding="15px 20px"
  justifyContent="space-between"
  alignItems="center"
  borderBottom="1px solid #d7d7d9"
>
  <Grid container direction="column">
    <Button
      component="label"
      sx={{color: "var(--secondary-color)", padding:"0 28px",  display:"flex", alignItems:"center", fontWeight: "500", fontSize:"16",  borderRadius: "20px", border:"1px solid var(--secondary-color)", height:"35px", width:"fit-content" }}
    >
      Choose Files
      <input hidden type="file" multiple onChange={handleFileUpload} />
    </Button>
    <Typography
      color="rgb(123 129 145)"
      fontSize="0.75rem"
      margin="5px 0 0 0"
    >
      Supported formats: .pdf, .docx, .txt, .png, .jpg, .ppt. You can find
      more details about File Upload{" "}
      <Link
        href="#"
        style={{ color: "rgb(2 6 168)", fontWeight: 400 }}
      >
        here.
      </Link>
    </Typography>
  </Grid>

  {/* Cloud Services Section */}
  <Grid container alignItems="center" gap={2}>
    <IconButton>
      <DropBoxIcon />
    </IconButton>
    <IconButton>
      <GoogleDriveIcon />
    </IconButton>
    <Button
      sx={{
        color: "#fff",
        fontWeight: 500,
        fontSize: 16,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "var(--secondary-color)",
        height: "35px",
        width: "fit-content",
        padding: "0 28px",
        display: "flex",
        alignItems: "center",
        background: "var(--secondary-color)",
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "var(--secondary-color-hover)",
        },
      }}
    >
      New Template
    </Button>
  </Grid>
</Grid>

{/* Drag and Drop Section */}
<Grid
  container
  justifyContent="center"
  alignItems="center"
  padding="15px 20px"
  color="rgb(123 129 145)"
  borderBottom="1px solid #d7d7d9"
  sx={{
    cursor: "pointer",
    backgroundColor: "#f8f9fa",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#e9ecef",
    },
  }}
>
  Drag files here
</Grid>

{/* Uploaded Files Section */}
 <Grid container direction="row" padding="15px" gap={2}>
           {uploadedFiles.map((file, index) => {
             const isImage = file.name.match(/.(jpeg|jpg|png|gif)$/i); 
           const isPDF = file.name.match(/.pdf$/i);
           
           
           return (
               <Box
                 key={index}
                 sx={{
                   border: "1px solid #d7d7d9",
                   borderRadius: "4px",
                   padding: "10px",
                   position: "relative",
                   display: "flex",
                   flexDirection: "column",
                   alignItems: "center",
                   gap: "5px",
                 }}
               >
                    {isImage ? (
                 <Image
                   src={file.preview}
                   alt={file.name}
                   width={100}
                   height={100}
                   style={{
                     objectFit: "cover",
                     borderRadius: "4px",
                   }}
                 />
               ) : isPDF ? (
                 <iframe
                 src={`${file.preview}#toolbar=0&navpanes=0&scrollbar=0`}
                 width={100}
                 height={100}
                 style={{
                   border: "none",
                   overflow: "hidden",
                 }}
                 title={file.name}
               />
               
           
               ) : (
                 <Box
                   width={100}
                   height={100}
                   display="flex"
                   alignItems="center"
                   justifyContent="center"
                   sx={{
                     backgroundColor: "#f0f0f0",
                     borderRadius: "4px",
                     fontSize: "12px",
                     color: "#888",
                     textAlign: "center",
                     padding: "5px",
                   }}
                 >
                   No Preview
                 </Box>
               )}
           
           
           
                 <Typography
                   variant="body2"
                   sx={{
                     whiteSpace: "nowrap",
                     overflow: "hidden",
                     textOverflow: "ellipsis",
                     maxWidth: "100px",
                     textAlign: "center",
                   }}
                   title={file.name} // Tooltip on hover
                 >
                   {file.name}
                 </Typography>
                 <IconButton
                   sx={{
                     position: "absolute",
                     top: "5px",
                     right: "5px",
                     background: "#fff",
                     boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                     "&:hover": {
                       backgroundColor: "#f1f1f1",
                     },
                   }}
                   size="small"
                   onClick={() => removeFile(index)}
                 >
                   ✕
                 </IconButton>
               </Box>
               );
            })}
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

  <Grid component={"section"} container padding={"15px 20px"} borderBottom={"1px solid #d7d7d9"} justifyContent={"space-between"} width={"100%"}>
  <Grid component={"div"} container>
    <Grid component={"div"} container direction={"row"} gap={1}>
      {/* Signer Name Input */}
      <Box sx={{ display: "flex", alignItems: "center", height: 32, my: "auto", border: "1px solid #d7d7d9", borderRadius: "3px" }}>
        <PersonOutlineOutlined
          sx={{ px: 0.5, color: grey[500], borderRight: "1px solid #d7d7d9", background: "rgba(25, 118, 210, 0.08)", height: 32 }}
        />
        <input
          type="text"
          name="name" 
          value={recipient.name}
          onChange={handleChange}
          placeholder="Signer's Name"
          style={{ border: "none", width: "100%", height: "100%", background: "transparent", outline: "none" }}
        />
      </Box>

      {/* Signer Email Input */}
      <Box sx={{ display: "flex", alignItems: "center", height: 32, my: "auto", border: "1px solid #d7d7d9", borderRadius: "3px" }}>
        <DraftsOutlined
          sx={{ px: 0.5, color: grey[500], borderRight: "1px solid #d7d7d9", background: "rgba(25, 118, 210, 0.08)", height: 32 }}
        />
        <input
          type="text"
          name="email" // ✅ this is required for handleChange
          value={recipient.email}
          onChange={handleChange}
          placeholder="Signer's Mail"
          style={{ border: "none", width: "100%", height: "100%", background: "transparent", outline: "none" }}
        />
      </Box>

      <CustomPopover title="Signer" options={signerOptions} />
      <ModelToggle />
    </Grid>
  </Grid>

  <Grid component={"div"} container gap={1}>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        background: "rgba(25, 118, 210, 0.08)",
        border: "1px solid #d7d7d9",
        borderRadius: "3px",
        height: 32,
        px: 1,
        cursor: "pointer",
        my: "auto",
      }}
    >
      EN
    </Box>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        background: "rgba(25, 118, 210, 0.08)",
        border: "1px solid #d7d7d9",
        borderRadius: "3px",
        height: 32,
        my: "auto",
        px: 0.5,
      }}
    >
      <ClearOutlined sx={{ color: grey[500] }} />
    </Box>
  </Grid>
</Grid>

{/* 3rd div */}
<Grid component={"section"} container padding={"15px 20px"} justifyContent={"space-between"} width={"100%"}>
      <CustomButton color="#fff" fontWeight="500" fontSize={16} borderRadius={20} borderWidth={1} borderColor="var(--secondary-color)" height={"35px"} width={"fit-content"} style={{padding:"0 28px", display:"flex",alignItems:"center"}}>Add Signer to CC</CustomButton>
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
            <input     value={documentTitle} // Bind the value to the state
    onChange={(e) => setDocumentTitle(e.target.value)} // Update state on change
 type="text" className="title_input" placeholder="Please sign this document" style={{height: "35px"}}/>
          </Grid>
          {/* 3rd div */}
          <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
            <label htmlFor="" className="title_label">Message</label>
            <textarea     value={documentMessage}      onChange={(e) => setDocumentMessage(e.target.value)} 
 rows={3}  name="" id="" placeholder="Enter Message" className="title_input" style={{padding: "5px 3px",minHeight:32}}/>
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
        <Checkbox  checked={settings.autoReminder}
  onChange={(e) =>
    setSettings((prev) => ({ ...prev, autoReminder: e.target.checked }))
  }
          size="small" sx={{padding: "9px 9px 9px 0"}} />
        <Text fontSize="0.875rem" color="rgb(0 8 61)">Enable auto reminders</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid>
        <Grid component={"div"} container alignItems={"center"}>
        <Checkbox   checked={settings.requireAllSigners} onChange={(e) =>
    setSettings((prev) => ({ ...prev, requireAllSigners: e.target.checked }))
  }
size="small" sx={{padding: "9px 9px 9px 0"}}/>
        <Text fontSize="0.875rem" color="rgb(0 8 61)">Require all signers to sign to complete document</Text>
        <Help fontSize="small" sx={{color: grey[300], marginLeft: "5px"}} />
        </Grid>      
      </Grid>
          {/* 3rd div */}
          <Grid component={"div"} container direction={"column"} padding={"15px 20px"} width={"100%"} borderBottom={"1px solid #c7c7c9"}>
      <Grid component={"div"} container direction={"column"}>
        <Text marginBottom={6} fontSize="0.875rem" color="rgb(0 8 61)">Expire Document After</Text>
  <CustomPopover
  options={options}
  title={settings.expireAfter}
  onChange={(selected) =>
    setSettings((prev) => ({ ...prev, expireAfter: selected }))
  }
/>


        </Grid>      
      </Grid>
          </Grid>

        </form>
      </Grid>
    </Topbar>
  );
};
