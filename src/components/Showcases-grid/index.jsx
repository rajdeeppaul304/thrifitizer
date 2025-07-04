import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import ShowcassesFullScreenData from "../../data/showcases-full-screen-slider.json";
import SwiperCore, {
  Navigation,
  Pagination,
  Parallax,
  Mousewheel,
  Autoplay,
} from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import {FreeMode  } from "swiper";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import tooltipEffect from "../../common/tooltipEffect";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";

SwiperCore.use([Navigation, Pagination, Parallax, Mousewheel, Autoplay]);

const ShowcasesGrid = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
      tooltipEffect();
      removeSlashFromPagination();
    });
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <header className="slider showcase-grid">
      <div id="content-carousel-container-unq-1" className="swiper-container">
        {!load ? (
          <Swiper
            speed={3000} // Smooth continuous movement
            mousewheel={true}
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 0, // No delay - continuous movement
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            freeMode={true} // Enable free mode for continuous scrolling
            freeModeSticky={false} // Disable sticky stops
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                for (let i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].childNodes[0].setAttribute(
                    "data-swiper-parallax",
                    0.75 * swiper.width
                  );
                }
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            className="swiper-wrapper"
            slidesPerView={4}
          >
            {ShowcassesFullScreenData.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <Link passHref href={slide.url}>
                  <div
                    className="bg-img showcase-card"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                    }}
                  ></div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>
<Swiper
  modules={[Autoplay, FreeMode]}
  loop={true}
  freeMode={true}
  allowTouchMove={false}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}
  slidesPerView={5.5}
  spaceBetween={32}
  speed={2000}
  className="logo-swiper"
  breakpoints={{
    320: { slidesPerView: 2.5 },
    576: { slidesPerView: 3.5 },
    768: { slidesPerView: 4.5 },
    992: { slidesPerView: 5.5 },
  }}
>
  {Array.from({ length: 20 }).map((_, idx) => (
    <SwiperSlide key={idx}>
      <div
        className="first-class"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          color: idx % 2 === 0 ? "#75dab4" : "#ffffff",
        }}
      >
        <img
          src="/img/logo/logo2.png" // Replace with your logo URL
          alt="Client Logo"
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
        />
        <span>Our Best Clients</span>
      </div>
    </SwiperSlide>
  ))}
</Swiper>



      <style jsx global>{`
        .showcase-card {
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s;
          will-change: transform;
        }
        .showcase-card:hover {
          transform: scale(1.08);
          z-index: 2;
          box-shadow: 0 8px 32px rgba(0,0,0,0.18);
        }
          .txt-botm {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 20px 0;
}

.center-text {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
  font-size: 1.2rem;
  color: #75dab4; /* Adjust to match your design */
  z-index: 1;
  pointer-events: none; /* Allows clicks to pass through */
}
     .swiper-nav-ctrl{
        display:none;

    }

      `}</style>
    </header>
  );
};

export default ShowcasesGrid;