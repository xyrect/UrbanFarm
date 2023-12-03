import React from 'react';
import FarmCard from './FarmCard'; 

const FarmPage = () => {
  const farms = [
    {
      imageSrc: './public/beranda/card h1.png', 
      description: 'Menanam Bawang dengan metode Hidroponik.',
    },
    {
      imageSrc: './public/beranda/card h2.png', 
      description: 'Menanam Cabe Rawit dengan Metode Polybag.',
    },
    {
      imageSrc: './public/beranda/card h3.png', 
      description: 'Menanam Buncis dengan Metode Polybag.',
    },
   
  ];
  const containerStyle = {
    textAlign : 'center',
    
  }

  return (
    <div style={{textAlign:'center'}}>
      <h1 style={{marginBottom:"2rem"}}>Mau Menanam Apa Hari ini?</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent:'center', textAlign:'left'}}>
        {farms.map((farm, index) => (
          <FarmCard
            key={index}
            title={farm.title}
            imageSrc={farm.imageSrc}
            description={farm.description}
            onClick={() => handleCardClick(farm.title)} 
          />
        ))}
      </div>
    </div>
  );
};

export default FarmPage;
