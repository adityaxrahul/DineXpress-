
import React from 'react';

export default function Gallery() {
  return (
    <div className="gallery-page">
      <style dangerouslySetInnerHTML={{ __html: `.gallery-page {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: #fff3e6;
  color: #944a2d;
}
.gallery-page section.gallery {
  padding: 60px 20px;
  text-align: center;
}
.gallery-page section.gallery h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
  border-bottom: 3px solid rgba(148, 74, 45, 0.3333333333);
  display: inline-block;
  padding-bottom: 8px;
}
.gallery-page {
  /* FIXED: correct class + grid layout */
}
.gallery-page .gallery-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: auto;
}
.gallery-page .gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(148, 74, 45, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.gallery-page .gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.gallery-page .gallery-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(148, 74, 45, 0.4);
}
.gallery-page .gallery-item:hover img {
  transform: scale(1.1);
}` }} />
      

  <section className="gallery">
    <h2>Our Gallery</h2>
    <div className="gallery-container">
      <div className="gallery-item"><img src="https://static.wixstatic.com/media/aac79b_03f2588822d24f7caaa228fee49b5991~mv2.jpg/v1/fill/w_989,h_742,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/aac79b_03f2588822d24f7caaa228fee49b5991~mv2.jpg" alt="Image 1" /></div>
      <div className="gallery-item"><img src="https://static.wixstatic.com/media/aac79b_5ffa463f0a9a430e8bb2a2aa4e3e6f05~mv2.jpg/v1/fill/w_1112,h_742,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/aac79b_5ffa463f0a9a430e8bb2a2aa4e3e6f05~mv2.jpg" alt="Image 2" /></div>
      <div className="gallery-item"><img src="https://static.wixstatic.com/media/aac79b_7e1b14d5454946de8736a235bbac5cb3~mv2.jpg/v1/fill/w_1025,h_683,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/aac79b_7e1b14d5454946de8736a235bbac5cb3~mv2.jpg" alt="Image 3" /></div>
      <div className="gallery-item"><img src="https://www.shutterstock.com/shutterstock/photos/2042897663/display_1500/stock-photo-west-bangal-india-august-dominos-pizza-on-box-stock-image-2042897663.jpg" alt="Image 4" /></div>
      <div className="gallery-item"><img src="https://popmenucloud.com/cdn-cgi/image/width%3D3840%2Cheight%3D3840%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/dxkflgbu/c77222db-9b6a-49e4-a654-0f5b7c53e341.jpg" alt="Image 5" /></div>
      <div className="gallery-item"><img src="https://thedasaprakash.com/assets/img/gallery/connaught-place/Dasaprakash-cp-4.jpg" alt="Image 6" /></div>
      <div className="gallery-item"><img src="https://thedasaprakash.com/assets/img/gallery/agra/Dasaprakash-Agra-5.jpg" alt="Image 7" /></div>
      <div className="gallery-item"><img src="https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=1024x1024&w=is&k=20&c=QPHFTWoscwMSXOEGKoAKOjlCnMGszppFBrqQHdy4EGc=" alt="Image 8" /></div>
    </div>
  </section>


    </div>
  );
}

