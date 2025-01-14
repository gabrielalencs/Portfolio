// Styles

import "./styles/base/reset.scss";

// Components

import Header from "./components/Header";
import Introduction from "./components/Introduction";




const App = () => {


    return (
        <>
            <Header />
            <main className="container">
                <Introduction />
            </main>
        </>
    )
}

export default App
