/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import removeOverlay from "../../common/removeOverlay";
import parallaxie from "../../common/parallaxie";
const testimonialData = [
  {
    id: 1,
    content:
      "Thank you for the amazing work. The website turned out perfectly exactly how I imagined. Appreciate the clean design, professional work, and smooth support throughout.",
    author: "srinandhinitex",
    stars: 5,
  },
  {
    id: 2,
    content:
      "Thriftizer fast and good work! Communication has been easy and the team has been flexible. I would work with them in the future for other projects, for sure.",
    author: "cleanlab",
    stars: 5,
  },
  ,
  {
    id: 3,
    content:
      "We had wonderful experience working with Thriftizer. They are excellent at their work and are very collaborative  and supportive. They helped bring our website vision to life and were truly interested finding solutions to our requirements. We’d love to work with them again and recommend them to others!",
    author: "Mangharam Chocolate Solutions",
    stars: 5,
  },

    {
    id: 4,
    content:
      "Exceptional service, they helped me in my E-commerce development through Shopify. ",
    author: "Art Infynyty",
    stars: 5,
  },
  {
    id: 5,
    content:
      "Praveen and his team are going a fantastic job. His suggestions and work has made a significant improvement on our site. Would definitely recommend him! ",
    author: "HAY!",
    stars: 5,
  },
  ,
  {
    id: 6,
    content:
      "Good solid technical team combined with speedy execution Highly recommended.",
    author: "Instore",
    stars: 5,
  },



  // Add more testimonials if needed
];

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
  {testimonialData.map((item) => (
    <div className="item" key={item.id}>
      <p style={{ width: "95%" }}>{item.content}</p>
      <div className="info">
        <div className="cont">
          <div className="author">
            {this.props.subBgLftstl ? (
              <>
                <div className="lxleft">
                  <div className="mb-2">
                    <div className="stars">
                      {Array(item.stars).fill(0).map((_, i) => (
                        <i className="fas fa-star" key={i}></i>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="fxright">
                  <h6 className="author-name custom-font">{item.author}</h6>
                </div>
              </>
            ) : (
              <>
                <div className="mb-2">
                  <div className="stars">
                    {Array(item.stars).fill(0).map((_, i) => (
                      <i className="fas fa-star" key={i}></i>
                    ))}
                  </div>
                </div>
                <h6 className="author-name custom-font">{item.author}</h6>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  ))}
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
