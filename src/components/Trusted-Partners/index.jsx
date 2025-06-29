import React from 'react';
import Image from 'next/image';

const TrustedPartners = ({ partners, headingText }) => {
  return (
    <section className="trusted-partner-main">
      <div className="trusted-partner-container">
        <h2 className="trusted-partner-heading text-white responsive-heading">
          {headingText}
        </h2>

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
          font-size: 3rem;
          font-weight: bold;
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
      `}</style>
    </section>
  );
};

export default TrustedPartners;
