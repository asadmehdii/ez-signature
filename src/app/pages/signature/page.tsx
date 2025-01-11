"use client";
import React, { useState, useEffect } from "react";
import Topbar from "@/app/components/dashboardTopbar/topbar";
import SignatureModal from "../../pages/signature/signature";

export default function DocumentPage() {
  const [activeTab, setActiveTab] = useState("Signature");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [signatures, setSignatures] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/modalsignature/getallsignature")
      .then((response) => response.json())
      .then((data) => setSignatures(data))
      .catch((error) => console.error("Error fetching signatures:", error));
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
                    <img src={sig.image} alt={sig.content} style={{ maxWidth: "150px" }} />
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#5b6dab",
                        marginBottom: "10px",
                        display: "block",
                      }}
                    >
                      {sig.font}
                    </span>
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
                    >
                      Make Default
                      <span
                        style={{
                          marginLeft: "5px",
                          display: "inline-block",
                          transform: "rotate(90deg)",
                          fontSize: "10px",
                        }}
                      >
                        ▼
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Initials" && (
            <div
              style={{
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cedarville Cursive', cursive",
                  fontSize: "20px",
                  color: "#333",
                }}
              >
                AAZ
              </div>
              <div></div>
            </div>
          )}
        </div>
      </Topbar>

      {/* Modal */}
      {isModalOpen && (
        <SignatureModal
          isOpen={isModalOpen}
          modalType={modalType}
          onClose={closeModal}
        />
      )}
    </>
  );
}