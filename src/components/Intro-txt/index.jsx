import React from "react";

const IntroTxt = ({subBG}) => {
  return (
    <header
      className={`freelancer ${subBG ? "sub-bg" : ""} valign bg-img parallaxie`}
      style={{ backgroundImage: "url(/img/slid/freelancer.jpg)" }}
      data-overlay-dark="4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
              <h6>Hello, I&apos;m</h6>
              <h1>Alex Smith</h1>
              <h4>UI &amp; UX Designer</h4>
              <div className="social-icon">
                <a href="https://www.facebook.com/thriftizer/" className="icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.linkedin.com/company/thriftizer/" className="icon">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/thriftizersolutionsllp" className="icon">
                  <i className="fab fa-instagram"></i>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default IntroTxt;
