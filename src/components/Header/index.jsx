// Images

import Logo from "@/assets/logo.svg";

import { useState } from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    console.log(isOpen);
    

    return (
        <header className="header">
            <div className="header__logo">
                <img src={Logo} alt="Logo Portfólio" />
            </div>

            <div>
                <div>
                    <input 
                        type="checkbox"
                        className="header__checkbox"  
                        onClick={toggleMenu} 
                    />
                    <label htmlFor="checkbox" className="header__toggle-checkbox">
                        <div className="header__checkbox-bars" id="bar1"></div>
                        <div className="header__checkbox-bars" id="bar2"></div>
                        <div className="header__checkbox-bars" id="bar3"></div>
                    </label>
                </div>

                <nav className={`menu-overlay ${isOpen ? "open" : ""}`}>
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
            </div>
        </header>
    )
}

export default Header