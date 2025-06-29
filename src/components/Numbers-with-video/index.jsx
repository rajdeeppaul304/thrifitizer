/* eslint-disable @next/next/no-img-element */
import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Split from "../Split";
import CountUp from 'react-countup';

const NumbersWithVideo = ({ theme = "dark" }) => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  return (
    <section className="block-sec">
      <div
        className="background bg-img section-padding pb-60 pt-0"
        style={{ backgroundImage: `url(/img/pattern${theme === 'light' ? '-light':''}.png)` }}
      >
        <div className="container">
          <div className="number-sec">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="item no-bord">
                  <span className="icon pe-7s-smile"></span>
                  <h3 className="custom-font">
                    {/* <span className="count">  2600 </span> + */}
                    <CountUp end={2600} duration={5} /> +
                  </h3>
                  <Split>
                    <p className="wow txt words chars splitting" data-splitting>
                      Happy Clients
                    </p>
                  </Split>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="item">
                  <span className="icon pe-7s-portfolio"></span>
                  <h3 className="custom-font">
                    {/* <span className="count">3250</span> + */}
                    <CountUp end={3250} duration={5.2} /> +
                  </h3>
                  <Split>
                    <p className="wow txt words chars splitting" data-splitting>
                      Complete Projects
                    </p>
                  </Split>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="item">
                  <span className="icon pe-7s-cloud-download"></span>
                  <h3 className="custom-font">
                    {/* <span className="count">12 </span> + */}
                    <CountUp end={12} duration={5.4} /> +
                  </h3>
                  <Split>
                    <p className="wow txt words chars splitting" data-splitting>
                      Countries served
                    </p>
                  </Split>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="item">
                  <span className="icon pe-7s-medal"></span>
                  <h3 className="custom-font">
                    {/* <span className="count">4</span> */}
                    <CountUp end={4} duration={5.6} /> +
                  </h3>
                  <Split>
                    <p className="wow txt words chars splitting" data-splitting>
                      Award Won
                    </p>
                  </Split>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NumbersWithVideo;
