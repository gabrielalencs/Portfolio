// Styles

import "@/styles/layout/skills.scss";

// Data

import { listSkills } from "../../data/technologiesData";

const Skills = () => {
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