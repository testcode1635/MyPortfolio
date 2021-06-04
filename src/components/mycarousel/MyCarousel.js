import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.style.css";
import Slider1 from "../../assets/img/carousal/slide1.webp";
import Slider2 from "../../assets/img/carousal/slide2.webp";
import Slider3 from "../../assets/img/carousal/slide3.webp";
import ScrollDown from "../scroll-down/ScrollDown";

const MyCarousel = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slider1} alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slider2} alt="Second slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slider3} alt="Third slide"/>
        </Carousel.Item>
      </Carousel>
      <ScrollDown/>
    </div>
  );
};

export default MyCarousel;
