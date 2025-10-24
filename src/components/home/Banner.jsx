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

  const slideVariants = {
    enter: { opacity: 0, x: 100, transition: { duration: 0.6 } },
    center: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.6 } },
  };

  return (
  <div className="relative w-full bg-[#212844] overflow-hidden rounded-lg py-10 px-4 md:px-8">
  {/* Decorative circles that move responsively */}
  <motion.div
    className="absolute right-[5%] -top-[40%] sm:-top-[50%] md:-top-[60%] lg:-top-[70%] z-0 border border-[#2C3454] rounded-full p-1"
    animate={{ y: [0, 10, 0], rotate: [0, 10, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="bg-[#2C3454] w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full"></div>
  </motion.div>

  <motion.div
    className="absolute left-[10%] bottom-[-20%] sm:bottom-[-25%] md:bottom-[-30%] z-0 border border-[#2C3454] rounded-full p-1"
    animate={{ y: [0, -10, 0], rotate: [0, -10, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="bg-[#2C3454] w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full"></div>
  </motion.div>

  {/* Main Banner Content */}
  <div className="relative z-10 flex flex-col items-center justify-center">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentSlide}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        className="flex flex-row items-center justify-between gap-6 sm:gap-10 md:gap-16 lg:gap-20 w-full max-w-[1200px]"
      >
        {/* Left Content */}
        <div className="flex flex-col items-start gap-6 text-left px-4 sm:px-6">
          <h2 className="text-white text-[18px] sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug drop-shadow-lg">
            {banners[currentSlide].title}
          </h2>
          <button className="w-[120px] sm:w-[180px] md:w-[200px] h-[42px] sm:h-[48px] bg-white/20 backdrop-blur-sm text-white text-sm sm:text-base md:text-lg font-medium rounded-lg border border-white/30 transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-lg">
            {banners[currentSlide].buttonText}
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center w-full sm:w-[280px] md:w-[380px] lg:w-[480px]">
          <motion.img
            key={banners[currentSlide].image}
            src={banners[currentSlide].image}
            alt="Banner"
            className="w-full h-auto object-contain drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </motion.div>
    </AnimatePresence>

    {/* Dots Navigation */}
    <div className="flex justify-center gap-2 mt-6">
      {banners.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`transition-all duration-300 rounded-full ${
            index === currentSlide
              ? "w-6 sm:w-8 h-[8px] bg-white rounded-full"
              : "w-[8px] h-[8px] bg-white/40 hover:bg-white/70"
          }`}
        />
      ))}
    </div>
  </div>

  {/* Gradient Overlay */}
  <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-blue-200/20 to-transparent"></div>
</div>

  );
}

export default Banner;
