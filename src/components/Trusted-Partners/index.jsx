import React from 'react';
import Image from 'next/image';
import Split from "../Split";

const TrustedPartners = ({ partners, headingText, bg_text="" }) => {
  return (
    <section className="trusted-partner-main">
      <div className="trusted-partner-container">
        {/* <h1 className="trusted-partner-heading text-white responsive-heading">
          {headingText}
        </h1> */}
      <div className="sec-head custom-font text-center">

            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                {headingText}
              </h3>
            </Split>
            <span className="tbg">{bg_text}</span>
          </div>

        <div className="trusted-partner-grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-card">
              <div className="partner-image-wrapper">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  layout="fill"
                  objectFit="contain"
                />
                
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .responsive-heading {
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .responsive-heading {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .responsive-heading {
            font-size: 1.5rem;
          }
        }

        .partner-image-wrapper {
          position: relative;
          filter: grayscale(0%);
          transition: filter 0.3s ease;
        }

        .partner-image-wrapper:hover {
          filter: grayscale(0%);
        }

        
      `}</style>
    </section>
  );
};

export default TrustedPartners;
