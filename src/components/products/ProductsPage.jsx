
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRupeeSign, FaClock } from "react-icons/fa";
import Quality from "../../assets/Quality.png";
import Customer from "../../assets/Customer.png";
import Gift from "../../assets/GiftBox.png";
import BlueStar from "../../assets/BlueStar.png";
import Offer1 from "../../assets/Offer1.png";
import Offer2 from "../../assets/Offer2.png";
import Offer3 from "../../assets/Offer3.png";
import Offer4 from "../../assets/Offer4.png";
import Offer5 from "../../assets/Offer5.png";
import Offer6 from "../../assets/Offer6.png";

// ✅ Your Category-Wise Product Data
const productsByCategory = {
  "Featured Products": [
    {
      id: 1,
      name: "Doctor Fresh Life Veda RO+UV+UF+TDS Infuser+ME+AS+Alkaline",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "RO Care India",
      price: "₹18,500.00",
      image: Offer1,
    },
    {
      id: 2,
      name: "Revolution Semi-Commercial Water Ionizer",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "Chanson India",
      price: "₹2,60,000.00",
      image: Offer2,
    },
    {
      id: 3,
      name: "Knitters RO Membrane G3000",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "Shri Krishna Enterprises",
      price: "₹2,200.00",
      image: Offer3,
    },
    {
      id: 4,
      name: "Doctor Fresh 250 LPH RO Plant - Platinum",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "RO Care India",
      price: "₹1,50,000.00",
      image: Offer4,
    },
    {
      id: 5,
      name: "Usha Celcius Floor Standing Water Dispenser",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "3D Logic",
      price: "₹14,000.00",
      image: Offer5,
    },
  ],
  "Water Purifier": [
    {
      id: 6,
      name: "PurePro Water Purifier X100",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "PurePro",
      price: "₹12,500.00",
      image: Offer6,
    },
    {
      id: 7,
      name: "AquaSafe Home RO",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "AquaSafe",
      price: "₹15,000.00",
      image: Offer3,
    },
    {
      id: 8,
      name: "Kent Grand Plus",
      brand: "Kent",
      price: "₹18,000.00",
      image: Offer4,
    },
    {
      id: 9,
      name: "BlueStar RO Smart",
      brand: "BlueStar",
      price: "₹14,500.00",
      image: Offer2,
    },
    {
      id: 10,
      name: "Livpure Glo RO+UV",
      brand: "Livpure",
      price: "₹16,000.00",
      image: Offer1,
    },
  ],
  "RO Plant": [
    {
      id: 11,
      name: "RO Plant 500 LPH",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "RO Care India",
      price: "₹1,80,000.00",
      image: Offer1,
    },
    {
      id: 12,
      name: "RO Plant 1000 LPH",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "RO Care India",
      price: "₹3,50,000.00",
      image: Offer2,
    },
    {
      id: 13,
      name: "RO Plant 2000 LPH",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "Shree Water Solutions",
      price: "₹6,50,000.00",
      image: Offer3,
    },
    {
      id: 14,
      name: "RO Plant Industrial",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "Chanson India",
      price: "₹7,20,000.00",
      image: Offer4,
    },
    {
      id: 15,
      name: "Compact RO Plant 300 LPH",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "RO Care India",
      price: "₹90,000.00",
      image: Offer5,
    },
  ],
  "Water Softner": [
    {
      id: 16,
      name: "SoftPro 50L",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "SoftPro",
      price: "₹45,000.00",
      image: Offer3,
    },
    {
      id: 17,
      name: "SoftPro 100L",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "SoftPro",
      price: "₹80,000.00",
      image: Offer5,
    },
    {
      id: 18,
      name: "BlueSoft Home",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "BlueStar",
      price: "₹60,000.00",
      image: Offer1,
    },
    {
      id: 19,
      name: "PureSoft X200",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "PurePro",
      price: "₹55,000.00",
      image: Offer2,
    },
    {
      id: 20,
      name: "Kent Soft Plus",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "Kent",
      price: "₹50,000.00",
      image: Offer6,
    },
  ],
  "Water Ionizer": [
    {
      id: 21,
      name: "Ionizer X500",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "Chanson India",
      price: "₹2,60,000.00",
      image: Offer4,
    },
    {
      id: 22,
      name: "Ionizer Home Plus",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "Kent",
      price: "₹1,80,000.00",
      image: Offer3,
    },
    {
      id: 23,
      name: "Water Ionizer Pro",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "RO Care India",
      price: "₹2,20,000.00",
      image: Offer5,
    },
    {
      id: 24,
      name: "Ionizer Max",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "AquaSafe",
      price: "₹2,50,000.00",
      image: Offer6,
    },
    {
      id: 25,
      name: "Chanson Ionizer X200",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "Chanson India",
      price: "₹1,95,000.00",
      image: Offer2,
    },
  ],
  "Spare Parts": [
    {
      id: 26,
      name: "RO Membrane G3000",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "Shri Krishna",
      price: "₹2,200.00",
      image: Offer1,
    },
    {
      id: 27,
      name: "RO Pump",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "RO Care India",
      price: "₹5,000.00",
      image: Offer2,
    },
    {
      id: 28,
      name: "Filter Cartridge",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "Kent",
      price: "₹1,500.00",
      image: Offer3,
    },
    {
      id: 29,
      name: "TDS Controller",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "Chanson India",
      price: "₹3,500.00",
      image: Offer4,
    },
    {
      id: 30,
      name: "UV Lamp",
      description:
        " This is internal part in Water Purifier replaceable easily.  With 6 Month Warranty",
      brand: "AquaSafe",
      price: "₹2,800.00",
      image: Offer5,
    },
  ],
};

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

const ProductsPage = () => {
  const navigate = useNavigate();
  const [price, setPrice] = useState(9999);
  const min = 99;
  const max = 99999;

  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className="flex w-5/6 flex-col mx-auto gap-5 my-6">
     
      {/* Title */}
      <div className="flex items-center">
        <div className="flex-grow border-t border-gray-900"></div>
        <span className="mx-2 text-3xl font-semibold">Products</span>
        <div className="flex-grow border-t border-gray-900"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-x-10 mx-4">
        
        {/* Sidebar */}
        <div className="w-full lg:w-3/12 p-4 bg-white rounded-lg">
          
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

        {/* ✅ Product Grid Section */}
        <div className="flex-1 flex flex-col gap-10">
          {Object.entries(productsByCategory).map(([category, products]) => (
            <div key={category} className="w-full">
              <h1 className="text-2xl font-semibold text-gray-800 text-center md:text-left">
                {category}
              </h1>
              <div className="my-2 border-t border-gray-200"></div>

              {/* ✅ Responsive Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                              gap-x-4 gap-y-6 py-5">
                {products.map((p) => (
                  <div
                    key={p.id}
                    className="flex shadow-gray-500 shadow-md flex-col items-center 
                              justify-center border bg-white border-gray-300 rounded-lg py-2 
                              hover:shadow-md transition duration-300"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      onClick={() => navigate("/product-detail")}
                      className="h-[100px] sm:h-[140px] md:h-[200px] mb-3 object-contain cursor-pointer"
                    />
                    <h3 className="text-xs sm:text-sm md:text-md font-semibold mb-2 
                                   border-t border-b px-2 text-start w-full">
                      {p.name}
                    </h3>
                    <p className="px-2 text-sm text-gray-600">{p.description}</p>

                    <div className="flex w-full justify-between px-2 text-gray-600 mb-1">
                      <span className="font-semibold text-lg text-gray-700">
                        {p.price}
                      </span>
                      <div className="grid grid-cols-2 bg-green-300 rounded-sm px-1 mt-1">
                        <span className="font-semibold text-gray-950 text-sm">
                          4.81
                        </span>
                        <img src={BlueStar} className="w-5 h-5" alt="Star" />
                      </div>
                    </div>

                    <NavLink className="w-full" to="/buynow">
                      <div className="grid w-full px-2 grid-cols-2 gap-3">
                        <button className="text-sm px-2 py-2 border border-black rounded-md hover:bg-green-500 transition">
                          Add to Cart
                        </button>
                        <button className="text-sm px-2 py-2 bg-green-400 border border-green-700 text-white rounded-md hover:bg-green-600 transition">
                          Buy Now
                        </button>
                      </div>
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProductsPage;

