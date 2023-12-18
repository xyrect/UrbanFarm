// YourPage.js

import React from 'react';
import ImageGrid from './Imagegrid'; // Adjust the path as needed
import './detailpanduan.css'

const YourPage = () => {
  const yourImages = [
    "./public/tomat/g1.jpg",
    "./public/tomat/g6.jpg",
    "./public/tomat/g3.jpg",
    "./public/tomat/g4.jpg",
    
  ];

  return (
    <div>
      <ImageGrid images={yourImages} />
      <div className="tanam" style={{ padding: '5rem 2rem' }}>
                <h1 style={{fontWeight:'bold'}}>Cara menanam Tomat Polybag</h1>
                <ol>
                    <li >Persiapkan metode tanam</li>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100" style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="no-urut">1</div>
                                <img src="./public/tomat/polybag.png" className="card-img-top" alt="step 1" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Siapkan polybag dengan diameter 30x30 cm.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="no-urut">2</div>
                                <img src="./public/tomat/tomat.png" className="card-img-top" alt="step 2" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Masukkan media tanam ke dalam polybag. Media tanam yang digunakan adalah campuran tanah, pasir, dan pupuk kandang dengan perbandingan 1:1:1. Campur hingga merata.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <li >Penyemaian Bibit</li>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100" style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="no-urut">1</div>
                                <img src="./public/tomat/tomat1.png" className="card-img-top" alt="step 1" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Buatlah lubang di media tanam menggunakan jari sekitar 2 - 3 cm. Masukkan biji tomat ke dalam lubang.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="no-urut">2</div>
                                <img src="./public/tomat/tomat2.png" className="card-img-top" alt="step 2" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Tutup kembali dengan tanah tipis-tipis saja.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="no-urut">3</div>
                                <img src="./public/tomat/tomat3.png" className="card-img-top" alt="step 2" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Beri air secukupnya, agar tetap lembab.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="no-urut">4</div>
                                <img src="./public/tomat/tomat4.png" className="card-img-top" alt="step 2" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Tutup rapat permukaan media tanam menggunakan kain basah, agar pembelahan biji lebih maksimal. Diamkan selama 2 hari, jangan lupa untuk tetap menyiramnya sehari sekali, kemudian tutup kembali dengan rapat.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="no-urut">5</div>
                                <img src="./public/tomat/tomat5.png" className="card-img-top" alt="step 2" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Buka kain sebelumnya, kemudian letakkan di sinar matahari yang cukup dan lakukan penyiraman setiap hari secara rutin.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <li >Proses penanaman tomat</li>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <img src="./public/tomat/tomat7.png" className="card-img-top" alt="step tanam 1" />
                                <div className="no-urut">1</div>
                                <div className="card-body">
                                    <p className="card-text">
                                    Apabila sudah berumur 20 hari, maka pindahkan ke polybag  yang berisi campuran tanah, pasir, dan pupuk kandang sebelumnya.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <img src="./public/tomat/tomat8.png" className="card-img-top" alt="step tanam 2" />
                                <div className="no-urut">2</div>
                                <div className="card-body">
                                    <p className="card-text">
                                    Pindahkan tomat ke dalam polybag dengan akar yang masih menyatu dengan bagian tanah yang masih menempel pada tomat secara perlahan.
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
                                <img src="./public/tomat/tomat9.png" className="card-img-top" alt="tips rawat" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Sirami tanaman dua kali sehari dengan air bersih. Jangan terlalu basah saat menyirami tanaman. Karena pembusukan terjadi ketika penuangan melebihi anjuran yang direkomendasikan. Ketika menemukan tanaman yang layu atau mati, segera buang dari media tanam agar tidak menular ke tanaman lain.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="rawat-step"><i className="fa-solid fa-flask" style={{ color: '#ffffff' }}></i> Pemasangan Ajir</div>
                                <img src="./public/tomat/tomat10.png" className="card-img-top" alt="tips rawat" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Dilakukan untuk menopang tanaman yang mulai tumbuh besar. Hal ini dimaksudkan agar tanaman yang dimaksud tidak mudah roboh.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="rawat-step"><i className="fa-solid fa-seedling" style={{ color: '#ffffff' }}></i> Pemupukan</div>
                                <img src="./public/tomat/tomat11.png" className="card-img-top" alt="tips rawat" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Pemupukan dilakukan setiap 1 minggu sekali. Tanamkan di bagian pinggir polybag sebanyak 1 sdt jangan terlalu dekat dengan perakaran, karena tomat dapat gosong.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100"style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                <div className="rawat-step"><i className="fa-solid fa-seedling" style={{ color: '#ffffff' }}></i> Panen</div>
                                <img src="./public/tomat/panen.jpg" className="card-img-top" alt="tips rawat" />
                                <div className="card-body">
                                    <p className="card-text">
                                    Tomat dapat dipanen ketika berusia 3 bulan. Kriterianya adalah perubahan warna dari hijau menjadi kekuningan, tepi daun yang mengering dan batangnya mulai menguning. Perlu dicatat bahwa proses pematangan tomat tidak terjadi secara bersamaan. maka dari itu lakukan pemetikkan setiap 3 hari sekali pada buah yang telah matang.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>

            <div className="container-fluid kendali">
      <h1>Pengendalian hama pada Tomat</h1>

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
                                    <img className="card-img-top" src="./public/tomat/polybag.png" alt="Pipa" />
                                    <hr />
                                    <a href="#" className="btn btn-default"style={{color:'#fff'}}>Beli online</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card" style={{ width: '100%', backgroundColor: '#334B35' }}>
                                <div className="card-body" style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                    <h4 className="card-title">Ajir</h4>
                                    <img className="card-img-top" src="./public/tomat/ajir.png" alt="Netpot" />
                                    <hr />
                                    <a href="#" className="btn btn-default"style={{color:'#fff'}}>Beli online</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card" style={{ width: '100%', backgroundColor: '#334B35' }}>
                                <div className="card-body" style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1'}}>
                                    <h4 className="card-title">Tali Rafia</h4>
                                    <img className="card-img-top" src="./public/tomat/rafia.png" alt="Pupuk" />
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
                                    <h4 className="card-title">NPK Mutiara</h4>
                                    <img className="card-img-top" src="./public/tomat/npk mutiara.jpg" alt="daun" />
                                    <hr />
                                    <a href="#" className="btn btn-default"style={{color:'#fff'}}>Beli online</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card" style={{ width: '100%', backgroundColor: '#334B35' }}>
                                <div className="card-body" style={{boxShadow:'0 6px 12px rgba(0, 0, 0, 0.1'}}>
                                    <h4 className="card-title">Pupuk Urea</h4>
                                    <img className="card-img-top" src="./public/tomat/pupuk urea.png" alt="daun" />
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
