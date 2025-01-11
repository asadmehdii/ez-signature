"use client"
import React, { useState } from "react"
import Topbar from "@/app/components/dashboardTopbar/topbar"
import { Box, Grid2 as Grid } from "@mui/material"
import Text from "@/app/components/text"
import InputText from "@/app/components/inputText"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import InputSelect from "@/app/components/inputSelect"
import { getCountryDataList, getCountryCode } from "countries-list"
import ReactCountryFlag from "react-country-flag"
import iso6391 from "iso-639-1"
import Route from "@/app/utils/routes"

const AddNewContact: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [selectCountry, setSelectCountry] = useState<string>("United States")
  const [phone, setPhone] = useState<string>("")
  const [companyName, setCompanyName] = useState<string>("")
  const [websiteUrl, setWebsiteUrl] = useState<string>("")
  const [languages, setLanguages] = useState<string>("")
  const [notes, setNotes] = useState<string>("")
  const [addressLine1, setAddressLine1] = useState<string>("")
  const [addressLine2, setAddressLine2] = useState<string>("")
  const [postalCode, setPostalCode] = useState<string>("")
  const [state, setState] = useState<string>("")
  const [city, setCity] = useState<string>("")
  const [countryAddress, setCountryAddress] = useState<string>("")

  const countryNames = getCountryDataList().map((value) => value.name).filter((name) => name !== undefined && name !== null)
  const countryCode = getCountryCode(selectCountry)
  const languageNames = iso6391.getAllNames()

  const handleSubmit = async () => {
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
    }

    try {
      const response = await fetch("http://localhost:4000/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        alert("Contact saved successfully!")
      } else {
        alert("Failed to save contact.")
      }
    } catch (error) {
      alert("Error occurred while saving contact.")
    }
  }

  return (
    <main>
      <Topbar title="New Contact" buttonText="Save" 
       onFirstBtnClick={handleSubmit}
      leftBtnUrl={Route.CONTACT} leftBtnText={<><ArrowBackIosNewIcon sx={{ fontSize: 15, mr: 0.5, mb: 0.2 }} /> Contacts</>} btnStyle={{ color: "var(--secondary-color)", width: "135px", height: "35px", border: "1px solid var(--secondary-color)", backgroundColor: "#fff" }}>
        <Grid height={"fit-content"} px={3} width={"100%"} overflow={"hidden"} alignItems={"flex-start"} container>
          {/* Basic Information Form */}
          <Box display={"flex"} alignItems={"center"} width={"100%"} bgcolor={"#E8EFF6"} height={44} px={2}>
            <Text fontSize="16px" fontWeight="400" color="var(--secondary-color)">Basic Information</Text>
          </Box>

          <Box height={530} boxSizing={"border-box"} maxWidth={{ sm: "60%", md: "50%" }} width="100%" border={"1px solid #E8EFF6"}>
            <Box mt={3} display={"flex"} justifyContent={"space-evenly"}>
              <InputText
                lableStyle={{ color: "var(--secondary-color)" }}
                important height={35}
                borderRadius={2}
                width={"45%"}
                lable="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <InputText
                lableStyle={{ color: "var(--secondary-color)" }}
                height={35}
                borderRadius={2}
                width={"45%"}
                lable="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Box>

            <Box mt={3} display={"flex"} justifyContent={"space-evenly"}>
              <InputText
                lableStyle={{ color: "var(--secondary-color)" }}
                important height={35}
                borderRadius={2}
                width={"45%"}
                lable="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Box width={"45%"}>
                <InputSelect
                  value={selectCountry}
                  onChange={(e) => setSelectCountry(e.target.value)}
                  label="Phone Number"
                  labelStyle={{ color: "var(--secondary-color)" }}
                  options={countryNames}
                  borderRadius={2}
                  height={35}
                  width={"100%"}
                />
                {countryCode && typeof countryCode === "string" ? (
                  <ReactCountryFlag countryCode={countryCode} svg style={{ width: "100%", height: "150px", marginTop: 2 }} />
                ) : (
                  <span>Invalid Country</span>
                )}
                <InputText
                  lableStyle={{ color: "var(--secondary-color)" }}
                  height={35}
                  borderRadius={2}
                  width={"100%"}
                  placeholder="Enter phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Box>
            </Box>

            <Box mt={3} display={"flex"} justifyContent={"space-evenly"}>
              <InputText
                lableStyle={{ color: "var(--secondary-color)" }}
                height={35}
                borderRadius={2}
                width={"45%"}
                lable="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <InputText
                lableStyle={{ color: "var(--secondary-color)" }}
                height={35}
                borderRadius={2}
                width={"45%"}
                lable="Website URL"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
              />
            </Box>
          </Box>

          {/* Address Form */}
          <Box height={{ xs: 330, sm: 530 }} boxSizing={"border-box"} pb={3} display={"flex"} flexDirection={"column"} alignItems={"center"} width={{ xs: "100%", sm: "40%", md: "50%" }} border={"1px solid #E8EFF6"}>
            <InputSelect
              label="Languages"
              labelStyle={{ color: "var(--secondary-color)" }}
              options={languageNames}
              placeholder="Select..."
              borderRadius={2}
              mt={3}
              height={35}
              width={"90%"}
              value={languages}
              onChange={(e) => setLanguages(e.target.value)}
            />
            <InputText
              lableStyle={{ color: "var(--secondary-color)" }}
              borderRadius={2}
              mt={3}
              rows={4}
              multiline
              width={"90%"}
              lable="Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </Box>

        </Grid>

        <Grid mt={7} sx={{ px: 3, width: '100%' }} container>
          {/* Address Form */}
          <Box display={"flex"} alignItems={"center"} width={"100%"} bgcolor={"#E8EFF6"} height={44} px={2}>
            <Text fontSize="16px" fontWeight="400" color="var(--secondary-color)">Address</Text>
          </Box>

          <Box boxSizing={"border-box"} display={"flex"} flexDirection={"column"} alignItems={"center"} width={{ xs: "100%", sm: "50%" }} border={"1px solid #E8EFF6"}>
            <InputText
              lableStyle={{ color: "var(--secondary-color)" }}
              height={35}
              mt={3}
              borderRadius={2}
              width={"90%"}
              lable="Address (Line 1)"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
            />
            <InputText
              mb={3}
              lableStyle={{ color: "var(--secondary-color)" }}
              height={35}
              mt={3}
              borderRadius={2}
              width={"90%"}
              lable="Address (Line 2)"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
            />
          </Box>

          <Box boxSizing={"border-box"} width={{ xs: "100%", sm: "50%" }} border={"1px solid #E8EFF6"}>
            <Box mt={3} display={"flex"} flexDirection={{ xs: "column", sm: "row" }} alignItems={"center"} justifyContent={"space-evenly"}>
              <InputText
                lableStyle={{ color: "var(--secondary-color)" }}
                height={35}
                borderRadius={2}
                width={{ xs: "90%", sm: "45%" }}
                lable="Postal Code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
              <InputText
                lableStyle={{ color: "var(--secondary-color)" }}
                height={35}
                borderRadius={2}
                width={{ xs: "90%", sm: "45%" }}
                lable="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </Box>

            <Box mt={{ sm: 3 }} pb={3} display={"flex"} flexDirection={{ xs: "column", sm: "row" }} alignItems={"center"} justifyContent={"space-evenly"}>
              <InputText
                lableStyle={{ color: "var(--secondary-color)" }}
                height={35}
                borderRadius={2}
                width={{ xs: "90%", sm: "45%" }}
                lable="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <InputText
                lableStyle={{ color: "var(--secondary-color)" }}
                height={35}
                borderRadius={2}
                width={{ xs: "90%", sm: "45%" }}
                lable="Country"
                value={countryAddress}
                onChange={(e) => setCountryAddress(e.target.value)}
              />
            </Box>
          </Box>

        </Grid>

      

      </Topbar>
    </main>
  )
}

export default AddNewContact;
