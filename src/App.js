import "./App.css";
import MyNavbar from "./components/mynavbar/MyNavbar";
import MyCarousel from "./components/mycarousel/MyCarousel";
import Title from "./components/title-message/Title";
import About from "./pages/about/About";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";
import Skills from "./pages/skills/Skills";
import Slide from "react-reveal/Slide";
import Experience from "./pages/experience/Experience";
import ProjectTimeline from "./pages/project-timeline/ProjectTimeline";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
 import Particles from "react-particles-js";
 import { Particlesoption } from "./Particlesoption";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyCarousel />
      <Title />
      <MyNavbar />
     
      <Particles className="particles particles-box" params={Particlesoption} />
     
      

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>

      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>

      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>

      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <ProjectTimeline />
        </Slide>
      </Container>

      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <Contact />
        </Fade>
      </Container>
      <hr />
      <Footer />
    </div>
  );
};

export default App;
