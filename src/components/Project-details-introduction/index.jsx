import React from "react";
import Link from "next/link";

const ProjectDetailsIntroduction = () => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          {/* Heading */}
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h2 style={{color:'rgb(117, 218, 180)'}}>
                 Our Portfolio
              </h2>
            </div>
          </div>
          {/* Description */}
          <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
            <div className="text">
              <p className="extra-text">
Our diverse portfolio showcases work with clients from all niches, spanning industries and continents. From startups to global brands, we’ve delivered impactful solutions tailored to each vision. With experience across regions and sectors, our creativity knows no borders. Explore the projects below to see how we bring ideas to life, worldwide.
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsIntroduction;
