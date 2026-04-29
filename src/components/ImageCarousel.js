import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/Carousel.css';

const ImageCarousel = () => {
  const carouselImages = [
    {
      src: require('../assets/images/courousel1.jpg'),
      alt: 'Workshop Image 1'
    },
    {
      src: require('../assets/images/courousel2.jpg'),
      alt: 'Workshop Image 2'
    },
    {
      src: require('../assets/images/courousel3.jpg'),
      alt: 'Workshop Image 3'
    }
  ];

  return (
    <div className="carousel-container">
      <Carousel interval={3000} controls={true} indicators={true}>
        {carouselImages.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block mx-auto carousel-image"
              src={image.src}
              alt={image.alt}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
