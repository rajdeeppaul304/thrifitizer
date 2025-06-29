import React from "react";
import addParlx from "../../common/addParlx";

const ContactHeader = ({ 
  sliderRef, 
  title = "Let's Build Your Success Story Next.", 
  subtitle = "Whether you’re launching, scaling, or rebranding — we’d love to help.", 
  backgroundText = "Contact" 
}) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);

  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      addParlx();
    }
  }, [pageLoaded]);

  // Split title into two parts if needed
  const splitTitle = title.split(" ");
  const firstWord = splitTitle[0];
  const restOfTitle = splitTitle.slice(1).join(" ");

  return (
    <header ref={sliderRef} className="works-header fixed-slider hfixd valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-11 static">
            <div className="capt mt-50">
              <div className="parlx">
                <h2 className="custom-font">
                  <span>{firstWord}</span> {restOfTitle}
                </h2>
                <p>{subtitle}</p>
              </div>

              <div className="bactxt custom-font valign">
                <span className="full-width">{backgroundText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ContactHeader;
