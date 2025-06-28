import React from "react";
import Link from "next/link";

const NextProject = () => {
  return (
    <section className="next-prog section-padding">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 col-md-10">
            <div className="box py-5">
              <h1 className="mb-4">Let’s Build Your Success Story Next</h1>
              <p className="mb-5">
                Whether you’re launching, scaling, or rebranding — we’d love to help.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Link href="https://api.whatsapp.com/send/?phone=918861324254&text=Hello&type=phone_number&app_absent=0" passHref legacyBehavior>
                  <a
                  target="_blank"
                    className="btn btn-primary"
                    style={{
                      marginLeft: "1rem",
                      padding: "0.75rem 2rem",
                      background: "#217953",
                      border: "2px solid #217953",
                      color: "white"
                    }}
                  >
                    Book a Call
                  </a>
                </Link>
                <Link href="/build_your_own_package" passHref legacyBehavior>
                  <a
                    className="btn btn-outline-primary start-project-btn"
                    style={{
                      marginLeft: "1rem",
                      padding: "0.75rem 2rem",
                      border: "2px solid #217953",
                      color: "#217953",
                      transition: "all 0.2s"
                    }}
                  >
                    Start a Project
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .start-project-btn:hover,
        .start-project-btn:focus {
          background: #217953 !important;
          color: white !important;
          border-color: #217953 !important;
        }
      `}</style>
    </section>
  );
};

export default NextProject;
