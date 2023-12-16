import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Utama() {
  const [artikel, setArtikel] = useState([]);

  useEffect(() => {
    // Fungsi untuk mendapatkan data artikel dari API
    const fetchArtikel = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/artikel');
        const data = await response.json();
        setArtikel(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Panggil fungsi fetchArtikel saat komponen di-mount
    fetchArtikel();
  }, []); // Dependensi kosong berarti efek hanya dijalankan sekali saat komponen di-mount

  const buttonStyle = {
    backgroundColor: '#F7C35F',
    height: '50px',
    width: '150px',
    color: '#000',
    borderRadius: '8px',
    padding: '10px 20px',
    fontSize: '20px',
    border: 'none',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  };

  return (
    <Container fluid="md">
      <div className="judul">
        <h3 style={{ fontWeight: 'bold' }}>Berita & Artikel</h3>
        <h4>Berisi Berita dan Artikel terbaru terkait Urban Farming</h4>
      </div>
      {artikel.map((item) => (
        <Row key={item.id} style={{ marginBottom: '100px' }}>
          <Col xs={12} md={6}>
            <img src={item.gambar} alt="article" className="img-fluid float-left" style={{ maxWidth: '100%' }} />
          </Col>
          <Col xs={12} md={6} style={{ marginTop: '50px' }}>
            <h3>{item.judul}</h3>
            <p style={{ textAlign: 'justify' }}>{item.deskripsi}</p>
            <h5>{item.tanggal}</h5>
            <Button style={buttonStyle} href={item.sumber} target="_blank">
            Read More
          </Button>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Utama;
