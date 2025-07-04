import React from "react";
import Split from "../Split";
import Link from "next/link";

const CallToAction = ({ img, theme, subBG }) => {
  return (
    <section
      className={`call-action section-padding ${subBG ? "sub-bg" : ""} bg-img`}
      style={{ backgroundImage: `url(${img ? img : "/img/pattern.png"})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="content sm-mb30">
              <Split>
                <h6 className="wow words chars splitting" data-splitting>
                  Let&apos;s Talk
                </h6>
                <h2
                  className="wow words custom-font chars splitting"
                  data-splitting
                >
                  about your <b>next project</b>.
                </h2>
              </Split>
            </div>
          </div>

          {/* <div className="col-md-4 col-lg-3 valign">
            <Link href="/contact/">
              <a
                className={`btn-curve ${
                  theme == "light" ? "btn-blc" : "btn-lit"
                } wow fadeInUp`}
                data-wow-delay=".5s"
              >
                <span>Get In Touch</span>
              </a>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
