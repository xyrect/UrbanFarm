import React from 'react';
import { Button } from 'react-bootstrap'; 

const HeroImage = () => {
  const buttonContainerStyle = {
    position: 'absolute',
    top: '35rem',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    width: '100%',
  };

  const buttonStyle = {
    backgroundColor: '#334B35',
    height: '150px',
    width: '150px',
    color: '#fff',
    borderRadius: '8px',
    padding: '10px 20px',
    fontSize: '12px',
    fontWeight: 'bold',
    border: 'none',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  };

  return (
    <div
      lc-helper="background"
      className="container-fluid py-5 mb-4 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: "url('../public/panduan/image card1.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginTop: '4.5rem',
        height: '600px',
      }}
    >
      <div className="p-5 mb-4 lc-block col-xxl-12 col-lg- col-12 text-center">
        <div className="lc-block">
          <div editable="rich">
            <h4 className="fw-bolder display-3" style={{ color: '#F7C35F' }}>Mari menanam di lahan yang minim</h4>
            <h4 className="fw-bolder display-3" style={{ color: '#FFF' }}>Temukan metode yang efektif</h4>
            <p className="lead" style={{ fontSize: '30px', color: '#FFF' }}>
              Ingin menanam dengan metode apa?
            </p>
          </div>
        </div>
      </div>

      <div style={buttonContainerStyle} className='d-flex justify-content-center gap-5'>
        <Button style={buttonStyle}><img src="./public/panduan/cardH.png" alt="" />Hidroponik</Button>
        <Button style={buttonStyle}><img src="./public/panduan/cardP.png" alt="" />Polybag</Button>
      </div>
    </div>
  );
};

export default HeroImage;
