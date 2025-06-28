import React from 'react';
import Image from 'next/image';
import Google from "../../../public/trustedPartners/Google .png"
import Meta from "../../../public/trustedPartners/meta.png"
import Omnisend from "../../../public/trustedPartners/omnisend.png"
import Shopify from "../../../public/trustedPartners/Shopify.png"

const TrustedPartners = () => {
  const partners = [
    { id: 1, name: 'Google', image: Google },
    { id: 2, name: 'Meta', image: Meta },
    { id: 3, name: 'Omnisend', image: Omnisend },
    { id: 4, name: 'Shopify', image: Shopify }
  ];

  return (
    <section className="trusted-partner-main">
      <div className="trusted-partner-container">
        <h2 className="trusted-partner-heading text-white">
          We are Partners with
        </h2>
        
        <div className="trusted-partner-grid">
          {partners.map((partner) => (
             <div key={partner.id} className="partner-card" >
                <div className="partner-image-wrapper" style={{ borderRadius: '60%' }}>
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-circle"
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
