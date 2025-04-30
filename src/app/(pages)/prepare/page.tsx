'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Paper, Divider, Button } from '@mui/material';
import { Person, Edit, CalendarToday, TextFields, Business, Work, Email, CheckBox } from '@mui/icons-material';
 import * as pdfjsLib from 'pdfjs-dist'; 
 import 'pdfjs-dist/build/pdf.worker.entry'; import Topbar from "@/app/components/dashboardTopbar/topbar";

const fields = [{ label: 'Signature', icon: <Person fontSize="small" />, type: 'signature' }, { label: 'Initials', icon: <Edit fontSize="small" />, type: 'initials' }, { label: 'Date Signed', icon: <CalendarToday fontSize="small" />, type: 'date' }, { label: 'Text', icon: <TextFields fontSize="small" />, type: 'text' }, { label: 'Full Name', icon: <Person fontSize="small" />, type: 'fullname' }, { label: 'Company', icon: <Business fontSize="small" />, type: 'company' }, { label: 'Title', icon: <Work fontSize="small" />, type: 'title' }, { label: 'Email', icon: <Email fontSize="small" />, type: 'email' }, { label: 'Checkbox', icon: <CheckBox fontSize="small" />, type: 'checkbox' }];

const fileUrl = "/sample-docs/Fnp.pdf";

export default function DocumentSignerUI() {
  const [pdfDoc, setPdfDoc] = useState<any>(null); const [thumbnails, setThumbnails] = useState<string[]>([]); const [selectedPage, setSelectedPage] = useState<number>(0); const [pageImage, setPageImage] = useState<string | null>(null); const [draggingField, setDraggingField] = useState<any>(null); const [droppedFields, setDroppedFields] = useState<any[]>([]); const previewRef = useRef<HTMLDivElement>(null);

  const fileExtension = fileUrl.split('.').pop()?.toLowerCase(); const isPDF = fileExtension === 'pdf'; const isImage = ['jpg', 'jpeg', 'png'].includes(fileExtension ?? '');

  useEffect(() => {
    const generateThumbnails = async () => {
      if (isPDF) {
        const loadingTask = pdfjsLib.getDocument(fileUrl); const pdf = await loadingTask.promise; setPdfDoc(pdf);

        const thumbs: string[] = [];
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const viewport = page.getViewport({ scale: 0.2 });
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          await page.render({ canvasContext: context!, viewport }).promise;
          thumbs.push(canvas.toDataURL());
        }
        setThumbnails(thumbs);
        setSelectedPage(0);
      } else if (isImage) {
        const img = new Image();
        img.src = fileUrl;
        img.crossOrigin = 'Anonymous';
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          const maxWidth = 120;
          const maxHeight = 100;
          const ratio = Math.min(maxWidth / img.width, maxHeight / img.height);
          const width = img.width * ratio;
          const height = img.height * ratio;

          canvas.width = width;
          canvas.height = height;
          ctx?.drawImage(img, 0, 0, width, height);
          const thumbData = canvas.toDataURL();
          setThumbnails([thumbData]);
        };
      }
    };

    generateThumbnails();
  }, []);

  useEffect(() => {
    const renderSelectedPage = async () => {
      if (pdfDoc && isPDF) {
        const page = await pdfDoc.getPage(selectedPage + 1); const canvas = document.createElement('canvas'); const context = canvas.getContext('2d');

        const A4_WIDTH = 794;
        const A4_HEIGHT = 1123;

        const viewport = page.getViewport({ scale: 1 });
        const scale = A4_WIDTH / viewport.width;
        const scaledViewport = page.getViewport({ scale });

        canvas.width = A4_WIDTH;
        canvas.height = A4_HEIGHT;

        await page.render({
          canvasContext: context!,
          viewport: scaledViewport
        }).promise;

        setPageImage(canvas.toDataURL());
      }
    };

    renderSelectedPage();
  }, [pdfDoc, selectedPage]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault(); const boundingRect = previewRef.current?.getBoundingClientRect(); if (!boundingRect) return;

    const x = e.clientX - boundingRect.left;
    const y = e.clientY - boundingRect.top;

    setDroppedFields(prev => [
      ...prev,
      {
        ...draggingField,
        x,
        y,
        page: selectedPage
      }
    ]);

    setDraggingField(null);
  };

  const allowDrop = (e: React.DragEvent) => { e.preventDefault(); };

  return (<Topbar title="Prepare" secondText="Send" outlinedBtn="Save Draft"> <Box sx={{ minHeight: '100vh', bgcolor: '#f0f2f5', p: 2 }}> <Box display="flex" height="calc(100vh - 32px)">

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
          {fileUrl.split('/').pop()} ({thumbnails.length})
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
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain'
              }}
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
        onDrop={handleDrop}
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
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              pointerEvents: 'none'
            }}
          />
        ) : isImage ? (
          <img
            src={fileUrl}
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
        {droppedFields
          .filter(f => f.page === selectedPage)
          .map((field, idx) => (
            <Box
              key={idx}
              sx={{
                position: 'absolute',
                top: field.y,
                left: field.x,
                px: 1.5,
                py: 0.5,
                bgcolor: '#1976d2',
                color: '#fff',
                fontSize: '12px',
                borderRadius: 1,
                cursor: 'move'
              }}
            >
              {field.label}
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
            onDragStart={() => setDraggingField(field)}
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