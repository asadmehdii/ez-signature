'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Paper, Divider, Button } from '@mui/material';
import { Person, Edit, CalendarToday, TextFields, Business, Work, Email, CheckBox } from '@mui/icons-material';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry';
import Topbar from "@/app/components/dashboardTopbar/topbar";
import { useParams } from 'next/navigation';
import { supabase } from '@/app/utils/supabase'; // Adjust the import path as needed
import SignatureModal from "../../signature/signature";
import { PDFDocument, rgb } from 'pdf-lib'; // Import PDFDocument from pdf-lib
import { Rnd } from 'react-rnd';


const fields = [
  { label: 'Signature', icon: <Person fontSize="small" />, type: 'signature' },
  { label: 'Initials', icon: <Edit fontSize="small" />, type: 'initials' },
  { label: 'Date Signed', icon: <CalendarToday fontSize="small" />, type: 'date' },
  { label: 'Text', icon: <TextFields fontSize="small" />, type: 'text' },
  { label: 'Full Name', icon: <Person fontSize="small" />, type: 'fullname' },
  { label: 'Company', icon: <Business fontSize="small" />, type: 'company' },
  { label: 'Title', icon: <Work fontSize="small" />, type: 'title' },
  { label: 'Email', icon: <Email fontSize="small" />, type: 'email' },
  { label: 'Checkbox', icon: <CheckBox fontSize="small" />, type: 'checkbox' }
];

// Define recipient colors
const recipientColors = [
  { id: 1, name: 'Recipient 1', color: '#dff5e1' }, // Light green
  { id: 2, name: 'Recipient 2', color: '#e7ecff' }, // Light blue
  // Add more recipients and their colors as needed
];

export default function DocumentSignerUI() {
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const [pageImage, setPageImage] = useState<string | null>(null);
  const [droppedFields, setDroppedFields] = useState<any[]>([]);
  const [storedFile, setStoredFile] = useState<any>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [documentData, setDocumentData] = useState(null);
  const [selectedRecipientIndex, setSelectedRecipientIndex] = useState<number | null>(null);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const dragOffset = useRef<{ x: number, y: number }>({ x: 0, y: 0 });
  const { id } = useParams(); // Get the document ID from the URL
  const [recipients, setRecipients] = React.useState([]); // new state for recipients
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;


const [isSignatureModalOpen, setSignatureModalOpen] = useState(false);

let currentUser = { name: "", email: "" };

try {
  const userFromStorage = localStorage.getItem("user");
  if (userFromStorage) {
    currentUser = JSON.parse(userFromStorage);
  }
} catch (err) {
  console.error("Failed to parse user from localStorage:", err);
}

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const storedFileString = localStorage.getItem("uploadedFileData");
    const file = storedFileString ? JSON.parse(storedFileString) : null;
    setStoredFile(file);
  }, [isMounted]);

  const fileType = storedFile?.type || "";
  const isPDF = fileType === "application/pdf";
  const isImage = fileType.startsWith("image/");

  useEffect(() => {
    if (id) {
      const token = localStorage.getItem('token'); // Get token from localStorage

      fetch(`http://ezsignature.org/api/document/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`, // Add token to Authorization header
        },
      })
        .then(response => response.json())
        .then(data => {
          setDocumentData(data);
        setRecipients(data.recipients || []); //
          setStoredFile({
            type: data.fileType,
            dataUrl: data.fileUrl,
          });
        })
        .catch(error => {
          console.error("Error fetching document:", error);
        });
    }
  }, [id]);

  useEffect(() => {
    async function loadPdf() {
      if (storedFile && isPDF) {
        try {
          const response = await fetch(storedFile.dataUrl);
          const arrayBuffer = await response.arrayBuffer();
          const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
          const pdf = await loadingTask.promise;
          setPdfDoc(pdf);

          const thumbs: string[] = [];
          for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const viewport = page.getViewport({ scale: 0.2 });
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            if (!context) continue;
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            await page.render({ canvasContext: context, viewport }).promise;
            thumbs.push(canvas.toDataURL());
          }
          setThumbnails(thumbs);
          setSelectedPage(0);
        } catch (error) {
          console.error("Error loading PDF:", error);
        }
      }
    }

    loadPdf();
  }, [storedFile, isPDF]);

  useEffect(() => {
    const renderSelectedPage = async () => {
      if (pdfDoc && isPDF) {
        try {
          const page = await pdfDoc.getPage(selectedPage + 1);
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          if (!context) return;

          const A4_WIDTH = 794;
          const A4_HEIGHT = 1123;

          const viewport = page.getViewport({ scale: 1 });
          const scale = A4_WIDTH / viewport.width;
          const scaledViewport = page.getViewport({ scale });

          canvas.width = A4_WIDTH;
          canvas.height = A4_HEIGHT;

          await page.render({
            canvasContext: context,
            viewport: scaledViewport
          }).promise;

          setPageImage(canvas.toDataURL());
        } catch (error) {
          console.error("Error rendering PDF page:", error);
        }
      }
    };

    renderSelectedPage();
  }, [pdfDoc, selectedPage, isPDF]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const boundingRect = previewRef.current?.getBoundingClientRect();
    if (!boundingRect) return;

    const fieldData = e.dataTransfer.getData("application/json");
    if (!fieldData) return;

    const field = JSON.parse(fieldData);
    const x = e.clientX - boundingRect.left;
    const y = e.clientY - boundingRect.top;

    if (x < 0 || y < 0 || x > boundingRect.width || y > boundingRect.height) {
      return;
    }

    setDroppedFields(prev => [
      ...prev,
      {
  ...field,
  x,
  y,
  page: selectedPage,
  text: '',
  recipientId: selectedRecipientIndex !== null ? recipientColors[selectedRecipientIndex].id : null
}

    ]);
  };

  const allowDrop = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleFieldChange = (index: number, newText: string) => {
    setDroppedFields(prev => {
      const copy = [...prev];
      copy[index].text = newText;
      return copy;
    });
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggingIndex(index);

    const target = e.currentTarget.getBoundingClientRect();
    dragOffset.current = {
      x: e.clientX - target.left,
      y: e.clientY - target.top,
    };

    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", "dragging-field");

    // Prevent ghost image
    const dragImg = document.createElement("div");
    dragImg.style.width = "0px";
    dragImg.style.height = "0px";
    document.body.appendChild(dragImg);
    e.dataTransfer.setDragImage(dragImg, 0, 0);
    setTimeout(() => document.body.removeChild(dragImg), 0);
  };

  const handleDragOverField = (e: React.DragEvent) => {
    e.preventDefault();
  };

const handleDropOnField = (e: React.DragEvent) => {
  e.preventDefault();

  const previewRect = previewRef.current?.getBoundingClientRect();
  if (!previewRect) return;

  const x = e.clientX - previewRect.left;
  const y = e.clientY - previewRect.top;

  const fieldData = e.dataTransfer.getData("application/json");
  if (!fieldData) return;

  const field = JSON.parse(fieldData);

  // Get selected recipient from recipients state
  const selectedRecipient = selectedRecipientIndex !== null
    ? recipients[selectedRecipientIndex]
    : null;

  const selectedRecipientColor = selectedRecipientIndex !== null
    ? recipientColors[selectedRecipientIndex]
    : null;

  if (
    field.type === 'signature' &&
    selectedRecipient?.email === documentData?.ownerEmail
  ) {
    setSignatureModalOpen(true);
  } else {
    setDroppedFields(prev => [
      ...prev,
      {
        ...field,
        x,
        y,
        page: selectedPage,
        text: '',
        recipientId: selectedRecipientColor?.id ?? null,
      }
    ]);
  }
};




  if (!isMounted) {
    return <Typography>Loading...</Typography>;
  }


const handleSendDocument = async () => {
  if (!storedFile) {
    alert("No file to send!");
    return;
  }

  try {
    // Fetch the original PDF
    const response = await fetch(storedFile.dataUrl);
    const originalPdfBytes = await response.arrayBuffer();

    // Load the original PDF
    const pdfDoc = await PDFDocument.load(originalPdfBytes);
    const page = pdfDoc.getPage(0); // Assuming you want to modify the first page

    // Add dropped fields to the PDF
   for (const field of droppedFields) {
  const { x, y, type, text } = field;
  const pageHeight = page.getHeight();
  const adjustedY = pageHeight - y;

  switch (type) {
    case 'signature': {
      const imgBytes = await fetch(text).then(res => res.arrayBuffer());
      const img = await pdfDoc.embedPng(imgBytes);
      page.drawImage(img, {
        x,
        y: adjustedY,
        width: 100,
        height: 50,
      });
      break;
    }
    case 'text': {
      page.drawText(text, {
        x,
        y: adjustedY,
        size: 12,
        color: rgb(0, 0, 0),
      });
      break;
    }
    case 'checkbox': {
      // Draw a simple box
      page.drawRectangle({
        x,
        y: adjustedY,
        width: 12,
        height: 12,
        borderColor: rgb(0, 0, 0),
        borderWidth: 1,
      });

      // Optional: draw a checkmark (X) if field.checked is true
      if (field.checked) {
        page.drawText('✓', {
          x: x + 1,
          y: adjustedY + 1,
          size: 10,
          color: rgb(0, 0, 0),
        });
      }
      break;
    }
    case 'date': {
      const formattedDate = new Date().toLocaleDateString();
      page.drawText(formattedDate, {
        x,
        y: adjustedY,
        size: 12,
        color: rgb(0, 0, 0),
      });
      break;
    }
    default:
      console.warn(`Unhandled field type: ${type}`);
  }
}


    const pdfBytes = await pdfDoc.save();

    const storagePath = `do as cument/${Date.now()}_final_document.pdf`;
    const { error: uploadError } = await supabase.storage
      .from('document')
      .upload(storagePath, pdfBytes, {
        contentType: 'application/pdf',
      });

    if (uploadError) {
      throw uploadError;
    }

    const { data: publicUrlData } = supabase
      .storage
      .from('document')
      .getPublicUrl(storagePath);

    const fileDownloadUrl = publicUrlData?.publicUrl;

    if (!fileDownloadUrl) {
      throw new Error("Failed to get public URL");
    }

const allRecipientEmails = recipients.map(r => r.email);
await sendEmail(allRecipientEmails, fileDownloadUrl, 'Final Document');

    alert("Document sent successfully!");

  } catch (error) {
    console.error("Error sending document:", error);
    alert("Error sending document.");
  }
};


async function sendEmail(recipients, fileUrl, fileName) {
  const token = localStorage.getItem('token');
  const emailApiUrl = 'http://ezsignature.org/api/email/send';

  const emailData = {
    recipients, 
    subject: "Your Document",
    text: "Please find the attached document.",
    filePath: fileUrl,
    fileName,
  };

  const response = await fetch(emailApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(emailData)
  });

  if (!response.ok) {
    console.error("Error sending email:", response.status, response.statusText);
    throw new Error(`Failed to send email: ${response.status} ${response.statusText}`);
  }

  const responseData = await response.json();
  console.log("Email sent successfully:", responseData);
}


const handleResizeStart = (e, index, corner) => {
  e.preventDefault();
  e.stopPropagation();

  const initialWidth = droppedFields[index].width || 100;
  const initialHeight = droppedFields[index].height || 50;
  const initialX = droppedFields[index].x;
  const initialY = droppedFields[index].y;

  const initialMouseX = e.clientX;
  const initialMouseY = e.clientY;

  const handleMouseMove = (moveEvent) => {
    const dx = moveEvent.clientX - initialMouseX;
    const dy = moveEvent.clientY - initialMouseY;

    let newWidth = initialWidth;
    let newHeight = initialHeight;

    if (corner.includes('right')) {
      newWidth = initialWidth + dx;
    }
    if (corner.includes('bottom')) {
      newHeight = initialHeight + dy;
    }
    if (corner.includes('left')) {
      newWidth = initialWidth - dx;
      newWidth = newWidth < 10 ? 10 : newWidth; // Minimum width
    }
    if (corner.includes('top')) {
      newHeight = initialHeight - dy;
      newHeight = newHeight < 10 ? 10 : newHeight; // Minimum height
    }

    setDroppedFields(prev => {
      const updatedFields = [...prev];
      updatedFields[index] = { ...updatedFields[index], width: newWidth, height: newHeight };
      return updatedFields;
    });
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);
};



  return (
    <>
    <Topbar title="Prepare" secondText="Send" outlinedBtn="Save Draft"   onSecondBtnClick={handleSendDocument} >
      <Box sx={{ minHeight: '100vh', bgcolor: '#f0f2f5', p: 2 }}>
        <Box display="flex" height="calc(100vh - 32px)">

          {/* Left Sidebar - Thumbnails */}
          <Paper
            elevation={1}
            sx={{
              width: 240,
              display: 'flex',
              flexDirection: 'column',
              bgcolor: '#fff',
              borderRadius: 2,
              overflow: 'auto'
            }}
          >
            <Box p={2}>
              <Typography variant="subtitle2" color="text.secondary">DOCUMENTS</Typography>
            </Box>
            <Divider />
            <Box px={2} py={1}>
              <Typography variant="body2" color="text.secondary">
                {storedFile?.dataUrl
                  ? `${storedFile.dataUrl.split('/').pop()?.split('?')[0]}`  // Extract file name
                  : "No file loaded"}{" "}
                ({thumbnails.length})
              </Typography>
              <Typography variant="caption">Pages: {thumbnails.length}</Typography>
            </Box>
            <Box display="flex" flexDirection="column" gap={1} px={2} pb={2}>
              {thumbnails.map((thumb, idx) => (
                <Paper
                  key={idx}
                  onClick={() => setSelectedPage(idx)}
                  variant="outlined"
                  sx={{
                    width: '100%',
                    height: 100,
                    overflow: 'hidden',
                    borderRadius: 1,
                    cursor: 'pointer',
                    border: selectedPage === idx ? '2px solid #1976d2' : undefined,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    src={thumb}
                    alt={`Page ${idx + 1}`}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </Paper>
              ))}
            </Box>
          </Paper>

          {/* Middle Preview */}
          <Box
            flexGrow={1}
            mx={2}
            display="flex"
            justifyContent="center"
            alignItems="flex-start" 
            bgcolor="#f4f4f4"
            overflow="auto"
            pt={1} 
          >
            <Box
              ref={previewRef}
              onDrop={handleDropOnField}
              onDragOver={allowDrop}
              sx={{
                width: '794px',
                height: '1123px',
                borderRadius: 2,
                boxShadow: 3,
                bgcolor: '#fff',
                overflow: 'hidden',
                position: 'relative',
                mb: 4 // Optional: Add bottom margin
              }}
            >
              {isPDF && pageImage ? (
                <img
                  src={pageImage}
                  alt={`Page ${selectedPage + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    pointerEvents: 'none'
                  }}
                />
              ) : isImage && storedFile ? (
                <img
                  src={storedFile.dataUrl}
                  alt="Document Preview"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    pointerEvents: 'none'
                  }}
                />
              ) : (
                <Typography>Loading...</Typography>
              )}

              {/* Dropped Fields */}
{droppedFields.map((field, idx) => {
  const recipient = recipientColors.find(r => r.id === field.recipientId);
  const recipientColor = recipient ? recipient.color : 'transparent';

  const width = field.width || 100;
  const height = field.height || 40;

  return (
    field.page === selectedPage && (
     <Rnd
  key={idx}
  size={{ width, height }}
  position={{ x: field.x, y: field.y }}
  bounds="parent"
  minWidth={80}
  minHeight={30}
  enableResizing={{
    topLeft: true,
    topRight: true,
    bottomLeft: true,
    bottomRight: true,
    top: false,
    right: false,
    bottom: false,
    left: false,
  }}
handleComponent={{
  topLeft: <div style={{
    width: 10,
    height: 10,
    background: '#fff',
    border: '2px solid red',
    position: 'absolute',
    top: -6,
    left: -6,
    cursor: 'nwse-resize',
  }} />,
  topRight: <div style={{
    width: 10,
    height: 10,
    background: '#fff',
    border: '2px solid red',
    position: 'absolute',
    top: -6,
    right: -6,
    cursor: 'nesw-resize',
  }} />,
  bottomLeft: <div style={{
    width: 10,
    height: 10,
    background: '#fff',
    border: '2px solid red',
    position: 'absolute',
    bottom: -6,
    left: -6,
    cursor: 'nesw-resize',
  }} />,
  bottomRight: <div style={{
    width: 10,
    height: 10,
    background: '#fff',
    border: '2px solid red',
    position: 'absolute',
    bottom: -6,
    right: -6,
    cursor: 'nwse-resize',
  }} />,
}}

  onDragStop={(e, d) => {
    setDroppedFields(prev => {
      const updatedFields = [...prev];
      updatedFields[idx] = { ...updatedFields[idx], x: d.x, y: d.y };
      return updatedFields;
    });
  }}
  onResizeStop={(e, direction, ref, delta, position) => {
    setDroppedFields(prev => {
      const updatedFields = [...prev];
      updatedFields[idx] = {
        ...updatedFields[idx],
        width: ref.offsetWidth,
        height: ref.offsetHeight,
        x: position.x,
        y: position.y,
      };
      return updatedFields;
    });
  }}
  style={{ zIndex: 10 }}
>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            px: 1,
            py: 0.5,
            bgcolor: recipientColor,
            color: '#000',
            fontSize: `${Math.max(10, height * 0.3)}px`,
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(0,0,0,0.2)',
            overflow: 'hidden',
          }}
        >
          {field.type === 'signature' ? (
            <img
              src={field.text}
              alt="Signature"
              style={{
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'contain',
              }}
            />
          ) : field.type === 'checkbox' ? (
            <input
              type="checkbox"
              checked={field.text === 'true'}
              onChange={(e) =>
                handleFieldChange(idx, e.target.checked ? 'true' : 'false')
              }
              style={{
                transform: `scale(${Math.min(width, height) / 40})`,
              }}
            />
          ) : field.type === 'date' ? (
            <input
              type="date"
              value={field.text}
              onChange={(e) => handleFieldChange(idx, e.target.value)}
              style={{
                border: 'none',
                background: 'transparent',
                fontSize: `${Math.max(10, height * 0.3)}px`,
                outline: 'none',
                color: '#000',
                width: '100%',
              }}
            />
          ) : (
            <input
              type="text"
              value={field.text}
              onChange={(e) => handleFieldChange(idx, e.target.value)}
              placeholder={field.label}
              style={{
                flexGrow: 1,
                width: '100%',
                border: 'none',
                background: 'transparent',
                color: '#000',
                fontSize: `${Math.max(10, height * 0.3)}px`,
                outline: 'none',
                textAlign: 'left',
              }}
            />
          )}
        </Box>
      </Rnd>
    )
  );
})}
                                         
            </Box>
          </Box>

          {/* Right Sidebar */}
          <Paper
            elevation={1}
            sx={{
              width: 300,
              display: 'flex',
              flexDirection: 'column',
              bgcolor: '#fff',
              overflow: 'hidden'
            }}
          >
            <Box p={2}>
              <Typography variant="subtitle2" color="text.secondary">RECIPIENTS</Typography>
            </Box>

            <Box display="flex" flexDirection="column" px={2} pb={2} gap={1}>
              {/* No Signer - selectable */}
              <Box
                onClick={() => setSelectedRecipientIndex(null)}
                sx={{
                  border: selectedRecipientIndex === null ? '2px solid #4a90e2' : '2px solid transparent',
                  borderRadius: 1,
                  cursor: 'pointer',
                  transition: 'border 0.2s ease-in-out',
                }}
              >
                <Button
                  fullWidth
                  variant="outlined"
                  size="small"
                  sx={{
                    textTransform: 'none',
                    bgcolor: selectedRecipientIndex === null ? '#f0f8ff' : '#fff'
                  }}
                >
                  No Signer
                </Button>
              </Box>

              {/* List of recipients */}
              {documentData?.recipients?.map((recipient, index) => {
                const isSelected = index === selectedRecipientIndex;
                const isFirst = index === 0;

                return (
                  <Box
                    key={recipient._id}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    bgcolor={isFirst ? '#dff5e1' : '#e7ecff'}
                    p={1}
                    borderRadius={1}
                    mb={1}
                    sx={{
                      cursor: 'pointer',
                      border: isSelected ? '2px solid #4a90e2' : '2px solid transparent',
                      transition: 'border 0.2s ease-in-out',
                    }}
                    onClick={() => setSelectedRecipientIndex(index)}
                  >
                    <Typography variant="body2">
                      {recipient.name}
                    </Typography>
                    <Button variant="text" size="small" sx={{ textTransform: 'none' }}>
                      Signer
                    </Button>
                  </Box>
                );
              })}
            </Box>

            <Divider />

            <Box p={2}>
              <Typography variant="subtitle2" color="text.secondary">FIELDS</Typography>
            </Box>

            <Box display="flex" flexDirection="column" px={2} pb={2} gap={1}>
              {fields.map((field, index) => (
                <Box
                  key={index}
                  draggable
                  onDragStart={(e) => {
                    e.dataTransfer.setData("application/json", JSON.stringify(field));
                  }}
                  display="flex"
                  alignItems="center"
                  gap={1.5}
                  sx={{
                    p: 1,
                    bgcolor: '# f9f9f9',
                    borderRadius: 1,
                    cursor: 'grab',
                    '&:hover': { bgcolor: '#f0f0f0' }
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: '#e0e0e0',
                      borderRadius: 1
                    }}
                  >
                    {field.icon}
                  </Box>
                  <Typography variant="body2">{field.label}</Typography>
                </Box>
              ))}
            </Box>
          </Paper>

        </Box>
      </Box>
    </Topbar>

   <SignatureModal
  isOpen={isSignatureModalOpen}
  modalType="signature" 
  onClose={() => setSignatureModalOpen(false)}
  onSignatureSave={(signatureData) => {
  setDroppedFields(prev => [
    ...prev,
    {
      type: 'signature',
      x: 100, 
      y: 100, 
      page: selectedPage,
      text: signatureData.image,
      recipientId: selectedRecipientIndex !== null ? recipientColors[selectedRecipientIndex].id : null
    }
  ]);
  setSignatureModalOpen(false);
}}

/>

</>
  );
}
