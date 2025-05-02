import Route from "@/app/utils/routes";
const General = [
    { text: "Home", navigate: Route.HOME },
    { text: "Feature", navigate: Route.FEATURE },
    { text: "Pricing Plans", navigate: Route.PRICING },
    { text: "Blogs", navigate: Route.BLOGS },
];
const MainFeature = [
    { text: "Electronic Signatures", navigate: Route.ELECTRONIC_SIGNATURES },
    { text: "Documents & Security", navigate: Route.SECURITY },
    { text: "In-Person Signing", navigate: Route.IN_PERSON },
    { text: "Audit Trail", navigate: Route.AUDIT_TRAIL },
    { text: "Templates", navigate: Route.TEMPLATES},
    { text: "App Integrations", navigate: Route.APP_INTEGRATION },
];
const Developer = [
    { text: "Developer Portal", navigate: "#" },
    { text: "Create Free SandBox", navigate: Route.SANDBOX_SIGNUP },
    { text: "API Pricing", navigate: "#" },
    { text: "API Documentation", navigate: Route.API_DOCUMENTATION },
];
const PressLegal = [
    { text: "Contact Us", navigate: Route.CONATCT_US },
    { text: "Terms & Conditions", navigate: Route.TERM_CONDITION },
    { text: "Privacy Policy", navigate: Route.PRIVACY_POLICY },
    { text: "Cookie Policy", navigate: Route.COOKIE_POLICY },
];
export { General, MainFeature, Developer, PressLegal };
