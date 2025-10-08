import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WaterFilter from "../../assets/Water.png";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      title: "Get exciting offers on first service booking",
      image: WaterFilter,
      buttonText: "Book Service Now",
    },
    {
      title: "Special discount for new customers",
      image: WaterFilter,
      buttonText: "Get Discount",
    },
    {
      title: "Premium service at affordable prices",
      image: WaterFilter,
      buttonText: "Learn More",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const goToSlide = (index) => setCurrentSlide(index);

  // Animation variants for smooth slide effect
  const slideVariants = {
    enter: {
      opacity: 0,
      x: 100,
      transition: { duration: 0.6 },
    },
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-700 relative overflow-hidden">
      <div className="flex flex-col items-center justify-center relative py-6 z-10">
        <div className="flex items-center justify-center gap-20 px-4">
          {/* Animated Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col md:flex-row items-center justify-center gap-12"
            >
              {/* Left Side - Text & Button */}
              <div className="max-w-[400px] text-center md:text-left flex flex-col items-center md:items-start gap-6">
                <h2 className="font-poppins font-semibold text-[30px] leading-[45px] text-white drop-shadow-lg">
                  {banners[currentSlide].title}
                </h2>
                <button className="w-[220px] h-[52px] bg-white/20 backdrop-blur-sm text-white text-lg font-medium rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-lg">
                  {banners[currentSlide].buttonText}
                </button>
              </div>

              {/* Right Side - Image */}
              <div className="relative flex justify-center items-center">
                <motion.img
                  key={banners[currentSlide].image}
                  src={banners[currentSlide].image}
                  alt="Banner"
                  className="w-[550px] h-[320px] object-contain drop-shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-[10px] h-[10px] rounded-full transition-all duration-300 hover:scale-125 cursor-pointer ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-blue-200/20 to-transparent"></div>
    </div>
  );
}

export default Banner;
