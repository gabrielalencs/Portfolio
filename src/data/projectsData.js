// Images

import ProjectKenai from "@/assets/projects/projects__kenai.png";
import ProjectFrontendMentor from "@/assets/projects/projects__frontend-mentor.png";
import ProjectCodelab from "@/assets/projects/projects__codelab.png";
import ProjectMenuOnline from "@/assets/projects/projects__menu-online.png";

import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

export const listProjects = [
    {
        id: 1,
        image: ProjectKenai,
        title: "Kenai Movies",
        technologies: [FaReact, FaSass, SiVite],
        links: [
            { name: "Deploy", link: "https://kenai-movies-company.vercel.app/" },
            { name: "Repo", link: "https://github.com/gabrielalencs/Kenai-Movies" },
        ]
    },
    {
        id: 2,
        image: ProjectMenuOnline,
        title: "Menu Online",
        technologies: [FaHtml5, FaCss3Alt, RiJavascriptFill, FaSass],
        links: [
            { name: "Deploy", link: "https://menu-on-line.vercel.app/" },
            { name: "Repo", link: "https://github.com/gabrielalencs/Menu-Online" },
        ]
    },
    {
        id: 3,
        image: ProjectFrontendMentor,
        title: "Vitrine Frontend Mentor",
        technologies: [FaReact, FaSass, RiTailwindCssFill],
        links: [
            { name: "Deploy", link: "https://vitrine-frontend-mentor.vercel.app/" },
            { name: "Repo", link: "https://github.com/gabrielalencs/Frontend-Mentor-Challenges" },
        ]
    },
    {
        id: 4,
        image: ProjectCodelab,
        title: "Vitrine CodeLab",
        technologies: [FaReact, FaSass, RiTailwindCssFill, SiStyledcomponents],
        links: [
            { name: "Deploy", link: "https://gabrielalencs.github.io/Vitrine-Desafios-CodeLab/" },
            { name: "Repo", link: "https://github.com/gabrielalencs/Desafios-CodeLab" },
        ]
    },
];