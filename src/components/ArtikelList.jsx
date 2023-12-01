import React from 'react';
import ArtikelCard from './ArtikelCard';

const ArtikelList = () => {
  const articles = [
    { judul: 'Artikel 1', warna: 'blue', link: 'https://example.com/artikel1' },
    { judul: 'Artikel 2', warna: 'green', link: 'https://example.com/artikel2' },
    { judul: 'Artikel 3', warna: 'red', link: 'https://example.com/artikel3' },
  ];

  return (
    <div>
      {articles.map((article, index) => (
        <ArtikelCard key={index} {...article} />
      ))}
    </div>
  );
};

export default ArtikelList;
