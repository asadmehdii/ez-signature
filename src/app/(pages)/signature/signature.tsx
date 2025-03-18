import React, { useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import axios from "axios";
import Image from 'next/image';

const SignatureModal = ({ isOpen, modalType, onClose }) => {
  const [signatureText, setSignatureText] = useState("");
  const [activeTab, setActiveTab] = useState("type");
  const [sigPad, setSigPad] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedFont, setSelectedFont] = useState("AlexBrush");

  const fontStyles = [
    { fontFamily: "Arial" },
    { fontFamily: "Birthstone" },
    { fontFamily: "AlexBrush" },
    { fontFamily: "Ephesis" },
    { fontFamily: "EpicRide" },
    { fontFamily: "GreatVibes" },
    { fontFamily: "Helvetica" },
    { fontFamily: "Kalam" },
  ];

  if (!isOpen) return null;

  const clearCanvas = () => sigPad.clear();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setUploadedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setUploadedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSaveTypedSignature = async () => {
    if (!signatureText) {
      alert("Please type your signature before saving.");
      return;
    }
  
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("User ID not found. Please log in again.");
      return;
    }
  
    const payload = {
      content: signatureText,
      font: selectedFont,
      userId: userId,
    };
  
    try {
      const response = await axios.post(
        "https://ezsignature-backend-production.up.railway.app/signature/create",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status === 200 || response.status === 201) {
        alert("Typed signature saved successfully.");
        onClose(); // Close the modal after successful save
      } else {
        alert("Failed to save the typed signature. Please try again.");
      }
    } catch (error) {
      console.error("Error saving typed signature:", error);
      alert("An error occurred while saving the typed signature.");
    }
  };
  
  const handleSaveDrawnSignature = async () => {
    if (sigPad.isEmpty()) {
      alert("Please draw your signature before saving.");
      return;
    }
  
    const signatureImage = sigPad.toDataURL("image/png"); // Convert the canvas to Base64
    const payload = { image: signatureImage };
  
    try {
      const response = await axios.post("https://ezsignature-backend-production.up.railway.app/draw", payload);
  
      // Check if the response status is 200 or 201
      if (response.status === 200 || response.status === 201) {
        alert("Signature saved successfully.");
        onClose(); // Close the modal after successful save
      } else {
        alert("Failed to save the signature. Please try again.");
      }
    } catch (error) {
      console.error("Error saving signature:", error);
      alert("An error occurred while saving the signature.");
    }
  };

  const handleSaveUploadedSignature = async () => {
    if (!uploadedImage) {
      alert("Please upload a signature image before saving.");
      return;
    }
  
    // Convert Base64 to a Blob for upload
    const byteString = atob(uploadedImage.split(",")[1]);
    const mimeString = uploadedImage.split(",")[0].split(":")[1].split(";")[0];
    const buffer = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      buffer[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([buffer], { type: mimeString });
  
    const formData = new FormData();
    formData.append("file", blob, "signature.png"); // Append the file with a custom name
  
    try {
      const response = await axios.post("https://ezsignature-backend-production.up.railway.app/upload/signature", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      if (response.status === 200 || response.status === 201) {
        alert("Signature uploaded successfully.");
        onClose(); // Close the modal after successful save
      } else {
        alert("Failed to upload the signature. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading signature:", error);
      alert("An error occurred while uploading the signature.");
    }
  };
  
  
  

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2000,
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "600px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          padding: "20px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ margin: 0 }}>{modalType === "Initials" ? "Add Initials" : "Add Signature"}</h2>
          <button
            style={{
              background: "transparent",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <button
            style={{
              background: activeTab === "type" ? "#f0f0f0" : "none",
              border: "none",
              padding: "10px",
              cursor: "pointer",
              fontSize: "12px",
            }}
            onClick={() => setActiveTab("type")}
          >
            Type Signature
          </button>
          <button
            style={{
              background: activeTab === "draw" ? "#f0f0f0" : "none",
              border: "none",
              padding: "10px",
              cursor: "pointer",
              fontSize: "12px",
            }}
            onClick={() => setActiveTab("draw")}
          >
            Draw Signature
          </button>
          <button
            style={{
              background: activeTab === "upload" ? "#f0f0f0" : "none",
              border: "none",
              padding: "10px",
              cursor: "pointer",
              fontSize: "12px",
            }}
            onClick={() => setActiveTab("upload")}
          >
            Upload Signature
          </button>
        </div>

       
        {activeTab === "type" && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <div
              style={{
                fontSize: "50px",
                padding: "35px",
                marginBottom: "20px",
                fontFamily: selectedFont || "'AlexBrush", 
              }}
            >
              {signatureText || "Your Signature"}
            </div>
            <input
              type="text"
              value={signatureText}
              placeholder="Type your signature"
              onChange={(e) => setSignatureText(e.target.value)}
              style={{
                width: "95%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ddd",
                marginBottom: "20px",
                textAlign: "center",
              }}
            />
            <div
              style={{
                display: "flex",
                overflowX: "auto",
                gap: "10px",
                paddingBottom: "10px",
              }}
            >
              {fontStyles.map((style, index) => (
                <div
                  key={index}
                  style={{
                    ...style,
                    fontSize: "18px",
                    padding: "10px",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                  onClick={() => setSelectedFont(style.fontFamily.replace(/'/g, ""))}

                >
                  {signatureText || "Your Signature"}
                </div>
              ))}
            </div>
            <div style={{ textAlign: "right", marginTop: "20px" }}>
          <button
            style={{
              padding: "10px 15px",
              backgroundColor: "#5b6dab",
              border: "none",
              borderRadius: "4px",
              color: "#fff",
              cursor: "pointer",
              marginRight: "10px",
            }}
            onClick={handleSaveTypedSignature}
            >
            Save
          </button>
          <button
            style={{
              padding: "10px 15px",
              backgroundColor: "#e7ecf7",
              border: "1px solid #d1d5db",
              borderRadius: "4px",
              color: "#333",
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
          </div>
        )}

{activeTab === "draw" && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <SignatureCanvas
              ref={(ref) => setSigPad(ref)}
              canvasProps={{
                width: 600,
                height: 200,
                className: "sigCanvas",
                style: { border: "1px solid #ddd", borderRadius: "4px" },
              }}
            />
            <div style={{ marginTop: "10px" }}>
              <button
                style={{
                  padding: "8px 12px",
                  backgroundColor: "#e7ecf7",
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  color: "#333",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
                onClick={clearCanvas}
              >
                Clear
              </button>
            </div>
            <div style={{ textAlign: "right", marginTop: "20px" }}>
          <button
            style={{
              padding: "10px 15px",
              backgroundColor: "#5b6dab",
              border: "none",
              borderRadius: "4px",
              color: "#fff",
              cursor: "pointer",
              marginRight: "10px",
            }}
            onClick={handleSaveDrawnSignature}
          >
            Save
          </button>
          <button
            style={{
              padding: "10px 15px",
              backgroundColor: "#e7ecf7",
              border: "1px solid #d1d5db",
              borderRadius: "4px",
              color: "#333",
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
          </div>
        )}

{activeTab === "upload" && (
  <div style={{ marginTop: "20px", textAlign: "center" }}>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
      <label
        htmlFor="upload-input"
        style={{
          display: "inline-block",
          cursor: "pointer",
          padding: "10px 20px",
          backgroundColor: "#fff",
          border: "1px solid #1a73e8",
          borderRadius: "20px",
          color: "#1a73e8",
          fontSize: "14px",
          fontWeight: "500",
          marginBottom: "20px", // Added margin below the button and text

        }}
      >
        Choose Image
      </label>
      <p style={{ margin: 0, color: "#6c757d", fontSize: "14px" }}>
        Upload a picture of your signature (PNG, JPG, JPEG, BMP or GIF)
      </p>
    </div>
    <input
      id="upload-input"
      type="file"
      accept=".png, .jpg, .jpeg, .bmp, .gif"
      style={{ display: "none" }}
      onChange={handleFileChange}
    />
    <div
      style={{
        border: "2px dashed #ccc",
        borderRadius: "8px",
        padding: "20px",
        color: "#aaa",
        textAlign: "center",
        marginBottom: "10px",
        height: "150px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {uploadedImage ? (
        <Image 
          src={uploadedImage}
          alt="Preview"
          style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
        />
      ) : (
        <div style={{ textAlign: "center", color: "#aaa" }}>
          <div style={{ fontSize: "24px", marginBottom: "8px" }}>📂</div>
          Drop files here
        </div>
      )}
    </div>
    <p
      style={{
        fontSize: "12px",
        color: "#6c757d",
        marginTop: "10px",
        lineHeight: "1.5",
      }}
    >
      By clicking the button below I understand and agree that this is a legal
      representation of my signature.
    </p>
    <div style={{ textAlign: "right", marginTop: "20px" }}>
          <button
            style={{
              padding: "10px 15px",
              backgroundColor: "#5b6dab",
              border: "none",
              borderRadius: "4px",
              color: "#fff",
              cursor: "pointer",
              marginRight: "10px",
            }}
            onClick={handleSaveUploadedSignature}
            >
            Save
          </button>
          <button
            style={{
              padding: "10px 15px",
              backgroundColor: "#e7ecf7",
              border: "1px solid #d1d5db",
              borderRadius: "4px",
              color: "#333",
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
  </div>
)}



        {/* <div style={{ textAlign: "right", marginTop: "20px" }}>
          <button
            style={{
              padding: "10px 15px",
              backgroundColor: "#5b6dab",
              border: "none",
              borderRadius: "4px",
              color: "#fff",
              cursor: "pointer",
              marginRight: "10px",
            }}
            onClick={handleSaveDrawnSignature}
          >
            Save
          </button>
          <button
            style={{
              padding: "10px 15px",
              backgroundColor: "#e7ecf7",
              border: "1px solid #d1d5db",
              borderRadius: "4px",
              color: "#333",
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            Cancel
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default SignatureModal;
