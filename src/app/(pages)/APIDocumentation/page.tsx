"use client"
import React, { useState } from "react"
import Footer from "@/app/components/footer"
import Navbar from "@/app/components/navbar"
import { Grid2 as Grid,Box } from "@mui/material"
import Text from "@/app/components/text"
// import Topbar from "@/app/components/dashboardTopbar/topbar"
import GridText from "./GridText"
import Assests from "@/app/assests/images"
import Button from "@/app/components/button"
import APIDocumentationSidebar from "./APIDocumentSidebar"
import ContentBox from "@/app/components/contentBox"
import Navigate from "@/app/components/linkText"
import MenuIcon from '@mui/icons-material/Menu';


const languages = [
    { code: "en", language: "English" },
    { code: "da", language: "Danish" },
    { code: "nl", language: "Dutch" },
    { code: "fr", language: "French" },
    { code: "de", language: "German" },
    { code: "it", language: "Italian" },
    { code: "pl", language: "Polish" },
    { code: "pt", language: "Portuguese" },
    { code: "ru", language: "Russian" },
    { code: "es", language: "Spanish" },
    { code: "se", language: "Swedish" },
    { code: "tr", language: "Turkish" },
  ];
  

const APIDocumentation:React.FC = ()=>{
    const [open,setOpen] = useState<boolean>(false)
    const handleClose = ()=>{
        setOpen(false)
    }
   return(
    <Grid>
       <Navbar/>
          {/* Bar that apper at the bottom of navbar  */}
       <ContentBox style={{borderBottom:"1px solid #000000",paddingBottom:15}}>
           <Box display={"flex"}>
            <MenuIcon fontSize="large" onClick={()=>setOpen(true)} sx={{display:{xs:"inline-block",md:"none"}}} /> 
            <Navigate sx={{m:{xs:"auto",md:'0'}}} fontSize={16} fontWeight="600" text="</> EzSignature Sign Developer" to=""/>
            <Box  sx={{display:{xs:"none",md:"flex"}}} ml={10} gap={3}>
            <Navigate fontSize={16} fontWeight="600" text="EZ Sign Home" to=""/>
            <Navigate fontSize={16} fontWeight="600" text="API Pricing" to=""/>
            <Navigate fontSize={16} fontWeight="600" text="Help Centre" to=""/>
            </Box>
           </Box>
       </ContentBox>

       <APIDocumentationSidebar onToggle={handleClose} open={open}>
        <Grid>
       {/* Ez Sign eSignature API */}
      <GridText id="Getting Started" heading="Getting Started" title="Ez Sign eSignature API" 
       leftChild={
      <Box component={"div"} id="Ez Sign eSignature API">
          <Text fontSize={"16px"} fontWeight="600" color="#263238" style={{marginTop:"10px"}}>The Xodo Sign API has been built around the idea of efficiency and ease of use. Methods include the vast majority of actions directly related to Ez Sign&apos;s core functionalities, such as creating and viewing documents and templates, accessing your document and template lists, downloading documents, creating documents from templates, canceling and deleting documents and templates, and more.</Text> 
          <Text fontSize={"16px"} fontWeight="600" color="#263238" style={{marginTop:"10px"}}>The following documentation intends to outline in detail the Ez Sign API&apos;s specification, access and use of features and parameters currently available.</Text> 
          <Box py={2} mt={2} pl={2} minHeight={80} height={"100%"} width={"95%"} borderLeft={"4px solid #263238"} bgcolor={"#70FAE3"}> 
          <Text fontSize={"16px"} paddingRight={10} fontWeight="600" color="#263238">! The Ez Sign API is a lightweight RESTful JSON API and can be accessed using any server side programming language.</Text> 
          </Box>     
      </Box>
       }/>
       {/* ------------------------- */}
        

        {/* API Access Key */}
      <GridText id="API Access Key" title="API Access Key" 
       leftChild={
      <Box>
          <Text fontSize={"16px"} fontWeight="600" color="#121212" style={{marginTop:"10px"}}>Each Ez Sign account comes with a unique API access key, used to authenticate with the Ez Sign API using HTTP GET. You can find your API access key by navigating to the top left dropdown menu and selecting &quot;Developer&quot;.</Text> 
          <Box  mt={2} component={"img"} alt="img_here" src={Assests.APIDashboard.src} sx={{objectFit:"contain"}} width={"100%"} height={"100%"} />     
      </Box>
       }
       rightChild={
      <Box p={2}>
          <Text fontSize={"24px"} fontWeight="700" color="#fff" style={{marginTop:0}}>Authentication</Text> 
          <Text fontSize={"16px"} style={{marginTop:"10px"}} fontWeight="600" color="#fff">In order to authenticate with the API, simply append the access_key GET parameter to the API&apos;s base URL:</Text>
          <Box component={"img"} mt={2} alt="img_here" src={Assests.APIRequestUrl.src} sx={{objectFit:"contain"}} maxWidth={500} width={"100%"} height={"100%"} />     
      </Box>
       }
       />
       {/* ------------------------- */}

               {/* Business Selection */}
      <GridText id="Business Selection"  title="Business Selection" 
       leftChild={
      <Box>
          <Text fontSize={"16px"} fontWeight="600" color="#121212" style={{marginTop:"10px"}}>Each Ez Sign account comes with a unique API access key, used to authenticate with the Ez Sign API using HTTP GET. You can find your API access key by navigating to the top left dropdown menu and selecting &quot;Developer&quot;.</Text> 
          <Box mt={2} component={"img"} alt="img_here" src={Assests.APIDashboard.src} sx={{objectFit:"contain"}} width={"100%"} height={"100%"} />     
          <Text style={{marginTop:"10px"}} fontSize={"16px"} fontWeight="600" color="#121212">There is also a way of requesting the API to list all existing businesses for your account. To learn more about this feature, jump to section <span style={{color:"var(--secondary-color)",cursor:"pointer"}}>List Businesses »</span>.</Text> 
      </Box>
       }
       rightChild={
      <Box p={2}>
         <Text fontSize={"24px"} fontWeight="700" color="#fff" style={{marginTop:0}}>Bussiness Selection</Text> 
         <Text fontSize={"16px"} fontWeight="600"style={{marginTop:"10px"}} color="#fff">Each API request made to the Ez Sign API should carry the API&apos;s business_id GET parameter within the API request URL. By logging in to one of your businesses and using the top left dropdown menu to navigate to the &quot;Developer&quot; page you can access your Business ID.</Text>
         <Box component={"img"} mt={2} alt="img_here" src={Assests.BussinessSelectionUrl.src} sx={{objectFit:"contain"}} maxWidth={500} width={"100%"} height={"100%"} />     
     </Box>
       }
       />
       {/* ------------------------- */}

                      {/* HTTPS */}
      <GridText id="HTTPS" title="HTTPS" 
       leftChild={
      <Box>
          <Text fontSize={"16px"} style={{marginTop:"10px"}} fontWeight="600" color="#121212">We understand that any transactions between your application(s) and the EZ Sign API are confidential and contain sensitive data, which is why we have made sure to encrypt all datastreams using 256-bit HTTPS encryption.</Text> 
          <Text fontSize={"16px"} style={{marginTop:"0px"}} fontWeight="600" color="#121212">Please use the API with HTTPS only. As of August 2023 this will become mandatory and all HTTP traffic will be redirected to HTTPS.</Text> 
      </Box>
       }
       rightChild={
      <Box p={2}>
          <Text fontSize={"24px"} fontWeight="700" color="#fff" style={{marginTop:0}}>Using HTTPS</Text> 
          <Text fontSize={"16px"} fontWeight="600" style={{marginTop:"10px"}} color="#fff">To access the API securely, simply append an s to the HTTP protocol.</Text>
          <Text fontSize={"16px"} fontWeight="600" color="#fff" style={{margin:"10px 0 0 30px"}}>https://api.eversign.com/api</Text>
      </Box>
       }
       />
       {/* ------------------------- */}

                         {/* Supported Languages */}
      <GridText id="Supported Languages" title="Supported Languages" 
      leftChild={
      <Box>
          <Text fontSize={"16px"} fontWeight="600" color="#121212" style={{marginTop:"10px"}}>All signer- or CC-facing pages and communication can be displayed in different languages. This includes notification emails sent to signers or CCs about the signing of a specific document, document status pages and the actual signing process.</Text> 
          <Text fontSize={"16px"} fontWeight="600" color="#121212" style={{marginTop:"10px"}}>While creating a document or using a template via the API, the language parameter can be used to pass a 2-letter language code for individual signers or CCs. The language specified this way overrides the default language specified in your business settings.</Text> 
          <Text fontSize={"16px"} fontWeight="600" color="#121212" style={{marginTop:"10px"}}>There are 13 languages to choose from:</Text> 
        <Box bgcolor={"#D4D4D4"} borderRadius={3} mt={2}>
          <Box borderBottom={"1px solid #162937"} display={"flex"} py={1} px={2}>
              <Text fontSize={"16px"} fontWeight="600" color="var(--secondary-color)">Code</Text>
              <Text fontSize={"16px"} fontWeight="600" color="var(--secondary-color)" style={{margin:"auto auto"}}>Language</Text>
          </Box>
        {languages.map((lang,index)=> 
          <Box key={lang.code} py={1} borderBottom={languages.length - 1 === index? " ":"1px solid #162937"  } display={"flex"} px={3}>
              <Text fontSize={"16px"} fontWeight="600" color="#121212">{lang.code}</Text>
              <Text fontSize={"16px"} fontWeight="600" color="#121212" style={{margin:"auto auto"}}>{lang.language}</Text>
          </Box>
        )}
        </Box>
      </Box>
      }
       />
       {/* ------------------------- */}

                             {/* Sandbox Mode */}
      <GridText id="Sandbox Mode"  title="Sandbox Mode" 
       leftChild={
      <Box pb={8}>
          <Text fontSize={"16px"} style={{marginTop:"10px"}} fontWeight="600" color="#121212">In order to use the Ez Sign API for non-production testing, you can enable Sandbox Mode. Any documents created in Sandbox Mode come with a testing prefix appended to their title and will not be legally binding.</Text> 
          <Text fontSize={"16px"} fontWeight="600" style={{marginTop:"10px"}} color="#121212">As you make your way through this API documentation you will notice that most types of API requests are made using the document endpoint. Sandbox Mode is enabled by appending the API&apos;s sandbox parameter to your HTTP POST request and setting it to 1</Text> 
          <Button style={{marginLeft:"auto",marginTop:"30px"}} height={64} width={"180px"} backgroundColor="var(--secondary-color)" color="#fff" borderRadius={23}>Methods</Button>
      </Box>
       }
       rightChild={
      <Box p={2}>
         <Text fontSize={"24px"} fontWeight="700" color="#fff" style={{marginTop:0}}>Enabling Sandbox Mode</Text> 
         <Text fontSize={"16px"} fontWeight="600" color="#fff" style={{marginTop:"10px"}}>In order to enable Sandbox Mode for your API request, simply append the sandbox parameter to your HTTP POST request and set it to 1.</Text>
         <Box component={"img"} mt={2} alt="img_here" src={Assests.SandboxAPI.src} sx={{objectFit:"contain"}} maxWidth={500} width={"100%"} height={"100%"} />     
     </Box>
       }
       />
       {/* ------------------------- */}
       </Grid>
       </APIDocumentationSidebar>

       <Footer/> 

    </Grid>
   )
}

export default APIDocumentation