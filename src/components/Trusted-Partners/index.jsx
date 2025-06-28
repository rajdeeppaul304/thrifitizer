import React from 'react';
import Image from 'next/image';

const TrustedPartners = ({ partners }) => {
  return (
    <section className="trusted-partner-main">
      <div className="trusted-partner-container">
        <h2 className="trusted-partner-heading text-white">
          We are Partners with
        </h2>

        <div className="trusted-partner-grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-card">
              <div className="partner-image-wrapper" >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  layout="fill"
                  objectFit="contain"
                  // className="rounded-circle"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
