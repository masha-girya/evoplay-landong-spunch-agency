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
    imageTitle: "Lorem ipsum dolor sit amet",
    imageText:
      "Lorem ipsum dolor sit amet consectetur. Sed tincidunt aliquet purus dignissim amet id velit euismod. Mauris posuere amet dignissim ornare.",
  },
  {
    tabTitle: "Corporate",
    image: CorporateImg,
    imageTitle: "Lorem ipsum dolor sit amet 2",
    imageText:
      "Lorem ipsum dolor sit amet consectetur. Sed tincidunt aliquet purus dignissim amet id velit euismod. Mauris posuere amet dignissim ornare. 2",
  },
  {
    tabTitle: "Financial",
    image: FinancialImg,
    imageTitle: "Lorem ipsum dolor sit amet 3",
    imageText:
      "Lorem ipsum dolor sit amet consectetur. Sed tincidunt aliquet purus dignissim amet id velit euismod. Mauris posuere amet dignissim ornare. 3",
  },
];

export const SERVICES_TEXT = [
  "Lorem ipsum dolor sit amet consectetur. Mi sagittis pellentesque diam at pretium dignissim pharetra in. Odio nec facilisi tincidunt diam justo sed facilisi. In euismod porttitor maecenas pharetra at feugiat feugiat vestibulum tellus.",
  "Sed pellentesque lacus iaculis in non tellus massa imperdiet viverra. Amet suscipit tortor sodales cursus diam. Eget blandit erat turpis netus mauris penatibus in vitae. Pharetra viverra sem praesent pellentesque gravida ut.",
  "Dictum vitae posuere integer purus sit orci sed habitant.",
];

export const SOLUTIONS = [
  {
    letter: "A",
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet consectetur. Etiam elit quis venenatis quis aliquet et nibh. Pellentesque urna pretium arcu condimentum velit.",
    link: "/",
    image: AImg
  },
  {
    letter: "B",
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet consectetur. Etiam elit quis venenatis quis aliquet et nibh. Pellentesque urna pretium arcu condimentum velit.",
    link: "/",
    image: BImg
  },
  {
    letter: "C",
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet consectetur. Etiam elit quis venenatis quis aliquet et nibh. Pellentesque urna pretium arcu condimentum velit.",
    link: "/",
    image: CImg
  },
]

export const ABOUT_US = [
  {
    title: "Our Story",
    text: "Lorem ipsum dolor sit amet consectetur. Sed tincidunt aliquet purus dignissim amet id velit euismod. Mauris posuere amet dignissim ornare. Adipiscing at turpis id praesent eu penatibus egestas risus. Montes tellus viverra faucibus viverra pellentesque hendrerit."
  },
  {
    title: "Our Mission",
    text: "Lorem ipsum dolor sit amet consectetur. Sed tincidunt aliquet purus dignissim amet id velit euismod. Mauris posuere amet dignissim ornare. Adipiscing at turpis id praesent eu penatibus egestas risus. Montes tellus viverra faucibus viverra pellentesque hendrerit."
  },
  {
    title: "Our Vision",
    text: "Lorem ipsum dolor sit amet consectetur. Sed tincidunt aliquet purus dignissim amet id velit euismod. Mauris posuere amet dignissim ornare. Adipiscing at turpis id praesent eu penatibus egestas risus. Montes tellus viverra faucibus viverra pellentesque hendrerit."
  },
];

export const REQUEST_STATUS = {
  [REQ_STATUS.failed]: "Request failed, please, check out inputs and try again",
  [REQ_STATUS.success]: "Your application has been successfully sent!",
  [REQ_STATUS.lackData]: "Please, enter your name and email",
}