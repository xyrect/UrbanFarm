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

    return (
        <div className='container'>
            <h3 style={{ textAlign: 'center' }}>Our Team</h3>
            <Carousel responsive={responsive} itemClass={distance}>
                <div className='cards'>
                    <Card style={{ width: '15rem', height: '20rem', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1' }}>
                        <Card.Img variant="top" src="./public/tentang kami/co1.jpg" />
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Putra Ganda Dewata</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>Hustler/PM</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cards'>
                    <Card style={{ width: '15rem', height: '20rem', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1' }}>
                        <Card.Img variant="top" src="./public/tentang kami/ce1.jpg" />
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Sugini Injani</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>Hipster</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cards'>
                    <Card style={{ width: '15rem', height: '20rem', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1' }}>
                        <Card.Img variant="top" src="./public/tentang kami/co2.jpg" />
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Dewangga Nanda A</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>Scrum Master/Hacker</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cards'>
                    <Card style={{ width: '15rem', height: '20rem', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1' }}>
                        <Card.Img variant="top" src="./public/tentang kami/ce2.jpg" />
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Novia Indah R</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>Hipster</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cards'>
                    <Card style={{ width: '15rem', height: '20rem', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1' }}>
                        <Card.Img variant="top" src="./public/tentang kami/co3.jpg" />
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Abdul Malik D S</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>Hipster</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cards'>
                    <Card style={{ width: '15rem', height: '20rem', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1' }}>
                        <Card.Img variant="top" src="./public/tentang kami/co4.jpg" />
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Alexandro Bilvilson D</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>Scrum Mater/Hacker</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cards'>
                    <Card style={{ width: '15rem', height: '20rem', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1' }}>
                        <Card.Img variant="top" src="./public/tentang kami/ce3.jpg" />
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Nabilah Rahmah H</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>Hipster</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cards'>
                    <Card style={{ width: '15rem', height: '20rem', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1' }}>
                        <Card.Img variant="top" src="./public/tentang kami/co5.jpg" />
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>M Faiz Nurrochman</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>Hacker</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cards'>
                    <Card style={{ width: '15rem', height: '20rem', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1' }}>
                        <Card.Img variant="top" src="./public/tentang kami/ce4.jpg" />
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Vina Dhamayanti</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>Hacker</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cards'>
                    <Card style={{ width: '15rem', height: '20rem', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1' }}>
                        <Card.Img variant="top" src="./public/tentang kami/c6.jpg" />
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Revon Anandiya</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>Hacker</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Carousel>
        </div>
    );

}

export default CarouselExample;