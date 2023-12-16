import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

function CarouselExample() {
  const [imageIndex, setImageIndex] = useState(0);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 20,
      centerMode: true, // Set centerMode untuk tablet
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 10,
      focusOnSelect: true, // Fokus pada item yang dipilih
      centerMode: true, // Set centerMode untuk mobile
    }
  };

  const distance = {
    paddingLeft: '10px',
    paddingRight: '10px',
  };

  const images = [
    './public/tentang kami/image1.png', 
    './public/tentang kami/image1.png', 
    './public/tentang kami/image1.png',  
    './public/tentang kami/image1.png', 
    './public/tentang kami/image1.png', 
    './public/tentang kami/image1.png',
    './public/tentang kami/image1.png', 
    './public/tentang kami/image1.png', 
    './public/tentang kami/image1.png',
    './public/tentang kami/image1.png'
  ];

  const handleImageChange = (nextImageIndex) => {
    setImageIndex(nextImageIndex);
  };

  return (
    <Container className="mt-5">
      <h3 style={{ textAlign: 'center' }}>Our Team</h3>
      <Carousel
        responsive={responsive}
        itemClass={distance}
        infinite={false}
        containerClass="carousel-container"
        partialVisible
        autoPlay
        autoPlaySpeed={2000}
        beforeChange={(nextSlide) => handleImageChange(nextSlide)}
      >
        {images.map((image, index) => (
          <div className='cards' key={index}>
            <Card style={{ width: '15rem', height: '20rem', marginLeft: 'auto', marginRight: 'auto' }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Team Member {index + 1}</Card.Title>
                <Card.Text style={{ textAlign: "center" }}>Role</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Carousel>
    </Container>
  );
}

export default CarouselExample;
