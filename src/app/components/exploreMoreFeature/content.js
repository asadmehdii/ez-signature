import Assests from "@/app/assests/images";
import Route from "@/app/utils/routes";

const EzFeature = [
    { icon: Assests.legalValidity,navigate:Route.FEATURE_PAGES, featureName: "Legal Validity & Compliance",  },
    { icon: Assests.ElectronicSign, navigate:Route.FEATURE_PAGES,featureName: "Electronic Signatures" },
    { icon: Assests.DocSecurity,navigate:Route.FEATURE_PAGES, featureName: "Documents & Security"},
    { icon: Assests.DocEditor,navigate:Route.FEATURE_PAGES, featureName: "Document Editor" },
    { icon: Assests.inPersonSign,navigate:Route.FEATURE_PAGES, featureName: "In-Person Signing"},
    { icon: Assests.AuditTrail, navigate:Route.FEATURE_PAGES,featureName: "Audit Trail" },
    { icon: Assests.Templates,navigate:Route.FEATURE_PAGES, featureName: "Templates" },
    { icon: Assests.MultiBussiness, navigate:Route.FEATURE_PAGES,featureName: "Multiple Businesses" },
    { icon: Assests.TeamManage, navigate:Route.FEATURE_PAGES,featureName: "Team Management" },
    { icon: Assests.ContactManage,navigate:Route.FEATURE_PAGES, featureName: "Contact Management" },
    { icon: Assests.AppIntegration, navigate:Route.FEATURE_PAGES,featureName: "App Integrations" },
    { icon: Assests.esignatureAPI, navigate:Route.FEATURE_PAGES,featureName: "eSignature API" },
];

export { EzFeature };
