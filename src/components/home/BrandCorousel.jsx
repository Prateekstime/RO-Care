import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

// Example brand images (replace with your logos)
import brand1 from "../../assets/brand1.webp";
import brand2 from "../../assets/brand2.webp";
import brand3 from "../../assets/brand3.webp";
import brand4 from "../../assets/brand4.webp";
import brand5 from "../../assets/brand5.webp";
import brand6 from "../../assets/brand6.webp";
import brand7 from "../../assets/brand7.webp";
import brand8 from "../../assets/brand8.webp";
import brand9 from "../../assets/brand9.webp";

const brands = [
  { id: 1, image: brand1 },
  { id: 2, image: brand2 },
  { id: 3, image: brand3 },
  { id: 4, image: brand4 },
  { id: 5, image: brand5 },
  { id: 6, image: brand6 },
  { id: 7, image: brand7 },
  { id: 8, image: brand8 },
   { id: 9, image: brand9 },
];

const BrandCarousel = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-4">

      {/* <div className="w-[300px] mx-auto  h-1 rounded-lg bg-gradient-to-r  mb-8 from-blue-700 via-blue-400 to-blue-700"></div> */}

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={6} 
        grabCursor={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <div className="flex justify-center items-center p-4 shadow-lg bg-white rounded-lg  hover:shadow-md transition-all duration-300">
              <img
                src={brand.image}
                alt={`Brand ${brand.id}`}
                className="h-16 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandCarousel;
