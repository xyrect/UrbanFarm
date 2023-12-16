import React from "react";

function SectionUrban() {

  return (
    <div className="container mt-5">
      <div className="row">
      <div className="col-md-6">
          <img src="./public/panduan/image4.png" className="img-fluid" style={{ maxWidth: '100%', marginTop: '100px',  marginBottom: '20px' }} alt="UrbanFarm" />
        </div>

        <div className="col-md-6 mb-4 d-flex align-items-center justify-content-center">
          <div>
            <h1 style={{ color: '#334B35', textAlign: 'center' }}>Metode</h1>
            <h1 style={{ color: '#F7C35F', textAlign: 'center' }}>UrbanFarm</h1>
            <p style={{ textAlign: 'justify' }}>
              Berkebun perkotaan, atau urban farming, melibatkan sejumlah metode yang efisien dalam memanfaatkan ruang terbatas di lingkungan perkotaan. Salah satunya adalah tanaman vertikal, yang memungkinkan penanaman secara bertingkat pada dinding atau struktur. Rooftop farming memanfaatkan atap gedung untuk menanam sayuran atau buah-buahan, mengoptimalkan ruang terbuka yang sering tidak dimanfaatkan. Metode hidroponik dan akuaponik menghilangkan ketergantungan pada tanah, dengan memberikan nutrisi langsung melalui air atau menggunakan limbah ikan sebagai sumber nutrisi. Pertanian komunitas melibatkan partisipasi kelompok dalam pengelolaan kebun bersama, memperkuat ikatan sosial sekaligus menyediakan sumber pangan lokal. Pemanfaatan teknologi, seperti irigasi otomatis dan pemantauan pertumbuhan tanaman melalui sensor, juga menjadi bagian integral dari upaya meningkatkan produktivitas dan keberlanjutan dalam berkebun urban farming.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default SectionUrban;
