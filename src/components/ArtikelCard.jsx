import React from 'react';
import Card from '../components/ArtikelList.css';

const ArtikelCard = () => {
 return (
  <div className="title2 main-container">
  <h3 className="section-title" style={{textAlign:'center', margin:'20px'}}>Berita Terkini</h3>
  <div className="container">
  <div className="cards">
  <div className="cards1">
      <img src="./public/beranda/b1.png" alt="Card Image"></img>
      <div className="overlay">
        <h6>Kamis, 09 November 2023</h6>
        <p>Maksimalkan Lahan Rawa, BRI Dukung Pemberdayaan Urban Farming di Surabaya</p>
      </div>
    </div>

    <div className="cards2">
      <img src="./public/beranda/b2.png" alt="Card Image"></img>
      <div className="overlay">
        <h6>Selasa, 13 Juni 2023</h6>
        <p>Keren! Tempat Pembuangan Sampah Di Sulap Jadi Urban Farming</p>
      </div>
    </div>

    <div className="cards3">
      <img src="./public/beranda/b3.png" alt="Card Image"></img>
      <div className="overlay">
        <h6>Kamis, 09 Maret 2023</h6>
        <p>Yuk Belajar Atasi Hama Urban Farming</p>
      </div>
    </div>
    </div>
  </div>
</div>
 );
};

export default ArtikelCard;