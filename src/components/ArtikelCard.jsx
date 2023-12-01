import React from 'react';
import { Card } from 'react-bootstrap';

const ArtikelCard = ({ judul, warna, link }) => {
  return (
    <Card
      style={{
        backgroundColor: warna,
        color: 'white',
        width: '18rem',
        margin: '10px',
      }}
    >
      <Card.Body>
        <Card.Title>{judul}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Lihat Artikel
        </a>
      </Card.Footer>
    </Card>
  );
};

export default ArtikelCard;
