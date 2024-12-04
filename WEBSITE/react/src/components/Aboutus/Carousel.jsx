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
        <h2 className="mb-4">Our Team</h2>
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
                src="https://via.placeholder.com/300"
                alt="Team Member 1"
                className="img-fluid rounded-circle mb-3"
              />
              <h5>Team Member 1</h5>
              <p>Role</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-card">
              <img
                src="https://via.placeholder.com/300"
                alt="Team Member 2"
                className="img-fluid rounded-circle mb-3"
              />
              <h5>Team Member 2</h5>
              <p>Role</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-card">
              <img
                src="https://via.placeholder.com/300"
                alt="Team Member 3"
                className="img-fluid rounded-circle mb-3"
              />
              <h5>Team Member 3</h5>
              <p>Role</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-card">
              <img
                src="https://via.placeholder.com/300"
                alt="Team Member 3"
                className="img-fluid rounded-circle mb-3"
              />
              <h5>Team Member 4</h5>
              <p>Role</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-card">
              <img
                src="https://via.placeholder.com/300"
                alt="Team Member 3"
                className="img-fluid rounded-circle mb-3"
              />
              <h5>Team Member 5</h5>
              <p>Role</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
