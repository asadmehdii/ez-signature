import CardImage_1 from "../../assests/images/feature/cardImage_1.png"
import CardImage_2 from "../../assests/images/feature/cardImage_2.png"
import CardImage_3 from "../../assests/images/feature/cardImage_3.png"
import CardImage_4 from "../../assests/images/feature/cardImage_4.png"
import CardImage_5 from "../../assests/images/feature/cardImage_5.png"
import CardImage_6 from "../../assests/images/feature/cardImage_6.png"
import CardImage_7 from "../../assests/images/feature/cardImage_7.png"
import CardImage_8 from "../../assests/images/feature/cardImage_8.png"
import CardImage_9 from "../../assests/images/feature/cardImage_9.png"
import CardImage_10 from "../../assests/images/feature/cardImage_10.png"
import CardImage_11 from "../../assests/images/feature/cardImage_11.png"
import CardImage_12 from "../../assests/images/feature/cardImage_12.png"


export interface SignCardContentProps {
    icon: any;
    heading: string;
    text: string;
    buttonText: string;
}

export interface faqsQuestionProps{
    question:string;
    answer:string
}
const SignCardContent = [
    {   icon:CardImage_1,
        heading:"Legal Validity & Compliance",
        text:"eSignatures made by EzSignature meet all the strict security and authentication requirements defined in the United States and Europe.",
        buttonText:"Learn More",
    },
    {   icon:CardImage_2,
        heading:"Electronic Signatures",
        text:"Whether you're looking to draw your signature, type it, upload an existing one, or have our system generate a beautiful looking signature for you — after your first digital signature you will never want to go back.",
        buttonText:"Learn More"
    },
    {   icon:CardImage_3,
        heading:"Documents & Security",
        text:"Securely store your documents after completion in your EzSignature account, schedule them to auto-expire, export them to a private location or permanently remove them from EzSignature systems.",
        buttonText:"Learn More"
    },
    {   icon:CardImage_4,
        heading:"Document Editor",
        text:"Upload an existing PDF document and prepare it for signature using Ezsignature fully-fledged and straightforward document editor.",
        buttonText:"Learn More"
    },
    {   icon:CardImage_5,
        heading:"In-Person Signing",
        text:"Enable customers, employees, partners or contractors to sign documents (e.g. Non-Disclosure Agreements or waivers) directly on your PC, tablet of mobile device.",
        buttonText:"Learn More"
    },
    {   icon:CardImage_6,
        heading:"Audit Trail",
        text:"Keep track of every past and present transaction storing a complete and detailed audit trail. Your audit trail will be secure and comprehensible, containing names, email & IP addresses and time stamps.",
        buttonText:"Learn More"
    },
    {   icon:CardImage_7,
        heading:"Templates",
        text:"Set up template documents for the contracts or forms you use most frequently and pre-fill them with custom text, dropdown menus, checkboxes and other elements — perfect for registration forms.",
        buttonText:"Learn More"
    },
    {   icon:CardImage_8,
        heading:"Multiple Businesses",
        text:"Executing contracts on behalf of more than one business? You're in the right place — using Ezsignature you will be able manage multiple businesses, each with their own team members, contacts and documents.",
        buttonText:"Learn More"
    },
    {   icon:CardImage_9,
        heading:"Team Management",
        text:"Businesses have teams. Teams have members, and depending on your subscription level you'll be able to add up to 25 team members to any one of the businesses set up in your Ezsignature account.",
        buttonText:"Learn More"
    },
    {   icon:CardImage_10,
        heading:"Contact Management",
        text:"Fill out and keep contact profiles for frequent signees in order to add them to a signing process using just a few clicks — ideal for approvals or contracts which have to be renewed on a regular basis.",
        buttonText:"Learn More"
    },
    {   icon:CardImage_11,
        heading:"App Integrations",
        text:"Include Ezsignature in your day-to-day workflow by seamlessly connecting to popular online applications like Google Docs, Zoho, Dropbox, Salesforce and many more.",
        buttonText:"Learn More"
    },
    {   icon:CardImage_12,
        heading:"eSignature API",
        text:"Automate your electronic signature workflows using the Ezsignature secure and reliable JSON-based eSignature REST API.",
        buttonText:"Learn More"
    }
]
const faqsQuestion = [
    {
        question:"Is EzSignature really free?",
        answer:"Absolutely — since EzSignature is a web-based application you'll be able to keep track of your documents using any device with an internet connection — whether you're at home, in the office or on the go."
    },
    {
        question:"Can I upgrade, downgrade and cancel anytime?",
        answer:"Yes, just like throughout the signup process you will be able to upgrade and downgrade your subscription level as well as change your payment frequency at any time and how many times you like."
    },
    {
        question:"Do I need a credit card?",
        answer:"Nope — to use EzSignature for free a credit card won't be required. If you ever decide to upgrade your account to a more powerful subscription plan, you can add your billing details easily through your account dashboard."
    },
    {
        question:"Are my documents safe?",
        answer:"Keeping your data secure is one of our top priorities — that's why we monitor our server & storage systems 24/7 and process only 256-bit HTTPS encrypted data. Our industry-leading and tamper-evident setup allows us to securely sync your data with the cloud."
    },
    {
        question:"Does EzSignature work on my Mac, PC and mobile device?",
        answer:"Absolutely — since EzSignature is a web-based application you'll be able to keep track of your documents using any device with an internet connection — whether you're at home, in the office or on the go."
    },
    {
        question:"Who's there when I need help?",
        answer:"We are — if you ever have any questions or concerns, need technical support or help getting started with EzSignature, just visit the Help-Center. Our support team will be of assistance to answer your message."
    },
]

export {
    SignCardContent,
    faqsQuestion
}