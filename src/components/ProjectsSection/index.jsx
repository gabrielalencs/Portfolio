// Styles
import "@/styles/layout/projects.scss";

// Data
import { listProjects } from "../../data/projectsData";
import { useState, useEffect } from "react";

const Projects = () => {
    const [activeCardId, setActiveCardId] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };

        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleProjectClick = (id) => {
        if (isMobile) {
            setActiveCardId((prev) => (prev === id ? null : id));
        }
    };

    return (
        <section className="projects">
            <h2 className="projects__title" id="projects">
                Projetos <span>.</span>
            </h2>

            <div className="projects__container">
                {listProjects.map((project) => (
                    <div
                        key={project.id}
                        className={`projects__item ${activeCardId === project.id ? "active" : ""}`}
                        onClick={() => handleProjectClick(project.id)}
                    >
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
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;