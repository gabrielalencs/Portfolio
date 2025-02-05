// React

import { useState } from "react";

// Styles

import "@/styles/layout/about.scss";

// Images

import Avatar from "@/assets/avatar-about.png";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

// Data

import { listGraduation } from "../../data/graduationData";

const About = () => {
    const [toggleAboutSections, setToggleAboutSections] = useState("biography");
    const [isAnimating, setIsAnimating] = useState(false);

    const socialMedias = [
        { id: 1, icon: FaGithub, link: "https://github.com/gabrielalencs/" },
        { id: 2, icon: FaLinkedin, link: "https://linkedin.com/in/gabrieldealencarr" },
        { id: 3, icon: FaInstagram, link: "https://www.instagram.com/alencsblz/" },
        { id: 4, icon: MdEmail, link: "mailto:gabrieldealencar.dev@gmail.com" },
    ];

    const toggleSections = (section) => {
        setIsAnimating(true);

        

        setTimeout(() => {
            setToggleAboutSections(section);
            setIsAnimating(false);
        }, 500);
    };

    if (toggleAboutSections == "biography") {
        document.querySelector(".buttonBiography")?.setAttribute("disabled", true);
        document.querySelector(".buttonGraduation")?.removeAttribute("disabled");
    }

    if (toggleAboutSections == "graduation") {
        document.querySelector(".buttonGraduation")?.setAttribute("disabled", true);
        document.querySelector(".buttonBiography")?.removeAttribute("disabled");
    }

    return (
        <section className="about" id="about">
            <div className="about__image">
                <img src={Avatar} alt="Avatar de Gabriel de Alencar" />
            </div>

            <div className="about__container-texts">
                <div className="about__buttons-infos">
                    <button className="fancy buttonBiography" onClick={() => toggleSections("biography")}>
                        <span className="top-key"></span>
                        <span className="text">Sobre</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </button>

                    <button className="fancy buttonGraduation" onClick={() => toggleSections("graduation")}>
                        <span className="top-key"></span>
                        <span className="text">Formação</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </button>
                </div>

                <div className="about__texts">
                    <div
                        className={`about__container ${isAnimating ? "animate-out" : "animate-in"}`} >
                        {toggleAboutSections === "biography" ? (
                            <div className="about__container-biography">
                                <h3 className="about__name-title">
                                    Me chamo <br /> <span>Gabriel de Alencar</span>
                                </h3>
                                <p className="about__description">
                                    Sou um Desenvolvedor Frontend, apaixonado por tecnologia e
                                    programação. Atualmente, sou formado no curso técnico de Análise
                                    e Desenvolvimento de Sistemas pela Etec. Estou sempre em busca
                                    de novos desafios e oportunidades para aprimorar minhas
                                    habilidades e conhecimentos.
                                </p>
                                <p className="about__description">
                                    Tenho experiências em React.js, Next.js, TypeScript/JavaScript,
                                    Styled Components e Tailwind CSS. Estou sempre acompanhando as
                                    novas tendências e tecnologias, buscando garantir resultados de
                                    qualidade.
                                </p>

                                <div className="about__social-media">
                                    {socialMedias.map(media => (
                                        <a
                                            key={media.id}
                                            href={media.link}
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            <media.icon />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="about__graduation-container">
                                {listGraduation.map((graduation) => (
                                    <div
                                        key={graduation.id}
                                        className="about__graduation-item"
                                    >
                                        <div className="about__graduation-icon">
                                            <FaGraduationCap />
                                        </div>

                                        <div className="about__graduation-infos">
                                            <span>{graduation.date}</span>
                                            <p>{graduation.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About