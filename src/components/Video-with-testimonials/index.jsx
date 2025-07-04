/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Split from "../Split";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoWithTestimonials = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    console.clear();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="block-sec" style={{ marginBottom: '6rem' }}>
      <div
        className="background bg-img section-padding pb-0"
        style={{ backgroundImage: `url(/img/slid/1.jpg)` }}
        data-overlay-dark="8"
      >
        <div className="container">
          <div className="row">
            {/* Video Area */}
            <div className="col-lg-6">
              <div className="vid-area">
                <div className="vid-icon">
                  <a
                    className="vid"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(true);
                    }}
                    href="/Video/video_main.mp4"
                  >
                    <div className="vid-butn">
                      <span className="icon">
                        <i className="fas fa-play"></i>
                      </span>
                    </div>
                  </a>
                </div>

                <div className="cont">
                  <Split>
                    <h3 className="wow" data-splitting>
                      Driven by Strategy, <br />Powered by Results

                    </h3>
                  </Split>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="col-lg-5 offset-lg-1">
              <div className="testim-box">
                <div className="head-box">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Our Happy Clients
                  </h6>
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                    What Client&apos;s Say?
                  </h4>
                </div>

                <Slider
                  {...sliderSettings}
                  className="slic-item wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="item">
                    <p>
                      Thank you for the amazing work. The website turned out perfectly exactly how I imagined. Appreciate the clean design, professional work, and smooth support throughout.

                    </p>
                    <div className="info">

                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                            srinandhinitex
                          </h6>
                          <div className="mb-2">
                            <div className="stars">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item" >
                    <p>
Thriftizer fast and good work! Communication has been easy and the team has been flexible.

                    I would work with them in the future for other projects, for sure.
                    </p>
                    <div className="info">

                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                            CleanLab
                          </h6>
                          <div className="mb-2">
                            <div className="stars">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item" >
                    <p>
                    Got our website done quickly and the thriftizer team is amazing in understanding our needs and delivering it!
Very patient and provide the best support 
                    </p>
                    <div className="info">

                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                            Matapayals
                          </h6>
                          <div className="mb-2">
                            <div className="stars">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                   <div className="item" >
                    <p>
                    The experience was really helpful also to understand how seo is measured, i recomend it.
                    </p>
                    <div className="info">

                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                            Sar Jewellery
                          </h6>
                          <div className="mb-2">
                            <div className="stars">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item" >
                    <p>
they are professional and honest. highly recommended.                    </p>
                    <div className="info">

                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                            MAS VOGUE
                          </h6>
                          <div className="mb-2">
                            <div className="stars">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                   <div className="item" >
                    <p>
They did a great job and keep working until everything was completed to my satisfaction.  I would definitely hire them again.                
                               </p>
                    <div className="info">

                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                            Intechra Health
                          </h6>
                          <div className="mb-2">
                            <div className="stars">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>

        {/* Local Video Modal */}
        {isOpen && (
          <div className="video-modal">
            <div className="overlay" onClick={() => setOpen(false)}></div>
            <div className="video-content">
              <video src="/Video/video_main.mp4" controls autoPlay />
            </div>
          </div>
        )}
      </div>






      <div
        className={'skills-circle pt-50 '}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="">
                <div>
                  At Thriftizer, we don’t just deliver services, we build success stories. Our team combines creative thinking, data-driven decisions, and deep industry insight to help brands scale with confidence and clarity.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>













      {/* Inline Styles */}
      <style jsx>{`
        .vid-butn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: #fff;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
          transition: background 0.3s ease;
        }

        .vid-butn:hover {
          background: #eee;
        }

        .icon i {
          font-size: 20px;
          color: #000;
        }

        .video-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .video-modal .video-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
        }

        .video-modal video {
          width: 100%;
          height: auto;
          border-radius: 10px;
        }

        .video-modal .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: -1;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};

export default VideoWithTestimonials;
