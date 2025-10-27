import React from "react";
import {
  FaClock,
  FaShieldAlt,
  FaCogs,
  FaArrowCircleRight,
  FaTools,
  FaUserCheck,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaHeadset,
  FaMedal,
} from "react-icons/fa";

import img2 from "../../assets/RO_Plant_Service.webp";
import img1 from "../../assets/Purifier.png";
import img3 from "../../assets/water_softener_Service.webp";
import img4 from "../../assets/amc-banner.webp";

const services = [
  {
    id: 1,
    title: "Water Purifier Service",
    img: img1,
    icon: <FaShieldAlt className="text-blue-700 text-lg sm:text-xl" />,
    time: "30 min",
  },
  {
    id: 2,
    title: "RO Plant Service",
    img: img2,
    icon: <FaCogs className="text-blue-700 text-lg sm:text-xl" />,
    time: "30 min",
  },
  {
    id: 3,
    title: "Water Softener Service",
    img: img3,
    icon: <FaTools className="text-blue-700 text-lg sm:text-xl" />,
    time: "30 min",
  },
  {
    id: 4,
    title: "Annual Maintenance Contract",
    img: img4,
    icon: <FaShieldAlt className="text-blue-700 text-lg sm:text-xl" />,
    time: "30 min",
  },
];

const features = [
  { id: 1, text: "Service in just 30 minutes", icon: <FaTools className="text-blue-700 text-xl" /> },
  { id: 2, text: "Verified Professionals", icon: <FaUserCheck className="text-blue-700 text-xl" /> },
  { id: 3, text: "Hassle Free Booking", icon: <FaCalendarCheck className="text-blue-700 text-xl" /> },
  { id: 4, text: "Transparent Pricing", icon: <FaMoneyBillWave className="text-blue-700 text-xl" /> },
  { id: 5, text: "24/7 Support", icon: <FaHeadset className="text-blue-700 text-xl" /> },
  { id: 6, text: "Trusted by Millions", icon: <FaMedal className="text-blue-700 text-xl" /> },
];

const ServiceSection = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto py-8 px-4 md:px-8">
      {/* --- Heading --- */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-blue-900 mb-1 sm:mb-4">
        Get Water Purifier Services in 30 min
      </h2>
      <div className="w-[60%] sm:w-[500px] mx-auto h-1 rounded-lg bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 mb-2 sm:mb-4"></div>

      <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto text-xs  sm:text-base leading-relaxed">
        Tired of waiting days for water purifier repairs? Our certified technicians reach your
        location within 30 minutes with professional-grade solutions. Whether it's emergency
        repairs, we fix it right the first time. Same-day service, transparent pricing, and
        100% satisfaction guarantee.
      </p>

      {/* --- Scrollable Service Cards --- */}
      <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-2 snap-x snap-mandatory scrollbar-hide">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex-shrink-0 w-[160px] sm:w-[240px] bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 snap-center"
          >
            <div className="relative">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-24 sm:h-36 object-cover border-b"
              />
              <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs flex items-center gap-1 shadow">
                <FaClock className="text-blue-600" /> {service.time}
              </div>
            </div>
            <div className="p-3 sm:p-4 flex flex-col items-center text-center">
              <p className="font-semibold text-xs sm:text-base flex items-center gap-1 text-gray-800 mb-2">
                {service.icon} {service.title}
              </p>
              <button className="mt-1 bg-white border border-blue-600 rounded-full px-4 py-1.5 text-blue-700 text-[12px] sm:text-sm font-medium shadow hover:bg-blue-50 transition flex items-center gap-1 sm:gap-2">
                <FaArrowCircleRight /> Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- Features --- */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center text-center w-[100px] sm:w-[130px]"
          >
            <div className="mb-1 sm:mb-2">{feature.icon}</div>
            <p className="text-gray-700 text-xs sm:text-sm font-medium">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
