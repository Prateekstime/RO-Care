import React from "react";

const brands = [
  { name: "Doctor Fresh", img: "https://via.placeholder.com/120x80?text=Doctor+Fresh" },
  { name: "BIO+", img: "https://via.placeholder.com/120x80?text=BIO+" },
  { name: "Water Pure", img: "https://via.placeholder.com/120x80?text=Water+Pure" },
  { name: "Lifestraw", img: "https://via.placeholder.com/120x80?text=Lifestraw" },
  { name: "Aqua Dove", img: "https://via.placeholder.com/120x80?text=Aqua+Dove" },
  { name: "V-GUARD", img: "https://via.placeholder.com/120x80?text=V-GUARD" },
  { name: "AquaDart", img: "https://via.placeholder.com/120x80?text=AquaDart" },
  { name: "Thunderwell", img: "https://via.placeholder.com/120x80?text=Thunderwell" },
  { name: "R.K Aqua Fresh India", img: "https://via.placeholder.com/120x80?text=R.K+Aqua+Fresh" },
  { name: "Kinsco", img: "https://via.placeholder.com/120x80?text=Kinsco" },
  { name: "Aquatec Plus", img: "https://via.placeholder.com/120x80?text=Aquatec+Plus" },
  { name: "Oseas Aqua", img: "https://via.placeholder.com/120x80?text=Oseas+Aqua" },
  { name: "P-Link", img: "https://via.placeholder.com/120x80?text=P-Link" },
  { name: "Ruby", img: "https://via.placeholder.com/120x80?text=Ruby" },
  { name: "Alfa", img: "https://via.placeholder.com/120x80?text=Alfa" },
  { name: "Zero-B", img: "https://via.placeholder.com/120x80?text=Zero-B" },
  { name: "Aquafresh", img: "https://via.placeholder.com/120x80?text=Aquafresh" },
  { name: "Wave", img: "https://via.placeholder.com/120x80?text=Wave" },
  { name: "Lynna", img: "https://via.placeholder.com/120x80?text=Lynna" },
  { name: "Electrolux", img: "https://via.placeholder.com/120x80?text=Electrolux" },
  { name: "PureIt", img: "https://via.placeholder.com/120x80?text=PureIt" },
  { name: "Hitech", img: "https://via.placeholder.com/120x80?text=Hitech" },
  { name: "Nasaka", img: "https://via.placeholder.com/120x80?text=Nasaka" },
  { name: "Tata Swach", img: "https://via.placeholder.com/120x80?text=Tata+Swach" },
  { name: "BlueStar", img: "https://via.placeholder.com/120x80?text=BlueStar" },
  { name: "LG", img: "https://via.placeholder.com/120x80?text=LG" },
  { name: "Midea", img: "https://via.placeholder.com/120x80?text=Midea" },
  { name: "MarQ", img: "https://via.placeholder.com/120x80?text=MarQ" },
  { name: "Aqua Grand", img: "https://via.placeholder.com/120x80?text=Aqua+Grand" },
  { name: "Aquasoft", img: "https://via.placeholder.com/120x80?text=Aquasoft" },
  { name: "AO Smith", img: "https://via.placeholder.com/120x80?text=AO+Smith" },
  { name: "Blue Mount", img: "https://via.placeholder.com/120x80?text=Blue+Mount" },
  { name: "Cuckoo", img: "https://via.placeholder.com/120x80?text=Cuckoo" },
  { name: "Bluebird", img: "https://via.placeholder.com/120x80?text=Bluebird" },
  { name: "Havells", img: "https://via.placeholder.com/120x80?text=Havells" },
  { name: "MI", img: "https://via.placeholder.com/120x80?text=MI" },
];

const AllBrands = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-8 relative">
        <span className="border-b-2 border-gray-300 pb-2">ALL BRANDS</span>
      </h2>

      <div className="bg-cyan-800 text-white px-4 py-2 font-semibold text-lg rounded-t-md">
        WATER PURIFIER
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 bg-white p-6 border border-gray-200 rounded-b-md shadow-sm">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-50 rounded-md shadow-sm p-4 hover:shadow-md transition"
          >
            <img
              src={brand.img}
              alt={brand.name}
              className="w-24 h-16 object-contain mb-3"
            />
            <p className="text-sm font-medium text-gray-800 text-center">
              {brand.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllBrands;
