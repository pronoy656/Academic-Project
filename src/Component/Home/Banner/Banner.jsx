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
        <SwiperSlide>
          <div className="h-[600px] w-full border border-red-500">
            <h1>The Best</h1>
            <h1>Indoor Plant </h1>
            <h1>For You</h1>
            <div className="border-2 border-red-400 mt-2"></div>
            <h1>Create Anything By Your Style</h1>
          </div>
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
