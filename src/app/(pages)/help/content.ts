import Assests from "@/app/assests/images";
import Route from "@/app/utils/routes";

export interface TrustedSignatureProps{
 title:string;
 text:string;
 icon:any;
 to?: string; 
}
export interface ProArticleProps{
 title:string;
 text:string;
}
const TrustedSignature = [
    {
        icon:Assests.EzBooks,
        title:"I want to know more about Ezsignature and e-signatures",
        text:"If you are a beginner with this topic, you get all the necessary info here",
        to:Route.API_DOCUMENTATION
    },
    {
        icon:Assests.EzSignature,
        title:"I want to sign a Document",
        text:"You received a Document that you need to sign? This article will help you get started",
        to:Route.API_DOCUMENTATION

    },
    {
        icon:Assests.EzBooks,
        title:"I want to send a document / create a template",
        text:"Have any questions? Find the answers to all of them",
        to:Route.API_DOCUMENTATION

    },
    {
        icon:Assests.EzSignature,
        title:"I want to manage my account / business",
        text:"One-stop shop for Admins on how to manage your account settings",
        to:Route.API_DOCUMENTATION

    },
]

const ProArticle = [
    {title:"What is Ezsignature?",text:"Ezsignature is a cloud-based digital signature solution tha..."},
    {title:"How Do I Provide Feedback to Ezsignature?",text:"This is a question we often heard during conversations with our clients in cu..."},
    {title:"How to contact our Support team?",text:"Ezsignature is a cloud-based digital signature solution tha..."},
    {title:"Device Verification - Preventing unauthorized access to your Ezsignature",text:"Troubleshooting Tips Having trouble accessing or entering your verificatio..."},
    {title:"Verify the authenticity of signed documents",text:"You can verify that signed documents created using our platform were not alte..."},
    {title:"Signer Authentication via SMS",text:"Signer Authentication via SMS is an option you can set for each signer of a ..."},
    {title:"Bulk Sending",text:"Feature Availability The Bulk Sending feature is available for all customers..."},
    {title:"Templates and Template Links",text:"There are two template types you can choose from Template and Template Link: ..."},
]

const KnowledgeBase = [
{title:"General",text:"About the Ezsignature product and important announcements"},
{title:"Getting Started",text:"Everything you need to know to start using Ezsignature"},
{title:"User Handbook",text:"An in-depth manual to help you use Ezsignature and understand its features and workflows."},
{title:"Account & Billing",text:"Account & Billing All you need to know about managing your account including Billing and Subscription questions"},
{title:"Troubleshooting & Tips",text:"Guidelines in case something goes wrong"},
{title:"Developer & API Documentation",text:"Learn all about the specification, access and use of the currently available Xodo Sign API functions and parameters."},
]
export  {
  TrustedSignature,
  ProArticle,
  KnowledgeBase
}