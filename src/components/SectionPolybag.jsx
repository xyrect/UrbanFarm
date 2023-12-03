import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';

function SectionPolybag() {
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


  return (
    <div style={herostyle}>
      <div>
        <h1 style={{ fontSize: '50px', color: '#334B35', textAlign: 'center'}}> POLYBAG </h1>
        <p>
        Polybag merupakan plastik hitam dengan lubang-lubang sebagai sirkulasi tanaman.
        Polybag ini digunakan untuk menjadi wadah pengganti pot dalam menanam tanaman
        </p>
        <p><FontAwesomeIcon icon={faSquareCheck} /> Pengolahan bibit yang mudah</p>
        <p><FontAwesomeIcon icon={faSquareCheck} /> kontrol yang baik terhadap kondisi tumbuh</p>
        <p><FontAwesomeIcon icon={faSquareCheck} /> kemampuan untuk memantau pertumbuhan akar</p>
      </div>

      <div style={heroright}>
        <img src="./public/panduan/image2.1.png" alt="Urban Farming" style={imagestyle} />
      </div>
    </div>
  );
}

export default SectionPolybag;
