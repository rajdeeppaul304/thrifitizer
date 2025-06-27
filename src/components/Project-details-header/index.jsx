import React from 'react'

const ProjectDetailsHeader = () => {
    return (
      <section className="page-header proj-det">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-9">
              <div className="cont">
                <h2>Work That Speaks Volumes</h2>
                <p>From high-converting Shopify stores to full-scale brand transformations — here’s a glimpse 
of what we’ve built for brands across industries. </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="img-wrapper bg-img parallaxie"
          style={{ backgroundImage: "url(/img/company/elevate.png)" }}
        ></div>
      </section>
    );
}

export default ProjectDetailsHeader
