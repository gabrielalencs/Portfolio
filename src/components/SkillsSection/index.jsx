// Styles

import "@/styles/layout/skills.scss";

// Images

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { SiShadcnui } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const Skills = () => {

    const listSkills = [
        { id: 1, name: "HTML5", icon: FaHtml5 },
        { id: 2, name: "CSS3", icon: FaCss3Alt },
        { id: 3, name: "JavaScript", icon: RiJavascriptFill },
        { id: 4, name: "TypeScript", icon: SiTypescript },
        { id: 5, name: "React.js", icon: FaReact },
        { id: 6, name: "Next.js", icon: RiNextjsFill },
        { id: 7, name: "Tailwind CSS", icon: RiTailwindCssFill },
        { id: 8, name: "Sass", icon: FaSass },
        { id: 9, name: "Styled Components", icon: SiStyledcomponents },
        { id: 10, name: "Bootstrap", icon: BsBootstrapFill },
        { id: 11, name: "Shadcn/ui", icon: SiShadcnui },
        { id: 12, name: "Git", icon: FaGitAlt },
    ];

    return (
        <section className="skills" id="skills">
            <h2 className="skills__title">Habilidades <span>.</span></h2>

            <div className="skills__container">
                {listSkills.map(skill => (
                    <div key={skill.id} className="skills__item">
                        <span className="skills__name">{skill.name}</span>
                        <skill.icon className="skills__icon" />
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Skills;