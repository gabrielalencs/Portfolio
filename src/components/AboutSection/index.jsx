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


const About = () => {

    const [toggleAboutSections, setToggleAboutSections] = useState("biography");
    const [isAnimating, setIsAnimating] = useState(false);

    const socialMedias = [
        { id: 1, icon: FaGithub, link: "tteste" },
        { id: 2, icon: FaLinkedin, link: "sdsd" },
        { id: 3, icon: FaInstagram, link: "sdgfshg" },
        { id: 4, icon: MdEmail, link: "sdfsd" },
    ];

    const graduationList = [
        { id: 1, date: "02/2022 - 12/2024", name: "Técnico em Desenvolvimento de Sistemas - Etec Raposo Tavares" },
        { id: 2, date: "02/2025 - 02/2025", name: "Next do Zero ao Avançado - Matheus Battisti" },
        { id: 3, date: "10/2024 - 11/2024", name: "TypeScript do básico ao Avançado - Matheus Battisti" },
        { id: 4, date: "06/2024 - 07/2024", name: "React do básico ao avançado - Matheus Battisti" },
        { id: 5, date: "03/2024 - 05/2024", name: "JavaScript do básico ao avançado - Matheus Battisti" },
        { id: 6, date: "01/2024 - 02/2024", name: "Tailwind CSS Completo - Matheus Battisti" },
        { id: 7, date: "10/2023 - 10/2023", name: "SASS e SCSS do Zero - Matheus Battisti" },
        { id: 8, date: "07/2023 - 08/2023", name: "Bootstrap 5 do básico ao avançado - Matheus Battisti" },
        { id: 9, date: "02/2023 - 05/2023", name: "HTML e CSS - Daniel Tapias" },
    ];

    const toggleSections = (section) => {
        setIsAnimating(true); 
        
        setTimeout(() => {
            setToggleAboutSections(section); 
            setIsAnimating(false);
        }, 500);
    };



    return (
        <section className="about" id="about">
            <div className="about__image">
                <img src={Avatar} alt="Avatar de Gabriel de Alencar" />
            </div>

            <div className="about__container-texts">
                <div className="about__buttons-infos">
                    <button className="fancy" onClick={() => toggleSections("biography")}>
                        <span className="top-key"></span>
                        <span className="text">Sobre</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </button>

                    <button className="fancy" onClick={() => toggleSections("graduation")}>
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
                                    {socialMedias.map((media) => (
                                        <a key={media.id} href={media.link}>
                                            <media.icon />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="about__graduation-container">
                                {graduationList.map((graduation) => (
                                    <div
                                        key={graduation.id}
                                        className="about__graduation-item"
                                    >
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
}

export default About;
