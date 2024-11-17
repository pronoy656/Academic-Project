// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="h-16 border">
          <img
            className="h-[600px] w-full"
            src="https://i.ibb.co.com/Dttschg/DALL-E-2024-11-16-22-09-30-A-minimalist-and-aesthetic-banner-featuring-two-potted-plants-similar-to.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[600px] w-full"
            src="https://i.ibb.co.com/nMVM5wb/openart-image-kc527-LX-1731774377825-raw.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[600px] w-full"
            src="https://i.ibb.co.com/c6hNrb9/DALL-E-2024-11-16-22-17-54-A-high-definition-image-of-a-single-home-plant-in-a-modern-minimalistic-p.webp"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
