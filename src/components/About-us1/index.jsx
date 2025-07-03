/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import AboutUs1Date from "../../data/sections/about-us1.json";

import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, FreeMode  } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


  // "/Wearefeaturedin/file_000000000d3461f79b65c32d7e2658d3.png",
  // "/Wearefeaturedin/file_00000000c84061f89fbb6cbbadcb1de6.png",
  // "/Wearefeaturedin/file_000000006c6061fd8485ddd06b2b21ee.png",
  // "/Wearefeaturedin/file_00000000529061fd85852d0085711cd0.png",
  // "/Wearefeaturedin/Screenshot_2025_0625_115042.png",
  // "/Wearefeaturedin/Screenshot_2025_0625_115143.png",
  // "/Wearefeaturedin/Screenshot_2025_0625_115220.png",
  // "/Wearefeaturedin/Screenshot_2025_0625_123032.png"
const featuredLogos = [


  "/Wearefeaturedin/hindustantimes.jpg",
  "/Wearefeaturedin/ians.jpg",
  "/Wearefeaturedin/theprint.jpg",
  "/Wearefeaturedin/latestly.jpg",
  "/Wearefeaturedin/lokmattimes.jpg",
  "/Wearefeaturedin/revoi.jpg",
  "/Wearefeaturedin/theweek.jpg"
];

const AboutUs1 = () => {
  return (
    <div className="about section-padding">
      {/* Featured In Section */}
      <div className="featured-in-section" style={{marginTop: '-20px'}}>
        <h1 className="featured-title">We Are Featured In.</h1>

        <div className="logos-track2">
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          freeMode={true}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          slidesPerView={5.5}
          spaceBetween={32}
          speed={5000}
          className="logo-swiper"
          breakpoints={{
            320: { slidesPerView: 2.5 },
            576: { slidesPerView: 3.5 },
            768: { slidesPerView: 4.5 },
            992: { slidesPerView: 5.5 },
          }}
        >

        {featuredLogos.map((logo, idx) => (
          <SwiperSlide key={idx}>
            <div className="logo-item">
              <img src={logo} alt={`logo ${idx + 1}`} style={{ filter: "grayscale(20%)", maxHeight: "100px", objectFit: "contain" }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        </div>


      </div>
      <div className="container abt-con ">
        <div className="row about-section">
          {/* Left Images */}
          <div className="col-lg-5 col-md-12 images-column">
            <div className="img-mons">
              <div className="row">
                <div className="col-md-4 col-6 cmd-padding valign">
                  <div className="img3 wow imago" data-wow-delay=".5s" style={{height: '50%', width: '100%'}}>
                    <img src={AboutUs1Date.image1} alt="image1" className="responsive-img" />
                  </div>
                </div>
                <div className="col-md-7 col-6 cmd-padding d-flex flex-column justify-content-between" style={{minHeight: '100%'}}>
                  <div className="img3 wow imago mb-2" data-wow-delay=".3s" style={{height: '48%', minHeight: 0}}>
                    <img src={AboutUs1Date.image2} alt="image2" className="responsive-img" style={{height: '100%', objectFit: 'cover', borderRadius: '8px'}} />
                  </div>
                  <div className="img3 wow imago mt-2" data-wow-delay=".8s" style={{height: '48%', minHeight: 0}}>
                    <img src={AboutUs1Date.image3} alt="image3" className="responsive-img" style={{height: '100%', objectFit: 'cover', borderRadius: '8px'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6 offset-lg-1 col-md-12 valign">
            <div className="content">
              <div className="sub-title">
                <h6>{AboutUs1Date.smallTitle}</h6>
                <span></span><span></span><span></span>
              </div>
              <Split>
                <h3 className="words chars splitting main-title wow" data-splitting>
                  {AboutUs1Date.title.first} <br /> {AboutUs1Date.title.second}
                </h3>
              </Split>
              <Split>
                <p className="words chars splitting wow txt" data-splitting>
                  {AboutUs1Date.content}
                </p>
              </Split>

              <div className="ftbox mt-30">
                <ul className="features-list">
                  {AboutUs1Date.features.map((feature) => (
                    <li
                      key={feature.id}
                      className={`wow fadeIn ${feature.id === 2 ? "space" : ""}`}
                      data-wow-delay={feature.wowDelay}
                    >
                      <span className={`icon color-font ${feature.icon}`}></span>
                      <h6 className="custom-font">
                        {feature.name.first} <br /> {feature.name.second} 
                      </h6>
                      <div className="dots">
                        <span></span><span></span><span></span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Styles */}
      <style jsx>{`

      .features-list{
              background: #0c0f16 !important;
              // position: relative;
              border-radius: 10px;
              /* padding: 20px; */
              text-align: center;
              -webkit-flex: 1 1 calc(33.333% - 20px);
              -ms-flex: 1 1 calc(33.333% - 20px);
              flex: 1 1 calc(33.333% - 20px);
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
              -webkit-transition: -webkit-transform 0.3s;
              transition: transform 0.3s;
              left: -45px !important;
              }
        .responsive-img {
          width: 100%;
          height: auto;
          display: block;
        }

        .features-list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .features-list li {
          background: #111;
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          flex: 1 1 calc(33.333% - 20px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s;
        }

        .features-list li:hover {
          transform: translateY(-5px);
        }

        .features-list li .icon {
          font-size: 32px;
          display: block;
          margin-bottom: 15px;
        }

        /* Featured In Section */
        .featured-in-section {
          margin-top: 60px;
          text-align: center;
        }
        .featured-title {
          font-size: 3rem;
          font-weight: 600;
          margin-bottom: 25px;
          letter-spacing: 1px;
        }
        .logos-slider {
          overflow: hidden;
          width: 100%;
          position: relative;
          height: 70px;
        }
        .logos-track2 {
        background-color:#0b0d0b;
          display: flex;
          // width: calc(200% + 40px);
          // animation: scroll-logos 18s linear infinite;
        }
.logo-item {
  flex: 0 0 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
}

.logo-item img {
  width: 100px;
  height: 100px;
  object-fit: contain; /* keeps aspect ratio without distortion */
  display: block;
  // opacity: 0.8;
  transition: filter 0.3s, opacity 0.3s;
  margin: 0 auto;
}

        .logo-item img:hover {
          filter: grayscale(0%);
          opacity: 1;
        }
        @keyframes scroll-logos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Fix image2 and image3 stacking and sizing */
        .img-mons .row {
          height: 100%;
        }
        .col-md-7.col-6.cmd-padding {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }
        .img2,
        .img3 {
          width: 100%;
        }
        .img2 {
          margin-bottom: 10px;
        }
        .img3 {
          margin-top: 10px;
        }

        @media (max-width: 991px) {
          .features-list li {
            flex: 1 1 calc(50% - 20px);
          }
        }

        @media (max-width: 575px) {
                .featured-title {
          font-size: 1.6rem;
          font-weight: 600;
          margin-bottom: 25px;
          letter-spacing: 1px;
        }
          .features-list li {
            flex: 1 1 100%;
          }
          .about-section {
            flex-direction: column;
          }
          .images-column {
            margin-bottom: 30px;
          }
          .logo-item {
            flex: 0 0 80px;
            margin: 0 10px;
          }
          .logos-slider {
            height: 50px;
          }
          .col-md-7.col-6.cmd-padding {
            height: auto;
          }
          .img2,
          .img3 {
            height: auto !important;
            margin: 0 0 10px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs1;
