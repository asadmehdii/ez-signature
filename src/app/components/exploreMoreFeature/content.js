import Assests from "@/app/assests/images";
import Route from "@/app/utils/routes";

const EzFeature = [
    // { icon: Assests.legalValidity,navigate:Route.FEATURE_PAGES, featureName: "Legal Validity & Compliance",  },
    { icon: Assests.ElectronicSign, navigate:Route.ELECTRONIC_SIGNATURES,featureName: "Electronic Signatures" },
    { icon: Assests.DocSecurity,navigate:Route.SECURITY, featureName: "Documents & Security"},
    { icon: Assests.DocEditor,navigate:Route.DOCUMENT_EDITOR, featureName: "Document Editor" },
    { icon: Assests.inPersonSign,navigate:Route.IN_PERSON, featureName: "In-Person Signing"},
    { icon: Assests.AuditTrail, navigate:Route.AUDIT_TRAIL,featureName: "Audit Trail" },
    { icon: Assests.Templates,navigate:Route.TEMPLATES, featureName: "Templates" },
    // { icon: Assests.MultiBussiness, navigate:Route.FEATURE_PAGES,featureName: "Multiple Businesses" },
    // { icon: Assests.TeamManage, navigate:Route.FEATURE_PAGES,featureName: "Team Management" },
    // { icon: Assests.ContactManage,navigate:Route.FEATURE_PAGES, featureName: "Contact Management" },
    { icon: Assests.AppIntegration, navigate:Route.APP_INTEGRATION,featureName: "App Integrations" },
    { icon: Assests.esignatureAPI, navigate:Route.DEVELOPER,featureName: "eSignature API" },
];

export { EzFeature };
