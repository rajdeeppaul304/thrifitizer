import React from "react";
import Split from "../Split";
import services4Data from "../../data/sections/services4.json";
// import { useNavigate } from "react-router-dom";

const flipCardStyles = `
.flip-card {
  background: transparent;
  width: 100%;
  height: 260px;
  perspective: 1000px;
  margin-bottom: 30px;
  border: none;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(.4,2,.6,1);
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner,
.flip-card:focus-within .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #23272f; /* dark background */
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.38);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 20px;
  transition: box-shadow 0.3s;
  color: #fff; /* white text */
}
.flip-card-front {
  z-index: 2;
}
.flip-card-front .icon {
  font-size: 48px;
  margin-bottom: 18px;
  color: #75dab4; /* green shade */
}
.flip-card-front h6 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: #fff;
}
.flip-card-back {
  transform: rotateY(180deg);
  background: #75dab4;
  color: #fff;
  z-index: 3;
}
.flip-card-back p {
  font-size: 1rem;
  margin-bottom: 18px;
}
.flip-card-back .btn {
  background: #fff;
  color: #75dab4;
  border: none;
  padding: 8px 22px;
  border-radius: 24px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.flip-card-back .btn:hover {
  background: #f3f3f3;
  color: #75dab4;
}
.flip-card-back p{
color:white;
}


`;

const Services4 = ({ withBG, withPadding, halfBG, withOutTitle }) => {
  // const navigate = useNavigate();

  // Inject CSS for flip card effect
  React.useEffect(() => {
    if (!document.getElementById("flip-card-styles")) {
      const style = document.createElement("style");
      style.id = "flip-card-styles";
      style.innerHTML = flipCardStyles;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <section
      className={`services ${withPadding ? "section-padding" : ""} ${
        withBG ? "sub-bg" : ""
      }`}
    >
      <div className="container">
        {!withOutTitle && (
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              Best Features
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Services.
              </h3>
            </Split>
            <span className="tbg">Services</span>
          </div>
        )}
        <div className="row">
          {services4Data.map((item, index) => (
            <div className="col-lg-4" key={item.id}>
              <div
                className={`flip-card wow fadeInUp ${
                  index !== services4Data.length - 1 ? "md-mb50" : ""
                }`}
                data-wow-delay={
                  item.id === 1 ? ".5s" : item.id === 2 ? ".3s" : ".8s"
                }
                tabIndex={0}
              >
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front" style={{textAlign:'center'}}>
                    <span className={`icon ${item.icon}`}></span>
                    <h6>{item.title}</h6>
                  </div>
                  {/* Back Side */}
                  <div className="flip-card-back btn-">
                    <p>{item.content}</p>
                    <a href="/about/"
                      className=" btn-curve btn-lit mt-30 color-black"

                    >
                      <span>VIEW MORE</span>
                      
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {halfBG && <div className="half-bg bottom"></div>}
    </section>
  );
};

export default Services4;
