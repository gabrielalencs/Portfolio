// Styles

import "@/styles/layout/introduction.scss";

import Eu from "@/assets/eu2.png";

import { HiWindow } from "react-icons/hi2";
import { GrPersonalComputer } from "react-icons/gr";
import { GrTechnology } from "react-icons/gr";


import { RiReactjsLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";


const Introduction = () => {
    return (
        <section className="introduction">
            <div className="introduction__content">
                <h1 className="introduction__name-text">Eu sou o Gabriel de Alencar</h1>
                <h2 className="introduction__role-text">Desenvolvedor Front-End</h2>

                <p className="introduction__description">Como desenvolvedor front-end, meu foco é na criação de interfaces responsivas e dinâmicas, garantindo que cada projeto não só funcione, mas que encante o usuário em cada interação.</p>
            </div>

            <div className="introduction__container-avatar">
                <div className="avatar-container">
                    <img src={Eu} alt="Meu avatar" className="avatar" />
                </div>

                <div className="introduction__icons-container">
                    <div className="introduction__icon icon-1">
                        <HiWindow />
                    </div>

                    <div className="introduction__icon icon-2">
                        <GrPersonalComputer />
                    </div>

                    <div className="introduction__icon icon-3">
                        <GrTechnology />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction