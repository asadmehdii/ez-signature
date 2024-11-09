import Assests from "@/app/assests/images";

export interface EzFeatureProps {
  icon: any;
  feature: string;
}
export interface PlanCardDataProps {
  planName: string;
  amount: string;
  duration: string | null;
  features: string[];
  popular:boolean,
}
const EzFeature = [
  { icon: Assests.legalValidity, feature: "Legal Validity & Compliance" },
  { icon: Assests.ElectronicSign, feature: "Electronic Signatures" },
  { icon: Assests.DocSecurity, feature: "Documents & Security" },
  { icon: Assests.DocEditor, feature: "Document Editor" },
  { icon: Assests.inPersonSign, feature: "In-Person Signing" },
  { icon: Assests.AuditTrail, feature: "Audit Trail" },
  { icon: Assests.Templates, feature: "Templates" },
  { icon: Assests.MultiBussiness, feature: "Multiple Businesses" },
  { icon: Assests.TeamManage, feature: "Team Management" },
  { icon: Assests.ContactManage, feature: "Contact Management" },
  { icon: Assests.AppIntegration, feature: "App Integrations" },
  { icon: Assests.esignatureAPI, feature: "eSignature API" },
];

const PlanCardData = [
  {
    planName: "Basic",
    amount: "12.99",
    duration: "per month",
    popular:false,
    features: [
      "Unlimited Documents",
      "3 Templates",
      "3 Templates",
      "LTV Enabled",
      "10 Signer Authentication Credits",
      "App Integrations",
      "Bulk Document Sending",
      "Basic Support",
    ],
  },
  {
    planName: "Professional",
    amount: "49.99",
    popular:false,
    duration: "per month",
    features: [
      "Unlimited Documents",
      "3 Templates",
      "3 Templates",
      "LTV Enabled",
      "20 Signer Authentication Credits",
      "App Integrations",
      "Bulk Document Sending",
      "Premium Support",
      "5 Users",
      "In-person signing",
    ],
  },
  {
    planName: "Pro Plus",
    amount: "119.99",
    duration: "per month",
    popular:false,
    features: [
      "Unlimited Documents",
      "3 Templates",
      "3 Templates",
      "LTV Enabled",
      "40 Signer Authentication Credits",
      "App Integrations",
      "Bulk Document Sending",
      "Premium Support",
      "15 Users",
      "In-person signing",
      "Custom Branding",
    ],
  },
  {
    planName: "Enterprice",
    amount: "Custom",
    popular:true,
    duration: null,
    features: [
      "Unlimited Documents",
      "Volume Templates",
      "3 Templates",
      "LTV Enabled",
      "Volume Signer Authentication Credits",
      "App Integrations",
      "Bulk Document Sending",
      "Basic Support",
      "Custom Team",
      "In-person signing",
      "Custom Branding",
      "Custom Solutions",
    ],
  },
];
export { EzFeature, PlanCardData };
