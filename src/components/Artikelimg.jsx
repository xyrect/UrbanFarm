import React from 'react';

const HeroImage = () => {
  return (
    <div
      lc-helper="background"
      className="container-fluid py-5 mb-4 d-flex justify-content-center align-items-center" 
      style={{
        backgroundImage: "url('../public/artikel/Background.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginTop: '4.5rem',
        height: '400px',
      }}
    >
      <div
        className="p-5 mb-4 lc-block col-xxl-12 col-lg- col-12 text-center" 
      >
        <div className="lc-block">
          <div editable="rich">
          <h4 className="fw-bolder display-3" style={{ color: '#F7C35F' }}>Temukan artikel dan berita menarik seputar </h4>
            <h4 className="fw-bolder display-3" style={{ color: '#FFF' }}> Urban Farming</h4>
            <p className="lead" style={{ fontSize: '30px',color: '#FFF' }}>
              Memberikan panduan berkebun di lahan yang minim dengan metode Hidroponik dan Polybag
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
