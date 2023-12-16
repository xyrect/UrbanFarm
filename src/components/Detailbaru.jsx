import React from 'react';

const HeroImage = () => {
  return (
    <div
      lc-helper="background"
      className="container-fluid py-5 mb-4 d-flex justify-content-center position-relative"
      style={{
        backgroundImage: "url('./public/detail/bawangmerah.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginTop: '4.5rem',
      
      }}
    >
      {/* Dark overlay */}
      <div
        className="position-absolute top-0 start-0 end-0 bottom-0"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      ></div>

      <div
        className="p-5 mb-4 lc-block col-xxl-12 col-lg- col-12 " style={{zIndex:'10'}}
      >
        <div className="lc-block">
          <div editable="rich">
            <h5 className="fw-bolder display-3 mt-2 mb-4" style={{ color: '#F7C35F',textAlign:'center' }}>Menanam Bawang Merah dengan Metode Hidroponik</h5>
          </div>
        </div>
        <div className="lc-block col-xxl-12 col-lg- col-12">
          <div editable="rich">
            <p className="lead" style={{ color: '#FFF',textAlign:'center',fontSize:'25px' }}>
              Menanam bawang merah di rumah, direkomendasikan menggunakan metode hidroponik karena<br />
              bawang merah mudah dibudidayakan. Anda dapat menggunakan umbi atau biji sebagai bibit, dan <br />
              metode ini lebih efisien dalam penggunaan lahan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
