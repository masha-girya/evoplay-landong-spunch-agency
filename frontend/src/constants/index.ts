import SecurityImg from "@components/services/assets/Security.png";
import FinancialImg from "@components/services/assets/Financial.png";
import CorporateImg from "@components/services/assets/Corporate.png";
import AImg from "@components/solutions/assets/VPN.png";
import BImg from "@components/solutions/assets/Phone.png";
import CImg from "@components/solutions/assets/Notebook.png";
import { REQ_STATUS } from "src/services/api-types";

export const API_REQUEST_ENDPOINT = process.env.NEXT_PUBLIC_REQUEST_ENDPOINT;

export const NAV = [
  {
    name: "Solutions",
    link: "solutions",
  },
  {
    name: "About Us",
    link: "about-us",
  },
];

export const SERVICES = [
  {
    tabTitle: "National Security",
    image: SecurityImg,
    imageTitle: "National Security using AI",
    imageText:
      "AI systems analyze vast data sets, detect anomalies, and forecast potential threats. This enhances early warning, surveillance, and response capabilities, ensuring a safer and more resilient nation",
  },
  {
    tabTitle: "Corporate",
    image: CorporateImg,
    imageTitle: "AI-Powered Corporate Leader",
    imageText:
      "EVO is a leading corporate entity that leverages AI to embody the principles of time efficiency, full understanding, and delivering impactful results",
  },
  {
    tabTitle: "Financial",
    image: FinancialImg,
    imageTitle: "Securing Prosperous Financial Futures",
    imageText:
      "AI-driven strategies and insights redefine success in the financial sector, ensuring secure and prosperous financial futures for clients",
  },
];

export const SERVICES_TEXT = [
  "Economizing time, achieving full understanding, and delivering a singular, impactful result are the core principles that define EVO. Our company excels at streamlining processes to save valuable time, ensuring that every step taken is efficient and effective.",
  "Through our commitment to clear communication and in-depth comprehension, EVO doesn't just meet client needs but exceeds expectations. The ability to grasp the intricate details of each project allows us to provide solutions that are both precise and innovative.",
  "In the world of EVO, success isn't measured in complexity, but in the simplicity of a single, outstanding outcome. We embody the idea that time is a precious resource, and our unwavering dedication to understanding and delivering exceptional results sets them apart in their field."
];

export const SOLUTIONS = [
  {
    letter: "A",
    title: "Universal Soldier",
    text: "Evolution’s central intelligence UNIVERSAL SOLDIER leverages information, in both a multitude of structured and unstructured forms, across time, place, content, and entity",
    link: "/",
    image: AImg
  },
  {
    letter: "B",
    title: "Automagic Risk Discovery",
    text: "An aggregate of applications automagically discover and prioritize entities, relationships, and behaviors associated with risks and opportunities, even before the questions are asked!",
    link: "/",
    image: BImg
  },
  {
    letter: "C",
    title: "Beat Opponents Quickly",
    text: "The magic - discover and prioritize entities, relationships, and behaviors associated with risks and opportunities, even before anyone else… BEAT YOUR OPPONENTS IN RECORD TIME.",
    link: "/",
    image: CImg
  },
]

export const ABOUT_US = [
  {
    title: "Our Story",
    text: "With over 100 years of combined experience in the National Security field, our family of elite data scientists and cyber Intelligence experts has come together to push the boundaries of data analysis and decision making.  We welcome you into a new era of intelligence."
  },
  {
    title: "Our Mission",
    text: "To empower national security and commercial organizations to make confident decisions by using cutting edge techniques that reduce time and risk. To allow industry leaders quick and confident decision making to achieve tangible results and record time.  To provide opportunity undetected before by man…"
  },
  {
    title: "Our Core Values",
    text: "Our core values help shape our business decisions, define our culture, and inspire our growth. Through our choices, words, and actions, we strive to live our values each and every day."
  },
];

export const REQUEST_STATUS = {
  [REQ_STATUS.failed]: "Request failed, please, check out inputs and try again",
  [REQ_STATUS.success]: "Your application has been successfully sent!",
  [REQ_STATUS.lackData]: "Please, enter your name and email",
}

export const PRINCIPLES = ["Integrity", "Innovation", "Accountability", "Honesty", "Respect"];
