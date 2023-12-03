import React from 'react';
import cards from '../components/cards.css';
import Container from 'react-bootstrap/Container';

function Cards() {

    return (
        <Container fluid="md">
        <div class="judul">
            <h4>Berita & Artikel</h4>
            <h6>Berisi Berita dan Artikel terbaru terkait Urban Farming</h6>
        </div>
        <div class="cards">
            <div class="cards1">
                <img src="./public/artikel/page 1.jpg" alt="Card Image"></img>
                <div class="overlay">
                    <h6>Minggu , 05 November 2023</h6>
                    <p>Minta Warga Tak Panik, Pemkot Semarang Pastikan Harga Cabai Masih Terkendali</p>
                </div>
            </div>

            <div class="cards2">
                <img src="./public/artikel/page 2.webp" alt="Card Image"></img>
                <div class="overlay">
                    <h6>Sabtu, 11 November 2023</h6>
                    <p>Kitchen Garden Pertama di Medan, Wujud  Kolaborasi Hotel Dukung Urban Farming</p>
                </div>
            </div>

            <div class="cards3">
                <img src="./public/artikel/page 3.jpeg" alt="Card Image"></img>
                <div class="overlay">
                    <h6>Kamis, 26 Oktober 2023</h6>
                    <p>Bertani di Lahan Sempit, Intip Kisah BRInita di Jayapura</p>
                </div>
            </div>

            <div class="cards3">
                <img src="./public/artikel/page 4.jpg" alt="Card Image"></img>
                <div class="overlay">
                    <h6>Sabtu, 28 Oktober 2023</h6>
                    <p>Kisah Inspiratif, Urban Farming Jadi Gaya Baru Bertani Pada Lahan Sempit</p>
                </div>
            </div>

            <div class="cards3">
                <img src="./public/artikel/page 5.jpg" alt="Card Image"></img>
                <div class="overlay">
                    <h6>Senin, 30 Oktober 2023</h6>
                    <p>Diminta Heru Budi "Hijaukan" Jakarta, Dinas KPKP Gelar Festifal Urban Farming</p>
                </div>
            </div>

            <div class="cards3">
                <img src="./public/artikel/page 6.jpg" alt="Card Image"></img>
                <div class="overlay">
                    <h6>Selasa, 19 Agustus 2023</h6>
                    <p>5 Hal yang Perlu Diperhatikan Sebelum Memulai Urban Farming</p>
                </div>
            </div>

            <div class="cards3">
                <img src="./public/artikel/page 7.jpg" alt="Card Image"></img>
                <div class="overlay">
                    <h6>Selasa, 28 Agustus 2023</h6>
                    <p>Bappenas Urban Farming Alternatif Jaga Ketahanan Pangan Berkelanjutan</p>
                </div>
            </div>

            <div class="cards3">
                <img src="./public/artikel/page 8.jpg" alt="Card Image"></img>
                <div class="overlay">
                    <h6>Selasa, 12 September 2023</h6>
                    <p>Urban Farming Solusi Bertani di Lahan Sempit dan Padat</p>
                </div>
            </div>

            <div class="cards3">
                <img src="./public/artikel/page 9.jpeg" alt="Card Image"></img>
                <div class="overlay">
                    <h6>Sabtu, 08 Juli 2023</h6>
                    <p>Dukung Green Building, ASDP Luncurkan Program Berkebun Hidroponik</p>
                </div>
            </div>
        </div>
        </Container>
    );
}

export default Cards;
