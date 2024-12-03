import Route from "@/app/utils/routes";
const General = [
    { text: "Home", navigate: Route.HOME },
    { text: "Feature", navigate: Route.FEATURE },
    { text: "Pricing Plans", navigate: Route.PRICING },
    { text: "Blogs", navigate: Route.BLOGS },
  ];
  
  const MainFeature = [
    { text: "Electronic Signatures", navigate:"#" },
    { text: "Documents & Security", navigate: "#" },
    { text: "In-Person Signing", navigate: Route.FEATURE_PAGES, featureName:"In-Person Signing"},
    { text: "Audit Trail", navigate: Route.FEATURE_PAGES, featureName:"Audit Trail" },
    { text: "Templates", navigate: "#" },
    { text: "App Integrations", navigate: "#" },
  ];
  
  const Developer = [
    { text: "Developer Portal", navigate: "#" },
    { text: "Create Free SandBox", navigate: "#" },
    { text: "API Pricing", navigate: "#" },
    { text: "API Documentation", navigate: "#" },
  ];
  
  const PressLegal = [
    { text: "Contact Us", navigate: Route.CONATCT_US },
    { text: "Terms & Conditions", navigate: Route.TERM_CONDITION  },
    { text: "Privacy Policy", navigate: Route.PRIVACY_POLICY  },
    { text: "Cookie Policy", navigate: Route.COOKIE_POLICY },
  ];
  

  export {General,MainFeature,Developer,PressLegal }