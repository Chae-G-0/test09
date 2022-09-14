import "./App.css";
import Header from "./doc/Header";
import Footer from "./doc/Footer";
import MainVisual from "./doc/MainVisual";
import MainContent from "./doc/MainContent";

function App() {
    return (
        <>
            <Header />
            <main>
                <MainVisual/>
                <MainContent/>
            </main>
            <Footer />
        </>
    );
}

export default App;
