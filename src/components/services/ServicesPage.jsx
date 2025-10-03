import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import AMC from "../../assets/AMC.png";
import AMCPlan from "../../assets/AMCPlan.png";
import BlueStar from "../../assets/BlueStar.png";
import RepairService from "../../assets/RepairService.png";
import ROinstallation from "../../assets/ROinstallation.png";
import Service from "../../assets/Service.png";
import Service1 from "../../assets/Service1.png";
import Service2 from "../../assets/Service2.png";
import UnIn from "../../assets/UnIn.png";
import UnInService from "../../assets/UnInService.png";
import Quality from "../../assets/Quality.png";
import Customer from "../../assets/Customer.png";
import Gift from "../../assets/GiftBox.png";

import { useState } from "react";

const ServicesPage = () => {
  const [price, setPrice] = useState({ min: 99, max: 9999 });

  const handleMinChange = (e) => {
    const newMin = Number(e.target.value);
    setPrice((prev) => ({
      min: newMin,
      max: Math.max(newMin, prev.max), // Ensure max is not less than min
    }));
  };

  const handleMaxChange = (e) => {
    const newMax = Number(e.target.value);
    setPrice((prev) => ({
      min: Math.min(prev.min, newMax), // Ensure min is not more than max
      max: newMax,
    }));
  };
  // Customer reviews
  const reviews = [
    {
      name: "Devon Lane",
      date: "24 Dec, 2024",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sed lacus facilisi semper lacus rhoncus cursus...",
      rating: 4,
    },
    {
      name: "Eleanor Pena",
      date: "20 Jul, 2024",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sed lacus facilisi semper lacus rhoncus cursus...",
      rating: 5,
    },
    {
      name: "Jane Cooper",
      date: "15 Jan, 2024",
      review:
        "Lorem ipsum dolor sit amet consectetur. Sed lacus facilisi semper lacus rhoncus cursus...",
      rating: 4,
    },
  ];

  // Service sections
  const servicesData = [
    {
      section: "Repair",
      image: Service1,
      products: [
        {
          name: "Water Purifier Check-up",
          price: 299,
          time: "30 mins",
          rating: 4.81,
          reviews: "1.9M Reviews",
          description: "Complete check-up to identify issues before repair.",
        },
        {
          name: "RO Filter Replacement",
          price: 499,
          time: "45 mins",
          rating: 4.9,
          reviews: "1.2M Reviews",
          description: "Replace old filter for better purification.",
        },
      ],
    },
    {
      section: "Service",
      image: Service2,
      products: [
        {
          name: "Water Purifier Servicing",
          price: 399,
          time: "40 mins",
          rating: 4.8,
          reviews: "2M Reviews",
          description: "Regular maintenance service for RO systems.",
        },
      ],
    },
    {
      section: "Installation/Uninstallation",
      image: UnInService,
      products: [
        {
          name: "RO Installation",
          price: 599,
          time: "60 mins",
          rating: 4.85,
          reviews: "1.5M Reviews",
          description: "Professional installation by experts.",
        },
      ],
    },
    {
      section: "AMC Plan",
      image: AMC,
      products: [
        {
          name: "AMC 6 Months",
          price: 999,
          time: "N/A",
          rating: 4.9,
          reviews: "500K Reviews",
          description: "Annual maintenance contract for your RO system.",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-5 mx-4 my-6 font-sans">
      {/* Page Title */}
      <div className="flex items-center">
        <div className="flex-grow border-t border-gray-600"></div>
        <span className="mx-2 text-3xl font-semibold text-[#0B3D91]">
          SERVICES
        </span>
        <div className="flex-grow border-t border-gray-600"></div>
      </div>

      {/* Top Service Cards */}
      <div className="grid grid-cols-4 gap-6 mt-6">
        {[
          { img: RepairService, title: "Repair" },
          { img: Service, title: "Service" },
          { img: UnIn, title: "Installation/Uninstallation" },
          { img: AMCPlan, title: "AMC Plan" },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-5 rounded-xl text-center shadow-[0_4px_10px_rgba(0,0,0,0.08)] 
                 hover:shadow-[0_8px_25px_rgba(31,122,140,0.25)]  transition-all duration-300 ease-in-out"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-78 h-78 mx-auto object-contain"
            />
            <div className="pt-3">
              <h4 className="text-lg font-semibold text-[#0B3D91]">
                {service.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Main Body */}
      <div className="flex gap-x-10 mt-8">
        {/* Sidebar */}
        <div className="w-1/4 flex flex-col gap-8">
          {/* Sort By */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-[#0B3D91]">
              Sort By
            </h3>
            {["Popular", "Price Low - High", "Price High - Low", "Latest"].map(
              (item, index) => (
                <div key={index} className="mb-1">
                  <input
                    type="checkbox"
                    id={item}
                    className="mr-2 accent-[#1F7A8C]"
                  />
                  <label htmlFor={item} className="text-gray-600">
                    {item}
                  </label>
                </div>
              )
            )}
          </div>

          {/* Price */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-[#0B3D91]">Price</h3>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-[#1F7A8C]"></div>
              <input
                type="range"
                min="0"
                max="10000"
                value={price.min}
                onChange={handleMinChange}
                className="w-full"
              />
              <div className="w-5 h-5 rounded-full bg-[#1F7A8C]"></div>
            </div>

            <div className="text-gray-600">
              <FaRupeeSign /> {price.min} - <FaRupeeSign /> {price.max}
            </div>
          </div>

          {/* Offers */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-[#0B3D91]">
              Offers
            </h3>
            {[
              {
                title: "UPI Off ₹50",
                desc: "Pay using any UPI and get instant off ₹50",
              },
              {
                title: "Debit Card Off ₹100",
                desc: "Pay using Debit Card and get off ₹50",
              },
              {
                title: "Credit Card Off 5%",
                desc: "Pay using Credit Card and get 5% off",
              },
            ].map((offer, idx) => (
              <div key={idx} className="flex items-start gap-3 mb-2">
                <div className="w-8 h-8 bg-[#1F7A8C] text-white rounded-full flex items-center justify-center">
                  %
                </div>
                <div>
                  <div className="font-medium text-[#0B3D91]">
                    {offer.title}
                  </div>
                  <div className="text-sm text-gray-600">{offer.desc}</div>
                </div>
              </div>
            ))}
            <button className="text-[#1F7A8C] mt-2 hover:underline">
              View More Offers
            </button>
          </div>

          {/* Customer Reviews */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-[#0B3D91]">
              Customer Reviews
            </h3>
            {reviews.map((review, idx) => (
              <div key={idx} className="mb-4 border-b border-gray-300 pb-2">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-3">
                    <img
                      src={Customer}
                      alt={review.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="text-sm text-gray-600">
                      <div>{review.name}</div>
                      <div className="text-gray-500">{review.date}</div>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl ${
                          i < review.rating ? "text-[#1F7A8C]" : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600">{review.review}</p>
              </div>
            ))}
            <button className="text-[#1F7A8C] mt-2 hover:underline">
              View More Reviews
            </button>
          </div>

          {/* Techno RO Promise */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-[#0B3D91]">
              Techno RO Promise
            </h3>
            {[Quality, Customer].map((img, idx) => (
              <div key={idx} className="flex items-center gap-3 mb-3">
                <img src={img} alt="Promise" className="w-12 h-12" />
                <p className="text-gray-600">
                  We provide quality services and satisfaction guaranteed.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="w-11/12 md:w-4/5 flex flex-col gap-8 mx-auto 
                    bg-gradient-to-br from-[#E0F7FA] to-[#B2EBF2] 
                    p-8 rounded-3xl"
        >
          {servicesData.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-semibold mb-6 text-[#0B3D91]">
                {section.section}
              </h2>

              <div className="flex flex-col gap-6">
                {section.products.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col md:flex-row border border-[#1F7A8C]/30 
                           rounded-3xl overflow-hidden bg-white 
                           shadow-md hover:shadow-xl hover:shadow-[#1F7A8C]/40
                           transition-transform transform hover:scale-105"
                  >
                    {/* Image */}
                    <div className="md:w-1/3 w-full h-52 md:h-auto">
                      <img
                        src={section.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="md:w-2/3 w-full p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-[#0B3D91]">
                          {item.name}
                        </h3>

                        <div className="flex items-center gap-2 mb-2">
                          <img src={BlueStar} alt="Star" className="w-4 h-4" />
                          <span className="font-semibold">{item.rating}</span>
                          <span className="text-gray-400 text-sm">
                            ({item.reviews})
                          </span>
                        </div>

                        <div className="flex items-center gap-6 mb-2">
                          <span className="font-semibold text-lg flex items-center gap-1 text-[#1F7A8C]">
                            <FaRupeeSign /> {item.price}
                          </span>
                          <span className="text-gray-500 text-sm flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-black"></div>
                            {item.time}
                          </span>
                        </div>

                        <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                          {item.description}
                        </p>

                        <button className="text-[#1F7A8C] hover:text-[#145C66] font-semibold text-sm">
                          View Details
                        </button>
                      </div>

                      <button
                        className="bg-[#1F7A8C] hover:bg-[#145C66] text-white 
                                     px-5 py-2 rounded-lg text-sm font-medium 
                                     shadow w-max self-start mt-4 transition-all"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rewards & Gifts Section */}
      <div className="w-full max-w-[100%] h-[400px] flex items-center justify-between bg-[#FFD166] px-10 mx-auto rounded-2xl mt-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-gray-800">
            Refer and Earn Rewards
          </h2>
          <p className="text-lg text-gray-600">
            Invite and get <span className="font-semibold">₹100 cash back</span>{" "}
            on your purchase.
          </p>
          <button className="w-[160px] h-[48px] bg-[#EF476F] text-white font-medium rounded-lg">
            Learn More
          </button>
        </div>
        <div>
          <img src={Gift} alt="Gift Box" className="w-[200px] h-auto" />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
