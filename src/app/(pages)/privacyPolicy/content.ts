const SectionAccess = [
  {
    text: "OVERVIEW AND SCOPE",
    url: "#overview-and-scope",
  },
  {
    text: "INFORMATION WE COLLECT FROM YOU",
    url: "#information-we-collect-from-you",
  },
  {
    text: "HOW IS YOUR PERSONAL DATA COLLECTED?",
    url: "#how-is-your-personal-data-collected",
  },
  {
    text: "HOW WE USE YOUR PERSONAL DATA",
    url: "#how-we-use-your-personal-data",
  },
  {
    text: "PROCESSING",
    url: "#how-is-processing-your-personal-data-lawful",
  },
  {
    text: "DISCLOSURE OF YOUR INFORMATION",
    url: "#disclosure-of-your-information",
  },
  {
    text: "WHERE DO WE STORE YOUR PERSONAL DATA AND HOW DO WE KEEP IT SECURE?",
    url: "#where-do-we-store-your-personal-data-and-how-do-we-keep-it-secure",
  },
  {
    text: "THIRD PARTY LINKS",
    url: "#third-party-links",
  },
  {
    text: "YOUR RIGHTS",
    url: "#your-rights",
  },
  {
    text: "CHANGES TO OUR PRIVACY NOTICE",
    url: "#changes-to-our-privacy-notice",
  },
  {
    text: "CONTACT US",
    url: "#contact-us",
  },
  {
    text: "ADDITIONAL DISCLOSURES FOR CALIFORNIA RESIDENTS",
    url: "#additional-disclosures-for-california-residents",
  },
  {
    text: "ACCESSIBILITY",
    url: "#accessibility",
  },
];

const RightsTableData = [
  {
    ProtectRight: "Right to be informed",
    means:
      "You have the right to be provided with clear, transparent and easily understandable information about how we use your personal data and what your rights are. This is why we are providing you this privacy notice.",
  },
  {
    ProtectRight: "Right of access",
    means:
      "You have the right to obtain access to your personal data we process and certain other information (similar to that provided in this privacy notice).You may ask for:",
    items: [
      "A copy of your information,",
      " Details about why and how we process your personal data,",
      " Whether we carry out any automated decision-making or profiling, and where we do information about the logic involved and the outcome or consequences of that decision or profiling. To help us find the information, please give us as much information as possible about the type of personal data you would like to see.",
    ],
  },
  {
    ProtectRight: "Right to rectification",
    means:
      "You are entitled to have your information corrected if it is inaccurate or incomplete.If you would like us to do this, please contact us. ",
  },
  {
    ProtectRight:
      "Rights to ask us to stop contacting you with direct marketing",
    means: "You can ask us to stop contacting you for direct marketing purposes. If you would like to do so, please contact us. Alternatively, you can also click the ‘unsubscribe’ button at the bottom of the applicable emails you receive. It may take up to 7 days for this to take place.",
  },
  {
    ProtectRight: "Rights in relation to automated decision making",
    means: "These rights are not applicable as we do not carry out any automated decision making.",
  },
  {
    ProtectRight: "Right to erasure",
    means: "This is also known as the ‘right to be forgotten’ and, in simple terms, enables you to request the deletion or removal of your information where:",
    items: ["You do not think your data is accurate. We will start processing again once we have checked whether or not the data is accurate;"," The processing is unlawful but you do not want to erase your data;", "We no longer need the personal data for our processing, but you need the data to establish, exercise or defend legal claims; or","You have objected to the processing because you believe that your interests should override our legitimate interests."],
  },
  {
    ProtectRight: "Right to data portability",
    means: "You have rights in certain circumstances to obtain and reuse your personal data for your own purposes across different services.",
  },
  {
    ProtectRight: "Right to object to processing",
    means: "You have the right to object to certain types of processing, including processing based on our legitimate interests and processing for direct marketing.",
  },
  {
    ProtectRight: "Right to withdraw consent",
    means: `If you have given your consent to anything we do with your personal data, you have the right to withdraw your consent at any time (although if you do so, that does not meananything we have done with your personal data with your consent up to that point is unlawful).  Please contact us if you wish to withdraw your consent to anything we do with your personal data.`,
  },
];

const DisclosureTableData = [
    {
        categories:"Identity data",
        purpose:"Collected to provide you the information, products and services you request; respond to enquiries from you; schedule meetings with you; manage our relationship with you; carry out agreements entered into between you and us. Disclosed to our other group companies, business partners and suppliers when this is necessary to provide our services to our users or for the performance of any contract we enter into with you."
    },
    {
        categories:"Contact data",
        purpose:"Collected to provide you the information, products and services you request; respond to enquiries from you; schedule meetings with you; manage our relationship with you; carry out agreements entered into between you and us. Disclosed to our other group companies, business partners and suppliers when this is necessary to provide our services to our users or for the performance of any contract we enter into with you."
    },
    {
        categories:"Financial data",
        purpose:"Collected to carry out any agreements entered into between you and us. Disclosed to our service providers who provide certain services on our behalf such as data hosting or processing services. We will use contractual arrangements to protect personal data disclosed to these service providers."
    },
    {
        categories:"Transaction data",
        purpose:"Collected to carry out any agreements entered into between you and us. Disclosed to service providers who provide certain services on our behalf such as data hosting or processing services. We will use contractual arrangements to protect personal data disclosed to these service providers"
    },
    {
        categories:"Technical data",
        purpose:"Analytics and search engine providers that assist us in the improvement and optimization of our products; our service providers who provide certain services on our behalf such as data hosting or processing services. We will use contractual arrangements to protect personal data disclosed to these service providers"
    },
    {
        categories:"Product data",
        purpose:"Analytics and search engine providers that assist us in the improvement and optimizationof our products."
    },
    {
        categories:"Usage data",
        purpose:"Advertisers and advertising networks that require the data to select and serve relevant adverts to you and others. Such disclosures are typically aggregate information about our users and analyses of our server logs, traffic, or information relating to customer leads, including details regarding usage of our websites or apps and general information about our audience, and are not generally considered to be personal data; analytics and search engine providers that assist us in the improvement and optimization of our products"
    },
    {
        categories:"Marketing & Communications data",
        purpose:"Advertisers and advertising networks that require the data to select and serve relevant adverts to you and others. Such disclosures are typically aggregate information about our users and analyses of our server logs, traffic, or information relating to customer leads, including details regarding usage of our websites or apps and general information about our audience, and are not generally considered to be personal data; analytics and search engine providers that assist us in the improvement and optimization of our products."
    },
]

export { SectionAccess, RightsTableData,DisclosureTableData };
