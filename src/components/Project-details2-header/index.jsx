import React from "react";

const ProjectDetails2Header = ({ images, Text, subText="" }) => {
  return (
    <section
      className="page-header proj-det bg-img valign"
      style={{
        backgroundImage: `url(${images})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // height: '100vh',
      }}
      data-overlay-dark="4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9">
            <div className="cont"
            style={{
              position:'absolute',
              marginTop:'-10px',
            }}
            >
              <h1>{Text}</h1>
             &nbsp; 
             <a href={`${subText}`}
             target='_blank'
              style={{
                color:'#75dab4'
              }}
              >{subText}</a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails2Header;
