import Assests from "@/app/assests/images";
import Route from "@/app/utils/routes";

export interface EzFeatureProps {
    icon: any;
    feature: string;
  }
  
const EzFeature = [
  { text: "Legal Validity & Compliance", navigate: Route.FEATURE_PAGES, featureName: "Legal Validity & Compliance", icon: Assests.legalValidity },
  { text: "Electronic Signatures", navigate: Route.FEATURE_PAGES, featureName: "Electronic Signatures", icon: Assests.ElectronicSign },
  { text: "Documents & Security", navigate: Route.FEATURE_PAGES, featureName: "Document Management & Security", icon: Assests.DocSecurity },
  { text: "Document Editor", navigate: Route.FEATURE_PAGES, featureName: "Document Editor", icon: Assests.DocEditor },
  { text: "In-Person Signing", navigate: Route.FEATURE_PAGES, featureName: "In-Person Signing", icon: Assests.inPersonSign },
  { text: "Audit Trail", navigate: Route.FEATURE_PAGES, featureName: "Audit Trail", icon: Assests.AuditTrail },
  { text: "Templates", navigate: Route.FEATURE_PAGES, featureName: "Templates", icon: Assests.Templates },
  // { text: "Multiple Businesses", navigate: Route.FEATURE_PAGES, featureName: "Multiple Businesses", icon: Assests.MultiBussiness },
  // { text: "Team Management", navigate: Route.FEATURE_PAGES, featureName: "Team Management", icon: Assests.TeamManage },
  // { text: "Contact Management", navigate: Route.FEATURE_PAGES, featureName: "Contact Management", icon: Assests.ContactManage },
  { text: "App Integrations", navigate: Route.FEATURE_PAGES, featureName: "Integration", icon: Assests.AppIntegration },
  { text: "eSignature API", navigate: Route.FEATURE_PAGES, featureName: "eSignature API", icon: Assests.esignatureAPI },
  ];
  

  export {EzFeature}