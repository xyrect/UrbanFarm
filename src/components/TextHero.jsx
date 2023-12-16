import React from 'react';

const HeroImage = () => {
  return (
    <div
      lc-helper="background"
      className="container-fluid py-5 mb-4 d-flex justify-content-center"
      style={{
        backgroundImage: "url('../public/beranda/image1.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginTop: '4.5rem'
      }}
    >
      <div
        className="p-5 mb-4 lc-block col-xxl-12 col-lg- col-12 " 
      >
        <div className="lc-block">
          <div editable="rich">
            <h2 className="fw-bolder display-3" style={{  color: '#F7C35F' }}>Selamat Datang</h2>
            <h2 className="fw-bolder display-3" style={{  color: '#FFF' }}>Di Website Kami</h2>
          </div>
        </div>
        <div className="lc-block col-md-8">
          <div editable="rich">
            <p className="lead" style={{  color: '#FFF' }} >
            Memberikan panduan berkebun di lahan yang minim <br />
            dengan Metode Hidroponik dan Polybag
            </p>
          </div>
        </div>
        <div className="lc-block">
        <a href="/">
            <img src='./public/beranda/playstore.png' alt="Play Store" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
