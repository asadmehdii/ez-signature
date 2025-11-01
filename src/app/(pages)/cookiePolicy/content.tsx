const TableData = [
  {
    cookie: "essential",
    type: "Stripe (__stripe_)",
    description:
      "We use Stripe to allow for online payments whenever you purchase one of our subscritions.",
    duration: "session",
  },
  {
    cookie: "essential",
    type: "Recaptcha (_GRECAPTCHA)",
    description:
      "We use Google Recaptcha services within our API environment to enable basic login security features.",
    duration: "session",
  },
  {
    cookie: "essential",
    type: "Ezsignature (apl_loginsession)",
    description:
      "Session cookie of Ezsignature (authentication). It allows our system to remember users within a Ezsignature when they move between web pages.",
    duration: "session",
  },
  {
    cookie: "essential",
    type: "Ezsignature (PHPSESSID)",
    description:
      "Session cookie of Ezsignature UI (state). It allows us to remember things about the user throughout a session(regardless of authentication, so also anonymous users). Currently only used for SMS2FA (remembering if the user has already been verified).",
    duration: "session",
  },
  {
    cookie: "essential",
    type: "Osano (osano_consentmanager)",
    description: "Used to manage cookie concent.",
    duration: "1 year",
  },
  {
    cookie: "personalization",
    type: "Ezsignature (eversign_feature _highlight)",
    description:
      "First-party cookie used to hide explanatory UI elements to users that visit website for the second time.",
    duration: "1 year",
  },
  {
    cookie: "analytics",
    type: "Sentry (sentry-sc)",
    description:
      "Sentry cookie enables us to use application error reporting, notifying us when bugs / crashes appear so we can resolve them.",
    duration: "session",
  },
  {
    cookie: "analytics",
    type: "Google (_ga_)",
    description:
      "We use Google Analytics to generate statistical data on how our visitors use our Site.",
    duration: "session / 2 year",
  },
  {
    cookie: "marketing",
    type: "Freshchat (_fw_crm_v)",
    description:
      "Freshchat cookie, allows us to provide in-app chat support to our customers",
    duration: "1 year",
  },
  {
    cookie: "marketing",
    type: "Bing Ads (_uetsid, ^_uetvid$)",
    description: "Used for marketing purposes.",
    duration: "1 year",
  },
  {
    cookie: "marketing",
    type: "Typeform (tf_respondent_cc)",
    description: "Used for surveys.",
    duration: "6 months",
  },
];
export { TableData };
