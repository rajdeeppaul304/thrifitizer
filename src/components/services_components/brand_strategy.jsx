// import StylesServices from './styles.jsx';
import Split from "../Split";

const ThreeSixtyDegree = () => {
  return (

    <div className="performance-marketing-page">
      <style jsx>{`


          .performance-marketing-page {
            min-height: 85vh;
            color: #ffffff;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          .hero-section {
            padding: 100px 0 80px;
            background-size: cover;
            background-position: center;
            position: relative;
            overflow: hidden;
          }

          .hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
background: radial-gradient(circle at 20% 20%, rgba(117, 218, 180, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(66, 190, 150, 0.12) 0%, transparent 50%);
            pointer-events: none;
          }

          .hero-content {
            position: relative;
            z-index: 2;
          }

          .hero-title {
            font-size: 3.5rem;
            font-weight: 700;
            background: white;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1.5rem;
            line-height: 1.5;
            color:white;
          }

          .hero-subtitle {
            font-size: 1.3rem;
            color: #b0b8c4;
            margin-bottom: 2rem;
            font-weight: 300;
            line-height: 1.6;
          }

          .section-content {
            padding: 20px 0;
          }
          .section-title {
            font-size: 2.5rem;
            font-weight: 600;
            color: #ffffff !important;
            margin-bottom: 3rem;
            text-align: center;
            position: relative;
          }


          .service-card {
            background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 20px;
            padding: 2.5rem;
            margin-bottom: 2rem;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
                        border-color: rgba(117, 218, 180, 0.3);
            box-shadow: 0 20px 40px rgba(117, 218, 180, 0.2);
          }

          .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(117, 218, 180, 0.1) 0%, rgba(76, 175, 80, 0.1) 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .service-card:hover::before {
            opacity: 1;
          }

          .service-card:hover {
            transform: translateY(-10px);
          }

          .service-card-content {
            position: relative;
            z-index: 2;
          }

          .service-icon {
            font-size: 3rem;
            background: linear-gradient(135deg, #75dab4 0%, #4caf50 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1.5rem;
          }

          .service-card h3 {
            font-size: 1.5rem;
            font-weight: 600;
            color: #ffffff;
            margin-bottom: 1rem;
          }

          .service-card p {
            color: #b0b8c4;
            line-height: 1.7;
            margin-bottom: 1.5rem;
          }

          .service-list {
            list-style: none;
            padding: 0;
          }

          .service-list li {
            color: #d1d5db;
            margin-bottom: 0.8rem;
            padding-left: 1.5rem;
            position: relative;
          }

          .service-list li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #75dab4;
            font-weight: bold;
          }

          .stats-section {
            background: linear-gradient(135deg, rgba(117, 218, 180, 0.1) 0%, rgba(76, 175, 80, 0.1) 100%);
            padding: 60px 0;
            margin: 60px 0;
            border-radius: 20px;
          }

          .stat-item {
            text-align: center;
            padding: 1.5rem;
          }

          .stat-number {
            font-size: 3rem;
            font-weight: 700;
            background: linear-gradient(135deg, #75dab4 0%, #4caf50 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            display: block;
            margin-bottom: 0.5rem;
          }

          .stat-label {
            color: #b0b8c4;
            font-size: 1.1rem;
            font-weight: 500;
          }

          .cta-section {
            // background: linear-gradient(135deg, #75dab4 0%, #42caa1 100%);
            padding: 60px 0;
            border-radius: 20px;
            text-align: center;
            margin-top: 60px;
        margin-left:100px;
         margin-right:100px;
            margin-bottom: 100px; 

          }

          .cta-title {
            font-size: 2.5rem;
            font-weight: 600;
            color: #ffffff !important ;
            margin-bottom: 1rem;
          }

          .cta-subtitle {
            font-size: 1.2rem;
            color: rgba(255,255,255,0.9);
            margin-bottom: 2rem;
          }

          .cta-button {
            background: rgba(255,255,255,0.2);
            border: 2px solid rgba(255,255,255,0.3);
            color: #ffffff;
            padding: 15px 40px;
            font-size: 1.1rem;
            font-weight: 600;
            border-radius: 50px;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
          }

          .cta-button:hover {
            background: rgba(255,255,255,0.3);
            border-color: rgba(255,255,255,0.5);
            color: #ffffff;
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          }

          .platform-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
          }

          .platform-item {
            background: rgba(255,255,255,0.05);
            padding: 1.5rem;
            border-radius: 15px;
            text-align: center;
            border: 1px solid rgba(255,255,255,0.1);
            transition: all 0.3s ease;
          }

          .platform-item:hover {
            background: rgba(255,255,255,0.1);
            transform: translateY(-5px);
          }

          .platform-item i {
            font-size: 2.5rem;
            color: #667eea;
            margin-bottom: 1rem;
          }

          .platform-item h4 {
            color: #ffffff;
            font-size: 1.1rem;
            font-weight: 600;
          }

          @media (max-width: 768px) {
            .hero-title {
              font-size: 2.5rem;
            }
            
            .section-title {
              font-size: 2rem;
            }
            
            .service-card {
              padding: 2rem;
            }
            
            .cta-title {
              font-size: 2rem;
            }
              
          .cta-section {

        margin:10px;
            margin-bottom: 100px; 

          }
          }
      .fab{
        color:white !important;
      }
        .fas{
          color:white !important;
        }
          .masonry-grid {
  column-count: 2;
  column-gap: 2rem;
  margin-bottom: 3rem;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .masonry-grid {
    column-count: 1;
  }
}

        `}</style>

      {/* Hero Section */}
    <section
      className="hero-section"
      style={{
        position: "relative",
        height: "85vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      >
        <source src="/services/services_1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: -1,
        }}
      ></div>

      {/* Content */}
      <div
        className="container"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="hero-content text-white">
              <h1 className="hero-title">Brand Strategy & Design</h1>
              <p className="hero-subtitle">
                            We craft distinctive brand identities that resonate with your audience. From logo and voice to full digital experience, designed specifically for Shopify storefronts.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

{/* Overview Section */}
<section className="section-content">
  <div className="container">
          <div className="sec-head custom-font text-center mt-40">
            
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Overview.
              </h3>
            </Split>
            <span className="tbg">Overview</span>
          </div>    <div className="row">
      <div className="col-lg-12">
        <div className="service-card">
          <div className="service-card-content">
            <div className="service-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3>Distinctive Branding for Shopify</h3>
            <p>
              We craft distinctive brand identities that resonate with your audience. From logo and voice to full digital experience, designed specifically for Shopify storefronts.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* What We Do Section */}
<section className="section-content">
  <div className="container">
          <div className="sec-head custom-font text-center mt-40">
            
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                What We Do.
              </h3>
            </Split>
            <span className="tbg">What We Do.</span>
          </div>    <div className="row">
      <div className="col-lg-6 mb-4">
        <div className="service-card">
          <div className="service-card-content">
            <div className="service-icon">
              <i className="fas fa-comments"></i>
            </div>
            <h3>Brand Workshops</h3>
            <p>Host branding workshops to define mission, positioning, tone, and visual identity.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mb-4">
        <div className="service-card">
          <div className="service-card-content">
            <div className="service-icon">
              <i className="fas fa-palette"></i>
            </div>
            <h3>Visual Identity Design</h3>
            <p>Design logo, color palette, typography, and compelling Shopify UI elements. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mb-4">
        <div className="service-card">
          <div className="service-card-content">
            <div className="service-icon">
              <i className="fas fa-pencil-ruler"></i>
            </div>
            <h3>On-Brand Assets</h3>
            <p>Produce assets like pitch decks, banners, packaging insert designs, and email templates.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mb-4">
  <div className="service-card">
    <div className="service-card-content">
      <div className="service-icon">
        <i className="fas fa-bullhorn"></i>
      </div>
      <h3>Campaign Creative</h3>
      <p>Develop creative concepts and visuals for seasonal promotions, product launches, and brand campaigns.</p>
    </div>
  </div>
</div>

    </div>
  </div>
</section>

{/* Why It Works Section */}
<section className="section-content">
  <div className="container">
          <div className="sec-head custom-font text-center mt-40">
            
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Why It Works.
              </h3>
            </Split>
            <span className="tbg">Why It Works.</span>
          </div>    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="service-card">
          <div className="service-card-content">
            <div className="service-icon">
              <i className="fas fa-gem"></i>
            </div>
            <h3>Shopify-First Brand Thinking</h3>
            <p>
              As Shopify experts, we merge strategic branding with UX design, so your aesthetic is not only beautiful, but drives trust, engagement, and conversions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Who It's For Section */}
<section className="section-content">
  <div className="container">
          <div className="sec-head custom-font text-center mt-40">
            
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Who It's For.
              </h3>
            </Split>
            <span className="tbg">Who It's For.</span>
          </div>    <div className="row d-flex align-items-stretch">
      <div className="col-lg-4 mb-4 d-flex">
        <div className="service-card w-100">
          <div className="service-card-content">
            <div className="service-icon">
              <i className="fas fa-store"></i>
            </div>
            <h3>Polished Shopify Presence</h3>
            <p>Brands needing a polished and consistent presence on Shopify.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4 d-flex">
        <div className="service-card w-100">
          <div className="service-card-content">
            <div className="service-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3>Startup Launches</h3>
            <p>Startups launching new labels or direct-to-consumer lines with brand-first strategies.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4 d-flex">
        <div className="service-card w-100">
          <div className="service-card-content">
            <div className="service-icon">
              <i className="fas fa-layer-group"></i>
            </div>
            <h3>Unified Brand Storytelling</h3>
            <p>Companies seeking cohesive branding across email, site, packaging, and social.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="cta-section">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <h2 className="cta-title">Book a Brand Identity Deep-Dive</h2>
        <p className="cta-subtitle">
          Uncover the colors, design, and messaging that will scale your store's impact and connection with your audience.
        </p>

        <div className="custom-made">
                <a href="/contact" className="btn-curve btn-lit custom-button">
                  <span className="text-color-black">
                    Schedule My Session
                  </span>
                </a>
              </div>
      </div>
    </div>
  </div>
</section>

      </div>


   )
   }

export default ThreeSixtyDegree;