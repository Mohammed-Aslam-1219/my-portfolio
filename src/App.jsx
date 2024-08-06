import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Project from "./Components/Project/Project";
import scroll_up from "./assets/scrollUp.png";

function App() {
  return (
    <div className="App">
      <img
        src={scroll_up}
        className="pageBtn"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
