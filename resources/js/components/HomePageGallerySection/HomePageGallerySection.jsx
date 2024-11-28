import React from "react";
import gallery1Img from "../../../../public/assets/img/gallery/gallery-1.jpg";
import gallery2Img from "../../../../public/assets/img/gallery/gallery-2.jpg";
import gallery3Img from "../../../../public/assets/img/gallery/gallery-3.jpg";
import gallery4Img from "../../../../public/assets/img/gallery/gallery-4.jpg";
import gallery5Img from "../../../../public/assets/img/gallery/gallery-5.jpg";
import gallery6Img from "../../../../public/assets/img/gallery/gallery-6.jpg";

const HomePageGallerySection = () => {
  return (
    <section id="gallery">
      <div className="container-fluid" data-aos="fade-up">
        <div className="section-header">
          <h3 className="section-title">Gallery</h3>
          <span className="section-divider"></span>
          <p className="section-description">
            VIALUGGAGE : "KEEP STORING AND EXPLORING"
          </p>
        </div>

        <div className="row no-gutters">
          <div className="col-lg-4 col-md-6">
            <div className="gallery-item">
              <a
                href={gallery1Img}
                data-gall="portfolioGallery"
                className="gallery-lightbox"
              >
                <img src={gallery1Img} alt="" />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="gallery-item">
              <a
                href={gallery2Img}
                data-gall="portfolioGallery"
                className="gallery-lightbox"
              >
                <img src={gallery2Img} alt="" />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="gallery-item">
              <a
                href={gallery3Img}
                data-gall="portfolioGallery"
                className="gallery-lightbox"
              >
                <img src={gallery3Img} alt="" />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="gallery-item">
              <a
                href={gallery4Img}
                data-gall="portfolioGallery"
                className="gallery-lightbox"
              >
                <img src={gallery4Img} alt="" />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="gallery-item">
              <a
                href={gallery5Img}
                data-gall="portfolioGallery"
                className="gallery-lightbox"
              >
                <img src={gallery5Img} alt="" />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="gallery-item">
              <a
                href={gallery6Img}
                data-gall="portfolioGallery"
                className="gallery-lightbox"
              >
                <img src={gallery6Img} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageGallerySection;
