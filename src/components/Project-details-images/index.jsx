/* eslint-disable @next/next/no-img-element */
import React from "react";

const projects = [
  {
    name: "FireBoltt",
    industry: "Consumer Electronics",
    service: "Shopify Plus Development + UI/UX Optimization",
    outcome: "5x revenue growth in 6 months",
    image: "/img/company/digital.png",
    link: "#",
  },
  {
    name: "The Indian Ethnic Co.",
    industry: "Fashion & Apparel",
    service: "Shopify Migration + Custom Theme",
    outcome: "3x faster load time & 2.5x conversion boost",
    image: "/img/company/cloth.png",
    link: "#",
  },
  {
    name: "Pure Organica",
    industry: "Wellness & Skincare",
    service: "Brand Identity + Shopify Setup + SEO",
    outcome: "Launched from scratch, 10k+ monthly visitors in 90 days",
    image: "/img/company/IMG-20250620-WA0046.jpg",
    link: "#",
  },
];

const darkStyles = {
  backgroundColor: "#181a1b",
  color: "#f1f1f1",
};

const cardDarkStyles = {
  backgroundColor: "#23272b",
  color: "#f1f1f1",
  border: "1px solid #23272b",
};

const btnLinkDark = {
  color: "#4fd1c5",
};

const ProjectDetailsImages = () => {
  return (
    <section className="projdtal" style={darkStyles}>
      <h2 style={{ display: "none" }}> &nbsp; </h2>
      <div className="container-fluid">
        <div className="justified-gallery">
          <div className="row">
            {projects.map((project, idx) => (
              <div className="col-md-4 mb-4" key={idx}>
                <div className="card h-100 shadow-sm" style={cardDarkStyles}>
                  <a href={project.link}>
                    <img
                      alt={project.name}
                      src={project.image}
                      className="card-img-top"
                      style={{ objectFit: "cover", height: 220, borderRadius: "8px 8px 0 0" }}
                    />
                  </a>
                  <div className="card-body px-2 py-3">
                    <h5 className="card-title mb-1">{project.name}</h5>
                    <div className="small text-muted mb-1" style={{ color: "#b0b3b8" }}>
                      Industry: {project.industry}
                    </div>
                    <div className="small mb-1">
                      Service: {project.service}
                    </div>
                    <div className="small mb-2">
                      Outcome: <strong>{project.outcome}</strong>
                    </div>
                    <a href={project.link} className="btn btn-link p-0" style={btnLinkDark}>
                      View Project &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsImages;
