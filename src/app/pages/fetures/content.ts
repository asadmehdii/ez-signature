import Assests from "@/app/assests/images";

export interface SignCardContentProps {
    icon: any;
    heading: string;
    text: string;
    buttonText: string;
}


const SignCardContent = [
    {   icon:Assests.legalValidity,
        heading:"Legal Validity & Compliance",
        text:"eSignatures made by EzSignature meet all the strict security and authentication requirements defined in the United States and Europe.",
        buttonText:"Learn More",
    },
    {   icon:Assests.ElectronicSign,
        heading:"Electronic Signatures",
        text:"Whether you're looking to draw your signature, type it, upload an existing one, or have our system generate a beautiful looking signature for you — after your first digital signature you will never want to go back.",
        buttonText:"Learn More"
    },
    {   icon:Assests.DocSecurity,
        heading:"Documents & Security",
        text:"Securely store your documents after completion in your EzSignature account, schedule them to auto-expire, export them to a private location or permanently remove them from EzSignature systems.",
        buttonText:"Learn More"
    },
    {   icon:Assests.DocEditor,
        heading:"Document Editor",
        text:"Upload an existing PDF document and prepare it for signature using Ezsignature fully-fledged and straightforward document editor.",
        buttonText:"Learn More"
    },
    {   icon:Assests.inPersonSign,
        heading:"In-Person Signing",
        text:"Enable customers, employees, partners or contractors to sign documents (e.g. Non-Disclosure Agreements or waivers) directly on your PC, tablet of mobile device.",
        buttonText:"Learn More"
    },
    {   icon:Assests.AuditTrail,
        heading:"Audit Trail",
        text:"Keep track of every past and present transaction storing a complete and detailed audit trail. Your audit trail will be secure and comprehensible, containing names, email & IP addresses and time stamps.",
        buttonText:"Learn More"
    },
    {   icon:Assests.Templates,
        heading:"Templates",
        text:"Set up template documents for the contracts or forms you use most frequently and pre-fill them with custom text, dropdown menus, checkboxes and other elements — perfect for registration forms.",
        buttonText:"Learn More"
    },
    {   icon:Assests.MultiBussiness,
        heading:"Multiple Businesses",
        text:"Executing contracts on behalf of more than one business? You're in the right place — using Ezsignature you will be able manage multiple businesses, each with their own team members, contacts and documents.",
        buttonText:"Learn More"
    },
    {   icon:Assests.TeamManage,
        heading:"Team Management",
        text:"Businesses have teams. Teams have members, and depending on your subscription level you'll be able to add up to 25 team members to any one of the businesses set up in your Ezsignature account.",
        buttonText:"Learn More"
    },
    {   icon:Assests.ContactManage,
        heading:"Contact Management",
        text:"Fill out and keep contact profiles for frequent signees in order to add them to a signing process using just a few clicks — ideal for approvals or contracts which have to be renewed on a regular basis.",
        buttonText:"Learn More"
    },
    {   icon:Assests.AppIntegration,
        heading:"App Integrations",
        text:"Include Ezsignature in your day-to-day workflow by seamlessly connecting to popular online applications like Google Docs, Zoho, Dropbox, Salesforce and many more.",
        buttonText:"Learn More"
    },
    {   icon:Assests.esignatureAPI,
        heading:"eSignature API",
        text:"Automate your electronic signature workflows using the Ezsignature secure and reliable JSON-based eSignature REST API.",
        buttonText:"Learn More"
    }
]


export {
    SignCardContent,
}