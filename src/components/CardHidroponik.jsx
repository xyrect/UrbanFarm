import React from 'react';
import { Link } from 'react-router-dom';
import FarmCard from './FarmCard';

const FarmPage = () => {
  const farms = [
    {
      imageSrc: './public/panduan/card h1.png',
      description: 'Menanam Bawang merah dengan metode Hidroponik.',
      linkTo: '/bawangmerah', // Replace with the actual route
    },
    {
      imageSrc: './public/panduan/card h2.png',
      description: 'Menanam Cabe Rawit dengan Metode Hidroponik..',
      linkTo: '/caberawit', // Replace with the actual route
    },
    {
      imageSrc: './public/panduan/card h3.png',
      description: 'Menanam Buncis dengan Metode Hidroponik.',
      linkTo: '/buncis', // Replace with the actual route
    },
    {
      imageSrc: './public/panduan/card h4.png',
      description: 'Menanam Kacang Panjang dengan Metode Hidroponik.',
      linkTo: '/kacangpanjang', // Replace with the actual route
    },
  ];

  const handleCardClick = (title) => {
    console.log(`Card clicked: ${title}`);
    // Handle click logic if needed
  };

  const containerStyle = {
    textAlign: 'center',
  };

  return (
    <div style={{ textAlign: 'center', backgroundColor:'#F9E69E', marginTop:'4rem' }}>
      <h3 style={{ marginBottom: '2rem' , fontWeight:'bold'}}>Tanaman yang mudah ditanam dengan metode Hidroponik</h3>
      <h6 style={{ marginBottom: '2rem' , fontWeight:'bold'}}>
        Tentukan pilihan tanaman anda dan dapatkan informasi panduan tata cara menanamnya
      </h6>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '5rem' }}>
        {farms.map((farm, index) => (
          <Link key={index} to={farm.linkTo || '/'} style={{textDecoration:'none'}}>
            <FarmCard
              title={farm.title}
              imageSrc={farm.imageSrc}
              description={farm.description}
              onClick={() => handleCardClick(farm.title)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FarmPage;
