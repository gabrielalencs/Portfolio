// Images

import Logo from "@/assets/logo.svg"

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={Logo} alt="Logo Portfólio" />
            </div>

            <div>
                <nav>
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