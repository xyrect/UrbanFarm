import React from 'react';

function SecWeb() {
  return (
    <div className="container mt-5" style={{marginBottom:'3rem'}}>
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src="./public/beranda/b4.png" className="img-fluid mx-auto d-block" alt="Mokup" style={{ maxWidth: '100%' }} />
        </div>
        <div className="col-md-6 mt-3 mt-md-0 text-center">
          <h1 style={{ color: '#F7C35F' }}>Urban Farming</h1>
          <p style={{ textAlign: 'justify' }}>
          Urban farming adalah praktik bercocok tanam di dalam kota, seperti di halaman belakang, atap gedung, atau ruang dalam. Tujuannya adalah memproduksi makanan lokal untuk mengurangi ketergantungan pada pasokan makanan dari luar kota, meningkatkan keberlanjutan, dan mengurangi jejak karbon. Metode melibatkan inovasi seperti hidroponik, aquaponik, dan kultivasi vertikal. Manfaatnya termasuk pengurangan jejak karbon, penciptaan lapangan kerja, dan peningkatan kesadaran masyarakat tentang pertanian lokal
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecWeb;


