import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { ShoppingCart, CreditCard } from "lucide-react"; 
import { ChevronRight } from "lucide-react";
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
import { useNavigate } from "react-router-dom";
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

const ServicesPage = () => {
  const navigate = useNavigate();
    const [price, setPrice] = useState(9999);
  const min = 99;
  const max = 99999;

  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  

  const repairData = {
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
    {
      name: "UV Lamp Replacement",
      price: 699,
      time: "40 mins",
      rating: 4.85,
      reviews: "900K Reviews",
      description: "Enhance germicidal efficiency with a new UV lamp.",
    },
    {
      name: "RO Membrane Change",
      price: 1199,
      time: "60 mins",
      rating: 4.87,
      reviews: "850K Reviews",
      description: "Replace membrane to restore purification performance.",
    },
    {
      name: "Pump Repair",
      price: 899,
      time: "90 mins",
      rating: 4.78,
      reviews: "650K Reviews",
      description: "Fix or replace damaged booster pumps.",
    },
    {
      name: "TDS Level Adjustment",
      price: 249,
      time: "20 mins",
      rating: 4.82,
      reviews: "720K Reviews",
      description: "Adjust TDS levels for better water taste.",
    },
    {
      name: "Water Leakage Fix",
      price: 349,
      time: "25 mins",
      rating: 4.84,
      reviews: "1M Reviews",
      description: "Identify and repair leakage points efficiently.",
    },
    {
      name: "RO Tap Replacement",
      price: 199,
      time: "15 mins",
      rating: 4.91,
      reviews: "560K Reviews",
      description: "Replace broken or leaking water purifier tap.",
    },
    {
      name: "Filter Candle Replacement",
      price: 299,
      time: "30 mins",
      rating: 4.79,
      reviews: "440K Reviews",
      description: "Replace sediment candle for clean filtration.",
    },
    {
      name: "Sediment Filter Change",
      price: 349,
      time: "30 mins",
      rating: 4.77,
      reviews: "510K Reviews",
      description: "Remove dirt particles for clearer water flow.",
    },
    {
      name: "Carbon Filter Replacement",
      price: 449,
      time: "35 mins",
      rating: 4.83,
      reviews: "600K Reviews",
      description: "Improve taste and odor with a new carbon filter.",
    },
    {
      name: "Inline Filter Change",
      price: 399,
      time: "25 mins",
      rating: 4.81,
      reviews: "480K Reviews",
      description: "Upscale purification quality with inline filters.",
    },
    {
      name: "Water Flow Speed Fix",
      price: 249,
      time: "15 mins",
      rating: 4.72,
      reviews: "430K Reviews",
      description: "Fix low water flow caused by clogged filters.",
    },
    {
      name: "Noisy RO Repair",
      price: 499,
      time: "30 mins",
      rating: 4.74,
      reviews: "390K Reviews",
      description: "Reduce noise caused by malfunctioning parts.",
    },
    {
      name: "RO Water Storage Cleaning",
      price: 599,
      time: "60 mins",
      rating: 4.88,
      reviews: "820K Reviews",
      description: "Deep clean tank to remove bacteria & scale.",
    },
    {
      name: "Pressure Valve Setup",
      price: 399,
      time: "20 mins",
      rating: 4.76,
      reviews: "550K Reviews",
      description: "Correct pressure to maintain smooth flow.",
    },
    {
      name: "Anti-Scalant Filter Setup",
      price: 549,
      time: "30 mins",
      rating: 4.9,
      reviews: "470K Reviews",
      description: "Prevent scale buildup in membrane.",
    },
    {
      name: "RO Adapter Replacement",
      price: 649,
      time: "25 mins",
      rating: 4.73,
      reviews: "340K Reviews",
      description: "Replace faulty adapters for stable powering.",
    },
    {
      name: "Float Valve Change",
      price: 299,
      time: "20 mins",
      rating: 4.86,
      reviews: "370K Reviews",
      description: "Fix water overflow and leakage issues.",
    },
    {
      name: "Copper Guard Installation",
      price: 899,
      time: "50 mins",
      rating: 4.92,
      reviews: "200K Reviews",
      description: "Enhance purification using copper shield.",
    },
  ],
};


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

      {/* Main Body */}
      <div className="flex gap-x-4 mt-8 max-w-[1440px] mx-auto">
        {/* Sidebar */}
        <div className="hidden sm:flex sm:w-1/3">

          <div className="   p-4 bg-white rounded-lg">
                  
                  {/* Product Brands */}
                  <div>
                    <h3 className="text-lg font-semibold">Product Brands</h3>
                    <div className="my-2 border-t border-dashed border-gray-400"></div>
                    <ul className="space-y-3 text-sm">
                      {["KENT", "Pure it", "Livpure", "Eureka FORBES", "BLUE MOUNT"].map(
                        (brand, i) => (
                          <li key={i}>
                            <input type="checkbox" className="mr-2" />
                            <label>{brand}</label>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
        
                  {/* Sort By */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold">Sort By</h3>
                    <div className="my-2 border-t border-dashed border-gray-400"></div>
                    {["Popular", "Price Low - High", "Price High - Low", "Latest"].map(
                      (opt, i) => (
                        <div key={i} className="mb-2">
                          <input type="checkbox" className="mr-2" />
                          <label>{opt}</label>
                        </div>
                      )
                    )}
                  </div>
        
                  {/* Price Range */}
                  <div className="w-full max-w-md mx-auto mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="text-lg font-semibold text-gray-800">Price</h2>
                      <p className="text-gray-800 font-medium">₹{price}</p>
                    </div>
                    <input
                      type="range"
                      min={min}
                      max={max}
                      value={price}
                      onChange={handleChange}
                      className="w-full h-2 rounded-full appearance-none cursor-pointer bg-gradient-to-r from-purple-600 via-blue-600 to-red-500"
                    />
                    <div className="flex justify-between mt-3 text-gray-700 font-medium">
                      <span>₹{min}</span>
                      <span>₹{max}</span>
                    </div>
                  </div>
        
                  {/* Reviews */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold">Customer Reviews</h3>
                    <div className="my-2 border-t border-dashed border-gray-400"></div>
                    {reviews.map((review, index) => (
                      <div key={index} className="mb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img src={Customer} alt="" className="w-10 h-10 rounded-full" />
                            <div>
                              <p className="text-sm text-gray-600">{review.name}</p>
                              <p className="text-xs text-gray-500">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`text-md ${
                                  i < review.rating ? "text-[#7EC1B1]" : "text-gray-300"
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
                  </div>
        
                  {/* Techno RO Promise */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Techno RO Promise</h3>
                    <div className="flex gap-3 items-start">
                      <ul className="space-y-2 text-sm">
                        <li>✓ Verified Professionals</li>
                        <li>✓ Hassle-Free Booking</li>
                        <li>✓ Transparent Pricing</li>
                        <li>✓ Genuine Spare Parts</li>
                      </ul>
                      <img src={Quality} alt="" className="w-16 h-16" />
                    </div>
                  </div>
                </div>
        </div>
        

        {/* ✅ Single Repair Section */}
        <div>
          <div className="flex flex-col gap-2 sm:gap-6  ">
            <div>
              <div className="flex justify-between">
                <h2 className="text-xl md:text-2xl my-3 text-gray-800">
                  {repairData.section}
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-1 shadow-md rounded-2xl border-t p-4">
                {repairData.products.map((item, i) => (
                  <div
                    onClick={() => {
                      navigate("/services");
                    }}
                    key={i}
                    className="borderrounded-2xl bg-white shadow hover:shadow-xl hover:shadow-[#1F7A8C]/30 transition-transform hover:scale-[1.02] overflow-hidden"
                  >
                    <img
                      src={repairData.image}
                      alt={item.name}
                      className="w-full m-2 h-48 object-cover"
                    />
                    <div className="p-1 flex flex-col justify-between">
                      <h3 className="text-sm md:text-lg font-semibold text-[#0B3D91] mb-2">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <img
                          src={BlueStar}
                          alt="Star"
                          className="w-3 h-3 sm:w-4 sm:h-4"
                        />
                        <span className="font-semibold text-xs sm:text-base">
                          {item.rating}
                        </span>
                        <span className="text-gray-400 text-xs sm:text-sm">
                          ({item.reviews})
                        </span>
                      </div>
                      <div className="flex items-center gap-6 mb-3">
                        <span className="font-semibold text-lg flex items-center gap-1 text-[#1F7A8C]">
                          <FaRupeeSign /> {item.price}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-black"></div>{" "}
                          {item.time}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {item.description}
                      </p>
                            <div className="flex gap-2 w-full justify-evenly">
  {/* Add to Cart */}
  <button className="text-xs sm:text-sm whitespace-nowrap px-2 flex items-center justify-center border border-black rounded-md hover:bg-green-500 transition">
    {/* Show icon on small screens */}
    <ShoppingCart size={14} className="sm:hidden" />
    {/* Show text on larger screens */}
    <span className="hidden sm:block">
      Add to <br /> Cart
    </span>
  </button>

  <button className="text-xs sm:text-sm px-2 flex items-center justify-center bg-green-500 border border-green-700 text-white rounded-md hover:bg-green-600 transition">
   
    <span className="">
      Buy Now
    </span>
  </button>
</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;
