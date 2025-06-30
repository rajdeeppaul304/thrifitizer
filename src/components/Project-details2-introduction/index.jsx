import React from "react";
import caseStudies from "../../data/caseStudiesData"; // adjust path as needed

const ProjectDetails2Introduction = ({ projectName }) => {
  const data = caseStudies[projectName];

  if (!data) {
    return (
      <section className="intro-section section-padding">
        <div className="container">
          <p>No case study data found for "{projectName}".</p>
        </div>
      </section>
    );
  }

  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>Case Study</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text js-scroll__content">
              <h6 className="mb-15 fw-600 mt-5">Challenge</h6>
              <p className="extra-text">{data.challenge}</p>

              <h6 className="mt-40 mb-15 fw-600">Our Solution</h6>
              <ul className="smp-list styled-list">
                {data.solution.map((point, index) => (
                  <li className="extra-text" style={{color: '#c8c8c8'}} key={index}>{point}</li>
                ))}
              </ul>

              <h6 className="mt-40 mb-15 fw-600">Results</h6>
              <ul className="smp-list styled-list">
                {data.results.map((point, index) => (
                  <li className="extra-text" style={{color: '#c8c8c8'}}  key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails2Introduction;
