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
import {SectionAccess,RightsTableData, DisclosureTableData} from "./content"
import MoreQuestion from "@/app/components/more question";
const PrivacyPolicy:FC = ()=>{
    return(
        <main>
          <Navbar/>
             <PressLegalBanner textWidth={800} heading="Privacy Policy" text="At Ezsignature we are committed to protecting your privacy. Please review this Privacy Policy carefully before using this service."/>
           <ContentBox sx={{lineHeight:'36px'}}>  
             <Text fontSize="22px" margin={"25px 0"} fontWeight="600">Last Modified: February 8, 2023</Text>
             <Text fontSize="34px" marginTop={60} marginBottom={10} fontWeight="700">PRIVACY NOTICE</Text>
             <Text fontSize="22px" margin={"25px 0"} fontWeight="600">Apryse is committed to protecting and respecting your privacy. A reference to “Apryse”, “we”, “us” or “our” is a reference to Apryse Software Inc. 
             and its affiliates, and we are a ‘controller’ for the purposes of the data protection laws that apply to us. We ask that you read this Privacy Notice 
             carefully as it contains important information about our processing and your rights.</Text>
             <Text fontSize="22px" margin={"25px 0 0 0"} fontWeight="600">This notice (together with any applicable terms of use) describes what personal data and other information we may collect, use, share and process 
             from you in connection with your use of our products. References to our products in this notice include our websites, apps, software, and services.
             For greater certainty, we may collect and make use of your information (including personal data) in the context of:</Text>
             <ul style={{fontSize:"22px",fontWeight:'600',margin:"0 0 25px 0"}}>
                <li>our websites, including, but not limited to, web-based services such as Ezsignature (“websites”);</li>
                <li>our desktop applications and mobile applications (both referred to as “apps”); and</li>
                <li>our sales, marketing, and advertising practices.</li>
             </ul>
            <Text fontSize="22px" margin={"25px 0 0 0"} fontWeight="600">This notice further describes how we may collect personal data, with whom we may share it, as well as the choices you have regarding our collection 
            of information and our use and disclosure of that information to other parties.</Text>
            <Text fontSize="22px" margin={"0 0 25px 0"} fontWeight="600">Note for Ezsignature users: If you are using Ezsignature with Google Drive, please note that Ezsignature use and transfer to any other application of 
            information received from Google&apos;s APIs will adhere to the <Link href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" style={{textDecoration:"underline",color:"#21D0B3"}} >Google API Services User Data Policy</Link>, including the Limited Use requirements therein.</Text>
            <Text fontSize="22px" margin={"25px 0"} fontWeight="600">This notice is provided in a layered format for ease of access. Click on the table of contents to jump to a specific section.</Text>
            <ul style={{fontSize:"26px",fontWeight:'700',margin:"0 0 25px 0"}}>{SectionAccess.map((item)=><li style={{marginBottom:"25px"}} key={item.text}><Link href={item.url}>{item.text}</Link></li>)}</ul>
            <Text fontSize="34px" marginTop={60} marginBottom={10} fontWeight="700" id="overview-and-scope">1. OVERVIEW AND SCOPE</Text>
            <Text fontSize="22px" margin={"25px 0"} fontWeight="600">We believe that you should always know what data we collect from you, how we use it, and that you should have meaningful control over both. 
            This notice describes how we use personal data, with whom we share it, your rights and choices, and how you can contact us about our privacy practices.</Text>
            <Text fontSize="34px" marginTop={60} marginBottom={10} fontWeight="700" id="information-we-collect-from-you">2. INFORMATION WE COLLECT FROM YOU</Text>
            <ul style={{fontSize:"22px",fontWeight:'600',margin:"0 0 25px 0"}}>
               <li>We collect, use, store, transfer and process different types and categories of personal data about you as follows:</li>
               <li><span style={{color:"#1DCDFE"}}>Identity Data</span> includes first name, last name, company name, user pictures and profile pictures (if supplied), username or similar identifier, marital status, title, date of birth and gender.</li>
               <li><span style={{color:"#1DCDFE"}}>Contact Data</span> includes postal address, email address and telephone numbers.</li>
               <li><span style={{color:"#1DCDFE"}}>Financial Data</span> includes bank account details, credit card information, tax payer identification numbers and billing addresses.</li>
               <li><span style={{color:"#1DCDFE"}}>Transaction Data</span> includes details about payments to and from you and other details of any services you have purchased from us.</li>
               <li><span style={{color:"#1DCDFE"}}>Technical Data</span> includes internet protocol (IP) address, media access control (MAC) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
               <li><span style={{color:"#1DCDFE"}}>Product Data</span> includes your information and content you may submit in a PDF, details about any licences you may have with us, preferences, feedback and survey responses.</li>
               <li><span style={{color:"#1DCDFE"}}>Usage Data</span> includes information about how you use our website and products.</li>
               <li><span style={{color:"#1DCDFE"}}>Marketing and Communications Data</span> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
               <li>We do not collect any special categories of personal data about you (such as health data, political opinion, religious beliefs etc). Nor do we collect any information about criminal convictions and offences.</li>
               <li>If you fail to provide personal data</li>
               <li>Where we need to collect personal data by law, or under the terms of a contract we have with you and you fail to provide that data when requested, we may not be able to perform the contract we have or are trying to enter into with you (for example, to provide you with products or services). In this case, we may have to cancel a product or service you have with us but we will notify you if this is the case at the time.</li>
           </ul>
           <Text fontSize="34px" marginTop={60} marginBottom={10} fontWeight="700" id="how-is-your-personal-data-collected">3. HOW IS YOUR PERSONAL DATA COLLECTED?</Text>
           <Text fontSize="22px" fontWeight="600" margin={0}>3.1 PERSONAL DATA WE COLLECT DIRECTLY FROM YOU</Text>
           <Text fontSize="22px" style={{margin:"0 0 0 30px"}} fontWeight="600">We collect personal data directly from you in the following situations:</Text> 
           <Text fontSize="22px" margin={" 0"} fontWeight="600">3.1.1 Direct Interactions</Text>
           <Text fontSize="22px" style={{margin:"0 0 0 30px"}} fontWeight="600" marginLeft={30}>You may give us your personal data by filling in forms or by corresponding with us by post, phone, email or otherwise. This includes personal data you provide:</Text>
           <ul style={{fontSize:"22px",fontWeight:'600',margin:"0 0 25px 30px"}}>
              <li style={{marginBottom:20}}>by registering to use our websites or apps or using our services, products and tools we make available for use;</li>
              <li style={{marginBottom:20}}>by registering for webinars, contacting sales or signing up for our newsletter;</li>
              <li style={{marginBottom:20}}>by using our support chat function on our websites to correspond with us in connection with your use of our products;</li>
              <li style={{marginBottom:20}}>by participating in blogs, discussion boards or other social media functions;</li>
              <li style={{marginBottom:20}}>by entering a competition, promotion or survey;</li>
              <li style={{marginBottom:20}}>when you report a problem;</li>
              <li style={{marginBottom:20}}>if you enter into contributor agreements with us and thereby make voluntary contributions to some of our products; and / or</li>
              <li style={{marginBottom:20}}>if you upload a file to our services, products, demos or tools.</li>
           </ul>
          <Text fontSize="22px" margin={"25px 0"} fontWeight="600">3.2 INFORMATION WE AUTOMATICALLY COLLECT</Text>
          <Text fontSize="22px" margin={"25px 0"} fontWeight="600">3.2.1 IP ADDRESS AND CLICK-STREAM DATA</Text>
          <Text fontSize="22px" margin={"25px 0"} fontWeight="600" marginLeft={30}>With regard to each of your visits to our websites or usage of our apps we may automatically collect the following information:</Text>
          <ul style={{fontSize:"22px",fontWeight:'600',margin:"0 0 25px 30px"}}>
            <li>technical information, including the Internet Protocol (IP) address used to connect your computer to the Internet, your login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform;</li>
            <li>information about your visit, including the full Uniform Resource Locators (URL) clickstream to, through and from our websites (including date and time); products you viewed or searched for; page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), methods used to browse away from the page, and any phone number used to call our customer service number;</li>
            <li>information about how you interact with our apps and websites, through the use of third-party analytics tools which track data regarding crashes, errors, general user interactions with the user interface (UI) and software development kit APIs, and the type of functionality you may be using.</li> 
          </ul> 
          <Text fontSize="22px" margin={"25px 0"} fontWeight="600">The websites may use Hotjar, a third party website analytics tool, in order to better understand our users’ needs and to optimize this service and experience. Hotjar is a technology service that helps us better understand our users’ experience (e.g., how much time they spend on which pages, which links they choose to click, what users do and don’t like, etc.) and this enables us to build and maintain our service with user feedback. 
          Hotjar uses cookies and other technologies to collect data on our users’ behaviour and their devices. This includes a device’s IP address (processed during your session and stored in a de-identified form), device screen size, device type (unique device identifiers), browser information, geographic location (country only), and the preferred language used to display our website. Hotjar stores this information on our behalf in a pseudonymized
          user profile. Hotjar is contractually forbidden to sell any of the data collected on our behalf. For further details, please see the ‘about Hotjar’ section of <span style={{color:"#1DCDFE",textDecoration:'underline'}}>Hotjar’s support site.</span></Text>
          <Text fontSize="22px" margin={"25px 0"} fontWeight="600">The information collected cannot typically be used to identify you personally. However, if you have specifically informed us of your identity (for example by registering for something or providing us with your contact information), it may be possible for us to link certain information to information that identifies you personally.</Text>
          <Text fontSize="22px" margin={"25px 0"} fontWeight="600">3.2.2 DIGITAL MARKERS (INCLUDING COOKIES), ONLINE TRACKING TECHNOLOGIES, ONLINE INTEREST BASED ADVERTISING</Text>
          <Text fontSize="22px" margin={"25px 0"} fontWeight="600">A digital marker is created by a website visitor’s Internet browser to maintain certain pieces of information for the website to reference during the same or subsequent visits. Examples of digital markers are cookies or HTML5 Web storage. Among other things, digital markers can allow a website to recognize a previous visit each time the visitor accesses the website, and track what information is viewed on a website.</Text>
          <Text fontSize="22px" margin={"25px 0"} fontWeight="600">We use sessional and persistent digital markers on some portions of our websites. Digital markers are created when you visit our websites. Sessional markers exist while you remain on our websites, and persistent markers continue to exist after you have left our websites.</Text>
          <Text fontSize="22px" margin={"25px 0 0 0"} fontWeight="600">For information on the digital markers (including cookies) we use and the purposes for which we use them see the applicable Cookie Notice for the Apryse website(s) you may visit.</Text>
          <Text fontSize="22px" margin={"0 0 25px 0"} fontWeight="600">Similarly, we or our third-party service providers/advertisers may also use “web beacons”, “pixel tags” or other tracking technologies, which are typically small pieces of code placed on a web page to monitor behaviour and collect certain data regarding the actions of our visitors online.</Text>
          <Text fontSize="22px" margin={"25px 0"} fontWeight="600">These digital markers and other technologies may be used to track across time, sites, and devices. For example, these technologies can be used to analyze your online traffic patterns, to enhance your experience when using our products, to store information during your session, to personalize our websites for you based on your preferences and selections, to target advertising or content to you (as described further below), and to collect information about you and your usage of our websites
          or apps for other marketing and business purposes. You may adjust your privacy preferences regarding the use of digital markers, including cookies, and similar technologies through your browser. However, disabling cookies may impair your user experience and disable certain features of our websites.</Text>
          <Text fontSize="22px" margin={"25px 0"} fontWeight="600">Data about your activities online may be collected for use in providing advertising tailored to your individual interests, either by us, or third parties. We may work with third parties such as network advertisers and ad exchanges to serve advertisements across the internet and may use third party analytics service providers to evaluate and provide us and/or third parties with information about the use of these ads on third party websites and viewing of ads and of our content.</Text>
          <Text fontSize="22px" margin={"25px 0"} fontWeight="600">We and these third-party vendors, including Google and LinkedIn, may use third-party technologies (such as the LinkedIn Insight Tag) together with our own first party technologies in order to analyze ad impressions, your use of ad services, and interactions with these ad impressions and ad services. The information collected may also include information about your visits to our websites, include the pages you have viewed and what content you have seen. These third-party tracking technologies 
          may be set to, among other things: (a) help deliver advertisements to you that you might be interested in; (b) prevent you from seeing the same advertisements too many times; and (c) understand the effectiveness of the advertisements that have been delivered to you.</Text>
          <Text fontSize="22px" margin={"25px 0"} fontWeight="600">You can opt out of certain advertising by visiting the Network Advertising Initiative opt out page or permanently using the Google Analytics <Link target="_blank" href={"https://tools.google.com/dlpage/gaoptout"} style={{color:'#1DCDFE'}}>opt out browser add on</Link>. If you wish to take steps to opt-out of tracking by certain online advertisers, you can visit the Digital Advertising Alliance’s opt-out page at https://www.aboutads.info/choices or the Network Advertising Initiative at www.networkadvertising. org/optout_nonppii.asp. To learn more about how to opt out of Google’s use of cookies, 
          visit Google’s Ads Settings, <Link target="_blank" href={"https://myadcenter.google.com/home?sasb=true&ref=ad-settings"} style={{color:'#1DCDFE'}}>here</Link>. To learn more about cookies and similar tracking technologies, and how they can affect your privacy, visit allaboutcookies.org. To learn more about how Google uses cookies to process and collect data, or to opt-out of Google’s analytic and marketing services, visit the <Link target="_blank" href={"https://policies.google.com/technologies/partner-sites"} style={{color:'#1DCDFE'}}>Google Privacy Notice</Link>. LinkedIn members can control the use of their personal data for advertising purposes through their LinkedIn account settings.</Text>
          <Text fontSize="22px" margin={"30px 0 25px 0"} fontWeight="600">3.3 INFORMATION WE RECEIVE FROM OTHER SOURCES</Text> 
          <Text fontSize="22px" margin={"25px 0"} fontWeight="600">We may receive personal data about you if you use any of the other websites we operate or the other online projects or services we provide. We are also working closely with third parties (including, for example, business partners, technical and delivery services, advertising networks, analytics providers, search information providers) and may receive personal data about you from them. We may combine this personal data with personal data you give to us and personal data we collect about you to create combined personal data.</Text>
          <Text fontSize="34px" marginTop={60} marginBottom={10} fontWeight="700" id="how-we-use-your-personal-data">4. HOW WE USE YOUR PERSONAL DATA</Text>
          <Text fontSize="22px" margin={"25px 0 0 0"} fontWeight="600">We use your personal data to:</Text>
          <ul style={{fontSize:"22px",fontWeight:'600',margin:"0 0 25px 0"}}>
             <li>provide you with the information, products and services that you request from us;</li>
             <li>carry out any agreements entered into between you and us including invoicing and processing your billing information when you purchase our products;</li>
             <li>respond to enquiries or service requests and monitor such responses;</li>
             <li>schedule meetings with you that you request;</li>
             <li>manage our relationship with you;</li>
             <li>subject to applicable laws, provide information about and market our products or services or products or services of third parties, and inform you of offers or new features that we believe may be of interest to you. If you no longer want to receive marketing-related emails from us, you may opt-out via the unsubscribe link included in such emails. Please note that if you opt-out of receiving marketing-related emails from us, we may still send you important administrative messages that are required to provide you with our services and we nonetheless reserve the right to contact you (including by e-mail or text) where we are legally required or permitted to do so;</li>
             <li>send you important administrative messages that are required to provide you with our services;</li>
             <li>give you access to free trials and to issue trial evaluations;</li>
             <li>notify you about changes to our products;</li>
             <li>resolve problems and fix bugs in our products and/or websites;</li>
             <li>enable certain aspects of our products to function;</li>
             <li>convert PDF images into translatable text;</li>
             <li>manage our accounting process and to process monthly and/or annual payments from you for our products;</li>
             <li>manage our websites and apps and assess usage including distributing a licence for you to use our products;</li>
             <li>enhance or personalize your experience using our products (personal data you provide us through our websites may be linked to analytics data in order to better serve you and improve your in-product experience).</li>
             <li>inform you of offers or new features that we believe may be of interest to you;</li>
             <li>process or maintain your subscription to a newsletter or mailing list;</li>
             <li>facilitate various programs, promotions or contests in which you participate;</li>
             <li>target advertising or content, or for other advertising, promotional or marketing purposes;</li>
             <li>study the use and popularity of various areas of our websites and apps and to improve our products;</li>
             <li>analyze general locations where our content is viewed (by reviewing IP addresses);</li>
             <li>administer our websites and apps and for internal operations, including troubleshooting, data analysis, testing, research, statistical and survey purposes;</li>
             <li>screen for potential risk and fraud when accessing our websites and/or purchasing our products;</li>
             <li>improve our products and services and to ensure that content is presented in the most effective manner for you and for your computer or device;</li>
             <li>allow you to participate in interactive features of our websites and apps, when you choose to do so;</li>
             <li>supplement our efforts to keep our websites and apps safe and secure.</li>
          </ul>
          <Text fontSize="22px" margin={"25px 0"} fontWeight="600">We may also use such information for other purposes related to our business or that of our related entities, as well as for any other purpose described in this notice or any other agreement you may enter with us or otherwise as we may disclose to you or to which you consent from time to time, or for other purposes as required or permitted by applicable law.</Text>
          <Text fontSize="34px" marginTop={60} marginBottom={10} fontWeight="700" id="how-is-processing-your-personal-data-lawful">5. HOW IS PROCESSING YOUR PERSONAL DATA LAWFUL?</Text>
          <Text fontSize="22px" margin={"25px 0 0 0"} fontWeight="600">We are allowed to process your personal data based on the following legal bases:</Text>
          <ul style={{fontSize:"22px",fontWeight:'600',margin:"0px"}}>
            <li>Legitimate Interests – We are permitted to process your personal data if it is based on our ‘legitimate interests’ i.e. we have good, sensible, practical reasons for processing your personal data which is in our interests as set out in the section above. To do so, we have considered the impact on your interests and rights, and have placed appropriate safeguards to ensure that the intrusion on your privacy is reduced as much as possible.</li>
            <li>You can object to processing that we carry out on the grounds of legitimate interests. See the section headed “Your Rights” to find out how.</li>
            <li>Contract – It is necessary for our performance of the contract you have agreed to enter with us. If you do not provide your personal data to us, we will not be able to carry out our obligations under the terms of your contract.</li>
            <li>Legal obligation – We are subject to legal obligations to process your personal data for the purposes of complying with applicable regulatory rules and to make mandatory disclosures to government bodies and law enforcement agencies.</li>
            <li>Consent:</li>
          </ul>
          <ol style={{fontSize:"22px",fontWeight:'600',margin:"0 0 25px 0"}}>
             <li>If you use our websites and products with our UK and European companies: sometimes we want to use your personal data in a way that is entirely optional for you, such as when you give consent for us to place cookies on your device or when you subscribe to our newsletter. On these occasions, we will ask for your consent to use your information. You can withdraw this consent at any time.</li>
             <li>If you use our websites and products with our Canadian companies: by using our products and providing personal data to us, you voluntarily consent to the collection, use, and disclosure of personal data as specified in this notice. Without limiting the foregoing, we may on occasion ask you to consent when we collect, use, or disclose your personal data in specific circumstances, in which case we may ask for your consent in writing (including by electronic means) although in some circumstances we may accept your oral consent. Sometimes your consent will be implied through your conduct with us if the purpose of the collection, use or disclosure is obvious and you voluntarily provide the information.</li>
             <li>For any other jurisdictions where consent may be required, we will obtain your permission in accordance with applicable laws.</li>
          </ol>
          <Text fontSize="34px" marginTop={60} marginBottom={10} fontWeight="700" id="disclosure-of-your-information">6. DISCLOSURE OF YOUR INFORMATION</Text>
          <Text fontSize="22px" margin={"25px 0 0 0"} fontWeight="600">We may share your personal data with any member of our corporate group, which means our subsidiaries, our parent company and its subsidiaries</Text> 
          <Text fontSize="22px" margin={"0"} fontWeight="600">We do not sell or rent personal data to marketers or unaffiliated third parties. We may share your information with selected third parties including:</Text>
          <ul style={{fontSize:"22px",fontWeight:'600',margin:"0 0 25px 0"}}>
              <li>Our other group companies, business partners and suppliers when this is necessary to provide our services to our users or for the performance of any contract we enter into with you;</li>
              <li>advertisers and advertising networks that require the data to select and serve relevant adverts to you and others. Such disclosures are typically aggregate information about our users and analyses of our server logs, traffic, or information relating to customer leads, including details regarding usage of our websites or apps and general information about our audience, and are not generally considered to be personal data;</li>
              <li>analytics and search engine providers that assist us in the improvement and optimisation of our products;</li>
              <li>our service providers who provide certain services on our behalf such as data hosting or processing services. We will use contractual arrangements to protect personal data disclosed to these service providers;</li>
              <li>in the event that we sell or buy any business or assets, in which case we may disclose your personal data to the prospective seller or buyer of such business or assets or (subject to confidentiality restrictions) during the due diligence process, in accordance with applicable law;</li>
              <li>if Apryse or substantially all of its assets (or any group company or its assets) are acquired by a third party, in which case personal data held by it about its customers and users of its products will be one of the transferred assets, in accordance with applicable law;</li>
              <li>if we are under a duty to disclose or share your personal data in order to comply with any legal obligation, or as we believe in good faith may be reasonably necessary to comply with any law, regulation, rule, court order, or other lawful requests from governmental, regulatory or administrative agencies or law enforcement authorities (including in response to law enforcement or national security requirements), or in order to enforce or apply any terms of use applicable to a specific product, and other agreements; or to protect the rights, property, or safety of Apryse, our customers, or others;</li>
              <li>as otherwise may be required or permitted by applicable law.</li>  
          </ul>    
          <Text fontSize="34px" marginTop={60} marginBottom={10} fontWeight="700" id="where-do-we-store-your-personal-data-and-how-do-we-keep-it-secure">7. WHERE DO WE STORE YOUR PERSONAL DATA AND HOW DO WE KEEP IT SECURE?</Text>         
          <Text fontSize="22px" margin={"25px 0 0 0"} fontWeight="600">7.1. WHERE DO WE STORE YOUR PERSONAL DATA?</Text> 
          <Text fontSize="22px" margin={"0 0 25px 0"} fontWeight="600">Apryse is based in Canada, other group companies are based in other jurisdictions, including in the US, New Zealand, Europe and the UK. The information (including any personal data) we collect is transferred, maintained, stored, and processed in Canada, the US, Europe and the UK and other countries outside Canada where our or our service providers’ facilities may be located. Regardless of where you are located, we carry out these transfers in compliance with applicable laws.<br/>
            If you are based in Canada, you understand and agree that we may store and process the information you provide to us in Canada and other countries. The data protection and privacy laws in those countries may offer a lower level of protection than the data protection and privacy laws of your country. Also, this information may be subject to access requests from governments, courts, or law enforcement in Canada and foreign countries according to their laws.<br/>
            If you are located in the UK, European Economic Area or Switzerland, your personal data is transferred outside of the UK, European Economic Area or Switzerland in order for our service providers to provide their services to us. The data protection and privacy laws in those other countries may offer a lower level of protection than the UK and European data protection laws. We ensure that we put mechanisms in place in order to transfer your personal data securely and in accordance with 
            applicable data protection laws. If you want to know more about our international transfers, you can contact us</Text>
          <Text fontSize="22px" margin={"25px 0 0 0"} fontWeight="600">7.2. IS MY PERSONAL DATA SECURE?</Text>
          <Text fontSize="22px" margin={"0"} fontWeight="600">We implement appropriate technical and organizational measures in order to protect your personal data against accidental or unlawful destruction, accidental loss or alteration, unauthorized disclosure or access and any other unlawful forms of processing. We aim to ensure that the level of security and the measures adopted to protect your personal data are appropriate for the risks presented by the nature and use of your personal data. Among the steps we take in order to protect your information are:</Text>
           <ul style={{fontSize:"22px",fontWeight:'600',margin:"0 0 25px 0"}}>
           <li>premises security;</li>
           <li>restricted file access to personal data;</li>
           <li>deploying technological safeguards like security software and firewalls to prevent hacking or unauthorized computer access; and</li>
           <li>internal password and security policies;</li>
           </ul>
           <Text fontSize="22px" margin={"25px 0"} fontWeight="600">Unfortunately, no transmission of information via the internet or storage of information is completely secure. Although we take commercially reasonable steps to protect your personal data, we cannot guarantee the security of your data transmitted to our websites or apps that we store.</Text>
           <Text fontSize="22px" margin={"25px 0 0 0"} fontWeight="600">7.3. RETENTION OF PERSONAL DATA</Text>
           <Text fontSize="22px" margin={"0"} fontWeight="600">Personal data will be retained in accordance with this notice for as long as may be necessary or relevant for the purpose of collection, or as may be required or permitted by applicable law, after which time it may be made anonymous or destroyed unless you further consent to its continued retention.</Text>
           <Text fontSize="22px" margin={"25px 0 0 0"} fontWeight="600">7.4. INTEGRATED SERVICES</Text>
           <Text fontSize="22px" margin={"0 0 25px 0"} fontWeight="600">You may be given the option to access or register for our products through the use of your username and passwords for certain services provided by third parties (each, an “Integrated Service”), such as through the use of your Google account, or otherwise have the option to authorize an Integrated Service to provide personal data or other information to us. By authorizing us to connect with an Integrated Service, you authorize us to access and store your name, email address(es), and basic profile information that the Integrated Service makes available to us, and to use and disclose it in accordance with this notice. You should check your privacy settings on each Integrated Service to understand what information that Integrated Service makes available to us, and make any changes you deem appropriate before you submit any personal data to them. Please review each Integrated Service’s terms of use and privacy policies carefully before using their services and connecting to our apps.</Text>
           <Text fontSize="34px" marginTop={60} marginBottom={10} fontWeight="700" id="third-party-links">8. THIRD PARTY LINKS</Text>
           <Text fontSize="22px" margin={"25px 0"} fontWeight="600">Our websites and apps may, from time to time, contain links to and from third party websites including those of our partner networks and advertisers. If you follow a link to any of those websites, please note that they have their own privacy notices and that we do not accept any responsibility or liability for those notices. Please check these notices before you submit any personal data to those websites.</Text>
           <Text fontSize="34px" marginTop={60} marginBottom={10} fontWeight="700" id="your-rights">9. YOUR RIGHTS</Text>
           <Text fontSize="22px" margin={"25px 0"} fontWeight="600">You may have the following legal rights under the applicable data protection laws in relation to your personal data. You can exercise these rights free of charge, by contacting us (please see “Contact Us”). We will respond to any rights that you exercise within a month of receiving the request unless the request is particularly complex, in which case we will respond within three months.
           We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response.
           Please be aware that there are exceptions that apply to some of these rights, which we will apply in accordance with applicable data protection laws.</Text>
            {/* ----------------------------------------   table come here ------------------------------------- */}
      <TableContainer  component={Paper} sx={{boxShadow:'none',my:8}}>
      <Table sx={{ minWidth: 600,boxSizing:'border-box'}} aria-label="simple table" >
        <TableHead sx={{fontSize:"30px",border:'1px solid #000',height:"100px",backgroundColor:"#F3F3F3"}}> 
          <TableRow>
            <TableCell sx={{fontSize:22,fontFamily:"var(--font-mada)",fontWeight:"700",border:'1px solid #000'}} align="center">Your data protection rights</TableCell>
            <TableCell sx={{fontSize:22,fontFamily:"var(--font-mada)",fontWeight:"700",border:'1px solid #000'}} align="left">What does this mean?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {RightsTableData.map((row,i) => (
            <TableRow key={`${row.ProtectRight}_${i}`} sx={{border:'1px solid #000',height:"130px" }}>
              <TableCell sx={{border:"none",fontSize:22,fontFamily:"var(--font-mada)",fontWeight:"600",minWidth:"180px",width:{xs:"fit-content",md:"250px",lg:"300px",xl:"350px"},p:{xs:3,md:6},display:"flex",alignItems:"flex-start" }} align="left">{row.ProtectRight}</TableCell>
              <TableCell  sx={{border:'1px solid #000',fontSize:22,fontFamily:"var(--font-mada)",fontWeight:"600",p:6,minWidth:"600px"}} align="left">
                <Text margin={0}>{row.means}</Text>
               {row?.items && <ul style={{fontSize:"22px", fontFamily:"var(--font-mada)",fontWeight:'600',margin:0}}>{row?.items?.map((item)=><li key={item}>{item}</li>)}</ul>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>             
            {/* ----------------------------------------   ------------------------------------- */}
           <Text fontSize="22px" margin={"25px 0"} fontWeight="600">In order to exercise these rights, you may contact us as described in the Contact Us section below. We will comply with your request to the extent required by applicable law. If you feel that you have not received a satisfactory response from us, you may consult with the data protection authority in your country. In the UK, you have a right to complain to the Information Commissioner&apos;s Office (ICO). Information about how to do this is available on its website at www.ico.org.uk.</Text>
           <Text fontSize="34px" marginTop={60} marginBottom={10} fontWeight="700" id="changes-to-our-privacy-notice">10. CHANGES TO OUR PRIVACY NOTICE</Text>
           <Text fontSize="22px" margin={"25px 0"} fontWeight="600">Any changes we may make to our notice in the future will be posted on this page. The date this notice was last revised is identified on the top of this page. Please check back frequently to see any updates or changes to our notice.</Text>
           <Text fontSize="34px" marginTop={60} marginBottom={10} fontWeight="700" id="contact-us">11. CONTACT US</Text>
           <Text fontSize="22px" margin={"25px 0"} fontWeight="600">If you have any questions, comments and requests regarding this notice, how we handle your personal data, or if you would like to exercise any of your rights, please email our Privacy team at Privacy@apryse.com or send a letter to: 500-838 West Hastings Street, Vancouver BC V6C 0A6 Canada. If you live in the UK or Europe you can contact our European representative by mail at Osano International Compliance Services Limited, ATTN: IKOL, 25/28 North Wall Quay, Dublin 1, D01 H104, Ireland.</Text>
           <Text fontSize="34px" marginTop={60} marginBottom={10} fontWeight="700" id="additional-disclosures-for-california-residents">12. ADDITIONAL DISCLOSURES FOR CALIFORNIA RESIDENTS</Text>
           <Text fontSize="22px" margin={"25px 0"} fontWeight="600">California residents may have additional rights under the California Consumer Privacy Act (“CCPA”) with respect to certain personal data that is not covered under a federal law. If you are a California resident, this section details your rights under the CCPA, how you may exercise those rights, and what we will do in response.<br/>
           The CCPA requires us to disclose information regarding the categories of personal data we have collected about California consumers (as that term is defined in the CCPA) during the preceding twelve (12) months, the categories of sources from which the personal data was collected, the business or commercial purposes for collecting the personal data and the categories of personal data disclosed to third parties. The sources of identity, contact and financial data are from direct interactions with you, whereas the remainder of the data categories listed below are either automatically collected (including Hotjar) or come from digital markers and online tracking technologies. Please see section 2 and 3 above for further details. In the preceding 12 months, we collected and disclosed the following personal data about California consumers:</Text>
            {/* ----------------------------------------   table come here ------------------------------------- */}
            <TableContainer  component={Paper} sx={{boxShadow:'none',my:8,}}>
      <Table sx={{ minWidth: 600,boxSizing:'border-box'}} aria-label="simple table" >
        <TableHead sx={{fontSize:"30px",border:'1px solid #000',height:"100px",backgroundColor:"#F3F3F3"}}> 
          <TableRow>
            <TableCell sx={{fontSize:22,fontWeight:"700",border:'1px solid #000',fontFamily:"var(--font-mada)"}} align="left">Categories of personal data collected and disclosed to third parties</TableCell>
            <TableCell sx={{fontSize:22,fontWeight:"700",border:'1px solid #000',fontFamily:"var(--font-mada)"}} align="left">Examples of Uses/business purposes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {DisclosureTableData.map((row,i) => (
            <TableRow key={`${row.categories}_${i}`} sx={{border:'1px solid #000',height:"130px" }}>
              <TableCell sx={{border:"none",fontSize:22,fontWeight:"600",fontFamily:"var(--font-mada)",minWidth:"180px",width:{xs:"fit-content",md:"250px",lg:"300px",xl:"350px"},p:{xs:3,md:6},display:"flex",alignItems:"flex-start" }} align="left">{row.categories}</TableCell>
              <TableCell  sx={{border:'1px solid #000',fontSize:22,fontFamily:"var(--font-mada)",fontWeight:"00",p:6,minWidth:"600px"}} align="left">{row.purpose}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            {/* ----------------------------------------  ------------------------------------- */}
            <Text fontSize="22px" margin={"25px 0"} fontWeight="600">Apryse does not sell any personal data and does not have actual knowledge that it sells the personal data of users under 16 years of age.Apryse does not sell any personal data and does not have actual knowledge that it sells the personal data of users under 16 years of age.</Text>
            <Text fontSize="22px" margin={"25px 0 0 0"} fontWeight="600">In addition, we may share personal data of California consumers:</Text>
            <ul style={{fontSize:"22px",fontWeight:'600',margin:"0 0 25px 0"}}>
              <li>in the event that we sell or buy any business or assets, in which case we may disclose your personal data to the prospective seller or buyer of such business or assets or (subject to confidentiality restrictions) during the due diligence process, in accordance with applicable law;</li>
              <li>if Apryse or substantially all of its assets (or any group company or its assets) are acquired by a third party, in which case personal data held by it about its customers and users of its products will be one of the transferred assets, in accordance with applicable law;</li>
              <li>if we are under a duty to disclose or share your personal data in order to comply with any legal obligation, or as we believe in good faith may be reasonably necessary to comply with any law, regulation, rule, court order, or other lawful requests from governmental, regulatory or administrative agencies or law enforcement authorities (including in response to law enforcement or national security requirements), or in order to enforce or apply any terms of use applicable to a specific product, and other agreements; or to protect the rights, property, or safety of Apryse, our customers, or others;</li>
              <li>as otherwise may be required or permitted by applicable law.</li>
            </ul>
            <Text fontSize="22px" margin={"25px 0 0 0"} fontWeight="600">California residents have the right to access and request:</Text>
             <ul style={{fontSize:"22px",fontWeight:'600',margin:"0 0 25px 0"}}>
               <li>The categories of personal data that we collect.</li>
               <li>The categories of personal data we collected or sold in the previous 12 months.</li>
               <li>The categories of data disclosed for a business purpose in the previous twelve months.</li>
               <li>The specific pieces of personal data we collected about you.</li>
             </ul>
            <Text fontSize="22px" margin={"25px 0 0 0"} fontWeight="600">California residents have the right to request the deletion of their personal data. However, this right does not apply to personal data that we need in order to:</Text>
            <ul style={{fontSize:"22px",fontWeight:'600',margin:"0 0 25px 0"}}>
              <li>Complete the transaction for which the personal data was collected</li>
              <li>Detect or resolve security issues, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for the activity;</li>
              <li>Address any functionality-related issues</li>
              <li>Comply with any applicable federal or state law</li>
              <li>Conduct research in the public interest</li>
              <li>Ensure the right to free speech</li>
            </ul>
            <Text fontSize="22px" margin={"25px 0"} fontWeight="600">California residents have the right to not be discriminated against (as provided for in applicable law) for exercising certain of your rights hereunder.</Text>
            <Text fontSize="22px" margin={"25px 0"} fontWeight="600">To exercise any of your rights as a consumer please submit a verifiable consumer request to us. You may submit a verifiable consumer request by emailing us at <Link style={{textDecoration:'underline'}} target="_blank"  href="mailto:privacy@apryse.com" type="">privacy@apryse.com</Link> or contact us via our website at <Link style={{textDecoration:'underline'}} target="_blank" href={"https://apryse.com/form/contact-us"}>https://www.apryse.com/form/contact-us/</Link>. A California consumer may only make a verifiable request to exercise their rights twice within a 12-month period. The verifiable request must: (1) provide sufficient information for us to verify your identity, and (2) be in sufficient detail that we can reasonably understand the request, evaluate it, and respond. You may have an authorized agent submit a request to know, or a request to delete so long as you provide the authorized agent with written permission to submit the relevant request and you verify your own identify directly with us. Such restrictions do not apply where you provide your authorized agent with power of attorney pursuant to California Probate Code sections 4121 to 4130. If we are unable to verify your request then we will be unable to provide you with the information you seek or delete any personal data we retain.</Text>
            <Text fontSize="34px" marginTop={60} marginBottom={10} fontWeight="700" id="accessibility">13. ACCESSIBILITY</Text>
            <Text fontSize="22px" margin={"25px 0"} fontWeight="600">This Privacy Notice uses industry-standard technologies and was developed in connection with the World Wide Web Consortium’s Web Content Accessibility Guidelines, version 2.1. If you wish to print this privacy notice, please do so from your web browser or by saving the page as a PDF.</Text>
           </ContentBox>   
            <MoreQuestion mt={10} mb={10}/>
          <Footer/>
        </main>
    )
}

export default PrivacyPolicy




