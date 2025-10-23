import React from "react";
import Slider from "react-slick";
import Purifier from "../../assets/Purifier.png";
import Offer1 from "../../assets/Offer1.png";
import Offer2 from "../../assets/Offer2.png";
import Offer3 from "../../assets/Offer3.png";
import Offer4 from "../../assets/Offer4.png";
import Offer5 from "../../assets/Offer5.png";
import GoRightButton from "../ui/GoRightButton";
import GoLeft from "../ui/GoLeft";

function CategoryCard() {
  const categoryData = [
    { id: 1, image: Purifier, title: "Purifiers" },
    { id: 2, image: Offer5, title: "Water Softener" },
    { id: 3, image: Offer3, title: "Water Dispenser" },
    { id: 4, image: Offer4, title: "Water Cooler" },
    { id: 5, image: Offer2, title: "Water Ionizer" },
    { id: 6, image: Offer1, title: "Water Tank" },
  ];

  // Custom navigation buttons
  const NextArrow = ({ onClick }) => (
    <button
      className="absolute -right-2 sm:right-[-30px] sm:top-1/2 top-12 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:scale-110 transition"
      onClick={onClick}
    >
      <GoRightButton />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute -left-2 sm:left-[-30px] sm:top-1/2 top-12  -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:scale-110 transition"
      onClick={onClick}
    >
      <GoLeft />
    </button>
  );

  // Slider configuration
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 3 },
      },
    ],
  };

  return (
    <div className="relative w-full px-2 sm:px-10 py-6">
      <Slider {...settings}>
        {categoryData.map((category) => (
          <div
            key={category.id}
            className="!flex !justify-center !items-center flex-col text-center"
          >
            {/* Circle */}
            <div className="sm:w-40 sm:h-40 w-24 h-24 flex items-center justify-center bg-gray-50 border border-cyan-400 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-blue-300 cursor-pointer">
              <img
                src={category.image}
                alt={category.title}
                className="h-20 w-20 object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Text below the circle */}
            <p className="mt-3 text-[16px] sm:text-base font-semibold text-blue-800 text-center">
              {category.title}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );

}

export default CategoryCard;
