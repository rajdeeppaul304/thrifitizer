import React from "react";
import Split from "../Split";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const BlogsThreeColumn1 = ({ subBG, newHome, isBlogPage=false }) => {
  // Single variables for static text
  const wordpressText = "";
  const byAdminText = "by / Admin";

  const blogs = [
    {
      img: "/img/blog/blog_1.jpg",
      date: "06 Jun 2025",
      title: "Google Algorithm Updates: All Major Changes in 2025.",
      delay: ".3s",
      readMoreLink: "/blog/google_growth",
    },
    {
      img: "/img/blog/blog_2.jpg",
      date: "11 Jun 2025",
      title: "How to Optimize for Search Generative Experience (SGE).",
      delay: ".6s",
      readMoreLink: "/blog/optimize_sge",
    },
    {
      img: "/img/blog/blog_3.jpg",
      date: "09 Jun 2025",
      title: "What is AI-Powered Automated Bidding?",
      delay: ".9s",
      readMoreLink: "/blog/automated_bidding",
    },
    {
      img: "/img/blog/blog_4.jpg",
      date: "15 Jun 2025",
      title: "How Fast Does Google Index New Content?",
      delay: "1.2s",
      readMoreLink: "/blog/how_fast_google_index",
    },
  ];

  return (
    <section className={`blog-grid section-padding ${subBG ? "sub-bg" : ""}`}>
      <style jsx>{`
        .blog-slider-container {
          position: relative;
          margin-bottom: 60px;
        }

        .swiper-nav-ctrl {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .swiper-nav-ctrl:hover {
          background: #fff;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .swiper-button-prev {
          left: -60px;
        }

        .swiper-button-next {
          right: -60px;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 18px;
          font-weight: bold;
          color: #333;
        }

        @media (max-width: 1200px) {
          .swiper-button-prev {
            left: -15px;
          }
          .swiper-button-next {
            right: -15px;
          }
        }

        @media (max-width: 768px) {
          .swiper-nav-ctrl {
            width: 40px;
            height: 40px;
          }
          .swiper-button-prev {
            left: -10px;
          }
          .swiper-button-next {
            right: -10px;
          }
          .swiper-button-prev::after,
          .swiper-button-next::after {
            font-size: 14px;
          }
        }
      `}</style>

      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Latest News
          </h6>
          <Split>
            <h3 className="wow" data-splitting>
              {isBlogPage ? "Also Read." : "Our Blogs."}
              
            </h3>
          </Split>
          {!newHome && <span className="tbg">Blogs</span>}
        </div>

        <div className="blog-slider-container">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            className="blog-slider"
          >
            {blogs.map((blog, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`item bg-img ${newHome ? "active" : ""}`}
                  style={{ backgroundImage: `url(${blog.img})` }}
                >
                  <div className="cont">
                    <div className="date custom-font">
                      <span>
                        <i>{blog.date.split(" ")[0]}</i>{" "}
                        {blog.date.split(" ").slice(1).join(" ")}
                      </span>
                    </div>
                    <div className="info custom-font">
                      <span className="author">{byAdminText}</span>
                      <span className="tag">{wordpressText}</span>
                    </div>
                    <h6>{blog.title}</h6>
                    <div className="btn-more custom-font">
                      <a href={blog.readMoreLink} className="simple-btn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="swiper-button-prev swiper-nav-ctrl"></div>
          <div className="swiper-button-next swiper-nav-ctrl"></div>
        </div>
      </div>
    </section>
  );
};

export default BlogsThreeColumn1;
