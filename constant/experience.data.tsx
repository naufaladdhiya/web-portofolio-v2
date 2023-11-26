import {
  Html5Original,
  Css3Original,
  ReactOriginal,
  JavascriptOriginal,
  TailwindcssPlain,
  ReduxOriginal,
  BootstrapOriginal,
  SassOriginal,
  NextjsOriginal,
  NodejsOriginal,
  TypescriptOriginal,
  NpmOriginalWordmark,
  YarnOriginalWordmark,
} from "devicons-react";

type SkillProps = {
  title: string;
  icon: JSX.Element;
};

const EXPERIENCE_DATA = [
  {
    title: "Note App",
    description:
      "Note App is a simple note application that can be used to record your daily activities. This application is made using React Js.",
    image: "",
    link: "https://github.com/naufaladdhiya/note-app",
    liveDemo: "https://note-app-theta-lake.vercel.app",
    tags: ["React Js", "DaisyUi", "Tailwind Css"],
  },
  {
    title: "Crown Clothing",
    description:
      "Crown Clothing is an online clothing store application. This application is made using React Js, Redux, and Firebase.",
    image: "",
    link: "https://github.com/naufaladdhiya/crwn-clothing",
    liveDemo: "https://crwn-clothing-six-eta.vercel.app",
    tags: ["React Js", "Redux", "Styled Components"],
  },
  {
    title: "Restaurant App",
    description:
      "Restaurant App is an application that can be used to order food. This application is made using Vanilla Js and Webpack.",
    image: "",
    link: "https://github.com/naufaladdhiya/Katalog-Restaurant",
    liveDemo: "https://dapur-mamaa.vercel.app/",
    tags: ["e2e", "Testing", "Webpack", "Eslint", "PWA"],
  },
  {
    title: "Portofolio",
    description:
      "Portofolio is a personal website application. This application is made using React Js and Tailwind Css.",
    image: "",
    link: "https://github.com/naufaladdhiya/web-portofolio",
    tags: ["React Js", "Tailwind Css"],
  },
];

const skills: SkillProps[] = [
  {
    title: "HTML",
    icon: <Html5Original size={`40`} />,
  },
  {
    title: "CSS",
    icon: <Css3Original size={`40`} />,
  },
  {
    title: "Javascript",
    icon: <JavascriptOriginal size={`40`} />,
  },
  {
    title: "Typescript",
    icon: <TypescriptOriginal size={`40`} />,
  },
  {
    title: "ReactJs",
    icon: <ReactOriginal size={`40`} />,
  },
  {
    title: "TaiwindCss",
    icon: <TailwindcssPlain size={`40`} />,
  },
  {
    title: "Redux",
    icon: <ReduxOriginal size={`40`} />,
  },
  {
    title: "Bootstrap",
    icon: <BootstrapOriginal size={`40`} />,
  },
  {
    title: "SASS",
    icon: <SassOriginal size={`40`} />,
  },
  {
    title: "NPM",
    icon: <NpmOriginalWordmark size={`40`} />,
  },
  {
    title: "YARN",
    icon: <YarnOriginalWordmark size={`40`} />,
  },
  {
    title: "Node",
    icon: <NodejsOriginal size={`40`} />,
  },
];

export { EXPERIENCE_DATA, skills };
