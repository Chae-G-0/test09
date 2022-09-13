import "./App.css";
import Header from "./doc/Header";
import Main from "./doc/Main";
import Footer from "./doc/Footer";
import MainVisual from "./doc/MainVisual";

function App() {
    return (
        <>
            <Header />
            <main>
                <MainVisual/>
            </main>
            <Footer />
        </>
    );
}

export default App;
