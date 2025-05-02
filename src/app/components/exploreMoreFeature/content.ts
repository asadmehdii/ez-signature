import Assests from "@/app/assests/images";
import Route from "@/app/utils/routes";

export interface EzFeatureProps {
    icon: any;
    feature: string;
  }
  
const EzFeature = [
  // { text: "Legal Validity & Compliance", navigate: Route.FEATURE_PAGES, featureName: "Legal Validity & Compliance", icon: Assests.legalValidity },
  { text: "Electronic Signatures", navigate: Route.ELECTRONIC_SIGNATURES, featureName: "Electronic Signatures", icon: Assests.ElectronicSign },
  { text: "Documents & Security", navigate: Route.SECURITY, featureName: "Document Management & Security", icon: Assests.DocSecurity },
  { text: "Document Editor", navigate: Route.DOCUMENT_EDITOR, featureName: "Document Editor", icon: Assests.DocEditor },
  { text: "In-Person Signing", navigate: Route.IN_PERSON, featureName: "In-Person Signing", icon: Assests.inPersonSign },
  { text: "Audit Trail", navigate: Route.AUDIT_TRAIL, featureName: "Audit Trail", icon: Assests.AuditTrail },
  { text: "Templates", navigate: Route.TEMPLATES, featureName: "Templates", icon: Assests.Templates },
  // { text: "Multiple Businesses", navigate: Route.FEATURE_PAGES, featureName: "Multiple Businesses", icon: Assests.MultiBussiness },
  // { text: "Team Management", navigate: Route.FEATURE_PAGES, featureName: "Team Management", icon: Assests.TeamManage },
  // { text: "Contact Management", navigate: Route.FEATURE_PAGES, featureName: "Contact Management", icon: Assests.ContactManage },
  { text: "App Integrations", navigate: Route.APP_INTEGRATION, featureName: "Integration", icon: Assests.AppIntegration },
  { text: "eSignature API", navigate: Route.DEVELOPER, featureName: "eSignature API", icon: Assests.esignatureAPI },
  ];
  

  export {EzFeature}