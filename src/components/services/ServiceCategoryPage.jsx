import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { Check, PhoneCall, Globe, Mail } from "lucide-react";
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
import CustomerReviewCard from "../home/CustomerReviewCard";

const ServiceCategoryPage = () => {
    const navigate =useNavigate();
  const [price, setPrice] = useState({ min: 99, max: 9999 });

  const reviews = [
    { name: "Devon Lane", date: "24 Dec, 2024", review: "Lorem ipsum...", rating: 4 },
    { name: "Eleanor Pena", date: "20 Jul, 2024", review: "Lorem ipsum...", rating: 5 },
    { name: "Jane Cooper", date: "15 Jan, 2024", review: "Lorem ipsum...", rating: 4 },
  ];

  const features = [
    { title: "Experienced Professionals", desc: "Our highly trained and skilled team ensures top-quality service." },
    { title: "Fast & Reliable", desc: "We offer same-day service to keep your RO system running efficiently." },
    { title: "Affordable Pricing", desc: "Transparent pricing with no hidden charges." },
    { title: "Customer Satisfaction", desc: "100% guaranteed results for pure and healthy water." },
    { title: "24/7 Support", desc: "Our team is always ready to assist you with your RO service needs." },
    { title: "Trusted Service", desc: "Reliable and expert solutions for all RO maintenance needs." },
  ];

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
    { icon: <PhoneCall size={18} />, bg: "bg-blue-600", text: "+91-9268887770", link: "tel:+919268887770" },
    { icon: <Globe size={18} />, bg: "bg-blue-600", text: "www.rocareindia.com", link: "https://www.rocareindia.com" },
    { icon: <Mail size={18} />, bg: "bg-blue-600", text: "info@rocareindia.com", link: "mailto:info@rocareindia.com" },
  ];

  return (
    <div className="flex flex-col gap-10 mx-auto my-6 font-sans max-w-[1440px] px-4 md:px-8">
      {/* Page Title */}
      <div className="flex items-center justify-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="mx-3 text-2xl md:text-3xl font-bold text-[#0B3D91]">SERVICES</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      {/* Top Service Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {[
          { img: RepairService, title: "Repair" },
          { img: Service, title: "Service" },
          { img: UnIn, title: "Installation/Uninstallation" },
          { img: AMCPlan, title: "AMC Plan" },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-5 rounded-xl text-center shadow-md hover:shadow-xl hover:shadow-[#1F7A8C]/25 transition-all duration-300"
          >
            <img src={service.img} alt={service.title} className="w-32 h-32 mx-auto object-contain" />
            <h4 className="text-lg font-semibold text-[#0B3D91] mt-4">{service.title}</h4>
           
          </div>
        ))}
      </div>

      {/* Service Details */}
      <div className="flex flex-col gap-10  ">
        {servicesData.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-xl md:text-2xl font-semibold  text-[#0B3D91]">{section.section}</h2>
             <div className="w-32 h-1 rounded-full bg-[#008ECC] mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 shadow-md rounded-2xl border-t p-4">
              {section.products.map((item, i) => (
                <div onClick={()=>{navigate("/services")}}
                  key={i}
                  className="border border-[#1F7A8C]/30 rounded-2xl bg-white shadow hover:shadow-xl hover:shadow-[#1F7A8C]/30 transition-transform hover:scale-[1.02] overflow-hidden"
                >
                  <img src={section.image} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="p-5 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold text-[#0B3D91] mb-2">{item.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <img src={BlueStar} alt="Star" className="w-4 h-4" />
                      <span className="font-semibold">{item.rating}</span>
                      <span className="text-gray-400 text-sm">({item.reviews})</span>
                    </div>
                    <div className="flex items-center gap-6 mb-3">
                      <span className="font-semibold text-lg flex items-center gap-1 text-[#1F7A8C]">
                        <FaRupeeSign /> {item.price}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-black"></div> {item.time}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                    <div className="grid w-full px-2 grid-cols-2 gap-3">
                        <button className="text-md px-2 py-2 flex items-center justify-center border border-black rounded-md hover:bg-green-500 transition">
                          Add to Cart
                        </button>

                        <button className="text-md px-2 py-2 flex items-center justify-center bg-green-400 border border-green-700 text-white rounded-md hover:bg-green-600 transition">
                          Buy Now
                        </button>
                      </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose Section */}
      <section className="bg-gray-50 rounded-xl shadow-md p-6 md:p-10">
        <h2 className="text-center text-xl md:text-2xl font-bold mb-10">
          Why Choose <span className="text-blue-600">RO Care India</span> Water Purifier Service In India{" "}
          <span className="text-blue-600 font-semibold">@9268887770?</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-white rounded-lg px-5 py-4 border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-all"
            >
              <Check className="text-blue-600 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-700 text-sm md:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 rounded-lg shadow-md p-8 text-center">
        <h2 className="text-lg md:text-xl font-bold text-gray-800">
          Book Your Water Purifier Service Today!
        </h2>
        <p className="text-gray-600 mt-2">
          Don’t wait! Get the <span className="font-semibold">Best RO service</span> at the most competitive rates.
          Contact RO Care India today for a free consultation and quote.
        </p>

        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-full shadow-md px-6 py-3 hover:shadow-lg transition-all w-full md:w-auto"
            >
              <div className={`p-2 rounded-full ${item.bg} text-white`}>{item.icon}</div>
              <span className="text-gray-800 font-medium">{item.text}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Customer Review Section */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-4 text-blue-800">Happiness Guarantee</h2>
        <div className="w-[340px] mx-auto h-1 rounded-lg bg-gradient-to-r mb-2 from-blue-700 via-blue-400 to-blue-700"></div>
        <CustomerReviewCard />
      </section>
    </div>
  );
};

export default ServiceCategoryPage;
