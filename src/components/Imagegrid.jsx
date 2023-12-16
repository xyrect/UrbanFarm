// ImageGrid.js

import React from 'react';

const ImageGrid = ({ images }) => {
  return (
    <div className="container my-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {images.map((image, index) => (
          <div key={index} className="col-6 col-md-3">
            <img className="w-100 rounded" src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
