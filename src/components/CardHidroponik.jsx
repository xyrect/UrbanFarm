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
      description: 'Menanam Cabe Rawit dengan Metode Hidroponik.',
    },
    {
      imageSrc: './public/beranda/card h3.png', 
      description: 'Menanam Buncis dengan Metode Hidroponik.',
    },
    {
      imageSrc: './public/beranda/card h4.png', 
      description: 'Menanam Kacang Panjang dengan Metode Hidroponik.',
    },
   
  ];
  const containerStyle = {
    textAlign : 'center',
    
  }

  return (
    <div style={{textAlign:'center', backgroundColor: '#F9E69E',}}>
      <h3 style={{marginBottom:"2rem"}}>Tanaman yang mudah ditanam dengan </h3>
      <h3 style={{marginBottom:"2rem"}}> Metode Hidroponik </h3>
      <div style={{ display: 'flex', flexDirection: 'row',justifyContent:'center', textAlign:'left'}}>
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
