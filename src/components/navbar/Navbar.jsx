import { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.svg";
import { useNavigate, Link } from "react-router-dom";
import FilterLogo from "../../assets/filter.svg";
import userLogo from "../../assets/user.svg";
import cartLogo from "../../assets/cart.svg";
import { Search, Menu, Bell, Gift } from "lucide-react";
import Quality from "../../assets/Quality.png";
import Customer from "../../assets/Customer.png";

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

export default function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const searchInputRef = useRef(null);
    const [price, setPrice] = useState(9999);
    const min = 99;
  const max = 99999;

  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser?.verified) setUser(parsedUser);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  const handleRoute = () => {
    if (user) navigate("/profile");
    else navigate("/loginpage");
  };

  return (
    <header className="w-full shadow-sm border-b border-gray-200 relative bg-white">
      {/* --- Top Bar --- */}
      <div className="hidden sm:flex sm:px-4 bg-[#F5F5F5] text-sm text-gray-950 items-center justify-between px-2 gap-2 py-2">
        <span className="md:text-[15px] sm:text-[10px] whitespace-nowrap">
          Welcome to <strong>Techno RO</strong>
        </span>
        <div className="flex items-center gap-4 text-gray-950">
          <Link
            to="/offers"
            className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
          >
            <Gift size={16} className="text-blue-600" /> All Offers
          </Link>
          <div className="h-5 w-[1px] bg-blue-600"></div>
          <Link
            to="/NotificationOverlay"
            className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
          >
            <Bell size={16} className="text-blue-600" /> Notifications
          </Link>
        </div>
      </div>

      {/* --- Main Navbar --- */}
      <div className="flex items-center justify-between px-3 py-3 bg-white max-w-[1440px] mx-auto relative">
        {/* Left Section - Logo & Menu */}
        <div className="flex items-center gap-3">
          <div className="sm:hidden flex">
            <Menu size={26} />
          </div>
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Logo"
              className="w-16 sm:w-24 h-auto cursor-pointer object-contain"
            />
          </Link>
        </div>

        {/* Center Nav Links (Desktop Only) */}
        <nav className="hidden sm:flex items-center sm:gap-6 gap-2 text-gray-800 font-medium relative">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowProduct(true)}
            onMouseLeave={() => setShowProduct(false)}
          >
            <span className="hover:text-blue-600 cursor-pointer" onClick={()=>{navigate("product-category")}}>Products</span>
            {showProduct && (
              <div className="absolute top-full left-0  bg-white border rounded-2xl shadow-lg p-2 z-50 w-[400px] grid grid-cols-3 gap-2">
                {[
                  ["Water Purifier", "Vacuum Cleaner", "Air Purifier"],
                  ["RO Plant", "Water Cooler", "Home Appliance"],
                  ["Water Softener", "Water Tank", "Water Heater"],
                ].map((col, i) => (
                  <ul key={i} className="flex flex-col gap-2 text-gray-800 text-sm">
                    {col.map((item) => (
                      <li key={item} className="hover:text-blue-700 cursor-pointer">
                        {item}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowService(true)}
            onMouseLeave={() => setShowService(false)}
          >
            <span className="hover:text-blue-600 cursor-pointer" onClick={()=>{navigate("service-category")}}>Services</span>
            {showService && (
              <div className="absolute top-full left-0 mt-2 bg-white border rounded-2xl shadow-lg w-56 z-50 p-3">
                <ul className="flex flex-col gap-2 text-gray-800 text-sm font-medium">
                  {[
                    "Water Purifier Service",
                    "RO Plant Service",
                    "Water Softener Service",
                    "Service Request",
                  ].map((srv) => (
                    <li key={srv} className="hover:text-blue-700 cursor-pointer">
                      {srv}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>

        {/* Search Bar (Desktop Only) */}
        <div className="hidden sm:flex items-center bg-[#F3F9FB] border border-gray-300 rounded-lg px-4 py-2 w-72">
          <Search
            size={18}
            className="text-blue-500 cursor-pointer"
            onClick={() => searchInputRef.current?.focus()}
          />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 ml-2 outline-none bg-transparent text-sm"
          />
          <img
            src={FilterLogo}
            alt="Filter"
            className="w-5 h-5 cursor-pointer"
            onClick={() => setShowFilter(!showFilter)}
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 text-gray-950 font-medium">
          {user ? (
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleRoute}
            >
              <img src={userLogo} alt="User" className="w-7 h-auto" />
              <span className="hidden sm:flex text-gray-800 hover:text-blue-600">
                Hi, {user.name || "User"}
              </span>
            </div>
          ) : (
            <span
              onClick={() => navigate("/loginpage")}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-600"
            >
              <img src={userLogo} alt="user" /> 
              <span className="hidden sm:flex">Sign In</span>
            </span>
          )}

          <span
            onClick={() => navigate("/cart")}
            className="flex items-center gap-2 cursor-pointer hover:text-blue-600"
          >
            <img src={cartLogo} alt="cart" />
            <span className="hidden sm:flex">Cart</span>
          </span>
        </div>
      </div>

      {/* --- Mobile Search Bar --- */}
      <div className="flex sm:hidden items-center gap-2 bg-[#F3F9FB] border border-gray-300 rounded-lg px-3 py-2 mx-3 mb-3">
       {showFilter ? (
    <span
      onClick={() => setShowFilter(false)}
      className="text-blue-600 cursor-pointer hover:text-blue-800 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </span>
  ) : (
    <Search
      size={18}
      className="text-blue-500 cursor-pointer"
      onClick={() => searchInputRef.current?.focus()}
    />
  )}
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-transparent text-sm"
        />
      {showFilter ? (
  <span
    // onClick={() => setShowFilter()}
    className="text-blue-600 text-sm font-medium cursor-pointer hover:underline"
  >
    Clear
  </span>
) : (
  <img
    src={FilterLogo}
    alt="Filter"
    className="w-5 h-5 cursor-pointer"
    onClick={() => setShowFilter(true)}
  />
)}

      </div>
      {/* --- Filter Section Overlay --- */}
{showFilter && (
  <div className="absolute top-full left-0 w-full bg-white border-t shadow-lg z-50 p-4 block sm:hidden">

    <div className="w-full p-4 rounded-lg bg-white">
      {/* Product Brands */}
      <div>
        <h3 className="text-lg font-semibold">Product Brands</h3>
        <div className="my-2 border-t border-dashed border-gray-400"></div>
        <ul className="space-y-3 text-sm">
          {[
            "KENT",
            "Pure it",
            "Livpure",
            "Eureka FORBES",
            "BLUE MOUNT",
          ].map((brand, i) => (
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
        {["Popular", "Price Low - High", "Price High - Low", "Latest"].map(
          (opt, i) => (
            <div key={i} className="mb-2">
              <input type="checkbox" className="mr-2" />
              <label>{opt}</label>
            </div>
          )
        )}
      </div>

      {/* Price Slider */}
      <div className="w-full max-w-md mx-auto">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-800">Price</h2>
          <p className="text-gray-800 font-medium">₹{price}</p>
        </div>

        <div className="relative w-full">
          <input
            type="range"
            min={min}
            max={max}
            value={price}
            onChange={handleChange}
            className="w-full h-2 rounded-full appearance-none cursor-pointer bg-gradient-to-r from-purple-600 via-blue-600 to-red-500"
          />
        </div>

        <div className="flex justify-between mt-3 text-gray-700 font-medium">
          <span>₹{min}</span>
          <span>₹{max}</span>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Customer Reviews</h3>
        <div className="my-2 border-t border-dashed border-gray-400"></div>
        {reviews.map((review, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center space-x-4">
                <img
                  src={Customer}
                  alt="Customer"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm text-gray-600">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
              <div className="flex space-x-1">
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
            <p className="text-sm text-gray-600 mb-3">{review.review}</p>
          </div>
        ))}
      </div>

      {/* Promise Section */}
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
)}


    </header>
  );
}
