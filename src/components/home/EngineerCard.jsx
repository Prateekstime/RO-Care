import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

// Your video/image imports
import Video from "../../assets/video.png";
import Video1 from "../../assets/video1.png";
import Video2 from "../../assets/video2.png";
import Video3 from "../../assets/video3.png";
import Video4 from "../../assets/video4.png";

const EngineerCard = () => {
  const engineers = [
    { src: Video, alt: "Engineer Video" },
    { src: Video1, alt: "Engineer Video 1" },
    { src: Video2, alt: "Engineer Video 2" },
    { src: Video3, alt: "Engineer Video 3" },
    { src: Video4, alt: "Engineer Video 4" },
  ];

  return (
    <div className="relative w-full max-w-[1440px] px-8 mx-auto py-4">
      <h2 className="text-3xl font-semibold text-center mb-2 text-blue-900">
        What Our Engineers Say
      </h2>
       <div className="w-[340px] mx-auto  h-1 rounded-lg bg-gradient-to-r  mb-8 from-blue-700 via-blue-400 to-blue-700"></div>


      <Swiper
        modules={[ Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        breakpoints={{
          180: { slidesPerView: 1 },
          360: { slidesPerView: 2 },
          520: { slidesPerView: 3 },
           780 : { slidesPerView: 4 },
        }}
      >
        {engineers.map((engineer, index) => (
          <SwiperSlide key={index}>
            <div className="flex py-4 flex-col items-center transition-all duration-300 hover:scale-105">
              <img
                src={engineer.src}
                alt={engineer.alt}
                className="w-full h-[440px] object-cover rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EngineerCard;
