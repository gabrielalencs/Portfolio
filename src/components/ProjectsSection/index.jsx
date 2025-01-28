// Styles

import "@/styles/layout/projects.scss";

// Images

import ProjectKenai from "@/assets/projects/projects__kenai.png";

import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaSass } from "react-icons/fa";

const Projects = () => {

    const projects = [
        {}
    ]

    return (
        <section className="projects">
            <h2 className="projects__title">Projetos <span>.</span></h2>

            <div className="projects__container">
                {/* <div className="projects__item">
                    <div className="projects__image">
                        <img src={teste} alt="" />

                        <div className="projects__cover-container">
                            <span className="projects__name-cover">Kenai Movies</span>
                            <div className="projects__cover-techs">
                                <FaReact />
                                <SiVite />
                                <FaSass />
                            </div>
                        </div>
                    </div>

                    <div className="projects__buttons">
                        <button>Deploy</button>
                        <button>Repositório</button>
                        <button>Ver mais</button>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Projects