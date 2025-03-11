import { FC } from "react";
import ContentBox from "@/app/components/contentBox";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import PressLegalBanner from "@/app/components/PressLegalBanner";
import Text from "@/app/components/text";
import Link from "next/link";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableData } from "./content";
import MoreQuestion from "@/app/components/more question";
import { Typography } from "@mui/material";

const CookiePolicy:FC = ()=>{
    return(
    <main>
      <Navbar/>
      <PressLegalBanner textWidth={732} heading="Cookie Policy" text="At Ezsignature we use cookies in order to ensure optimal user experience, security and functionality of our platform."/>
        <ContentBox mt={9} style={{lineHeight:'36px'}}>
             <Text fontSize="22px" margin={"25px 0"} fontWeight="600">Last modified: 25-05-2018</Text>
             <Text fontSize="34px" marginTop={60} marginBottom={10} fontWeight="700">1. What are cookies?</Text>
             <Text fontSize="22px" margin={"25px 0"} fontWeight="600">A cookie is a small piece of text that our web server stores on your computer or mobile device, which your browser sends to us when you return 
             to our site. Cookies do not necessarily identify you if you are merely visiting our website; however, a cookie may store a unique identifier for 
             each logged in user. The cookies we use are essential for the operation of the website, or are used for performance, functionality and security 
             purposes.</Text>
             <Text fontSize="22px" margin={"25px 0"} fontWeight="600">For example, cookies allow us to remember things about your visit to our website, such as your preferred language, time zone and other 
             preferences in order to make the site and service easier for you to use.</Text>
             <Text fontSize="22px" margin={"25px 0"} fontWeight="600">In order to offer the highest level of usability, performance and security we use both session cookies and persistent cookies. A persistent cookie 
             consists of a text file sent by a web server to a web browser, which will be stored by the browser and will remain valid until its set expiration date 
             (unless deleted by the user before the expiration date). A session cookie, on the other hand, will expire at the end of the user session, when the
             web browser is closed.</Text>
             <Text fontSize="34px" marginTop={60} marginBottom={10} fontWeight="700">2. How and why we use cookies and similar technologies</Text>
             <Text fontSize="22px" margin={"25px 0"} fontWeight="600">The cookies and similar technologies we use, including web beacons, browser cookies, pixel tags and local shared objects (also called &quot;flash cookies&quot;) all share one goal: to offer, measure and improve all aspects of our service continuously and in various ways. We differentiate between those cookies, which are strictly necessary for access and navigation, others that track usage (performance cookies), remember your choices (functionality cookies), and cookies that provide you with targeted content or advertising.</Text>
             <Text fontSize="22px" margin={"25px 0"} fontWeight="600"> We use cookies for the following purposes and pursuant to Article 6 para. 1f GDPR:</Text>
             <Text fontSize="22px" marginTop={20} fontWeight="700">1. Access and security (Strictly Necessary Cookies)</Text>
             <ul style={{fontSize:"22px",fontWeight:'600',marginTop:"8px"}}>
                <li>To recognize your computer when you visit our website and to facilitate logging in;</li>
                <li>To protect your security and fight spam and abuse of our website and service;</li>
                <li>To prevent unauthorized third parties from accessing your account.</li>
             </ul>
             <Text fontSize="22px" marginTop={20} fontWeight="700">2. Settings (Functionality Cookies)</Text>
             <ul style={{fontSize:"22px",fontWeight:'600',marginTop:"8px"}}>
                <li>To remember details about your browser, site settings and preferences you have specified related to the use of our website and services (e.g. preferred language or time zone).</li>
             </ul>
             <Text fontSize="22px" marginTop={20} fontWeight="700"> Analytics and research (Performance Cookies)</Text>
             <ul style={{fontSize:"22px",fontWeight:'600',marginTop:"8px"}}>
                <li>To help us gain important insights and understand the way people use our website and service;</li>
             </ul>
             <Text fontSize="22px" marginTop={20} fontWeight="700">4. Advertising and marketing (Other Cookies)</Text>
             <ul style={{fontSize:"22px",fontWeight:'600',marginTop:"8px"}}>
                <li>To personalize the website and service for you</li>
                <li>To include advertisements, which may be of particular interest to you;</li>
             </ul>
             <Text fontSize="22px" margin={"25px 0"} fontWeight="600">In an effort to properly understand the way people use our website and service, we have implemented a number of analytics partners, including Google Analytics. These partners use cookies in order to gather information and analyze site navigation and how and from which websites users reached our website and service.</Text>
             <Text fontSize="22px" margin={"25px 0"} fontWeight="600">We do not release any information collected from our own cookies to any third party providers, expect for the service providers assisting in managing cookies.</Text>
             <Text fontSize="34px" marginTop={60} marginBottom={10} fontWeight="700">3. What can I do to control how cookies are used?</Text>
             <Text fontSize="22px" marginTop={20} fontWeight="600">You can disable the installation of cookies by entering the corresponding settings in your browser software (e.g. in Internet Explorer, Mozilla Firefox, Opera, or Safari). In order to opt-out of Google Analytics, you may install the Google Analytics Opt-Out Program, available here: <Link target="_blank" href={"https://tools.google.com/dlpage/gaoptout"} style={{color:"#1DCDFE"}}>https://tools.google.com/ dlpage/ gaoptout</Link></Text>
             <Text fontSize="22px" marginBottom={20} fontWeight="600">For general information about cookies and how to disable them, please visit <Link target="_blank" href={"https://allaboutcookies.org/"} style={{color:"#1DCDFE"}}>www.allaboutcookies.org</Link>.</Text>
             <Text fontSize="34px" marginTop={60} marginBottom={10} fontWeight="700">4. Changes to this policy</Text>
             <Text fontSize="22px" margin={"25px 0"} fontWeight="600">Although significant changes are rare, this policy may be amended as new features, technology, or legal requirements arise, so please check back from time to time. We’ll notify you if we make a significant change and, where required, seek your consent.</Text>
             <Typography fontSize="34px" color="#1DCDFE" margin={"60px 0"} textAlign={{xs:"center",sm:"right"}} fontWeight="700">Cookies used on Ezsignature</Typography>         
    <TableContainer  component={Paper} sx={{boxShadow:'none'}}>
      <Table sx={{ minWidth: 950,boxSizing:'border-box'}} aria-label="simple table" >
        <TableHead sx={{fontSize:"30px",border:'1px solid #000',height:"100px",backgroundColor:"#F3F3F3"}}> 
          <TableRow>
            <TableCell sx={{fontSize:22,fontFamily:"var(--font-mada)",fontWeight:"700",border:'1px solid #000'}} align="center">cookie</TableCell>
            <TableCell sx={{fontSize:22,fontFamily:"var(--font-mada)",fontWeight:"700",border:'1px solid #000'}} align="left">type / source</TableCell>
            <TableCell sx={{fontSize:22,fontFamily:"var(--font-mada)",fontWeight:"700",border:'1px solid #000'}} align="left">description</TableCell>
            <TableCell sx={{fontSize:22,fontFamily:"var(--font-mada)",fontWeight:"700",border:'1px solid #000'}} align="center">duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TableData.map((row,i) => (
            <TableRow key={`${row.cookie}_${i}`} sx={{border:'1px solid #000',height:"130px" }}>
              <TableCell sx={{border:'1px solid #000',fontSize:22,fontFamily:"var(--font-mada)",fontWeight:"600",maxWidth:232,width:232 }} align="center">{row.cookie}</TableCell>
              <TableCell  sx={{border:'1px solid #000',fontSize:22,fontFamily:"var(--font-mada)",fontWeight:"600",maxWidth:250,width:250 }} align="left">{row.type}</TableCell>
              <TableCell sx={{border:'1px solid #000',fontSize:20,fontFamily:"var(--font-mada)",fontWeight:"600",maxWidth:550,width:550 }} align="left">{row.description}</TableCell>
              <TableCell sx={{border:'1px solid #000',fontSize:20,fontFamily:"var(--font-mada)",fontWeight:"600",maxWidth:232,width:232 }} align="center">{row.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>             
    <Text fontSize="34px" marginTop={60}  marginBottom={0} fontWeight="700">Questions</Text>
    <Text fontSize="22px" marginTop={6} fontWeight="600">If you have any questions about our use of cookies, please email us at <Link target="_blank" href={"mailto:support@Ezsignature.com"} style={{color:"#1DCDFE"}}>support@Ezsignature.com</Link>.</Text>     
    </ContentBox>
      <MoreQuestion mt={5}/>
      <Footer/>
    </main>
    )
}


export default CookiePolicy