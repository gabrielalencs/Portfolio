// Styles

import "./styles/base/reset.scss";

// Components

import Header from "./components/Header";
import Introduction from "./components/IntroductionSection";
import About from "./components/AboutSection";
import Skills from "./components/SkillsSection";
import Projects from "./components/ProjectsSection";
import Contact from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Header />
            <main className="container">
                <Introduction />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default App
