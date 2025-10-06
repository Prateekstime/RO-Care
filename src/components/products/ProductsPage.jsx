import { NavLink } from "react-router-dom";
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
import Purifier from "../../assets/Purifier.png";

// ✅ Your Category-Wise Product Data
const productsByCategory = {
  "Featured Products": [
    { id: 1, name: "Doctor Fresh Life Veda RO+UV+UF+TDS Infuser+ME+AS+Alkaline", brand: "RO Care India", price: "₹18,500.00", image: Offer1 },
    { id: 2, name: "Revolution Semi-Commercial Water Ionizer", brand: "Chanson India", price: "₹2,60,000.00", image: Offer2 },
    { id: 3, name: "Knitters RO Membrane G3000", brand: "Shri Krishna Enterprises", price: "₹2,200.00", image: Offer3 },
    { id: 4, name: "Doctor Fresh 250 LPH RO Plant - Platinum", brand: "RO Care India", price: "₹1,50,000.00", image: Offer4 },
    { id: 5, name: "Usha Celcius Floor Standing Water Dispenser", brand: "3D Logic", price: "₹14,000.00", image: Offer5 },
  ],
  "Water Purifier": [
    { id: 6, name: "PurePro Water Purifier X100", brand: "PurePro", price: "₹12,500.00", image: Offer6 },
    { id: 7, name: "AquaSafe Home RO", brand: "AquaSafe", price: "₹15,000.00", image: Offer3 },
    { id: 8, name: "Kent Grand Plus", brand: "Kent", price: "₹18,000.00", image: Offer4 },
    { id: 9, name: "BlueStar RO Smart", brand: "BlueStar", price: "₹14,500.00", image: Offer2 },
    { id: 10, name: "Livpure Glo RO+UV", brand: "Livpure", price: "₹16,000.00", image: Offer1 },
  ],
  "RO Plant": [
    { id: 11, name: "RO Plant 500 LPH", brand: "RO Care India", price: "₹1,80,000.00", image: Offer1 },
    { id: 12, name: "RO Plant 1000 LPH", brand: "RO Care India", price: "₹3,50,000.00", image: Offer2 },
    { id: 13, name: "RO Plant 2000 LPH", brand: "Shree Water Solutions", price: "₹6,50,000.00", image: Offer3 },
    { id: 14, name: "RO Plant Industrial", brand: "Chanson India", price: "₹7,20,000.00", image: Offer4 },
    { id: 15, name: "Compact RO Plant 300 LPH", brand: "RO Care India", price: "₹90,000.00", image: Offer5 },
  ],
  "Water Softner": [
    { id: 16, name: "SoftPro 50L", brand: "SoftPro", price: "₹45,000.00", image: Offer3 },
    { id: 17, name: "SoftPro 100L", brand: "SoftPro", price: "₹80,000.00", image: Offer5 },
    { id: 18, name: "BlueSoft Home", brand: "BlueStar", price: "₹60,000.00", image: Offer1 },
    { id: 19, name: "PureSoft X200", brand: "PurePro", price: "₹55,000.00", image: Offer2 },
    { id: 20, name: "Kent Soft Plus", brand: "Kent", price: "₹50,000.00", image: Offer6 },
  ],
  "Water Ionizer": [
    { id: 21, name: "Ionizer X500", brand: "Chanson India", price: "₹2,60,000.00", image: Offer4 },
    { id: 22, name: "Ionizer Home Plus", brand: "Kent", price: "₹1,80,000.00", image: Offer3 },
    { id: 23, name: "Water Ionizer Pro", brand: "RO Care India", price: "₹2,20,000.00", image: Offer5 },
    { id: 24, name: "Ionizer Max", brand: "AquaSafe", price: "₹2,50,000.00", image: Offer6 },
    { id: 25, name: "Chanson Ionizer X200", brand: "Chanson India", price: "₹1,95,000.00", image: Offer2 },
  ],
  "Spare Parts": [
    { id: 26, name: "RO Membrane G3000", brand: "Shri Krishna", price: "₹2,200.00", image: Offer1 },
    { id: 27, name: "RO Pump", brand: "RO Care India", price: "₹5,000.00", image: Offer2 },
    { id: 28, name: "Filter Cartridge", brand: "Kent", price: "₹1,500.00", image: Offer3 },
    { id: 29, name: "TDS Controller", brand: "Chanson India", price: "₹3,500.00", image: Offer4 },
    { id: 30, name: "UV Lamp", brand: "AquaSafe", price: "₹2,800.00", image: Offer5 },
  ],
};

const reviews = [
  {
    name: "Devon Lane",
    date: "24 Dec, 2024",
    review: "Lorem ipsum dolor sit amet consectetur. Sed lacus facilisi semper lacus rhoncus cursus...",
    rating: 4,
  },
  {
    name: "Eleanor Pena",
    date: "20 Jul, 2024",
    review: "Lorem ipsum dolor sit amet consectetur. Sed lacus facilisi semper lacus rhoncus cursus...",
    rating: 5,
  },
  {
    name: "Jane Cooper",
    date: "15 Jan, 2024",
    review: "Lorem ipsum dolor sit amet consectetur. Sed lacus facilisi semper lacus rhoncus cursus...",
    rating: 4,
  },
];

const ProductsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5 my-6">
      {/*Title */}
      <div className="flex items-center">
        <div className="flex-grow border-t border-gray-900"></div>
        <span className="mx-2 text-3xl font-semibold text-blue-800">
          Products
        </span>
        <div className="flex-grow border-t border-gray-900"></div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-x-10 mx-4">
        {/* Sidebar */}
        <div className="w-full lg:w-3/12 p-4 border border-gray-300 rounded-lg bg-white">
          {/* Product Brands */}
          <div>
            <h3 className="text-lg font-semibold">Product Brands</h3>
            <div className="my-2 border-t border-dashed border-gray-400"></div>
            <ul className="space-y-3 text-sm">
              {["KENT", "Pure it", "Livpure", "Eureka FORBES", "BLUE MOUNT"].map((brand, i) => (
                <li key={i}>
                  <input type="checkbox" className="mr-2" />
                  <label>{brand}</label>
                </li>
              ))}
            </ul>
          </div>

          {/* Sort By */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Sort By</h3>
            <div className="my-2 border-t border-dashed border-gray-400"></div>
            {["Popular", "Price Low - High", "Price High - Low", "Latest"].map((opt, i) => (
              <div key={i} className="mb-2">
                <input type="checkbox" className="mr-2" />
                <label>{opt}</label>
              </div>
            ))}
          </div>

          {/* Customer Reviews */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Customer Reviews</h3>
            <div className="my-2 border-t border-dashed border-gray-400"></div>
            {reviews.map((review, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center space-x-4">
                    <img src={Customer} alt="Customer" className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="text-sm text-gray-600">{review.name}</p>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-md ${i < review.rating ? "text-[#7EC1B1]" : "text-gray-300"}`}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{review.review}</p>
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

        {/* Product Categories Section */}
        <div className="flex-1 flex flex-col gap-10">
          {Object.entries(productsByCategory).map(([category, products]) => (
            <div key={category} className="w-full p-2 border border-gray-300 bg-cyan-50 rounded-md shadow-md">
              <h1 className="text-2xl font-semibold text-gray-800 text-center md:text-left">
                {category}
              </h1>
              <div className="my-2 border-t border-gray-200"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 px-4 sm:px-6 md:px-10 lg:px-20 py-5">
                {products.map((p) => (
                  <div
                    key={p.id}
                    className="flex flex-col items-center justify-center border bg-white border-gray-300 rounded-lg py-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    {/* <span className="relative right-2 self-end bg-slate-200 rounded-full px-2 text-xs flex items-center">
                      <FaClock className="mr-1" /> 30 mins
                    </span> */}
                    <img src={p.image} alt={p.name}onClick={()=>{navigate("/product-detail")}} className="w-[160px] h-[120px] sm:h-[140px] md:h-[160px] mb-3 p-4 object-contain" />
                    <h3 className="text-xs sm:text-sm font-semibold mb-2 border-t border-b px-2 text-center">
                      {p.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-1">
                      <img src={BlueStar} alt="Star" className="w-3 h-3 mr-1" />
                      <span className="font-semibold text-xs">4.81</span>
                      <span className="ml-1 text-xs">(1.9M Reviews)</span>
                    </div>
                    <span className="font-semibold text-lg text-gray-700">{p.price}</span>
                    <NavLink to="/buynow">
                      <button className="px-4 mt-3 py-1.5 bg-[#4ab29a] hover:bg-[#3a8e7a] text-white rounded-lg text-sm font-medium transition-colors duration-200">
                        Buy Now
                      </button>
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rewards Section */}
      {/* <div className="w-full flex flex-col md:flex-row items-center justify-between bg-[#E5DAA1] px-10 md:px-20 py-10 rounded-[16px] shadow-md">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">
            Refer and Earn Rewards
          </h2>
          <p className="text-lg text-gray-600">
            Invite and get <span className="font-semibold">₹100 cash back</span> on your purchase.
          </p>
          <button className="w-[160px] h-[48px] bg-[#0000004D] text-white font-medium rounded-lg mx-auto md:mx-0">
            Learn More
          </button>
        </div>
        <img src={Gift} alt="Gift Box" className="w-[200px] h-auto mt-5 md:mt-0" />
      </div> */}
    </div>
  );
};

export default ProductsPage;
