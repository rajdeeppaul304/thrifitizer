/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import removeOverlay from "../../common/removeOverlay";
import parallaxie from "../../common/parallaxie";

class Testimonials1 extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div
          onClick={() => this.slider.slickNext()}
          className="next cursor-pointer"
        >
          <span className="pe-7s-angle-right"></span>
        </div>
        <div
          onClick={() => this.slider.slickPrev()}
          className="prev cursor-pointer"
        >
          <span className="pe-7s-angle-left"></span>
        </div>
      </div>
    );
  };
  componentDidMount() {
    removeOverlay();
    parallaxie('.testimonials.bg-img.parallaxie');
  }
  render() {
    return (
      <section
        className={`testimonials section-padding ${this.props.subBgLftstl ? "sub-bg lftstl" : ""} ${this.props.withBG ? "bg-img" : ""} ${this.props.parallaxie ? "parallaxie" : ""} ${!this.props.overlay ? "noOverlay" : ""}`}
        style={{
          backgroundImage: `${this.props.withBG && !this.props.imgSrc
              ? "url(/img/slid/happy_customer.jpg)"
              : this.props.imgSrc
                ? `url(${this.props.imgSrc})`
                : "none"
            }`,
        }}
        data-overlay-dark={`${this.props.overlay ? "9" : "0"}`}
      >
        <div className="container position-re">
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              What People Says?
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Testimonials.
              </h3>
            </Split>
            <span className="tbg">Testimonials</span>
          </div>
          <div
            className="row justify-content-center wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="col-lg-8">
              <style jsx>{`
  .slic-item,
  :global(.slick-slide) {
    overflow: hidden;
  }



`}</style>
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: true,
                  infinite: true,
                  arrows: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 1,
                }}
              >
                <div className="item" >
                  <p style={{width:"95%"}}>
                    Thank you for the amazing work. The website turned out perfectly exactly how I imagined. Appreciate the clean design, professional work, and smooth support throughout.
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBgLftstl ? (
                          <>
                            <div className="lxleft">
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
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                srinandhinitex
                              </h6>
                              {/* <span className="author-details">
                                Co-founder, Colabrio
                              </span> */}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="mb-2">
                              <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                            </div>
                            <h6 className="author-name custom-font">
                              srinandhinitex
                            </h6>
                            {/* <span className="author-details">
                              Co-founder, Colabrio
                            </span> */}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item" >
                  <p style={{width:"90%"}}>
                    Thriftizer fast and good work! Communication has been easy and the team has been flexible.

                    I would work with them in the future for other projects, for sure.
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBgLftstl ? (
                          <>
                            <div className="lxleft">
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
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                CleanLab
                              </h6>
                              {/* <span className="author-details">
                                Co-founder, Colabrio
                              </span> */}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="mb-2">
                              <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                            </div>
                            <h6 className="author-name custom-font">
                              CleanLab
                            </h6>
                            {/* <span className="author-details">
                              Co-founder, Colabrio
                            </span> */}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item" >
                  <p style={{width:"90%"}}> 
                    We had wonderful experience working with Thriftizer. They are excellent at their work and are very collaborative  and supportive. They helped bring our website vision to life and were truly interested finding solutions to our requirements. We’d love to work with them again and recommend them to others!
                  </p>
                  <div className="info">
                    <div className="cont">
                      <div className="author">
                        {this.props.subBgLftstl ? (
                          <>
                            <div className="lxleft">
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
                            <div className="fxright">
                              <h6 className="author-name custom-font">
                                Mangharam Chocolate Solutions
                              </h6>
                              {/* <span className="author-details">
                                Co-founder, Colabrio
                              </span> */}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="mb-2">
                              <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                            </div>
                            <h6 className="author-name custom-font">
                              Mangharam Chocolate Solutions
                            </h6>
                            {/* <span className="author-details">
                              Co-founder, Colabrio
                            </span> */}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default Testimonials1;
