// YourPage.js

import React from 'react';
import ImageGrid from './Imagegrid'; // Adjust the path as needed
import './detailpanduan.css'

const YourPage = () => {
  const yourImages = [
    "./public/bmppage/g1.png",
    "./public/bmppage/g2.png",
    "./public/bmppage/g3.png",
    "./public/bmppage/g4.png",
    
  ];

  return (
    <div>
      <ImageGrid images={yourImages} />
      <div className="tanam" style={{ padding: '5rem 2rem' }}>
                <h1 style={{fontWeight:'bold'}}>Cara menanam Bawang Merah Hidroponik</h1>
                <ol>
                    <li >Persiapkan metode tanam</li>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100" style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="no-urut">1</div>
                                <img src="./public/bmppage/plan1.png" className="card-img-top" alt="step 1" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Siapkan polybag ukuran 25cm
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="no-urut">2</div>
                                <img src="./public/bmppage/plan2.png" className="card-img-top" alt="step 2" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Masukkan media tanam ke dalam polybag. Media tanam yang  digunakan adalah campuran tanah, sekam,  pupuk kandang, dan arang kayu dengan perbandingan 2:1:1:1.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="no-urut">3</div>
                                <img src="./public/bmppage/plan3.png" className="card-img-top" alt="step 2" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Setelah polybag diisi media tanam, beri sedikit pupuk TSP untuk merangsang pertumbuhan akar, kira-kira 15-20  granular pupuk TSP.3.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="no-urut">4</div>
                                <img src="./public/bmppage/plan4.png" className="card-img-top" alt="step 2" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Setelah diberi pupuk TSP, siram media tanam di polybag sampai basah.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <li >Proses penanaman bawang merah</li>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <img src="./public/detail/hpt-step1.jpg" className="card-img-top" alt="step tanam 1" />
                                <div className="no-urut">1</div>
                                <div className="card-body">
                                    <p className="card-text">
                                    Pilih bawang merah yang sudah lama, kurang lebih  2 - 3 bulan
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <img src="./public/bmppage/step2.png" className="card-img-top" alt="step tanam 2" />
                                <div className="no-urut">2</div>
                                <div className="card-body">
                                    <p className="card-text">
                                    Potong ujung bawang merah, lalu tancapkan bawang merah ke dalam media tanam sedalam separuh dari bawang merah.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <img src="./public/bmppage/step3.png" className="card-img-top" alt="step tanam 3" />
                                <div className="no-urut">3</div>
                                <div className="card-body">
                                    <p className="card-text">
                                    Setelah bawang merah dipotong, tanam ke dalam media tanam. Satu polybag berukuran 25 cm perlu ditanam 2 buah potongan bawang merah. Tanam di bagian tengah media tanam.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <img src="./public/bmppage/step4.png" className="card-img-top" alt="step tanam 4" />
                                <div className="no-urut">4</div>
                                <div className="card-body">
                                    <p className="card-text">
                                    Setelah potongan bawang merah ditanam ke dalam media tanam, diamkan sampai 8 hari hingga muncul kecambah. Siramkan air secukupnya sehari  sekali.Letakkan polybag berisi bawang merah ditempat yang erbuka yang mendapatkan pancaran sinar matahari  yang utuh. Penempatan tanaman bawang merah di polybag di tempat teduh atau kurang sinat matahari membuat pertumbuhannya kurang bagus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ol>
            </div>

            <div className="rawat" style={{ padding: '5rem 2rem' }}>
                <h1 style={{fontWeight:'bold'}}>Perawatan Bawang Merah Hidroponik</h1>
                <ul>
                    <li>Hal-hal yang harus Anda perhatikan dalam perawatan bawang merah hidroponik </li>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="rawat-step"><i className="fa-solid fa-droplet" style={{ color: '#ffffff' }}></i> Penyiraman</div>
                                <img src="./public/bmppage/rawat1.png" className="card-img-top" alt="tips rawat" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Tanaman bawang merah memerlukan pengairan setiap pagi dan sore hari. Pada musim kemarau, penyiraman dapat dilakukan sebanyak dua kali. Selain pagi dan sore, penyiraman juga dilakukan setelah hujan turun untuk membasuh percikan air hujan yang menempel pada daun. Tujuannya untuk menghilangkan embun tepung pada daun dan untuk mengurangi risiko serangan penyakit tular tanah dan fusarium.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="rawat-step"><i className="fa-solid fa-flask" style={{ color: '#ffffff' }}></i> Pemupukan Susulan</div>
                                <img src="./public/bmppage/rawat2.png" className="card-img-top" alt="tips rawat" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Pemupukan dasar diberikan pada saat tanam, yaitu dengan memberikan 3 gram pupuk TSP atau pupuk SP- 36 per polybag. Pemupukan susulan pertama dilakukan saat tanaman berumur 14 hari dengan memberikan pupuk NPK sebanyak setengah sendok makan (3 gram).
                                    Pemupukan susulan kedua dilakukan pada saat tanaman berumur satu bulan setelah tanam, yaitu dengan pemberian NPK sebanyak 3 gram.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="rawat-step"><i className="fa-solid fa-seedling" style={{ color: '#ffffff' }}></i> Penyiangan</div>
                                <img src="./public/bmppage/rawat3.png" className="card-img-top" alt="tips rawat" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Penyiangan tanaman bawang merah dilakukan dengan mencabut rumput atau gulma yang tumbuh di sekitar tanaman. Lakukan satu sampai dua kali penyiangan sebelum pemupukan kedua.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>

            <div className="container-fluid kendali">
      <h1>Pengendalian hama pada Hidroponik</h1>

  <div className="row">

    {/* Title */}
    
    {/* Ulat */}
    <div className="col-lg-6 mb-4">
      <div className="d-flex flex-column align-items-start">
        <h3>Ulat</h3>
        <div>
          <img src="./public/detail/kendali1.png" alt="ulat" className="img-fluid" />
        </div>
        <div className="mt-3">
          <p>Kerusakan pada tanaman yang disebabkan oleh ulat biasanya berupa lubang pada bagian daun.</p>
          <p>Cara Mengatasinya</p>
          <ul>
            <li>Buang bagian daun yang sudah rusak dan berlubang karena dimakan ulat</li>
            <li>Tanamlah tanaman inang untuk mengalihkan hama dari tanaman hidroponik seperti kenikir</li>
            <li>Menyemprot langsung dengan menggunakan obat pemberantas hama pada waktu malam hari</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Tungau */}
    <div className="col-lg-6 mb-4">
      <div className="d-flex flex-column align-items-start">
        <h3>Tungau</h3>
        <div>
          <img src="./public/detail/kendali2.png" alt="Tungau" className="img-fluid" />
        </div>
        <div className="mt-3">
          <p>Tungau bisa menyerang bagian bawah daun tanaman hidroponik. Gejala serangannya mula-mula muncul bercak-bercak kecil pada daun. Kemudian, daun tanaman hidroponik akan menguning lalu gugur.</p>
          <span>Cara mengatasinya:</span>
          <ul>
            <li>Kumpulkan daun yang terserang, kemudian bakar</li>
            <li>Untuk menghindari serangan menyebar, segera buang tanaman hidroponik terserang tungau</li>
            <li>Menanam tanaman hidroponik di dalam green house</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Hama Kutu */}
    <div className="col-lg-6 mb-4">
      <div className="d-flex flex-column align-items-start">
        <h3>Hama Kutu</h3>
        <div>
          <img src="./public/detail/kendali3.png" alt="Hama Kutu" className="img-fluid" />
        </div>
        <div className="mt-3">
          <p>Biasanya hama kutu akan menyebabkan tanaman menjadi cacat. Selain cacat, kutu akan membuat tanaman menjadi kerdil, batang lemah, daun menjadi keriting, dan menggulung.</p>
          <span>Cara mengatasinya:</span>
          <p>Hama ini bisa dilakukan dengan cara memusnahkan semua tanaman hidroponik yang telah terinfeksi oleh hama. Hal ini dilakukan untuk mencegah penyebarannya.</p>
        </div>
      </div>
    </div>

    {/* Belalang */}
    <div className="col-lg-6 mb-4">
      <div className="d-flex flex-column align-items-start">
        <h3>Belalang</h3>
        <div>
          <img src="./public/detail/kendali4.png" alt="Belalang" className="img-fluid" />
        </div>
        <div className="mt-3">
          <p>Belalang menjadi jenis hama tanaman yang sangat menganggu bagi tanaman hidroponik, sebab belalang biasanya akan menyerang tanaman secara bergerombol sehingga membuat petani merasa kewalahan.</p>
          <span>Cara mengatasinya:</span>
          <ul>
            <li>Menggunakan musuh alami belalang, seperti laba-laba lalat perampok sampai kodok. Selain itu, tanamlah jenis tanaman bunga matahari, aster, dan lain-lain di dekat tanaman hidroponik</li>
            <li>Buatlah area tanaman hidroponik yang ramah burung. Hal ini dilakukan karena burung seperti alap-alap dan lark menjadi predator yang akan memakan belalang dalam jumlah besar.</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>

<div className="alat-bahan">
                <h1><i className="fa-solid fa-wrench"></i>Alat dan Bahan</h1>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-4">
                            <div className="card" style={{ width: '100%', backgroundColor: '#334B35', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}>
                                <div className="card-body" style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                    <h4 className="card-title">Polybag</h4>
                                    <img className="card-img-top" src="./public/bmppage/alat1.png" alt="Pipa" />
                                    <hr />
                                    <a href="#" className="btn btn-default"style={{color:'#fff'}}>Beli online</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card" style={{ width: '100%', backgroundColor: '#334B35' }}>
                                <div className="card-body" style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                    <h4 className="card-title">Pupuk TSP</h4>
                                    <img className="card-img-top" src="./public/bmppage/alat2.png" alt="Netpot" />
                                    <hr />
                                    <a href="#" className="btn btn-default"style={{color:'#fff'}}>Beli online</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card" style={{ width: '100%', backgroundColor: '#334B35' }}>
                                <div className="card-body" style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                    <h4 className="card-title">Pupuk NPK</h4>
                                    <img className="card-img-top" src="./public/bmppage/alat3.png" alt="Pupuk" />
                                    <hr />
                                    <a href="#" className="btn btn-default"style={{color:'#fff'}}>Beli online</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card" style={{ width: '100%', backgroundColor: '#334B35' }}>
                                <div className="card-body" style={{boxShadow:'0 6px 12px rgba(0, 0, 0, 0.1'}}>
                                    <h4 className="card-title">Pupuk Kandang</h4>
                                    <img className="card-img-top" src="./public/bmppage/alat4.png" alt="daun" />
                                    <hr />
                                    <a href="#" className="btn btn-default"style={{color:'#fff'}}>Beli online</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card" style={{ width: '100%', backgroundColor: '#334B35' }}>
                                <div className="card-body" style={{boxShadow:'0 6px 12px rgba(0, 0, 0, 0.1'}}>
                                    <h4 className="card-title">Sekam</h4>
                                    <img className="card-img-top" src="./public/bmppage/alat5.png" alt="daun" />
                                    <hr />
                                    <a href="#" className="btn btn-default"style={{color:'#fff'}}>Beli online</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card" style={{ width: '100%', backgroundColor: '#334B35' }}>
                                <div className="card-body" style={{boxShadow:'0 6px 12px rgba(0, 0, 0, 0.1'}}>
                                    <h4 className="card-title">Arang Kayu</h4>
                                    <img className="card-img-top" src="./public/bmppage/alat6.png" alt="daun" />
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
