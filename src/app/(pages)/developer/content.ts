import Assests from "@/app/assests/images";
export interface EzAPIProps {
  icon: any;
  title: string;
  text: string;
}
export interface APICardProps {
  title: string;
  text: string;
  price: string;
  duration: string;
  buttonText: string;
  provideFeature: string[];
  popular: boolean;
}
const EzAPI = [
  {
    icon: Assests.SimpleSecure,
    title: "SIMPLE & SECURE",
    text: "Request eSignatures via GET or POST methods, receive them in a straightforward and portable JSON format, and ensure security with industry-standard HTTPS encryption.",
  },
  {
    icon: Assests.Scalable,
    title: "HIGHLY SCALABLE",
    text: "The EzSignature API can process thousands of electronic signature requests per second, seamlessly adapting to your business requirements and workflows.",
  },
  {
    icon: Assests.DevSupport,
    title: "DEVELOPER SUPPORT",
    text: "Our experienced team of developers stands ready to assist you with integration and answer any questions you may have, whenever you need assistance.",
  },
  {
    icon: Assests.TransparentPricing,
    title: "TRANSPARENT PRICING",
    text: "Test our EzSignature API for free. When you're ready, choose a subscription plan that best fits your business needs — with no hidden fees or costs.",
  },
];

const ElectronicSign = [
  {
    icon: Assests.EmbedSigning,
    title: "Embedded Signing",
    text: "Empower users to sign documents directly within your application or website, ensuring a seamless experience for both signers and senders. ",
  },
  {
    icon: Assests.EmbedRequesting,
    title: "Embedded Requesting",
    text: "Streamline document turnaround times with integrated signature requests, allowing users to request signatures within your platform.",
  },
  {
    icon: Assests.AutomatWorkflow,
    title: "Automated Workflows",
    text: "Seamlessly integrate with CRMs and file storage solutions to automate repetitive document signing tasks, freeing up valuable time.",
  },
  {
    icon: Assests.NoCode,
    title: "No Code Options",
    text: "Connect Ezsignature API to various apps and services using platforms like Zapier and Relay.app, eliminating the need for custom development.",
  },
];

const APIPricingCardContent = [
  {
    title: "API Sandbox",
    text: "Try API Sandbox for free",
    price: "Free",
    duration: "",
    buttonText: "Sign up",
    popular: false,
    provideFeature: [
      "2 production envelopes",
      "0 Templates",
      "Sandbox envelopes",
    ],
  },
  {
    title: "API Light",
    text: "The most common API integration for up to 50 monthly e-Signature requests",
    price: "$59.99",
    duration: "per month",
    buttonText: "Sign Up",
    
    popular: true,
    provideFeature: [
      "50 API Documents",
      "Volume Templates",
      "10 Templates",
      "LTV Enabled",
      "20 Signer Authentication Credits",
      "5 Users",
      "Advanced Integrations",
      "Bulk Document Sending",
      "In-person signing",
    ],
  },
  {
    title: "API Business",
    text: "Sign up for a custom API subscription plan tailor-made for your business.",
    price: "Custom Pricing",
    duration: "",
    buttonText: "Sign Up",
    popular: false,
    provideFeature: [
      "50 API Documents",
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
];

const FAQsData = [
  {
    question: "What is an eSignature API?",
    answer:
      "An eSignature API allows developers to seamlessly integrate trusted electronic signature workflows directly into websites or applications. This capability enables users to receive, sign, and send documents online, simplifying the management and tracking of document signatures.",
  },
  {
    question: "How can I test EzSignature eSignature API for free?",
    answer:
      "The EzSignature eSignature API offers a free sandbox environment for developers to integrate their applications. This developer sandbox allows you to thoroughly test the capabilities of our robust eSignature API before making any decisions.",
  },
  {
    question: "What is an eSignature API sandbox environment?",
    answer:
      "A sandbox enables developers to test the eSignature API for free without any charges. This is important during both the development phase and after launching into production.",
  },
  {
    question:
      "Does the EzSignature eSignature API offer customizable branding?",
    answer:
      "Yes, the business EzSignature API subscription plan includes custom branding with various options for customization, such as company colors, logos, and icons.",
  },
  {
    question: "How much does the EzSignature electronic signature API cost?",
    answer:
      "Our API subscription plans start at $59.99 per month (if paid annually), allowing for 50 monthly API requests. The overage price per API document is $1.50. For more information, please visit our pricing page and contact our sales team here.",
  },
  {
    question: "How to implement EzSignature eSignature API? ",
    answer:
      "The EzSignature API is a lightweight RESTful JSON API accessible through any server-side programming language. To authenticate with the API, simply append the access_key GET parameter to the API's base URL.",
  },
];

export { EzAPI, ElectronicSign, APIPricingCardContent, FAQsData };
