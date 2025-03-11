
export interface APICardProps {
  title: string;
  text: string;
  price: string;
  duration: string;
  buttonText: string;
  provideFeature: string[];
  popular: boolean;
}

const APIPricingCardContent = [
  {
    title: "API Sandbox",
    text: "Try API Sandbox for free",
    price: "Free",
    duration: "",
    buttonText: "Try Free",
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
    buttonText: "Contact Us",
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

export { APIPricingCardContent, FAQsData };
