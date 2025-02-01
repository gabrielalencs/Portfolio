// Styles

import "@/styles/layout/footer.scss";

// Images

import Logo from "@/assets/logo.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__image">
                    <img src={Logo} alt="Logo Portfólio" />
                </div>

                <div className="footer__text-copy">
                    <span>Gabriel de Alencar &copy;2025</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer