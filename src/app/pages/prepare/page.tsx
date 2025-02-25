"use client";
export const dynamic = "force-dynamic"; // Forces runtime rendering

import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import { Document, Page } from "react-pdf";
import Image from "next/image"; // Import Image component from Next.js
import Topbar from "@/app/components/dashboardTopbar/topbar";
import { Rnd } from "react-rnd";

import {
  Edit as EditIcon,
  BorderColor as BorderColorIcon,
  CalendarToday as CalendarIcon,
  TextFields as TextIcon,
  Person as PersonIcon,
  Business as BusinessIcon,
  Work as WorkIcon,
  Email as EmailIcon,
  CheckBox as CheckBoxIcon,
  FormatListBulleted as ListIcon,
} from "@mui/icons-material";

// import sampleImage from "@/app/assests/images/u.png";

const PreparePage = () => {
  const [fields, setFields] = useState([]);
  // Removed: const [selectedField, setSelectedField] = useState(null);
  const [fileType, setFileType] = useState("image"); 
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // Removed: const handleFieldClick = (fieldId) => {
  //   setSelectedField(fields.find((field) => field.id === fieldId));
  // };

  const updateField = (fieldId, updates) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === fieldId ? { ...field, ...updates } : field
      )
    );
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const fieldType = event.dataTransfer.getData("fieldType");
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    addFieldToPosition(fieldType, x, y);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const addFieldToPosition = (type, x, y) => {
    setFields((prevFields) => [
      ...prevFields,
      {
        id: prevFields.length + 1,
        type,
        x,
        y,
        width: 120,
        height: 40,
        validation: "No Validation",
        signer: "No Signer",
        content: "", // Default content is empty
      },
    ]);
  };

  const onlinePDFUrl =
    "https://www.w3.org/WAI/WCAG21/quickref/files/pdf/WCAG2.0-QuickRef.pdf"; // Example public PDF

  return (
    <Topbar title="New Document" secondText=" Send" outlinedBtn="Save Draft">
      <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f5f5f5" }}>
        {/* Left Sidebar */}
        <Box
          sx={{
            width: "20%",
            bgcolor: "#fff",
            borderRight: "1px solid #ddd",
            p: 2,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            DOCUMENTS
          </Typography>
          <Box>
            <Typography
              variant="body1"
              sx={{ mb: 1, cursor: "pointer" }}
              onClick={() => setFileType("image")}
            >
              sampleImage.png
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 1, cursor: "pointer" }}
              onClick={() => setFileType("pdf")}
            >
              sampleDocument.pdf
            </Typography>
          </Box>
        </Box>

        {/* Main Viewer */}
        <Box
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          sx={{
            flex: 1,
            p: 2,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Typography variant="h6">
            Prepare: {fileType === "image" ? "sampleImage.png" : "sampleDocument.pdf"}
          </Typography> */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "85%",
              border: "1px solid #ddd",
              mt: 2,
              bgcolor: "#fff",
              overflow: "hidden",
            }}
          >
            {/* Image or PDF */}
            {fileType === "image" ? (
              <Image
                src="/images/u.png"
                alt="Document Viewer"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  zIndex: 0,
                }}
              />
            ) : (
              <Document file={onlinePDFUrl} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(new Array(numPages), (el, index) => (
                  <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
              </Document>
            )}

            {/* Fields Layer */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: "none",
                zIndex: 1,
              }}
            >
              {fields.map((field) => (
                <Rnd
                  key={field.id}
                  default={{
                    x: field.x,
                    y: field.y,
                    width: field.width,
                    height: field.height,
                  }}
                  bounds="parent"
                  onDragStop={(e, data) => updateField(field.id, { x: data.x, y: data.y })}
                  onResizeStop={(e, direction, ref, delta, position) => {
                    updateField(field.id, {
                      width: parseFloat(ref.style.width),
                      height: parseFloat(ref.style.height),
                      ...position,
                    });
                  }}
                  style={{
                    border: "1px solid #0288d1",
                    backgroundColor: "#d4f6cc",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "move",
                    zIndex: 2,
                    pointerEvents: "auto",
                    color: "black",
                    fontWeight: "bold",
                    textDecoration: field.type === "Signature" ? "underline" : "none",
                  }}
                  enableResizing={{
                    top: true,
                    right: true,
                    bottom: true,
                    left: true,
                    topRight: true,
                    topLeft: true,
                    bottomRight: true,
                    bottomLeft: true,
                  }}
                  resizeHandleStyles={{
                    bottomRight: {
                      backgroundColor: "#0288d1",
                      width: "10px",
                      height: "10px",
                      cursor: "nwse-resize",
                    },
                    topLeft: {
                      backgroundColor: "#0288d1",
                      width: "10px",
                      height: "10px",
                      cursor: "nwse-resize",
                    },
                  }}
                >
                  {field.type === "Signature" && field.content === "" ? (
                    <Typography sx={{ fontSize: "1.2rem" }}>xSign</Typography>
                  ) : (
                    <TextField
                      variant="outlined"
                      fullWidth
                      value={field.content}
                      placeholder={field.type}
                      maxRows={4}
                      multiline
                      onChange={(e) => updateField(field.id, { content: e.target.value })}
                      sx={{
                        backgroundColor: "transparent",
                        fontSize: "0.9rem",
                        textAlign: "center",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            border: "none",
                          },
                        },
                        overflowWrap: "break-word",
                      }}
                    />
                  )}
                </Rnd>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Right Sidebar */}
        <Box
          sx={{
            width: "20%",
            bgcolor: "#fff",
            borderLeft: "1px solid #ddd",
            p: 2,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            RECIPIENTS
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Button
              variant="outlined"
              disabled
              fullWidth
              sx={{
                justifyContent: "flex-start",
                backgroundColor: "#f0f0f0",
                textTransform: "none",
                mb: 1,
              }}
            >
              No Signer
            </Button>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#e8f5e9",
                textTransform: "none",
              }}
            >
              <Box sx={{ textTransform: "uppercase", fontWeight: "bold" }}>K</Box>
              <Box sx={{ textAlign: "right" }}>Signer</Box>
            </Button>
          </Box>

          <Typography variant="h6" sx={{ mb: 2 }}>
            FIELDS
          </Typography>
          <Box>
            {[
              { label: "Signature", icon: <BorderColorIcon /> },
              { label: "Initials", icon: <EditIcon /> },
              { label: "Date Signed", icon: <CalendarIcon /> },
              { label: "Text", icon: <TextIcon /> },
              { label: "Full Name", icon: <PersonIcon /> },
              { label: "Company", icon: <BusinessIcon /> },
              { label: "Title", icon: <WorkIcon /> },
              { label: "Email", icon: <EmailIcon /> },
              { label: "Checkbox", icon: <CheckBoxIcon /> },
              { label: "Checkbox Group", icon: <ListIcon /> },
            ].map((field, index) => (
              <Button
                key={index}
                variant="outlined"
                draggable
                onDragStart={(e) => e.dataTransfer.setData("fieldType", field.label)}
                fullWidth
                sx={{
                  justifyContent: "flex-start",
                  textTransform: "none",
                  mt: 1,
                  height: "50px",
                  borderColor: "#c9d2e3",
                  backgroundColor: "#f7f9fc",
                  padding: 0,
                }}
              >
                <Box
                  sx={{
                    width: "50px",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#ebeff5",
                    borderRight: "1px solid #c9d2e3",
                  }}
                >
                  {field.icon}
                </Box>
                <Box
                  sx={{
                    flexGrow: 5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    paddingLeft: "16px",
                    color: "#1f2937",
                    fontWeight: "600",
                  }}
                >
                  {field.label}
                </Box>
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </Topbar>
  );
};

export default PreparePage;
