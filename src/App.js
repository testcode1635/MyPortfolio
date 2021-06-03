
import './App.css';
import MyNavbar  from "./components/mynavbar/MyNavbar";
import MYCarousel from "./components/mycarousel/MyCarousel";
import Title from "./components/title-message/Title";
import About from "./pages/about/About";
import { Parallax } from 'react-parallax';
import Fade from 'react-reveal/Fade';
import Container from "react-bootstrap/Container";
import Skills from "./pages/skills/Skills";
import Slide from "react-reveal/Slide";
import Experience from "./pages/experience/Experience";
import Particles from "react-particles-js";
import { Particlesoption } from "./Particlesoption";
import ProjectTimeline from "./pages/project-timeline/ProjectTimeline";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";

const App =()=> {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar/>
         <Particles
        className="particles particles-box"
        params={Particlesoption}
      />
     <MYCarousel/>
     <Title/><hr></hr>
     <div>
     <Parallax blur={{ min: -30, max: 30 }} bgImage={require("./assets/img/parallex/background.webp")} bgImageAlt="" strength={-200}>
        <Container className="container-box rounded">
          <Fade duration={500}>
              <About />
          </Fade>
        </Container>
     </Parallax>
     </div><hr></hr>
     <div>
     <Container className="container-box rounded">
        <Slide bottom duration={500}>
           <Skills/>
          </Slide>
        </Container>
     </div><hr></hr>
     <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
          <Experience/>
          </Fade>
        </Container>
     </div>
    <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
          <hr/>
          <ProjectTimeline/>
          </Fade>
        </Container>
     </div>
     <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
          <hr/>
           <Contact/>
          </Slide>
        </Container>
     </div><hr/>
     <Footer/>
     
     
      
    </div>
  );
}

export default App;
