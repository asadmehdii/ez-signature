import Assests from "@/app/assests/images";
export interface EzFeatureProps {
    icon: any;
    feature: string;
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
  

  export {EzFeature}