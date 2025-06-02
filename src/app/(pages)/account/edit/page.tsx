// @ts-nocheck
"use client";
import React, { useEffect, useState } from "react";
import Topbar from "@/app/components/dashboardTopbar/topbar";

export default function DocumentPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Saving changes...", formData);
  };

  return (
    <Topbar
      title="Edit Account"
      buttonText={
        <div style={{ position: "relative", display: "inline-block" }}>
          <p
            style={{
              color: "#fff",
              cursor: "pointer",
            }}
            onClick={handleSubmit}
          >
            Save Changes
          </p>
        </div>
      }
    >
      {/* Account Details */}
      <div style={containerStyle}>
        <div style={cardStyle}>
          <div style={headerStyle}>Account Details</div>

          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              flexWrap: "wrap",
              padding: "30px",
              gap: "30px",
            }}
          >
            <div style={{ flex: 2, minWidth: "280px" }}>
              <div
                style={{
                  marginBottom: "20px",
                  display: isMobile ? "block" : "flex",
                  gap: "30px",
                }}
              >
                <div style={{ flex: 1, marginBottom: isMobile ? "20px" : 0 }}>
                  <label>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
            </div>

            <div
              style={{
                flex: 1,
                minWidth: "260px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div>
                <label>Current Password</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              <div>
                <label>New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              <div>
                <label>New Password (confirm)</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Address and company name */}
      <div style={containerStyle}>
        <div style={cardStyle}>
          <div style={headerStyle}>Address & Company Details</div>
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              flexWrap: "wrap",
              padding: "30px",
              gap: "30px",
            }}
          >
            <div style={{ flex: 2, minWidth: "280px" }}>
              <div>
                <label>Address *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
              <div
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  display: isMobile ? "block" : "flex",
                  gap: "30px",
                }}
              >

                <div style={{ flex: 1, marginBottom: isMobile ? "20px" : 0 }}>
                  <label>Postal Code *</label>
                  <input
                    type="text"
                    name="postalcode"
                    value={formData.postalcode}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label>State *</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
              </div>
              <div
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  display: isMobile ? "block" : "flex",
                  gap: "30px",
                }}
              >

                <div style={{ flex: 1, marginBottom: isMobile ? "20px" : 0 }}>
                  <label>City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Country *</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
              </div>

            </div>

            <div
              style={{
                flex: 1,
                minWidth: "260px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div>
                <label>Company Name</label>
                <input
                  type="text"
                  name="companyname"
                  value={formData.companyname}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              <div>
                <label>Website Url</label>
                <input
                  type="text"
                  name="websiteurl"
                  value={formData.websiteurl}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              <div>
                <label>Tax ID or VAT Number</label>
                <input
                  type="text"
                  name="taxid"
                  value={formData.taxid}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Other Setting */}
      <div style={containerStyle}>
        <div style={cardStyle}>
          <div style={headerStyle}>Other Settings</div>

          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              flexWrap: "wrap",
              padding: "30px",
              gap: "30px",
            }}
          >
            <div style={{ flex: 2, minWidth: "280px" }}>
              <div style={{ marginBottom: "20px" }}>
                <input
                  type="checkbox"
                  id="receiveInvoices"
                  name="receiveInvoices"
                  checked={formData.receiveInvoices}
                  onChange={handleChange}
                  style={{ marginRight: "10px" }}
                />
                <label htmlFor="receiveInvoices">
                  Receive PDF invoices for your Xodo Sign subscription via email
                </label>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <input
                  type="checkbox"
                  id="receiveMarketing"
                  name="receiveMarketing"
                  checked={formData.receiveMarketing}
                  onChange={handleChange}
                  style={{ marginRight: "10px" }}
                />
                <label htmlFor="receiveMarketing">
                  Receive marketing communications and promotional offers from Xodo Sign via email
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cancel your account */}
      <div style={containerStyle}>
        <div style={cardStyle}>
          <div style={headerStyle}>Cancel your account</div>

          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              flexWrap: "wrap",
              padding: "30px",
              gap: "30px",
            }}
          >
            <div style={{ flex: 2, minWidth: "280px" }}>
              <div style={{ marginBottom: "20px" }}>
                <label>
                  Looking to close your account entirely? Click the button below to confirm your account deletion, but be aware that all your data - including your businesses - will be deleted permanently.
                </label>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label>
                  Clicking "Cancel Account" will cancel your entire account and cannot be undone.
                </label>
              </div>

              {/* Cancel Account Button */}
              <div style={{ marginTop: "10px" }}>
                <button style={{ backgroundColor: "#d9534f", color: "white", padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                  Cancel Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </Topbar>
  );
}

// Layout styles
const containerStyle = {
  padding: "20px",
  maxWidth: "1200px",
  margin: "0 auto",
  boxSizing: "border-box",
};

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  overflow: "hidden",
  backgroundColor: "#fff",
};

const headerStyle = {
  backgroundColor: "#e9f0f9",
  padding: "16px 24px",
  borderBottom: "1px solid #ccc",
  fontWeight: "bold",
  fontSize: "16px",
};

// Input style
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "6px",
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "14px",
  boxSizing: "border-box",
};
