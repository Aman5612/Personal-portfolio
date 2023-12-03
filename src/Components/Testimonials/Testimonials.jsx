import React from "react";
import "./Testimonials.css";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonialData = [
  {
    avatar:
      "https://png.pngtree.com/png-clipart/20210915/ourlarge/pngtree-avatar-placeholder-abstract-white-blue-green-png-image_3918476.jpg",
    name: "Nobody",
    review: "---------",
  },
  {
    avatar:
      "https://png.pngtree.com/png-clipart/20210915/ourlarge/pngtree-avatar-placeholder-abstract-white-blue-green-png-image_3918476.jpg",
    name: "Nobody",
    review: "EMPTY",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5 className="text-light">Review from clients</h5>
      <h2 className="text-primary">Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonialData.map(({ avatar, name, review }, idex) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
