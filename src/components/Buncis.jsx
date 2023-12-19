// YourPage.js

import React from 'react';
import ImageGrid from './Imagegrid'; // Adjust the path as needed
import './detailpanduan.css'

const YourPage = () => {
  const yourImages = [
    "./public/buncis/g6.jpg",
    "./public/buncis/g3.jpg",
    "./public/buncis/g4.jpg",
    "./public/buncis/g5.jpg",
    
  ];

  return (
    <div>
      <ImageGrid images={yourImages} />
      <div className="tanam" style={{ padding: '5rem 2rem' }}>
                <h1 style={{fontWeight:'bold'}}>Cara menanam Buncis Polybag</h1>
                <ol>
                    <li >Persiapkan metode tanam</li>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100" style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="no-urut">1</div>
                                <img src="./public/buncis/step1.jpg" className="card-img-top" alt="step 1" />
                                <div className="card-body">
                                    <p className="card-text">
                                    siapkan polybag tanam berukuran sedang dengan diameter sekitar 25 sentimeter dan tinggi sekitar 30 sentimeter.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="no-urut">2</div>
                                <img src="./public/buncis/step2.jpg" className="card-img-top" alt="step 2" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Untuk melakukan budidaya buncis tegak di polybag, maka harus dipersiapkan media tanam yang baik. Yakni tanah yang gembur. Untuk menggemburkan tanah perlu campuran kompos, arang sekam dan kapur pertanian untuk menurunkan tingkat keasaman tanah. <br />
                                    Campurkan tanah dengan kompos atau pupuk kandang yang telah matang, dan juga arang sekam, dengan perbandingan 1:1:1. Dolomit atau kapur pertanian tidak diperlukan jika pH tanah sudah baik yakni antara 5,5-6,5.Siapkan polybag, dan isi dengan campuran media tanam tersebut hingga 80% dari volumenya.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <li >Proses penanaman buncis</li>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <img src="./public/buncis/benih.jpg" className="card-img-top" alt="step tanam 1" />
                                <div className="no-urut">1</div>
                                <div className="card-body">
                                    <p className="card-text">
                                    Siapkan benih dengan kualitas yang baik. Benih buncis dapat diperoleh dari buahnya yang sudah tua kemudian dijemur selama beberapa hari .
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <img src="./public/buncis/step3.jpg" className="card-img-top" alt="step tanam 2" />
                                <div className="no-urut">2</div>
                                <div className="card-body">
                                    <p className="card-text">
                                    Selanjutnya tanamlah benih sebanyak 2-3 biji dengan kedalaman sekitar 2 cm pada masing-masing pot atau polybag.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <img src="./public/buncis/step4.jpg" className="card-img-top" alt="step tanam 3" />
                                <div className="no-urut">3</div>
                                <div className="card-body">
                                    <p className="card-text">
                                    Lalu tutupi kembali dengan tanah.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <img src="./public/buncis/step5.jpg" className="card-img-top" alt="step tanam 4" />
                                <div className="no-urut">4</div>
                                <div className="card-body">
                                    <p className="card-text">
                                    kemudian disiram air secukupnya. Hindarkan dari genangan air.letakkan di tempat yang terbuka yang mendapatkan sinar matahari yang cukup. Suhu udara yang paling baik untuk pertumbuhan buncis adalah 20 - 25°C.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <img src="./public/buncis/step6.jpg" className="card-img-top" alt="step tanam 4" />
                                <div className="no-urut">4</div>
                                <div className="card-body">
                                    <p className="card-text">
                                    Jika media tanam yang digunakan sudah memenuhi standar, maka pada usia tanam kurang dari 7 hari, benih Buncis sudah mulai berkecambah.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ol>
            </div>

            <div className="rawat" style={{ padding: '5rem 2rem' }}>
                <h1 style={{fontWeight:'bold'}}>Perawatan Buncis Polybag</h1>
                <ul>
                    <li>Hal-hal yang harus Anda perhatikan dalam perawatan buncis polybag </li>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="rawat-step"><i className="fa-solid fa-droplet" style={{ color: '#ffffff' }}></i> Penyiraman</div>
                                <img src="./public/bmppage/rawat1.png" className="card-img-top" alt="tips rawat" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Lakukan penyiraman secara teratur setiap hari, pagi dan sore. Setelah tanaman sudah tumbuh dengan baik cukup disiram sekali dalam sehari.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="rawat-step"><i className="fa-solid fa-flask" style={{ color: '#ffffff' }}></i> Pemupukan</div>
                                <img src="./public/bmppage/rawat2.png" className="card-img-top" alt="tips rawat" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Berilah pupuk setelah tanaman berumur sekitar 2 minggu, masukkan sebanyak satu kepal pupuk kedalam media tanam lalu siram dengan air secukupnya agar pupuk tercampur dengan rata.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="rawat-step"><i className="fa-solid fa-seedling" style={{ color: '#ffffff' }}></i> Pembuatan Ajir</div>
                                <img src="./public/bmppage/rawat3.png" className="card-img-top" alt="tips rawat" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Karena buncis termasuk tanaman yang merambat maka diperlukan ajir untuk menopang pertumbuhannya (biasanya terbuat dari belahan bambu).
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
                                    Singkirkan hama tanaman dan rumput liar yang ada di sekitar tanaman.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="rawat-step"><i className="fa-solid fa-seedling" style={{ color: '#ffffff' }}></i> Panen</div>
                                <img src="./public/bmppage/rawat3.png" className="card-img-top" alt="tips rawat" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Potonglah buah dengan hati-hati menggunakan gunting agar bunganya tidak ikut jatuh.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>

            <div className="container-fluid kendali">
      <h1>Pengendalian hama pada Buncis</h1>

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
