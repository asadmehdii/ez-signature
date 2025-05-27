// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import Topbar from "@/app/components/dashboardTopbar/topbar";
import SignatureModal from "../../(pages)/signature/signature";
import Image from "next/image";
import axios from 'axios';


export default function DocumentPage() {
  const [activeTab, setActiveTab] = useState("Signature");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [signatures, setSignatures] = useState([]);
  const defaultSignature = signatures.find(sig => sig.isDefault);

useEffect(() => {
  const userId = localStorage.getItem("userId");

  if (!userId) {
    console.error("User ID not found in localStorage");
    return;
  }

  const fetchSignatures = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("JWT token not found in localStorage");

      const response = await axios.get("http://ezsignature.org/api/signatures/me", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = response.data;
      console.log("Fetched signatures:", data);

      const allSignatures = [
        ...(Array.isArray(data.drawSignatures) ? data.drawSignatures : []),
        ...(Array.isArray(data.typedSignatures) ? data.typedSignatures : []),
        ...(Array.isArray(data.uploadedSignatures) ? data.uploadedSignatures : []),
      ];

      const defaultSignatureId = data?.defaultSignatureId || null;

      const updatedSignatures = allSignatures.map((sig) => ({
        ...sig,
        isDefault: sig._id === defaultSignatureId,
      }));

      console.log("Updated Signatures Array:", updatedSignatures);
      setSignatures(updatedSignatures);
    } catch (error) {
      console.error("Error fetching signatures:", error);
    }
  };

  fetchSignatures();
}, []);

  

  const handleDropdownClick = (type) => {
    setIsDropdownOpen(false);
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType("");
  };

  const handleMakeDefault = async (signatureId) => {
    const userId = localStorage.getItem("userId");
  
    if (!userId) {
      console.error("User ID not found in localStorage");
      return;
    }
  
    try {
      // Get token from localStorage
      const token = localStorage.getItem('token');
      if (!token) throw new Error('JWT token not found in localStorage');

      const response = await fetch("http://ezsignature.org/api/signatures/default", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,

        },
        body: JSON.stringify({ userId, signatureId }),
      });
  
      const result = await response.json();
      console.log("Make Default Response:", result);
  
      if (response.ok) {
        setSignatures((prevSignatures) =>
          prevSignatures.map((sig) => ({
            ...sig,
            isDefault: sig._id === signatureId, 
          }))
        );
        alert("Signature set as default successfully!");
        
      } else {
        alert("Failed to set signature as default: " + result.message);
      }
    } catch (error) {
      console.error("Error setting default signature:", error);
      alert("An error occurred while setting the default signature.");
    }
  };
  
  


  return (
    <>
      <Topbar
        title="Signature"
        buttonText={
          <div style={{ position: "relative", display: "inline-block" }}>
            <p
              style={{
                color: "#fff",
                cursor: "pointer",
              }}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Add New
              <span
                style={{
                  marginLeft: "5px",
                  fontSize: "10px",
                  transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s",
                }}
              >
                ▼
              </span>
            </p>
            {isDropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  backgroundColor: "#fff",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  zIndex: 1000,
                  minWidth: "150px",
                }}
              >
                <button
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "10px 15px",
                    backgroundColor: "transparent",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    color: "#333",
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                  }}
                  onClick={() => handleDropdownClick("Signature")}
                >
                  Signature
                </button>
                <button
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "10px 15px",
                    backgroundColor: "transparent",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    color: "#333",
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                  }}
                  onClick={() => handleDropdownClick("Initials")}
                >
                  Initials
                </button>
              </div>
            )}
          </div>
        }
      >
        <div
          style={{
            width: "80%",
            margin: "20px auto",
            border: "1px solid #d1d5db",
            borderRadius: "6px",
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#ffffff",
          }}
        >
          {/* Tabs */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              backgroundColor: "#f8f9fc",
              borderBottom: "1px solid #d1d5db",
            }}
          >
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: activeTab === "Signature" ? "#ffffff" : "#f8f9fc",
                border: "none",
                borderBottom: activeTab === "Signature" ? "3px solid #5b6dab" : "none",
                cursor: "pointer",
                fontWeight: activeTab === "Signature" ? "bold" : "normal",
                color: "#333",
              }}
              onClick={() => setActiveTab("Signature")}
            >
              Signature
            </button>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: activeTab === "Initials" ? "#ffffff" : "#f8f9fc",
                border: "none",
                borderBottom: activeTab === "Initials" ? "3px solid #5b6dab" : "none",
                cursor: "pointer",
                fontWeight: activeTab === "Initials" ? "bold" : "normal",
                color: "#333",
              }}
              onClick={() => setActiveTab("Initials")}
            >
              Initials
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "Signature" && (
            <div>
              {signatures.map((sig) => (
                <div
                  key={sig._id}
                  style={{
                    padding: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid #d1d5db",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Cedarville Cursive', cursive",
                      fontSize: "20px",
                      color: "#333",
                    }}
                  >
                    <Image
                      src={sig.image}
                      alt={sig.content}
                      width={150}
                      height={75} 
                      style={{ maxWidth: "150px", objectFit: "contain" }}
                    />
                  </div>
                  <div style={{ textAlign: "right" }}>
  {sig.isDefault ? (
    <span style={{ fontSize: "14px", color: "#5b6dab", fontWeight: "bold" }}>
      Default Signature
    </span>
  ) : (
    <button
      style={{
        padding: "8px 15px",
        backgroundColor: "#e7ecf7",
        border: "1px solid #d1d5db",
        borderRadius: "4px",
        color: "#5b6dab",
        cursor: "pointer",
        fontSize: "14px",
      }}
      onClick={() => handleMakeDefault(sig._id)}
    >
      Make Default
    </button>
  )}
</div>


                </div>
              ))}
            </div>
          )}
        </div>
      </Topbar>

      {/* Modal */}
      {isModalOpen && (
        <SignatureModal isOpen={isModalOpen} modalType={modalType} onClose={closeModal} />
      )}
    </>
  );
}
