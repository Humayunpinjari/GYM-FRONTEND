import React from 'react'

const Gallery = () => {

  const gallery = [
    "/img6.jpg",
    "/img4.jpg",
    "/img1.jpg",
    "/img2.jpg",
    "/img8.jpg",
    "/img7.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img10.jpg",
    "/img9.jpg",
    
  ];
  return (<section className='gallery'>
    <h1>BETTER BEATS BEST</h1>
    <div className="images">
      <div className='eachimg'>
        {gallery.slice(3,6).map((element, index) => (
          <img key={index} src={element} alt="galleryImage"/>
        ))}
      </div>
      <div>
        {gallery.slice(0,3).map((element, index) => (
          <img key={index} src={element} alt="galleryImage"/>
        ))}
      </div>
      <div>
        {gallery.slice(6,9).map((element, index) => (
          <img key={index} src={element} alt="galleryImage"/>
        ))}
      </div>
    </div>
  </section>
    
  );
}

export default Gallery