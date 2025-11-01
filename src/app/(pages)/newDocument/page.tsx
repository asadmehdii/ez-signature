"use client";
import React, { useState } from "react";
import { ToggleButtonGroup, ToggleButton, IconButton, Button, Box, Typography, Snackbar, Alert, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import Grid from "@mui/material/Grid2";
import DropBoxIcon from "@mui/icons-material/Storage"; 
import GoogleDriveIcon from "@mui/icons-material/DriveFileMove"; 
import BoxIcon from "@mui/icons-material/Storage";
import OneDriveIcon from "@mui/icons-material/CloudQueue"; 
import Topbar from "@/app/components/dashboardTopbar/topbar";
import who_just_me from "@/app/assests/images/who_just_me.png";
import who_just_others from "@/app/assests/images/who_just_others.png";
import who_me_others from "@/app/assests/images/who_me_others.png";
import Image from "next/image";
import CustomButton from "@/app/components/button";
import Text from "@/app/components/text";
import Link from "next/link";
import { Diversity1Outlined, PersonOutlineOutlined, ClearOutlined, DraftsOutlined, SettingsOutlined, Help, CheckCircle, Error, Warning, Info} from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import CustomPopover from "@/app/components/popover";
import ModelToggle from "@/app/components/modelToggle";
import { useRouter } from "next/navigation"; 
import { supabase } from "@/app/utils/supabase"; // adjust path if needed
import CloudStorage from "@/app/components/cloudStorage";


interface FileData {
  name: string;
  type: string;
  base64: string | null;
  file: File | null;
  preview: string | null;
  isCloudFile?: boolean;
  cloudProvider?: string;
  cloudFileId?: string;
}

interface DataPayload {
  title: string;
  signingOption: string;
  recipients: any[];
  message: string;
  enableAutoReminder: boolean;
  requireAllSigners: boolean;
  expireAfterDays: any;
  status: string;
  fileUrl: string;
  fileType: any;
  currentUser: any;
}

export default function NewDocumentPage() {
  const [selection, setSelection] = useState("me-only");
  const [uploadedFiles, setUploadedFiles] = useState<FileData[]>([]);
  const router = useRouter(); 
const [documentTitle, setDocumentTitle] = useState("");
const [documentMessage, setDocumentMessage] = useState("");
  const [recipient, setRecipient] = useState({ name: "", email: "" });
    const [file, setFile] = useState<File | null>(null);
  const [showCloudStorage, setShowCloudStorage] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  
  // Notification states
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    type: 'success' as 'success' | 'error' | 'warning' | 'info',
    title: ''
  });
  const [loading, setLoading] = useState(false);

  // Utility function to format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Notification functions
  const showNotification = (type: 'success' | 'error' | 'warning' | 'info', title: string, message: string) => {
    setNotification({
      open: true,
      type,
      title,
      message
    });
  };

  const handleCloseNotification = () => {
    setNotification(prev => ({ ...prev, open: false }));
  };
  
const [settings, setSettings] = useState({
  autoReminder: true,
  requireAllSigners: true,
  expireAfter: "3 months", 
});

 const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipient((prev) => ({ ...prev, [name]: value }));
  };
const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error('File reading failed'));
      reader.readAsDataURL(file);
    });
  }

const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
  const files = Array.from(event.target.files as FileList) as File[];
  console.log("Selected files:", files); // Debugging line
  if (files.length > 0) {
    setFile(files[0] as File); 
  }
  const filePreviews = await Promise.all(
    files.map(async (file: File) => {
      const base64 = await readFileAsDataURL(file);
      return {
        name: file.name,
        type: file.type,
        base64: base64,
        file,
        preview: base64,
      };
    })
  );
  setUploadedFiles((prev) => [...prev, ...filePreviews]);
};

// Drag and Drop handlers
const handleDragOver = (e: React.DragEvent) => {
  e.preventDefault();
  e.stopPropagation();
  setIsDragOver(true);
};

const handleDragLeave = (e: React.DragEvent) => {
  e.preventDefault();
  e.stopPropagation();
  setIsDragOver(false);
};

const handleDrop = async (e: React.DragEvent) => {
  e.preventDefault();
  e.stopPropagation();
  setIsDragOver(false);

  const files = Array.from(e.dataTransfer.files);
  console.log("Dropped files:", files);

  if (files.length > 0) {
    setFile(files[0] as File);
  }

  const filePreviews = await Promise.all(
    files.map(async (file: File) => {
      const base64 = await readFileAsDataURL(file);
      return {
        name: file.name,
        type: file.type,
        base64: base64,
        file,
        preview: base64,
      };
    })
  );
  setUploadedFiles((prev) => [...prev, ...filePreviews]);
};

const handleDragAreaClick = () => {
  const input = document.getElementById('file-input') as HTMLInputElement;
  input?.click();
};




  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCloudFileSelect = (cloudFile: any) => {
    // Convert cloud file to local file format for consistency
    const mockFile: FileData = {
      name: cloudFile.name,
      type: cloudFile.type === 'document' ? 'application/pdf' : 'image/png',
      base64: null, // Would be fetched from cloud storage
      file: null, // Would be downloaded from cloud storage
      preview: null, // Would be generated from cloud file
      isCloudFile: true,
      cloudProvider: cloudFile.provider,
      cloudFileId: cloudFile.id
    };
    setUploadedFiles([mockFile]);
    setFile(null); // Set to null since it's a cloud file
    setShowCloudStorage(false);
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
    showNotification('warning', 'File Required', 'Please upload a file before saving as draft.');
    return;
  }

  if (!documentTitle.trim()) {
    showNotification('warning', 'Title Required', 'Please enter a document title to save as draft.');
    return;
  }

  setLoading(true);

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
    setLoading(false);
    showNotification('error', 'Authentication Required', 'Please log in to save documents as draft.');
    return;
  }

  try {
    // Create FormData for file upload to backend
    const formData = new FormData();
    formData.append('file', file.file);
    formData.append('data', JSON.stringify({
      title: documentTitle,
      signingOption: "Me Only", // Default for draft
      recipients: [],
      message: documentMessage || "Draft document",
      enableAutoReminder: settings.autoReminder,
      requireAllSigners: settings.requireAllSigners,
      expireAfterDays: parseExpiryToDays(settings.expireAfter),
      status: "draft",
      currentUser: currentUser,
    }));

    console.log("Uploading file to backend API...");
    console.log("File:", file.file.name, "Size:", file.file.size);
    
    const apiBase = process.env.NEXT_PUBLIC_API_BASE || (typeof window !== 'undefined' ? `${window.location.origin}/api` : '');
    const response = await fetch(`${apiBase}/document/create`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    console.log("Backend API Response Status:", response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Backend API Error:", errorText);
      setLoading(false);
      showNotification('error', 'Upload Failed', `Backend API error: ${response.status} - ${errorText}`);
      return;
    }

    const result = await response.json();
    console.log("Backend API Success:", result);

    if (result && result._id) {
      setLoading(false);
      showNotification('success', 'Draft Saved', 'Your document has been saved as draft successfully!');
      router.push("/documents");
    } else {
      setLoading(false);
      showNotification('warning', 'Partial Success', 'Document created but no ID returned. Please check your documents.');
    }
  } catch (error) {
    console.error("Error in handleSaveDraftClick:", error);
    setLoading(false);
    
    if (error instanceof TypeError && error.message.includes('fetch')) {
      showNotification('error', 'Connection Error', 'Cannot connect to the server. Please make sure the API is reachable.');
    } else if (error.message.includes('NetworkError')) {
      showNotification('error', 'Network Error', 'Network connection failed. Please check your internet connection.');
    } else {
      showNotification('error', 'Unexpected Error', `An unexpected error occurred: ${error.message}`);
    }
  }
};

const handleQuickSendClick = async () => {
  if (uploadedFiles.length === 0) {
    showNotification('error', 'Error', "Please upload a file.");
    return;
  }

  if (!documentTitle.trim()) {
    showNotification('error', 'Error', "Please enter a document title.");
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
    showNotification('error', 'Error', "Authentication token not found.");
    return;
  }

  try {
    // Create FormData for file upload to backend
    const formData = new FormData();
    formData.append('file', file.file);
    formData.append('data', JSON.stringify({
      title: documentTitle,
      signingOption: selection === "me-only" ? "Me Only" : 
                   selection === "me-and-others" ? "Me & Others" : "Others Only",
      recipients: selection === "others-only" ? [recipient] : 
                 selection === "me-and-others" ? [recipient] : [],
      message: documentMessage || "Please sign this document",
      enableAutoReminder: settings.autoReminder,
      requireAllSigners: settings.requireAllSigners,
      expireAfterDays: parseExpiryToDays(settings.expireAfter),
      status: "sent", // Quick send sets status to sent immediately
      currentUser: currentUser,
    }));

    console.log("Quick Send - Uploading file to backend API...");
    console.log("File:", file.file.name, "Size:", file.file.size);
    
    const apiBase2 = process.env.NEXT_PUBLIC_API_BASE || (typeof window !== 'undefined' ? `${window.location.origin}/api` : '');
    const response = await fetch(`${apiBase2}/document/create`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    console.log("Backend API Response Status:", response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Backend API Error:", errorText);
      setLoading(false);
      showNotification('error', 'Upload Failed', `Backend API error: ${response.status} - ${errorText}`);
      return;
    }

    const result = await response.json();
    console.log("Backend API Success:", result);

    if (result && result._id) {
      setLoading(false);
      showNotification('success', 'Document Sent', 'Your document has been sent successfully!');
      router.push(`/documents`);
    } else {
      setLoading(false);
      showNotification('warning', 'Partial Success', 'Document sent but no ID returned. Please check your documents.');
    }
  } catch (error) {
    console.error("Error in handleQuickSendClick:", error);
    setLoading(false);
    
    if (error instanceof TypeError && error.message.includes('fetch')) {
      showNotification('error', 'Connection Error', 'Cannot connect to the server. Please make sure the API is reachable.');
    } else if (error.message.includes('NetworkError')) {
      showNotification('error', 'Network Error', 'Network connection failed. Please check your internet connection.');
    } else {
      showNotification('error', 'Unexpected Error', `An unexpected error occurred: ${error.message}`);
    }
  }
};

const handlePrepareClick = async () => {
  if (uploadedFiles.length === 0) {
    showNotification('error', 'Error', "Please upload a file.");
    return;
  }

  if (!documentTitle.trim()) {
    showNotification('error', 'Error', "Please enter a document title.");
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
    showNotification('error', 'Error', "Authentication token not found.");
    return;
  }

  try {
    // Create FormData for file upload to backend
    const formData = new FormData();
    formData.append('file', file.file);
    formData.append('data', JSON.stringify({
      title: documentTitle,
      signingOption: selection === "me-only" ? "Me Only" : 
                   selection === "me-and-others" ? "Me & Others" : "Others Only",
      recipients: selection === "others-only" ? [recipient] : 
                 selection === "me-and-others" ? [recipient] : [],
      message: documentMessage || (selection === "others-only" ? "Please review and sign this document" : "Please sign this document"),
      enableAutoReminder: settings.autoReminder,
      requireAllSigners: settings.requireAllSigners,
      expireAfterDays: parseExpiryToDays(settings.expireAfter),
      status: "in_process",
      currentUser: currentUser,
    }));

    console.log("Prepare - Uploading file to backend API...");
    console.log("File:", file.file.name, "Size:", file.file.size);
    
    const apiBase3 = process.env.NEXT_PUBLIC_API_BASE || (typeof window !== 'undefined' ? `${window.location.origin}/api` : '');
    const response = await fetch(`${apiBase3}/document/create`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    console.log("Backend API Response Status:", response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Backend API Error:", errorText);
      setLoading(false);
      showNotification('error', 'Upload Failed', `Backend API error: ${response.status} - ${errorText}`);
      return;
    }

    const result = await response.json();
    console.log("Backend API Success:", result);

    if (result && result._id) {
      setLoading(false);
      showNotification('success', 'Document Prepared', 'Your document has been prepared successfully!');
      router.push(`/prepare/${result._id}`);
    } else {
      setLoading(false);
      showNotification('warning', 'Partial Success', 'Document created but no ID returned. Please check your documents.');
    }
  } catch (error) {
    console.error("Error in handlePrepareClick:", error);
    setLoading(false);
    
    if (error instanceof TypeError && error.message.includes('fetch')) {
      showNotification('error', 'Connection Error', 'Cannot connect to the server. Please make sure the API is reachable.');
    } else if (error.message.includes('NetworkError')) {
      showNotification('error', 'Network Error', 'Network connection failed. Please check your internet connection.');
    } else {
      showNotification('error', 'Unexpected Error', `An unexpected error occurred: ${error.message}`);
    }
  }
};





  return (
    <Topbar  
      title='New Document' 
      buttonText='Prepare' 
      secondText='Quick Send' 
      onFirstBtnClick={handlePrepareClick}   
      onSecondBtnClick={handleQuickSendClick}
    >
      <Grid component={"section"} marginLeft={"30px"} marginRight={"30px"} paddingBottom={"20px"}>
        {/* Save Draft Button */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Button
            variant="outlined"
            onClick={handleSaveDraftClick}
            disabled={loading}
            sx={{
              color: 'var(--secondary-color)',
              borderColor: 'var(--secondary-color)',
              '&:hover': {
                backgroundColor: 'var(--secondary-color)',
                color: 'white'
              }
            }}
          >
            {loading ? 'Saving...' : 'Save Draft'}
          </Button>
        </Box>
        
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
    <IconButton 
      onClick={() => setShowCloudStorage(true)}
      sx={{ 
        '&:hover': { 
          bgcolor: 'rgba(25, 118, 210, 0.08)',
          transform: 'scale(1.1)'
        },
        transition: 'all 0.2s ease'
      }}
    >
      <DropBoxIcon />
    </IconButton>
    <IconButton 
      onClick={() => setShowCloudStorage(true)}
      sx={{ 
        '&:hover': { 
          bgcolor: 'rgba(25, 118, 210, 0.08)',
          transform: 'scale(1.1)'
        },
        transition: 'all 0.2s ease'
      }}
    >
      <GoogleDriveIcon />
    </IconButton>
    <IconButton 
      onClick={() => setShowCloudStorage(true)}
      sx={{ 
        '&:hover': { 
          bgcolor: 'rgba(25, 118, 210, 0.08)',
          transform: 'scale(1.1)'
        },
        transition: 'all 0.2s ease'
      }}
    >
      <BoxIcon />
    </IconButton>
    <IconButton 
      onClick={() => setShowCloudStorage(true)}
      sx={{ 
        '&:hover': { 
          bgcolor: 'rgba(25, 118, 210, 0.08)',
          transform: 'scale(1.1)'
        },
        transition: 'all 0.2s ease'
      }}
    >
      <OneDriveIcon />
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
    backgroundColor: isDragOver ? "#e3f2fd" : "#f8f9fa",
    borderRadius: "4px",
    border: isDragOver ? "2px dashed #1976d2" : "2px dashed transparent",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#e9ecef",
    },
  }}
  onDragOver={handleDragOver}
  onDragLeave={handleDragLeave}
  onDrop={handleDrop}
  onClick={handleDragAreaClick}
>
  <Box sx={{ textAlign: "center" }}>
    <Typography variant="body1" sx={{ mb: 1 }}>
      {isDragOver ? "Drop files here" : "Drag files here"}
    </Typography>
    <Typography variant="caption" sx={{ color: "rgb(123 129 145)" }}>
      Supported formats: .pdf, .docx, .txt, .png, .jpg, .ppt
    </Typography>
  </Box>
  
  {/* Hidden file input */}
  <input
    id="file-input"
    type="file"
    multiple
    accept=".pdf,.docx,.txt,.png,.jpg,.jpeg,.ppt,.pptx"
    onChange={handleFileUpload}
    style={{ display: "none" }}
  />
</Grid>

{/* Uploaded Files Section */}
 <Grid container direction="row" padding="15px" gap={2}>
           {uploadedFiles.map((file, index) => {
             const isImage = file.name.match(/\.(jpeg|jpg|png|gif)$/i); 
             const isPDF = file.name.match(/\.pdf$/i);
             const isDoc = file.name.match(/\.(docx|doc)$/i);
             const isTxt = file.name.match(/\.txt$/i);
             const isPpt = file.name.match(/\.(ppt|pptx)$/i);
             
             // Get file extension for icon
             const fileExtension = file.name.split('.').pop()?.toUpperCase() || 'FILE';
             
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
                   minWidth: "120px",
                 }}
               >
                    {isImage ? (
                 <Image
                   src={file.preview || file.base64}
                   alt={file.name}
                   width={100}
                   height={100}
                   style={{
                     objectFit: "cover",
                     borderRadius: "4px",
                   }}
                 />
               ) : isPDF ? (
                 <Box
                   width={100}
                   height={100}
                   display="flex"
                   flexDirection="column"
                   alignItems="center"
                   justifyContent="center"
                   sx={{
                     backgroundColor: "#ff4444",
                     borderRadius: "4px",
                     color: "white",
                     fontSize: "12px",
                     fontWeight: "bold",
                   }}
                 >
                   <Box sx={{ fontSize: "24px", mb: 0.5 }}>📄</Box>
                   <Box>PDF</Box>
                 </Box>
               ) : isDoc ? (
                 <Box
                   width={100}
                   height={100}
                   display="flex"
                   flexDirection="column"
                   alignItems="center"
                   justifyContent="center"
                   sx={{
                     backgroundColor: "#2b579a",
                     borderRadius: "4px",
                     color: "white",
                     fontSize: "12px",
                     fontWeight: "bold",
                   }}
                 >
                   <Box sx={{ fontSize: "24px", mb: 0.5 }}>📝</Box>
                   <Box>DOC</Box>
                 </Box>
               ) : isTxt ? (
                 <Box
                   width={100}
                   height={100}
                   display="flex"
                   flexDirection="column"
                   alignItems="center"
                   justifyContent="center"
                   sx={{
                     backgroundColor: "#666666",
                     borderRadius: "4px",
                     color: "white",
                     fontSize: "12px",
                     fontWeight: "bold",
                   }}
                 >
                   <Box sx={{ fontSize: "24px", mb: 0.5 }}>📄</Box>
                   <Box>TXT</Box>
                 </Box>
               ) : isPpt ? (
                 <Box
                   width={100}
                   height={100}
                   display="flex"
                   flexDirection="column"
                   alignItems="center"
                   justifyContent="center"
                   sx={{
                     backgroundColor: "#d24726",
                     borderRadius: "4px",
                     color: "white",
                     fontSize: "12px",
                     fontWeight: "bold",
                   }}
                 >
                   <Box sx={{ fontSize: "24px", mb: 0.5 }}>📊</Box>
                   <Box>PPT</Box>
                 </Box>
               ) : (
                 <Box
                   width={100}
                   height={100}
                   display="flex"
                   flexDirection="column"
                   alignItems="center"
                   justifyContent="center"
                   sx={{
                     backgroundColor: "#888888",
                     borderRadius: "4px",
                     color: "white",
                     fontSize: "12px",
                     fontWeight: "bold",
                   }}
                 >
                   <Box sx={{ fontSize: "24px", mb: 0.5 }}>📁</Box>
                   <Box>{fileExtension}</Box>
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
                     fontWeight: "500",
                   }}
                   title={file.name} // Tooltip on hover
                 >
                   {file.name}
                 </Typography>
                 
                 {/* File size and type info */}
                 <Typography
                   variant="caption"
                   sx={{
                     color: "#666",
                     fontSize: "10px",
                     textAlign: "center",
                   }}
                 >
                   {file.file ? formatFileSize(file.file.size) : 'Unknown size'} • {fileExtension}
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

      <CustomPopover title="Signer" options={signerOptions} onChange={(selected) => console.log('Selected:', selected)} />
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

      {/* Cloud Storage Dialog */}
      <CloudStorage
        open={showCloudStorage}
        onClose={() => setShowCloudStorage(false)}
        onFileSelect={handleCloudFileSelect}
      />

      {/* Beautiful Notifications */}
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseNotification}
          severity={notification.type}
          variant="filled"
          sx={{ 
            width: '100%',
            '& .MuiAlert-message': {
              width: '100%'
            }
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              {notification.title}
            </Typography>
            <Typography variant="body2">
              {notification.message}
            </Typography>
          </Box>
        </Alert>
      </Snackbar>

      {/* Loading Overlay */}
      {loading && (
        <Dialog
          open={loading}
          disableEscapeKeyDown
          sx={{
            '& .MuiDialog-paper': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(4px)',
            }
          }}
        >
          <DialogContent sx={{ textAlign: 'center', py: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  border: '4px solid #f3f3f3',
                  borderTop: '4px solid #1976d2',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  '@keyframes spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' }
                  }
                }}
              />
              <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 500 }}>
                Processing...
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Please wait while we upload your file and create the document.
              </Typography>
            </Box>
          </DialogContent>
        </Dialog>
      )}
    </Topbar>
  );
};
