// React

import { useState } from "react";

// Styles

import "@/styles/layout/projects.scss";

// Data

import { listProjects } from "../../data/projectsData";

// Icons

import { IoIosClose } from "react-icons/io";

// Utils

import { scrollToProjects } from "../../utils/scrollToProjects";
import { hideOverlay, showOverlay } from "../../utils/toggleOverlayBody";


import ProjectKenai from "@/assets/projects/projects__kenai.png";

const Projects = () => {
    const [isContainerSeeMore, setIsContainerSeeMore] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const showSeeMore = (project) => {
        setIsContainerSeeMore(true);
        setSelectedProject(project);
        showOverlay();
        scrollToProjects();
    }

    const closeSeeMore = () => {
        setIsContainerSeeMore(false)
        setSelectedProject(null);
        hideOverlay();
    };

    return (
        <section className="projects">
            <h2 className="projects__title" id="projects">Projetos <span>.</span></h2>

            <div className="projects__container">
                {listProjects.map(project => (
                    <div key={project.id} className="projects__item">
                        <div className="projects__image">
                            <img src={project.image} alt={`${project.title} Image`} />

                            <div className="projects__cover-container">
                                <span className="projects__name-cover">{project.title}</span>
                                <div className="projects__cover-techs">
                                    {project.technologies.map((TechIcon, index) => (
                                        <span key={index} className="projects__tech-icon">
                                            <TechIcon />
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="projects__buttons">
                            {project.links.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.link}
                                    target="_blank"
                                    rel="noopener"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button onClick={() => showSeeMore(project)}>Ver mais</button>
                        </div>
                    </div>
                ))}


                <div className={`projects__seemore-container ${isContainerSeeMore ? "showContainerSeeMore" : ""}`}>
                    <div className="seemore-video-container">
                        <div className="seemore-video">
                            <img src={ProjectKenai} alt="" />
                        </div>

                        <div className="seemore-buttons">
                            <button>Ver mais</button>
                            <button>Ver mais</button>
                        </div>
                    </div>

                    <div className="seemore-content">
                        <div className="seemore-title">
                            <h3>Kenai Movies</h3>
                            <IoIosClose onClick={closeSeeMore} />
                        </div>
                        
                        <p className="seemore-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur dolores impedit eius similique vero quo nemo tempore non? Minima officiis praesentium reiciendis tempora adipisci ratione magni, sit sed fugit.</p>
                        <ul className="seemore-list">
                            <li>Tech1</li>
                            <li>Tech1</li>
                            <li>Tech1</li>
                        </ul>
                        <p className="seemore-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur dolores impedit eius similique vero quo nemo tempore non? Minima officiis praesentium reiciendis tempora adipisci ratione magni, sit sed fugit.</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Projects