

export const METADATA = {
  title: "Portfolio | Naman Rai",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://namanrai.in/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I enjoy solving complex problems and learning new skills",
  "I develop modern web apps",
  "I design dynamic user experience",
  "I design and develop motion",
];

export const EMAIL = "naman.rai006@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/namanrai006/",
  github: "https://github.com/naman006-rai",
  instagram: "https://www.instagram.com/irainaman/"
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}


export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "angular",
    "html",
    "css",
  ],
  backend:["java","nodejs","python","SQL","DynamoDB", "openSearch", "spring"],
  other: ["git", "terraform", "AWS", "Azure", "jenkins"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "August, 2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Senior Software Engineer 2 (Current)",
    size: ItemSize.SMALL,
    subtitle: "Full Stack Engineer @ Nike",
    image: "/timeline/nike.svg",
    slideImage: "/timeline/nike.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "March, 2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Senior System Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Full Stack Developer @ IBM",
    image: "/timeline/ibm.svg",
    slideImage: "/timeline/ibm.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Decemeber, 2018",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Programmer Analyst",
    size: ItemSize.SMALL,
    subtitle:
      "Java Developer @ Cognizant",
    image: "/timeline/cognizant.svg",
    slideImage: "/timeline/cognizant.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

