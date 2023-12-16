import React from 'react';

function SecWeb() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src="./public/Tentang Kami/mokup.png" className="img-fluid mx-auto d-block" alt="Mokup" style={{ maxWidth: '100%' }} />
        </div>
        <div className="col-md-6 mt-3 mt-md-0 text-center">
          <h1 style={{ color: '#F7C35F' }}>Website</h1>
          <p style={{ textAlign: 'justify' }}>
            Website yang menyediakan panduan berkebun untuk ruang terbatas (Urban Farming) dan juga menghubungkan
            langsung ke marketplace untuk alat, bahan, dan bibit berkebun sehingga menjadikan berkebun sebagai bagian
            dari gaya hidup yang berkelanjutan
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecWeb;
