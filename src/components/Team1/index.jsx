/* eslint-disable @next/next/no-img-element */
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Group photo path
const groupPhoto = "/img/WhatsApp_Image_2024-07-02_at_4.22.14_PM.jpg";

const Team1 = () => {
  return (
    <section className="team section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign">
            <div className="full-width">
              <div className="sec-head custom-font mb-0">
                <h6>Employees</h6>
                <h3>Our Team.</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="team-container">
              <div className="item wow fadeInUp" data-wow-delay=".3s">
                <div className="img wow imago">
                  <img src={groupPhoto} alt="Group Photo" />
                  <div style={{ textAlign: "center", marginTop: "10px", fontWeight: "bold" }}>
                    Team Thriftizer Solution
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team1;
