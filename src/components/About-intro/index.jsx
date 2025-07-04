import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who We Are ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
                <p className=" mb-20" data-splitting>
                  We’re a team of strategists, designers, and developers driven by a shared purpose — to help brands tell their story, connect with audiences, and grow with impact. Whether you're an emerging startup or an established name, we craft tailored solutions that merge creativity with performance.
<br/><br/>From building powerful brand identities to delivering high-converting digital experiences, our work is rooted in insight, innovation, and execution. We don’t just follow trends — we set them, one project at a time.

                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
