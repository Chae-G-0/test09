import "./App.css";
import Header from "./doc/Header";
import Footer from "./doc/Footer";
import MainVisual from "./doc/MainVisual";
import MainContent from "./doc/MainContent";
import MainBest from "./doc/MainBest";
import MainStyle from "./doc/MainStyle";

function App() {
    return (
        <>
            <Header />
            <main>
                <MainVisual />
                <MainContent />
                <MainBest />
                <MainStyle/>
            </main>
            <Footer />
        </>
    );
}

export default App;
