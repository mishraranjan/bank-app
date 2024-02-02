import React from "react";
import "./FeaturesBooks.css";

import TitleTypeOne from "../../UI/TitleTypeOne/TitletypeOne";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper/modules";

// import feature books
import { featuredBooksData } from "../../Data/Data";

// import link from router-dom
import { Link } from "react-router-dom";

// import react-icons
import { BsArrowReturnRight } from "react-icons/bs";

const breakpoint = {
  1024: {
    slidesPerView: 4,
    spaceBetweenSlides: 150,
  },
  768: {
    slidesPerView: 3,
    spaceBetweenSlides: 200,
  },
  480: {
    slidesPerView: 2,
    spaceBetweenSlides: 200,
  },
  0: {
    slidesPerView: 1,
    spaceBetweenSlides: 0,
  },
};

export default function FeaturesBooks() {
  return (
    <section className="Featured">
      <div className="container features-book-container">
        <TitleTypeOne
          TitleTop={"Some Quality items"}
          Title={"Featured Books"}
        />
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          loop={true}
          modules={[Pagination]}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          breakpoints={breakpoint}
        >
          {featuredBooksData.map(
            ({ img, imgLink, name, nameLink, writer, price }, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="featurebook-box">
                    <Link to={imgLink} className="featurebook">
                      <img src={img} alt="" />
                    </Link>
                    <div className="featurebook-info">
                      <Link to={nameLink}>
                        <h4>{name}d</h4>
                      </Link>
                      <div>
                        <small>{writer}</small>
                      </div>
                      <h5>
                        <span>{price}</span>
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          )}
          <div className="feature-border container"></div>
          <div className="swiper-pagination"></div>
          <Link to="*" className="btn feature-btn">
            View all products <BsArrowReturnRight />
          </Link>
        </Swiper>
      </div>
    </section>
  );
}
