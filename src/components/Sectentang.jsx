import React from 'react';

function Sectentang() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mb-4 d-flex align-items-center justify-content-center">
          <div>
            <h1 style={{ color: '#F7C35F', textAlign: 'center' }}>UrbanFarm</h1>
            <p style={{ textAlign: 'justify' }}>
              Aplikasi mobile dan situs web kami menyediakan solusi untuk berkebun dalam ruang terbatas. Terdapat panduan bercocok tanam yang interaktif, serta akses langsung ke marketplace untuk pembelian alat dan bahan. Pada aplikasi mobile terdapat fitur pengingat otomatis untuk memastikan kualitas tanaman terjaga dengan baik. Selain itu, terdapat fitur jual beli panen sebagai wadah bagi pengguna yang ingin menjual hasil panennya.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <img src="./public/tentang kami/image1.png" className="img-fluid" style={{ maxWidth: '100%' }} alt="UrbanFarm" />
        </div>
      </div>
    </div>
  );
}

export default Sectentang;
