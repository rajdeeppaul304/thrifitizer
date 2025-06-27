import React from 'react';

const testimonials = [
  {
    quote:
      'Working with Thriftizer transformed our brand. The store not only looks amazing but performs even better.',
    author: '— CEO, The Indian Ethnic Co.',
  },
  {
    quote:
      'Their Shopify expertise is unmatched. We scaled from 0 to 5x revenue in 3 months.',
    author: '— Co-founder, FireBoltt',
  },
];

const ProjectDetailsTestimonials = () => {
  return (
    <section
      style={{
        background: '#18181b',
        color: '#fff',
        padding: '60px 0',
        minHeight: '100vh',
      }}
    >
      <div className="container" style={{ maxWidth: 700, margin: '0 auto' }}>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '2.5rem',
            fontWeight: 700,
            letterSpacing: '-1px',
          }}
        >
          What Our Clients Say
        </h2>
        <div>
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              style={{
                background: '#23232a',
                borderRadius: '1rem',
                padding: '2rem',
                marginBottom: '2rem',
                boxShadow: '0 2px 16px rgba(0,0,0,0.25)',
              }}
            >
              <p
                style={{
                  fontSize: '1.25rem',
                  fontStyle: 'italic',
                  marginBottom: '1.5rem',
                  lineHeight: 1.6,
                }}
              >
                "{t.quote}"
              </p>
              <div
                style={{
                  textAlign: 'right',
                  fontWeight: 600,
                  color: '#a3a3a3',
                  fontSize: '1rem',
                }}
              >
                {t.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsTestimonials;
