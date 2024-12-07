"use client"
import React, { useState } from "react"
import Topbar from "@/app/components/dashboardTopbar/topbar"
import { Box, Grid2 as Grid } from "@mui/material"
import Text from "@/app/components/text"
import InputText from "@/app/components/inputText"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import InputSelect from "@/app/components/inputSelect"
import { getCountryDataList, getCountryCode} from "countries-list" 
import ReactCountryFlag from "react-country-flag"
import iso6391 from "iso-639-1";
import Route from "@/app/utils/routes"


// const countries = CountryList().getData();
const AddNewContact:React.FC = ()=>{
const [selectCountry,setSelectCountry] = useState<string>("United States")
const countryNames = getCountryDataList().map((value) => value.name).filter((name) => name !== undefined && name !== null);
const countryCode = getCountryCode(selectCountry)
const languageNames = iso6391.getAllNames();

 return(
    <main>
       <Topbar title="New Contact" buttonText="Save" leftBtnUrl={Route.CONTACT} leftBtnText={<><ArrowBackIosNewIcon sx={{fontSize:15,mr:0.5,mb:0.2}}/> Contacts</>} btnStyle={{color:"var(--secondary-color)", width:"135px",height:"35px",border:"1px solid var(--secondary-color)",backgroundColor:"#fff"}}>
           {/* --------------- First form ------------- */}
        <Grid height={"fit-content"} px={3} width={"100%"} overflow={"hidden"} alignItems={"flex-start"} container>
         <Box display={"flex"} alignItems={"center"} width={"100%"} bgcolor={"#E8EFF6"} height={44} px={2}>
            <Text fontSize="16px" fontWeight="400" color="var(--secondary-color)">Basic Information</Text>
         </Box>
         
         <Box height={530} boxSizing={"border-box"} maxWidth={{sm:"60%",md:"50%"}} width="100%" border={"1px solid #E8EFF6"}>
           <Box mt={3} display={"flex"} justifyContent={"space-evenly"}>
           <InputText lableStyle={{color:"var(--secondary-color)"}} important height={35} borderRadius={2} width={"45%"} lable="Firt Name" />
           <InputText lableStyle={{color:"var(--secondary-color)"}} height={35} borderRadius={2} width={"45%"} lable="Last Name"/>
         </Box>
         
         <Box mt={3} display={"flex"} justifyContent={"space-evenly"}>
           <InputText lableStyle={{color:"var(--secondary-color)"}} important height={35} borderRadius={2} width={"45%"} lable="Email Address" />
           <Box width={"45%"}>
           <InputSelect value={selectCountry} onChange={(e)=>{setSelectCountry(e.target.value)}} label="Phone Number" labelStyle={{color:"var(--secondary-color)"}} options={countryNames}  borderRadius={2} height={35} width={"100%"}/>
           {countryCode && typeof countryCode === 'string' ? (
           <ReactCountryFlag countryCode={countryCode} svg style={{width:"100%",height:"150px",marginTop:2}} />) : (<span>Invalid Country</span>)}
           <InputText lableStyle={{color:"var(--secondary-color)"}} height={35} borderRadius={2} width={"100%"} placeholder="Enter phone" />
           </Box>
         </Box>
         
         <Box mt={3} display={"flex"} justifyContent={"space-evenly"}>
           <InputText lableStyle={{color:"var(--secondary-color)"}} height={35} borderRadius={2} width={"45%"} lable="Company Name" />
           <InputText lableStyle={{color:"var(--secondary-color)"}} height={35} borderRadius={2} width={"45%"} lable="Website URL"/>
         </Box>
           </Box>

         <Box height={{xs:330,sm:530}} boxSizing={"border-box"} pb={3} display={"flex"} flexDirection={"column"}  alignItems={"center"} width={{xs:"100%",sm:"40%",md:"50%"}}  border={"1px solid #E8EFF6"}>
            <InputSelect label="Languages" labelStyle={{color:"var(--secondary-color)"}} options={languageNames} placeholder="Select..." borderRadius={2} mt={3} height={35} width={"90%"}/>
           <InputText lableStyle={{color:"var(--secondary-color)"}} borderRadius={2} mt={3} rows={4} multiline width={"90%"} lable="Notes" />             
         </Box>
        
        </Grid>
           {/* --------------- First form ------------- */}
           {/* --------------- Second form ------------- */}
        <Grid mt={7} sx={{ px:3, width:'100%' }}  container>
         
         <Box display={"flex"} alignItems={"center"} width={"100%"} bgcolor={"#E8EFF6"} height={44} px={2}>
            <Text fontSize="16px" fontWeight="400" color="var(--secondary-color)">Address</Text>
         </Box>
         
         <Box boxSizing={"border-box"} display={"flex"} flexDirection={"column"} alignItems={"center"} width={{xs:"100%",sm:"50%"}} border={"1px solid #E8EFF6"}>
           <InputText lableStyle={{color:"var(--secondary-color)"}} height={35} mt={3} borderRadius={2} width={"90%"} lable="Address (Line 1)" />
           <InputText mb={3} lableStyle={{color:"var(--secondary-color)"}} height={35} mt={3} borderRadius={2} width={"90%"} lable="Address (Line 2)"/>
        </Box>
        
        <Box boxSizing={"border-box"} width={{xs:"100%",sm:"50%"}} border={"1px solid #E8EFF6"}>
        <Box mt={3} display={"flex"} flexDirection={{xs:"column",sm:"row"}} alignItems={"center"} justifyContent={"space-evenly"}>
           <InputText lableStyle={{color:"var(--secondary-color)"}} height={35} borderRadius={2} width={{xs:"90%",sm:"45%"}} lable="Postal Code" />
           <InputText lableStyle={{color:"var(--secondary-color)"}} height={35} borderRadius={2} width={{xs:"90%",sm:"45%"}} lable="State"/>
        </Box>
        
        <Box mt={{sm:3}} pb={3} display={"flex"} flexDirection={{xs:"column",sm:"row"}} alignItems={"center"} justifyContent={"space-evenly"}>
           <InputText lableStyle={{color:"var(--secondary-color)"}} height={35} borderRadius={2} width={{xs:"90%",sm:"45%"}} lable="City" />
           <InputText lableStyle={{color:"var(--secondary-color)"}} height={35} borderRadius={2} width={{xs:"90%",sm:"45%"}} lable="Country"/>
        </Box>
         </Box>
        </Grid>




           {/* --------------- Second form ------------- */}

       </Topbar>
    </main>
 )
}


export default AddNewContact 