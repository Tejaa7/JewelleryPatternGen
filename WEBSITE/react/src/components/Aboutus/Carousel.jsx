import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";


export const Carousel = () => {
  return (
    <section className="team-members-section bg-dark text-white py-5">
      <div className="container text-center">
        <h2 className="mb-4" style={{fontSize:'45px'}}>Our Team</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper " 
        >
          <SwiperSlide>
            <div className="team-card">
              <img
                src="/images/aboutus/001.jpeg"
                alt="Team Member 1"
                className="img-fluid rounded-circle mb-3"
              />
              <h5>SRI SAI TEJA GHANKOT</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-card">
              <img
                src="/images/aboutus/002.jpg"
                alt="Team Member 2"
                className="img-fluid rounded-circle mb-3"
              />
              <h5>TEJA VARDHAN REDDY</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-card">
              <img
                src="/images/aboutus/003.jpg"
                alt="Team Member 3"
                className="img-fluid rounded-circle mb-3"
              />
              <h5>Samarpan Elipay</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-card">
              <img
                src="/images/aboutus/004.jpg"
                alt="Team Member 3"
                className="img-fluid rounded-circle mb-3"
              />
              <h5>BUVESH KUMAR</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-card">
              <img
                src="/images/aboutus/005.jpg"
                alt="Team Member 3"
                className="img-fluid rounded-circle mb-3"
              />
              <h5>ABBAGONI SUNIL</h5>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
