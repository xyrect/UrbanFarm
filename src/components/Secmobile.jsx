import React from 'react';

function SecMobile() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 order-md-1 text-center">
          <br />
          <h1 style={{ color: '#F7C35F' }}>App Mobile</h1>
          <p style={{ textAlign: 'justify' }}>
            Aplikasi Mobile yang menyediakan solusi lengkap untuk berkebun untuk ruang terbatas (Urban Farming).
            Dilengkapi dengan fitur pengingat otomatis agar kualitas tanaman dapat dijaga dengan baik serta akses
            langsung ke marketplace untuk alat, bahan, dan bibit berkebun sehingga menjadikan berkebun sebagai bagian
            dari gaya hidup yang berkelanjutan
          </p>
          <img
            src="./public/Tentang Kami/Gplay.png"
            alt="Google Play"
            style={{ maxWidth: '100%', marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', display: 'block',marginBottom : '2rem'  }}
          />
        </div>
        <div className="col-md-6 order-md-2">
          <img
            src="./public/Tentang Kami/mokup mobile.png"
            className="img-fluid"
            alt="Mokup Mobile"
            style={{ maxWidth: '100%', height: 'auto'}}
          />
        </div>
      </div>
    </div>
  );
}

export default SecMobile;
