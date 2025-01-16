import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Slideshow = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 img-size"
          src="./src/img/Pic1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-size"
          src="./src/img/Pic2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-size"
          src="./src/img/Pic4.jpg"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 img-size"
          src="./src/img/Pic5.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slideshow;
