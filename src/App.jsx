// Styles

import "./styles/base/reset.scss";

// Components

import Header from "./components/Header";
import Introduction from "./components/Introduction";
import About from "./components/About";

const App = () => {
    return (
        <>
            <Header />
            <main className="container">
                <Introduction />
                <About />
            </main>
        </>
    )
}

export default App
