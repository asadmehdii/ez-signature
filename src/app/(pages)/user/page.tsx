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
      title="User Settings"
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

      {/* General  */}

      <div style={containerStyle}>
        <div style={cardStyle}>
          <div style={headerStyle}>General</div>

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
                  Show all saved signatures/initials when signing or preparing a document.
                </label>
              </div>


            </div>
          </div>
        </div>
      </div>
      {/* Date And Time */}
      <div style={containerStyle}>
        <div style={cardStyle}>
          <div style={headerStyle}>Date & Time</div>

          <div style={{ padding: "16px 24px", fontSize: "14px", borderBottom: "1px solid #e0e0e0" }}>
            The date and time formats below will be used for your Ezsignature dashboards. "Date Signed" document fields and Audit Trail documents take their time and date from "business settings".
          </div>

          <div style={{ padding: "24px" }}>
            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>Date Format</label>
              <select
                name="dateFormat"
                value={formData.dateFormat}
                onChange={handleChange}
                style={{ ...inputStyle, width: "260px" }}
              >
                <option value="Jun 02 2025">Jun 02 2025</option>
                <option value="02 Jun 2025">02 Jun 2025</option>
                <option value="2025-06-02">2025-06-02</option>
              </select>
            </div>


            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>Time Format</label>
              <select
                name="timeFormat"
                value={formData.timeFormat}
                onChange={handleChange}
                style={{ ...inputStyle, width: "260px" }}
              >
                <option value="12 Hour">12 Hour</option>
                <option value="24 Hour">24 Hour</option>
              </select>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid #e0e0e0", margin: "24px 0" }} />

            <div>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: 500 }}>Default Time Zone</label>
              <select
                name="timeZone"
                value={formData.timeZone}
                onChange={handleChange}
                style={{ ...inputStyle, width: "260px" }}
              >
                <option value="UTC+00:00">UTC/GMT +00:00 UTC</option>
                <option value="UTC+01:00">UTC+01:00</option>
                <option value="UTC-05:00">UTC-05:00</option>
                <option value="UTC+05:30">UTC+05:30</option>
              </select>
            </div>
          </div>
        </div>
      </div>


      {/* Notifications */}


      <div style={containerStyle}>
        <div style={cardStyle}>
          <div style={headerStyle}>Notifications</div>

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
                  Notify me when a document I have sent is opened.
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
                  Send me a daily summary of outstanding documents.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>




    </Topbar>
  );
}

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
