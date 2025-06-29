import React from "react";

const ProjectDetails2Header = ({ images, Text }) => {
  return (
    <section
      className="page-header proj-det bg-img valign"
      style={{
        backgroundImage: `url(${images})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
      }}
      data-overlay-dark="4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9">
            <div className="cont">
              <h1>{Text}</h1>
              {/* <h5>{subText}</h5> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails2Header;
