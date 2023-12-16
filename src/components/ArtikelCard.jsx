import React, { useState, useEffect } from 'react';
import '../components/ArtikelList.css';

function ArtikelCard() {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    // Mengambil data berita dari API saat komponen dimount
    fetch('http://localhost:3001/api/berita')
      .then((response) => response.json())
      .then((data) => setBerita(data))
      .catch((error) => console.error('Error fetching berita:', error));
  }, []); // Array dependency kosong memastikan bahwa efek ini hanya berjalan sekali saat komponen dimount

  const redirectArticle = (sumber) => {
    window.open(sumber, '_blank');
  };

  return (
    <div className="title2 main-container">
      <h3 className="section-title" style={{ textAlign: 'center', margin: '20px' }}>Temukan Berita Seputar Urban Farming </h3>
      <h6 className="section-title" style={{ textAlign: 'center', margin: '20px' }}>Ingin Update berita terbaru seputar Urban Farming bisa anda dapatkan disini </h6>
      <div className="container">
        <div className="cards">
          {berita.map((item) => (
            <div className={`cards${item.id}`} key={item.id} onClick={() => redirectArticle(item.sumber)}>
              <img src={item.gambar} alt="Card Image"></img>
              <div className="overlay">
                <h6>{item.tanggal}</h6>
                <p>{item.judul}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArtikelCard;
