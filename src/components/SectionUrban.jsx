import React from "react";

function SectionUrban() {
  const herostyle = {
    height: '720px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    gap: '20px', 
    padding: '0 20px', 
    textAlign: 'center',
  };

  const heroright = {
    display: 'flex',
    justifyContent: 'center',
  };

  const imagestyle = {
    width: '90%',
    maxHeight: '90%',
  };

  return (
    <div style={herostyle}>
      <div>
        <h1 style={{ fontSize: '50px', color: '#334B35' }}> URBAN <span style={{ fontSize: '50px', color: '#F7C35F' }} >FARMING</span></h1>
        <p>
          Merubah Tanah Kosong Menjadi Kebun Kota Memaksimalkan Ruang yang Tersedia untuk Urban
          Farming.
        </p>
        <p>
          Tujuannya termasuk meningkatkan akses terhadap makanan segar, mengurangi jarak
          tempuh makanan, meningkatkan kualitas udara, mengurangi jejak karbon, dan memberikan
          pendidikan kepada masyarakat tentang pertanian. Metode urban farming mencakup hidroponik,
          aquaponik, penanaman vertikal, dan taman komunitas. Praktik ini bertujuan untuk mempromosikan
          keberlanjutan dan ketahanan pangan di tengah perkembangan perkotaan.
        </p>
      </div>

      <div style={heroright}>
        <img src="./public/panduan/image1.png" alt="Urban Farming" style={imagestyle} />
      </div>
    </div>
  );
}

export default SectionUrban;
