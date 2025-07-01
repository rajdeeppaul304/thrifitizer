import React from "react";

const ProjectDetails2Header = ({ images, Text, subText="", subTitle="" }) => {
  return (
    <section
      className="page-header proj-det bg-img valign"
      // style={{
      //   backgroundImage: `url(${images})`,
      //   backgroundPosition: 'center center',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundSize: 'cover',
      //   // height: '100vh',
      // }}
      data-overlay-dark="4"
    >

    <style jsx>{`
        .page-header {
          background-image: url('${images[0]}');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          height: 100vh; /* or any other height */
        }

        @media (max-width: 768px) {
          .page-header {
            background-image: url('${images[1]}');
          }
        }
      `}</style>


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
             {/* &nbsp;  */}
             <a 
             target='_blank'
              style={{
                color:'#c8c8c8'
              }}
              >{subTitle}</a>
              <br/>
              {/* &nbsp;  */}
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
