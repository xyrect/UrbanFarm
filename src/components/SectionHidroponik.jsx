import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';

function SectionHidroponik() {
  const herostyle = {
    height: '720px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    gap: '20px',
    padding: '0 20px',
    textAlign: 'left',
  };

  const heroright = {
    display: 'flex',
    justifyContent: 'center',
  };

  const imagestyle = {
    width: '80%',
    maxHeight: '80%',
  };

  const textStyle = {
    textAlign: 'center',
  };

  return (
    <div style={herostyle}>
      <div style={heroright}>
        <img src="./public/panduan/image2.1.png" alt="Urban Farming" style={imagestyle} />
      </div>

      <div>
      <div style={textStyle}>
        <h1 style={{ fontSize: '50px', color: '#334B35' }}> HIDROPONIK </h1></div>
        <p>
          Hidroponik adalah cara bercocok tanam tanpa tanah. Tanaman mendapatkan nutrisi
          melalui larutan nutrisi air, memungkinkan pertumbuhan yang terkendali dengan kontrol yang
          presisi terhadap nutrisi, kelembaban, suhu, dan cahaya.
        </p>
        <p><FontAwesomeIcon icon={faSquareCheck} /> Pertumbuhan tanaman yang cepat</p>
        <p><FontAwesomeIcon icon={faSquareCheck} /> Pemanfaatan ruang yang efisien</p>
        <p><FontAwesomeIcon icon={faSquareCheck} /> Hasil Produksi yang tinggi</p>
        <p><FontAwesomeIcon icon={faSquareCheck} /> Cocok untuk lokasi terbatas</p>
      </div>
    </div>
  );
}

export default SectionHidroponik;
