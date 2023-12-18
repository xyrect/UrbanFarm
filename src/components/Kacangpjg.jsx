// YourPage.js

import React from 'react';
import ImageGrid from './Imagegrid'; // Adjust the path as needed
import './detailpanduan.css'

const YourPage = () => {
  const yourImages = [
   "./public/kpanjangpoly/kp1.jpg",
   "./public/kpanjangpoly/kp2.jpg",
   "./public/kpanjangpoly/kp3.jpg",
   "./public/kpanjangpoly/kp4.jpg"
  ];

  return (
    <div>
      <ImageGrid images={yourImages} />
      <div className="tanam" style={{ padding: '5rem 2rem' }}>
                <h1 style={{fontWeight:'bold'}}>Cara menanam Kacang Panjang Polybag</h1>
                <ol>
                    <li >Menyiapkan media tanam</li>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100" style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="no-urut">1</div>
                                <img src="./public/kpanjangpoly/media1.png" className="card-img-top" alt="step 1" />
                                <div className="card-body">
                                    <p className="card-text">
                                        Sediakan polybag dengan diameter 30x30
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="no-urut">2</div>
                                <img src="./public/kpanjangpoly/media2.png" className="card-img-top" alt="step 2" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Masukkan media tanam ke dalam polybag. Media tanam yang digunakan adalah campuran tanah, kompos, dan pasir dengan perbandingan 1:1:1. Campur hingga merata.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <li >Menyemaikan benih kacang panjang di media tanam</li>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <img src="./public/kpanjangpoly/s1.png" className="card-img-top" alt="step tanam 1" />
                                <div className="no-urut">1</div>
                                <div className="card-body">
                                    <p className="card-text">
                                    Buat lubang pada media sedalam setengah jari telunjuk, bibit kacang panjang langsung disemai di media polybag yang sudah disiapkan sebanyak 2-3 bibit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <img src="./public/kpanjangpoly/s2.png" className="card-img-top" alt="step tanam 2" />
                                <div className="no-urut">2</div>
                                <div className="card-body">
                                    <p className="card-text">
                                    Selanjutnya tutup dengan media tipis-tipis saja.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <img src="./public/kpanjangpoly/s3.png" className="card-img-top" alt="step tanam 3" />
                                <div className="no-urut">3</div>
                                <div className="card-body">
                                    <p className="card-text">
                                    Siram dengan air untuk menjaga kelembabannya. Letakkan di tempat terbuka dengan sinar matahari yang cukup, suhu optimal antara 25-30°C. Untuk penyiraman tanaman lakukan dua kali sehari yaitu pada pagi dan sore hari saja.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <img src="./public/kpanjangpoly/s4.jpg" className="card-img-top" alt="step tanam 4" />
                                <div className="no-urut">4</div>
                                <div className="card-body">
                                    <p className="card-text">
                                    Dalam beberapa hari, bibit kacang panjang akan segera berkecambah dan tumbuh. Mulai semai benih sampai kondisi seperti gambar di bawah kira – kira butuh waktu 7 hari.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ol>
            </div>

            <div className="rawat" style={{ padding: '5rem 2rem' }}>
                <h1 style={{fontWeight:'bold'}}>Perawatan Kacang Panjang Polybag</h1>
                <ul>
                    <li>Hal-hal yang harus Anda perhatikan dalam perawatan kacang panjang polybag </li>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="rawat-step"><i className="fa-solid fa-droplet" style={{ color: '#ffffff' }}></i> Pemberian Nutrisi</div>
                                <img src="./public/kpanjangpoly/ajir.jpg" className="card-img-top" alt="tips rawat" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Memberi ajir pada kacang panjang
                                    Ajir adalah area rambatan kacang panjang, sehingga kacang panjang akan menggantung pada ajir dan mempermudah perawatan dan pemanenan. Pemberian ajir dilakukan ketika kacang panjang sudah mulai tumbuh sulurnya.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="rawat-step"><i className="fa-solid fa-flask" style={{ color: '#ffffff' }}></i> Pemupukan Susulan</div>
                                <img src="./public/kpanjangpoly/pupuk.jpg" className="card-img-top" alt="tips rawat" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Memberi pupuk pada kacang panjang. Pupuk yang digunakan adalah Pupuk NPK 15-15-15.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="rawat-step"><i className="fa-solid fa-seedling" style={{ color: '#ffffff' }}></i> Pemupukan</div>
                                <img src="./public/kpanjangpoly/pupuk.jpg" className="card-img-top" alt="tips rawat" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Pemupukan dilakukan setiap 1 minggu sekali. Tanamkan di bagian pinggir polybag sebanyak 1 sdt jangan terlalu dekat dengan perakaran, karena kacang panjang dapat gosong
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="rawat-step"><i className="fa-solid fa-seedling" style={{ color: '#ffffff' }}></i> Perawatan Lanjutan</div>
                                <img src="./public/kpanjangpoly/panen.jpg" className="card-img-top" alt="tips rawat" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Jika ada tanaman yang rusak atau terkena bibit penyakit segeralah ganti dengan tanaman yang baru. Hal ini dilakukan ketika tanaman menginjak umur 5 sampai 7 hari. Selain itu, jangan lupa untuk melakukan penyiangan tanaman. Bersihkan sekitar pot atau polybag dari rumput liar atau gulma yang mengganggu. Gulma dan rumput liar akan merebut pasukan nutrisi yang didapat oleh kacang panjang. Sehingga pertumbuhannya tidak maksimal.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="rawat-step"><i className="fa-solid fa-seedling" style={{ color: '#ffffff' }}></i> Panen</div>
                                <img src="./public/kpanjangpoly/panen.jpg" className="card-img-top" alt="tips rawat" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Kacang panjang dapat dipanen jika sudah seperti ini. Umumnya kacang panjang tidak panen sekaligus, tetapi siap dipanen dalam beberapa kali, jika penanaman yang dilakukan bagus maka dapat panen hingga belasan kali.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>

            

<div className="alat-bahan">
                <h1><i className="fa-solid fa-wrench"></i>Alat dan Bahan</h1>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-4">
                            <div className="card" style={{ width: '100%', backgroundColor: '#334B35', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}>
                                <div className="card-body" style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                    <h4 className="card-title">Pupuk NPK 15-15-15</h4>
                                    <img className="card-img-top" src="./public/kpanjangpoly/pupuk.jpg" alt="Pupuk" />
                                    <hr />
                                    <a href="#" className="btn btn-default"style={{color:'#fff'}}>Beli online</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card" style={{ width: '100%', backgroundColor: '#334B35' }}>
                                <div className="card-body" style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                    <h4 className="card-title">Bibit</h4>
                                    <img className="card-img-top" src="./public/kpanjangpoly/bibit.jpg" alt="bibit"/>
                                    <hr />
                                    <a href="#" className="btn btn-default"style={{color:'#fff'}}>Beli online</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card" style={{ width: '100%', backgroundColor: '#334B35' }}>
                                <div className="card-body" style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                    <h4 className="card-title">Bibit</h4>
                                    <img className="card-img-top" src="./public/kpanjangpoly/alatajir.jpg" alt="ajir" />
                                    <hr />
                                    <a href="#" className="btn btn-default"style={{color:'#fff'}}>Beli online</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   
    </div>
    
  );
};

export default YourPage;
