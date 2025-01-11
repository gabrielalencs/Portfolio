// Images

import Logo from "@/assets/logo.svg";

import { useState } from "react";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <header className="header">
            <div className="header__logo">
                <img src={Logo} alt="Logo Portfólio" />
            </div>

            <div>
                <div>
                    <input
                        type="checkbox"
                        id="menu-checkbox"
                        className="header__checkbox"
                        checked={isMenuOpen}
                        onChange={toggleMenu}
                    />
                    <label htmlFor="menu-checkbox" className="header__toggle-checkbox">
                        <div className="header__checkbox-bars" id="bar1"></div>
                        <div className="header__checkbox-bars" id="bar2"></div>
                        <div className="header__checkbox-bars" id="bar3"></div>
                    </label>
                </div>

                <nav className={`header__menu-overlay ${isMenuOpen ? "open" : ""}`}>
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <a href="#">Início</a>
                        </li>

                        <li className="header__nav-item">
                            <a href="#">Sobre</a>
                        </li>

                        <li className="header__nav-item">
                            <a href="#">Habilidades</a>
                        </li>

                        <li className="header__nav-item">
                            <a href="#">Projetos</a>
                        </li>

                        <li className="header__nav-item">
                            <a href="#">Contato</a>
                        </li>
                    </ul>
                </nav>
            </div >
        </header >
    )
}

export default Header