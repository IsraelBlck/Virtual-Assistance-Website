import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMediumM
} from "react-icons/fa";
import { BsClipboard2DataFill } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { TiVendorMicrosoft } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { SiGoogleads } from "react-icons/si";
import { FaBookMedical } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";
import { SiMicrosoftexcel } from "react-icons/si";
import { TiMessageTyping } from "react-icons/ti";
import { SiMicrosoftword } from "react-icons/si";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RiMapPinTimeFill } from "react-icons/ri";
import { FcIdea } from "react-icons/fc";
import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbBrandBootstrap,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql } from "react-icons/bi";
import {
  SiPug,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
} from "react-icons/si";
import { FaChartLine } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";
import { SiAdobephotoshop } from "react-icons/si";
import { SlSpeech } from "react-icons/sl";
import { TbSeo } from "react-icons/tb";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import {
  BsGlobe,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
} from "react-icons/bs";
import { GiArtificialIntelligence } from "react-icons/gi";


export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  { text: "Blogs", path: "/blogs" },
  { text: "Contact", path: "/contact" }
];

export const interestsData = [
  {
    interest: "Research Skill",
    icon: FaChartLine,
  },
  {
    interest: "Editing",
    icon: MdEditDocument,
  },
  {
    interest: "Graphic Designing",
    icon: SiAdobephotoshop,
  },
  {
    interest: "Copywiting",
    icon: SlSpeech,
  },
  {
    interest: "Digital Marketing",
    icon: BsFileBarGraph,
  },
  {
    interest: "Wordpress Management",
    icon: AiFillCode,
  },
  {
    interest: "Operating SEO Tools",
    icon: TbSeo,
  },
  {
    interest: "Web Scraping",
    icon: BsGlobe,
  },
];

export const skillsData = [
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "Jquery",
    icon: BiLogoJquery,
  },
  {
    name: "Data Entry",
    icon: BsClipboard2DataFill,
  },
  {
    name: "Computer Skills",
    icon: FaComputer,
  },
  {
    name: "Microsft Office",
    icon: TiVendorMicrosoft,
  },
  {
    name: "Google Docs",
    icon: SiGoogledocs,
  },
  {
    name: "Accuracy Verification",
    icon: RiVerifiedBadgeLine,
  },
  {
    name: "Lead Generation",
    icon: SiGoogleads,
  },
  {
    name: "Medical Rewards Software",
    icon: FaBookMedical,
  },
  {
    name: "Commuincation",
    icon: MdOutlineComment,
  },
  {
    name: "Microsoft Excel",
    icon: SiMicrosoftexcel,
  },
  {
    name: "Typing",
    icon: TiMessageTyping,
  },
  {
    name: "Microsoft Word",
    icon: SiMicrosoftword,
  },
  {
    name: "Data Collection",
    icon: BsClipboard2DataFill,
  },
  {
    name: "Data Extraction",
    icon: BsClipboard2DataFill,
  },
  {
    name: "Graphic Designing",
    icon:  SiAdobephotoshop,
  },
  {
    name: "Email Marketing",
    icon: MdOutlineMarkEmailRead,
  },
  {
    name: "Email Designer HTML",
    icon: FaHtml5,
  },
  {
    name: "ChatGPT",
    icon: GiArtificialIntelligence,
  },
  {
    name: "Bash",
    icon: SiGnubash,
  },
  {
    name: "Time Management",
    icon: RiMapPinTimeFill,
  },
  {
    name: "Crictical Thinking",
    icon: FcIdea,
  },
];

export const workData = [
  {
    company: "Dynamite Inc",
    designation: "Virtual Assistant",
    duration: "March 2022 - Present",
    companyImg: "DYNAMITE(1).jpg",
    description: (
      <>
        <ul>
          <li>
            Provide virtual adminstrative assistance to clients, managing their calendars,
            scheduling meetings and handling email correspondence.
          </li>
          <li>
            Assist clients with docutment preparation, expense tracking, data entry and research,
            maintaining an accuracy rate of 98%.
          </li>
          <li>
            Efficiently automate tasks using tools like Zapier, Asana and Trello, resulting in a 30% reduction in manual workload.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Fact.MR",
    designation: "Remote Administrative Assistant",
    duration: "Dec 2020 - July 2021",
    companyImg: "DYNAMITE(1).jpg",
    description: (
      <>
        <ul>
          <li>
            Responsibly managed a high-volume email inbox, sorting and prioritizing
            over 200 daily messages.
          </li>
          <li>
            Successfully scheduled and coordinated over 100 remote meetings per month 
            for executives and management.
          </li>
          <li>
            Implemented cloud-based file management systems,
            impoving document accessibility and reducing retrieval time by 25%.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Fact.MR",
    designation: "Associate Consultant Level 01",
    duration: "Dec 2020 - July 2021",
    companyImg: "DYNAMITE(1).jpg",
    description: (
      <>
        <ul>
          <li>
            Responsibly managed a high-volume email inbox, sorting and prioritizing
            over 200 daily messages.
          </li>
          <li>
            Successfully scheduled and coordinated over 100 remote meetings per month 
            for executives and management.
          </li>
          <li>
            Implemented cloud-based file management systems,
            impoving document accessibility and reducing retrieval time by 25%.
          </li>
        </ul>
      </>
    ),
  },
];

export const projectsData = [
  {
    type: "WEB-APP",
    title: "Movie Magnet",
    image: "movie-magnet",
    link: "https://movie-magnet-smoky.vercel.app/",
    source: "https://github.com/vaheedsk36/movie-magnet",
  },
  {
    type: "WEB-APP",
    title: "Portfolio Website",
    image: "portfolio-website",
    link: null,
    source: "https://github.com/vaheedsk36/portfolio-website-nextjs",
  },
  {
    type: "WEB-APP",
    title: "Weather App",
    image: "weather-app",
    link: "https://vaheedsk36.github.io/weather-app/",
    source: "https://github.com/vaheedsk36/weather-app",
  },
  {
    type: "WEB-APP",
    title: "Landing Page",
    image: "landing-page",
    link: "https://vaheedsk36.github.io/demo-frontend-bootcamp",
    source: "https://github.com/vaheedsk36/demo-frontend-bootcamp",
  },
  {
    type: "WEB-APP",
    title: "Guess Game",
    image: "guess-game",
    link: "https://vaheedsk36.github.io/guess-my-number",
    source: "https://github.com/vaheedsk36/guess-my-number",
  },
  {
    type: "WEB-APP",
    title: "Notes App",
    image: "react-notes-app",
    link: "https://vaheedsk36.github.io/react-notes-app/",
    source: "https://github.com/vaheedsk36/react-notes-app",
  },
  {
    type: "WEB-APP",
    title: "Dice Multiplayer",
    image: "dice-multiplayer",
    link: "https://vaheedsk36.github.io/dice-multiplayer",
    source: "https://github.com/vaheedsk36/dice-multiplayer",
  },
  {
    type: "PROJECT",
    title: "Snake Game",
    image: "snake-game",
    link: "https://vaheedsk36.github.io/Snake-game",
    source: "",
  },
  {
    type: "PROJECT",
    title: "Delta Assistant",
    image: "delta-assistant",
    link: "",
    source: "https://github.com/vaheedsk36/Delta-Desktop-Virtual-Assistant",
  },
  {
    type: "WEB-APP",
    title: "Text Utility App",
    image: "text-utility-app",
    link: "https://vaheedsk36.github.io/text-utility-app/",
    source: "https://github.com/vaheedsk36/text-utility-app",
  },
];


export const socialMediaLinks = [
  {
    href: "https://github.com/vaheedsk36",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.instagram.com/codersk36/",
    icon: FaInstagram,
    backgroundColor: "social.instagram",
    hoverColor: "social.instagramHover",
  },
  {
    href: "https://www.linkedin.com/in/sk36/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
  {
    href: "https://twitter.com/codersk36",
    icon: FaXTwitter,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://codersk36.hashnode.dev/",
    icon: FaHashnode,
    backgroundColor: "social.hashnode",
    hoverColor: "social.hashnodeHover",
  },
  {
    href: "https://medium.com/@vaheedsk36",
    icon: FaMediumM,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  }
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
