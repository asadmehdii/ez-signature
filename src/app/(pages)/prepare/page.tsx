'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Paper, Divider, Button } from '@mui/material';
import { Person, Edit, CalendarToday, TextFields, Business, Work, Email, CheckBox } from '@mui/icons-material';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry';
import Topbar from "@/app/components/dashboardTopbar/topbar";

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

export default function DocumentSignerUI() {
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const [selectedPage, setSelectedPage] = useState<number>(0);
  const [pageImage, setPageImage] = useState<string | null>(null);
  const [droppedFields, setDroppedFields] = useState<any[]>([]);
  const [storedFile, setStoredFile] = useState<any>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const dragOffset = useRef<{ x: number, y: number }>({ x: 0, y: 0 });

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

  function base64ToUint8Array(base64: string) {
    const base64Data = base64.split(",")[1];
    const raw = atob(base64Data);
    const uint8Array = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i++) {
      uint8Array[i] = raw.charCodeAt(i);
    }
    return uint8Array;
  }

  useEffect(() => {
    async function loadPdf() {
      if (storedFile && isPDF) {
        try {
          const pdfData = base64ToUint8Array(storedFile.dataUrl);
          const loadingTask = pdfjsLib.getDocument({ data: pdfData });
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
        text: '' // initialize empty text
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

  if (draggingIndex !== null) {
    // Move existing field
    setDroppedFields(prev => {
      const copy = [...prev];
      copy[draggingIndex].x = Math.max(0, Math.min(x - dragOffset.current.x, previewRect.width));
      copy[draggingIndex].y = Math.max(0, Math.min(y - dragOffset.current.y, previewRect.height));
      return copy;
    });
    setDraggingIndex(null);
  } else {
    // Handle new field drop
    const fieldData = e.dataTransfer.getData("application/json");
    if (!fieldData) return;

    const field = JSON.parse(fieldData);
    setDroppedFields(prev => [
      ...prev,
      {
        ...field,
        x,
        y,
        page: selectedPage,
        text: ''
      }
    ]);
  }
};

  if (!isMounted) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Topbar title="Prepare" secondText="Send" outlinedBtn="Save Draft">
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
                {storedFile?.name || "No file loaded"} ({thumbnails.length})
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
            alignItems="center"
            bgcolor="#f4f4f4"
            overflow="auto"
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
                position: 'relative'
              }}
            >
              {isPDF && pageImage ? (
                <img
                  src={pageImage}
                  alt={`Page ${selectedPage + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', pointerEvents: 'none' }}
                />
              ) : isImage && storedFile ? (
                <img
                  src={storedFile.dataUrl}
                  alt="Document Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', pointerEvents: 'none' }}
                />
              ) : (
                <Typography>Loading...</Typography>
              )}

              {/* Dropped Fields */}
              {droppedFields
                .filter(f => f.page === selectedPage)
                .map((field, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      position: 'absolute',
                      top: field.y,
                      left: field.x,
                      px: 1,
                      py: 0.5,
                      bgcolor: 'transparent',
                      color: '#000',
                      fontSize: '12px',
                      borderRadius: 1,
                      cursor: 'move',
                      minWidth: 80,
                      display: 'flex',
                      alignItems: 'center',
                      boxShadow: '0 0 0 1px rgba(0,0,0,0.2)'
                    }}
                    draggable
                    onDragStart={e => handleDragStart(e, idx)}
                    onDragOver={handleDragOverField}
                    onDrop={handleDropOnField}
                  >
                    {field.type === 'checkbox' ? (
  <input
    type="checkbox"
    checked={field.text === 'true'}
    onChange={(e) => handleFieldChange(idx, e.target.checked ? 'true' : 'false')}
    style={{ transform: 'scale(1.2)' }}
  />
) : field.type === 'date' || field.type === 'date-signed' ? (
  <input
    type="date"
    value={field.text}
    onChange={(e) => handleFieldChange(idx, e.target.value)}
    style={{
      border: 'none',
      background: 'transparent',
      fontSize: '12px',
      outline: 'none',
      color: '#000'
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
      fontSize: '12px',
      outline: 'none',
      textAlign: 'left'
    }}
  />
)}

                  </Box>
                ))}
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
              <Button variant="outlined" size="small" sx={{ textTransform: 'none' }}>
                No Signer
              </Button>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                bgcolor="#dff5e1"
                p={1}
                borderRadius={1}
              >
                <Typography variant="body2">ALI A.</Typography>
                <Button variant="text" size="small" sx={{ textTransform: 'none' }}>
                  Signer
                </Button>
              </Box>
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
                    bgcolor: '#f9f9f9',
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
  );
}