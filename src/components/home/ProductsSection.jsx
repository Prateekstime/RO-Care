import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import featureImage1 from "../../assets/product_1676_2_thumb.jpg"
import featureImage2 from "../../assets/product_427_1_thumb.webp";
import featureImage3 from "../../assets/product_445_1_thumb.webp";
import featureImage4 from "../../assets/product_1702_1_thumb.webp";
import featureImage5 from "../../assets/product_963_1_thumb.webp";
import featureImage6 from "../../assets/product_311_1_thumb.webp";
import featureImage7 from "../../assets/product_689_1_thumb.webp";
import featureImage8 from "../../assets/product_659_1_thumb.webp";
import featureImage9 from "../../assets/product_488_1_thumb.webp";
import featureImage10 from "../../assets/product_1695_1_thumb.webp";
import featureImage11 from "../../assets/product_1696_1_thumb.webp";
import featureImage12 from "../../assets/product_1698_1_thumb.webp";
import featureImage13 from "../../assets/product_1731_1_thumb.webp";
import featureImage14 from "../../assets/product_1732_1_thumb.webp";
import featureImage15 from "../../assets/product_997_1_thumb.webp";
import featureImage16 from "../../assets/product_415_1_thumb.webp";
import featureImage17 from "../../assets/product_428_1_thumb.webp";
import featureImage18 from "../../assets/product_429_1_thumb.webp";
import featureImage19 from "../../assets/product_935_1_thumb.webp";
import featureImage20 from "../../assets/product_442_1_thumb.webp";
import featureImage21 from "../../assets/product_444_1_thumb.webp";
import featureImage22 from "../../assets/product_1676_2_thumb.jpg";
import featureImage23 from "../../assets/product_446_1_thumb.webp";
import featureImage24 from "../../assets/product_445_1_thumb.webp";

import "swiper/css";
import "swiper/css/navigation";

const categories = [
  "Featured Products",
  "Water Purifier",
  "RO Plant",
  "Water Softner",
  "Water Ionizer",
  "Spare Parts",
];

// Products grouped by category
const productsByCategory = {
  "Featured Products": [
    { id: 1, name: "RO+UV+UF+TDS ", brand: "RO Care India", price: "₹18,500.00", image: featureImage1 },
    { id: 2, name: "Water Ionizer", brand: "Chanson India", price: "₹2,60,000.00", image: featureImage2  },
    { id: 3, name: "Knitters RO ", brand: "Shri Krishna Enterprises", price: "₹2,200.00", image: featureImage3 },
    { id: 4, name: "250 LPH RO Plant", brand: "RO Care India", price: "₹1,50,000.00", image: featureImage4 },
    { id: 5, name: "Water Dispenser", brand: "3D Logic", price: "₹14,000.00", image: featureImage5 },
  ],
  "Water Purifier": [
    { id: 6, name: "Water Purifier", brand: "PurePro", price: "₹12,500.00", image: featureImage1 },
    { id: 7, name: "AquaSafe Home RO", brand: "AquaSafe", price: "₹15,000.00", image: featureImage6 },
    { id: 8, name: "Kent Grand Plus", brand: "Kent", price: "₹18,000.00", image: featureImage7 },
    { id: 9, name: "BlueStar RO Smart", brand: "BlueStar", price: "₹14,500.00", image: featureImage8 },
    { id: 10, name: "Livpure Glo RO+UV", brand: "Livpure", price: "₹16,000.00", image: featureImage9 },
  ],
  "RO Plant": [
    { id: 11, name: "RO Plant 500 LPH", brand: "RO Care India", price: "₹1,80,000.00", image: featureImage10 },
    { id: 12, name: "RO Plant 1000 LPH", brand: "RO Care India", price: "₹3,50,000.00", image:featureImage10 },
    { id: 13, name: "RO Plant 2000 LPH", brand: "Shree Water Solutions", price: "₹6,50,000.00", image: featureImage11 },
    { id: 14, name: "RO Plant Industrial", brand: "Chanson India", price: "₹7,20,000.00", image: featureImage12 },
    { id: 15, name: "RO Plant 300 ", brand: "RO Care India", price: "₹90,000.00", image:featureImage12 },
  ],
  "Water Softner": [
    { id: 16, name: "SoftPro 50L", brand: "SoftPro", price: "₹45,000.00", image: featureImage13 },
    { id: 17, name: "SoftPro 100L", brand: "SoftPro", price: "₹80,000.00", image: featureImage14},
    { id: 18, name: "BlueSoft Home", brand: "BlueStar", price: "₹60,000.00", image: featureImage15 },
    { id: 19, name: "PureSoft X200", brand: "PurePro", price: "₹55,000.00", image:featureImage15 },
    { id: 20, name: "Kent Soft Plus", brand: "Kent", price: "₹50,000.00", image: featureImage14 },
  ],
  "Water Ionizer": [
    { id: 21, name: "Ionizer X500", brand: "Chanson India", price: "₹2,60,000.00", image: featureImage1 },
    { id: 22, name: "Ionizer Home Plus", brand: "Kent", price: "₹1,80,000.00", image: featureImage16 },
    { id: 23, name: "Water Ionizer Pro", brand: "RO Care India", price: "₹2,20,000.00", image: featureImage17 },
    { id: 24, name: "Ionizer Max", brand: "AquaSafe", price: "₹2,50,000.00", image: featureImage18},
    { id: 25, name: "Chanson Ionizer X200", brand: "Chanson India", price: "₹1,95,000.00", image:featureImage19},
  ],
  "Spare Parts": [
    { id: 26, name: "RO Membrane G3000", brand: "Shri Krishna", price: "₹2,200.00", image: featureImage20 },
    { id: 27, name: "RO Pump", brand: "RO Care India", price: "₹5,000.00", imag:  featureImage21},
    { id: 28, name: "Filter Cartridge", brand: "Kent", price: "₹1,500.00", image: featureImage22 },
    { id: 29, name: "TDS Controller", brand: "Chanson India", price: "₹3,500.00", image: featureImage23 },
    { id: 30, name: "UV Lamp", brand: "AquaSafe", price: "₹2,800.00", image: featureImage24 },
  ],
};

const features = [
  { text: "Free Shipping", icon: "🚚" },
  { text: "Money Back Guarantee", icon: "💰" },
  { text: "Free Installation", icon: "🛠️" },
  { text: "Easy EMI Option", icon: "💳" },
  { text: "Service Within 24 Hour", icon: "⏰" },
  { text: "Online Order Tracking", icon: "📦" },
];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Featured Products");

  const products = productsByCategory[activeCategory]; // dynamically get products for selected category

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 py-4">
      <h2 className="text-xl sm:text-3xl font-semibold text-center text-black mb-2">
        Our Products
      </h2>
      
      <p className="text-sm sm:text-xl text-center mb-4">
        Choose the product according your preference.
      </p>
      


    
<div className="flex flex-nowrap whitespace-nowrap scrollbar-hide overflow-x-auto justify-start gap-2 sm:gap-6 mb-8 px-2">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setActiveCategory(cat)}
      className={`flex-shrink-0 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition ${
        activeCategory === cat
          ? "bg-[#31B22BD9] text-white"
          : "bg-gray-200 text-black hover:bg-[#ddfff7]"
      }`}
      style={{ width: "fit-content" }}
    >
      {cat}
    </button>
  ))}
</div>


<Swiper
  modules={[Navigation]}
  navigation
  spaceBetween={10}
  breakpoints={{
    180: { slidesPerView: 2.5 },     // tiny screens
    320: { slidesPerView: 4 },       // small phones
    480: { slidesPerView: 4 },       // large phones
    768: { slidesPerView: 4 },       // tablets
    1024: { slidesPerView: 4 },      // laptops
    1280: { slidesPerView: 5 },      // desktops
  }}
>
  {products.map((product) => (
    <SwiperSlide key={product.id}>
      <div className="bg-white border rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col">
        <div className="flex justify-center items-center h-24 sm:h-36 lg:h-50 p-1 sm:p-4 relative">
          <div className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-white px-2 bg-[#008ECC]">
            <p>42%<br />Off</p>
          </div>
          <img
            src={product.image}
            alt={product.name}
            className="h-20 sm:h-full object-contain"
          />
        </div>
        <div className="p-4 flex flex-col gap-2">
          <p className="text-gray-800 text-xs sm:text-base font-medium">
            {product.name}
          </p>
          <p className="font-semibold text-sm text-blue-900">
            {product.price}
            <span className="inline line-through text-gray-500 ml-1">
              ₹{parseInt(product.price.replace(/[₹,]/g, "")) + 5000}
            </span>
          </p>
          <div className="flex gap-2 w-full justify-between">
            <button className="text-xs sm:text-sm whitespace-nowrap px-2 flex items-center justify-center border border-black rounded-md hover:bg-green-500 transition">
              Add to <br /> Cart
            </button>
            <button className="text-xs sm:text-sm   px-2 flex items-center justify-center bg-green-500 border border-green-700 text-white rounded-md hover:bg-green-600 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>


      {/* Features */}
      <div className="flex flex-wrap justify-center gap-10 mt-12">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center max-w-[140px]"
          >
            {/* <div className="text-3xl mb-2">{f.icon}</div>
            <p className="text-gray-700 font-medium">{f.text}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
