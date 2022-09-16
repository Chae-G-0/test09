import "./App.css";
import Header from "./doc/Header";
import Footer from "./doc/Footer";
import MainVisual from "./doc/MainVisual";
import MainContent from "./doc/MainContent";
import MainBest from "./doc/MainBest";

function App() {
    return (
        <>
            <Header />
            <main>
                <MainVisual />
                <MainContent />
                <MainBest />
            </main>
            <Footer />
        </>
    );
}

export default App;
