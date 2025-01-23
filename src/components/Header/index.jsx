// React

import { useEffect, useRef, useState } from "react";

// Styles

import "@/styles/layout/header.scss";

// Images

import Logo from "@/assets/logo.svg";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const headerRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

        if (isMenuOpen) {
            document.body.style.overflow = "auto";
        } else {
            document.body.style.overflow = "hidden";
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
                document.body.style.overflow = "auto";
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                headerRef.current.querySelector(".header__menu-overlay").classList.add("opacity");
                headerRef.current.querySelector(".header__logo").classList.add("opacity");
            } else {
                headerRef.current.querySelector(".header__menu-overlay").classList.remove("opacity");
                headerRef.current.querySelector(".header__logo").classList.remove("opacity");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <header
            className={`header container ${hasScrolled ? "scrolled" : ""}`}
            ref={headerRef}
        >
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
                            <a href="#introduction">Início</a>
                        </li>

                        <li className="header__nav-item">
                            <a href="#about">Sobre</a>
                        </li>

                        <li className="header__nav-item">
                            <a href="#skills">Habilidades</a>
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