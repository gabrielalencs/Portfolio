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


const About = () => {

    const [toggleAboutSections, setToggleAboutSections] = useState("biography");

    const socialMedias = [
        {
            id: 1,
            icon: FaGithub,
            link: "tteste"
        },
        {
            id: 2,
            icon: FaLinkedin,
            link: "sdsd"
        },
        {
            id: 3,
            icon: FaInstagram,
            link: "sdgfshg"
        },
        {
            id: 4,
            icon: MdEmail,
            link: "sdfsd"
        },
    ];

    const toggleSections = (section) => {
        setToggleAboutSections(section);
    };

    return (
        <section className="about">
            <div className="about__image">
                <img src={Avatar} alt="Avatar de Gabriel de Alencar" />
            </div>

            <div className="about__container-texts">
                <div className="about__buttons-infos">
                    <button className="fancy" onClick={() => toggleSections("biography")}>
                        <span className="top-key"></span>
                        <span className="text">Biografia</span>
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
                    {toggleAboutSections == "biography" ? (
                        <>
                            <h3 className="about__name-title">Me chamo <br /> <span>Gabriel de Alencar</span></h3>
                            <p className="about__description">Sou um Desenvolvedor Frontend, apaixonado por tecnologia e programação. Atualmente, estou no meu último ano Análise e Desenvolvimento de Sistemas. Estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades e conhecimentos.</p>

                            <div className="about__social-media">
                                {socialMedias.map(media => (
                                    <a key={media.id} href={media.link}>
                                        <media.icon />
                                    </a>
                                ))}
                            </div></>
                    ) : (
                        <div className="about__graduation-container">
                            <div className="about__graduation-item">
                                <div className="about__graduation-icon">
                                    <FaGraduationCap />
                                </div>

                                <div className="about__graduation-infos">
                                    <span>02/2025 - 02/2025</span>
                                    <p>Next do Zero ao Avançado - Matheus Battisti</p>
                                </div>
                            </div>

                            <div className="about__graduation-item">
                                <div className="about__graduation-icon">
                                    <FaGraduationCap />
                                </div>

                                <div className="about__graduation-infos">
                                    <span>10/2024 - 11/2025</span>
                                    <p>TypeScript do básico ao Avançado - Matheus Battisti</p>
                                </div>
                            </div>

                            <div className="about__graduation-item">
                                <div className="about__graduation-icon">
                                    <FaGraduationCap />
                                </div>

                                <div className="about__graduation-infos">
                                    <span>10/2024 - 11/2025</span>
                                    <p>TypeScript do básico ao Avançado - Matheus Battisti</p>
                                </div>
                            </div>

                            <div className="about__graduation-item">
                                <div className="about__graduation-icon">
                                    <FaGraduationCap />
                                </div>
                                <div className="about__graduation-infos">
                                    <span>10/2024 - 11/2025</span>
                                    <p>TypeScript do básico ao Avançado - Matheus Battisti</p>
                                </div>
                            </div>

                            <div className="about__graduation-item">
                                <div className="about__graduation-icon">
                                    <FaGraduationCap />
                                </div>

                                <div className="about__graduation-infos">
                                    <span>10/2024 - 11/2025</span>
                                    <p>TypeScript do básico ao Avançado - Matheus Battisti</p>
                                </div>
                            </div>

                            <div className="about__graduation-item">
                                <div className="about__graduation-icon">
                                    <FaGraduationCap />
                                </div>

                                <div className="about__graduation-infos">
                                    <span>10/2024 - 11/2025</span>
                                    <p>TypeScript do básico ao Avançado - Matheus Battisti</p>
                                </div>
                            </div>

                            <div className="about__graduation-item">
                                <div className="about__graduation-icon">
                                    <FaGraduationCap />
                                </div>

                                <div className="about__graduation-infos">
                                    <span>10/2024 - 11/2025</span>
                                    <p>TypeScript do básico ao Avançado - Matheus Battisti</p>
                                </div>
                            </div>

                            <div className="about__graduation-item">
                                <div className="about__graduation-icon">
                                    <FaGraduationCap />
                                </div>

                                <div className="about__graduation-infos">
                                    <span>10/2024 - 11/2025</span>
                                    <p>TypeScript do básico ao Avançado - Matheus Battisti</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default About;
