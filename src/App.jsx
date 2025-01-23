// Styles

import "./styles/base/reset.scss";

// Components

import Header from "./components/Header";
import Introduction from "./components/IntroductionSection";
import About from "./components/AboutSection";
import Skills from "./components/SkillsSection";

const App = () => {
    return (
        <>
            <Header />
            <main className="container">
                <Introduction />
                <About />
                <Skills />
            </main>
        </>
    )
}

export default App
