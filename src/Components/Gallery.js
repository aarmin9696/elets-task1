import React from 'react';

const Gallery = () => {


  return (
    <div className=" gallery_div">
      <div className="gallery">
      {Array.from({ length: 15 }, (_, i) => (
          <div key={i} className={`gallery gallery-${i + 1}`}>
            <img
              src={`https://nbfc100.eletsonline.com/images/gallery/${i + 1}.webp`}
              alt={`Image ${i + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
