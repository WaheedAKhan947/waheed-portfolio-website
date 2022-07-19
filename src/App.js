import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Experience from "./components/experience/experience";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Experience/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
