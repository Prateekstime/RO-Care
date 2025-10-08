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
import { Check } from "lucide-react";
import { PhoneCall, Globe, Mail } from "lucide-react";

import { useState } from "react";
import CustomerReviewCard from "../home/CustomerReviewCard";

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
   const features = [
    {
      title: "Experienced Professionals",
      desc: "Our highly trained and skilled team ensures top-quality service.",
    },
    {
      title: "Fast & Reliable",
      desc: "We offer same-day service to keep your RO system running efficiently.",
    },
    {
      title: "Affordable Pricing",
      desc: "Transparent pricing with no hidden charges.",
    },
    {
      title: "Customer Satisfaction",
      desc: "100% guaranteed results for pure and healthy water.",
    },
    {
      title: "24/7 Support",
      desc: "Our team is always ready to assist you with your RO service needs.",
    },
    {
      title: "Trusted Service",
      desc: "Reliable and expert solutions for all RO maintenance needs.",
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
    const contactInfo = [
    {
      icon: <PhoneCall className="text-white" size={18} />,
      bg: "bg-blue-600",
      text: "+91-9268887770",
      link: "tel:+919268887770",
    },
    {
      icon: <Globe className="text-white" size={18} />,
      bg: "bg-blue-600",
      text: "www.rocareindia.com",
      link: "https://www.rocareindia.com",
    },
    {
      icon: <Mail className="text-white" size={18} />,
      bg: "bg-blue-600",
      text: "info@rocareindia.com",
      link: "mailto:info@rocareindia.com",
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

            <div className="text-gray-600 flex ">
              <FaRupeeSign className="mt-1 text-sm"/> {price.min} - <FaRupeeSign className="mt-1 text-sm" /> {price.max}
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

       <section className="max-w-7xl mx-auto px-6 py-4">
      <h2 className="text-center text-xl md:text-2xl font-bold mb-10">
        Why Choose <span className="text-blue-600">RO Care India</span> Water
        Purifier Service In India{" "}
        <span className="text-blue-600 font-semibold">@9268887770?</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-gray-100 rounded-lg px-5 py-4 border-l-4 border-blue-600 shadow-sm"
          >
            <Check className="text-blue-600 mt-1 flex-shrink-0" size={20} />
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
      <section className="max-w-7xl mx-auto px-6 ">
      <div className="bg-gray-50 rounded-lg shadow-md p-8 text-center">
        <h2 className="text-lg md:text-xl font-bold text-gray-800">
          Book Your Water Purifier Service Today!
        </h2>
        <p className="text-gray-600 mt-2">
          Don’t wait! Get the <span className="font-semibold">Best RO service</span> 
          at the most competitive rates. Contact rocareindia today for a free 
          consultation and quote.
        </p>

        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-full shadow-md px-6 py-3 transition hover:shadow-lg w-full md:w-auto"
            >
              <div className={`p-2 rounded-full ${item.bg}`}>{item.icon}</div>
              <span className="text-gray-800 font-medium">{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>

    <section>
          <h2 className="text-3xl font-semibold text-center mb-4 text-blue-800">
        Happiness Guarantee
      </h2>
       <div className="w-[340px] mx-auto  h-1 rounded-lg bg-gradient-to-r  mb-2 from-blue-700 via-blue-400 to-blue-700"></div>

    
      <CustomerReviewCard />
    </section>


    </div>
  );
};

export default ServicesPage;
