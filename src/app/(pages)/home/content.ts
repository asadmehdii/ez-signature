import Assests from "@/app/assests/images";
import { useRouter } from "next/router";
import Route from "@/app/utils/routes";

const PaperlessCard = [
  {
    icon: Assests.papelessCard_1,
    title: "Individuals & Freelancers",
    text: "Take control of your digital work and securely manage your documents in the cloud, regardless of the type of document that needs signing.",
  },
  {
    icon: Assests.papelessCard_2,
    title: "Small & Medium Businesses",
    text: "Focus on the really important parts of your business, accelerate sales and proposal paperwork, close deals faster and save more money.",
  },
  {
    icon: Assests.papelessCard_3,
    title: "Enterprises",
    text: "Empower workers with secure signatures, reduce document turnaround time, save countless hours and preserve nature at the same time.",
  },
];

const financtionalDepartments = {
  leftSide: [
    "NDAs",
    "Asset Purchase Agreements",
    "Engagement Letters",
    "Independent Contractor Agreements",
    "Employment Contracts",
    "Practice Continuation Agreements",
  ],
  rightSide: [
    "Practice Continuation Agreements",
    "Power of Attorney Agreements",
    "Business Contracts",
    "Vendor Contracts",
    "Document Approvals",
  ],
};

const salesDepartments = {
  leftSide: [
    "NDAs",
    "Asset Purchase Agreements",
    "Engagement Letters",
    "Independent Contractor Agreements",
    "Employment Contracts",
    "Practice Continuation Agreements",
  ],
  rightSide: [
    "Practice Continuation Agreements",
    "Power of Attorney Agreements",
    "Business Contracts",
    "Vendor Contracts",
    "Document Approvals",
  ],
};
const Category = [
  {
    icon: Assests.Categ_1,
    text: "Boost Your Workflow",
    link: Route.FEATURE_PAGES,
  },
  {
    icon: Assests.Categ_2,
    text: "In-Person Signing",
    link: Route.IN_PERSON,
  },
  {
    icon: Assests.Categ_3,
    text: "Templates",
    link: Route.TEMPLATES,
  },
  {
    icon: Assests.Categ_4,
    text: "eSignature API",
    link: Route.DEVELOPER,
  },
];

export { PaperlessCard, financtionalDepartments, salesDepartments,Category };

