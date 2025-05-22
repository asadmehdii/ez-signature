"use client";  // Ensure this component runs on the client side

import React, { useState } from "react";
import Topbar from "@/app/components/dashboardTopbar/topbar";
import { Box, Grid2 as Grid } from "@mui/material";
import Text from "@/app/components/text";
import InputText from "@/app/components/inputText";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import InputSelect from "@/app/components/inputSelect";
import { getCountryDataList, getCountryCode } from "countries-list";
import ReactCountryFlag from "react-country-flag";
import Route from "@/app/utils/routes";

const AddNewContact: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [selectCountry, setSelectCountry] = useState<string>("United States");
  const [phone, setPhone] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [websiteUrl, setWebsiteUrl] = useState<string>("");
  const [languages, setLanguages] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [addressLine1, setAddressLine1] = useState<string>("");
  const [addressLine2, setAddressLine2] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [countryAddress, setCountryAddress] = useState<string>("");

  const countryNames = getCountryDataList().map((value) => value.name).filter(Boolean);
  const countryCode = getCountryCode(selectCountry);

  const handleSubmit = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("User ID not found. Please log in again.");
      return;
    }
    const data = {
      firstName,
      lastName,
      email,
      phoneNumber: phone,
      country: selectCountry,
      companyName,
      websiteUrl,
      languages,
      notes,
      addressLine1,
      addressLine2,
      postalCode,
      state,
      city,
      countryAddress,
      userId: userId,
    };

    try {
      const response = await fetch("http://ezsignature.org/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`Failed to save contact: ${errorData.message || "Unknown error"}`);
        return;
      }

      alert("Contact saved successfully!");
    } catch (error) {
      console.error("Error saving contact:", error); 
      alert("An unexpected error occurred while saving contact.");
    }
    
  };

  return (
    <main>
      <Topbar
        title="New Contact"
        buttonText="Save"
        onFirstBtnClick={handleSubmit}
        leftBtnUrl={Route.CONTACT}
        leftBtnText={
          <>
            <ArrowBackIosNewIcon sx={{ fontSize: 15, mr: 0.5, mb: 0.2 }} />
            Contacts
          </>
        }
        btnStyle={{
          color: "var(--secondary-color)",
          width: "135px",
          height: "35px",
          border: "1px solid var(--secondary-color)",
          backgroundColor: "#fff",
        }}
      >
        <Grid container spacing={3} px={3} width="100%">
          <Box width="100%" bgcolor="#E8EFF6" height={44} px={2} display="flex" alignItems="center">
            <Text fontSize="16px" fontWeight="400" color="var(--secondary-color)">
              Basic Information
            </Text>
          </Box>

          <Box width="100%" maxWidth={{ sm: "60%", md: "50%" }} border="1px solid #E8EFF6">
            <Box mt={3} display="flex" justifyContent="space-evenly">
              <InputText lable="First Name" important={true} value={firstName} onChange={(e) => setFirstName(e.target.value)} width="45%" />
              <InputText lable="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} width="45%" />
            </Box>

            <Box mt={3} display="flex" justifyContent="space-evenly">
              <InputText lable="Email Address" important={true} value={email} onChange={(e) => setEmail(e.target.value)} width="45%" />
              <Box width="45%">
                <InputSelect value={selectCountry} onChange={(e) => setSelectCountry(e.target.value)} label="Country" options={countryNames} width="100%" />
                {countryCode && <ReactCountryFlag countryCode={countryCode} svg style={{ width: "100%", height: "30px", marginTop: 2 }} />}
                <InputText placeholder="Enter phone" value={phone} onChange={(e) => setPhone(e.target.value)} width="100%" />
              </Box>
            </Box>

            <Box mt={3} display="flex" justifyContent="space-evenly">
              <InputText lable="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} width="45%" />
              <InputText lable="Website URL" value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} width="45%" />
            </Box>

            <Box mt={3} display="flex" justifyContent="space-evenly">
              <InputText lable="Languages" value={languages} onChange={(e) => setLanguages(e.target.value)} width="45%" />
              <InputText lable="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} width="45%" />
            </Box>
          </Box>

          <Box width="100%" bgcolor="#E8EFF6" height={44} px={2} display="flex" alignItems="center" mt={7}>
            <Text fontSize="16px" fontWeight="400" color="var(--secondary-color)">
              Address
            </Text>
          </Box>

          <Box width={{ xs: "100%", sm: "50%" }} border="1px solid #E8EFF6">
            <InputText lable="Address (Line 1)" value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} width="90%" />
            <InputText lable="Address (Line 2)" value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} width="90%" />
          </Box>

          <Box width={{ xs: "100%", sm: "50%" }} border="1px solid #E8EFF6">
            <Box mt={3} display="flex" justifyContent="space-evenly">
              <InputText lable="Postal Code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} width="45%" />
              <InputText lable="State" value={state} onChange={(e) => setState(e.target.value)} width="45%" />
            </Box>
            <Box mt={3} display="flex" justifyContent="space-evenly">
              <InputText lable="City" value={city} onChange={(e) => setCity(e.target.value)} width="45%" />
              <InputText lable="Country" value={countryAddress} onChange={(e) => setCountryAddress(e.target.value)} width="45%" />
            </Box>
          </Box>
        </Grid>
      </Topbar>
    </main>
  );
};

export default AddNewContact;
