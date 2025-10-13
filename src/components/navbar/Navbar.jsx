import { useState } from "react";
import logo from "../../assets/logo.png";
import { FiUser } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { HiOutlineBell } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import RequestForm from "../../pages/RequestForm";
import NotificationOverlay from "../NotificationOverlay";
import FilterLogo from "../../assets/filter.svg";
import userLogo from "../../assets/user.svg";
import cartLogo from "../../assets/cart.svg";
import {
  Search,
  Bell,
  ShoppingCart,
  MapPin,
  Truck,
  Wrench,
  Gift,
  User,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [requestForm, setRequestForm] =useState(false)
  const [search, setSearch] = useState("");

  return (
    <header className="w-full shadow-sm border-b border-gray-200">
      {/* --- Top Bar --- */}
      <div className="bg-[#F5F5F5] text-sm text-gray-950 flex items-center justify-between px-6 py-2">
        <span>
          Welcome to <strong>Techno RO</strong>
        </span>
        <div className="flex items-center gap-4 text-gray-950">
          <Link
            to="/address"
            className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
          >
            <MapPin size={16} className="text-blue-600" /> Deliver to{" "}
            <strong>Address...</strong>
          </Link>

          <div className="h-5 w-[1px] bg-blue-600"></div>

          <Link
            to="/track-order"
            className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
          >
            <Truck size={16} className="text-blue-600" /> Track Your Order
          </Link>

          <div className="h-5 w-[1px] bg-blue-600"></div>

          <Link
            to="/track-service"
            className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
          >
            <Wrench size={16} className="text-blue-600" /> Track Your Service
          </Link>

          <div className="h-5 w-[1px] bg-blue-600"></div>

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
      <div className="flex items-center justify-between px-8 py-3 bg-white">
        {/* Left Section - Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img
              src={logo}
              alt="Techno RO Logo"
              className="w-32 h-10 cursor-pointer"
            />
          </Link>
        </div>

        {/* Center Section - Links + Search */}
        <div className="flex items-center gap-8">
          <nav className="flex items-center gap-6 text-gray-700 font-medium">
            <Link to="/products" className="hover:text-blue-600">
              Products
            </Link>
            <Link to="/services" className="hover:text-blue-600">
              Services
            </Link>
            <ul  onClick={() => setRequestForm(true)} className="hover:text-blue-600">
              Service Request
            </ul>
          </nav>
        </div>
        {/* Search Bar */}
        <div className="relative flex items-center bg-[#F3F9FB] border border-gray-300 rounded-lg px-4 py-2 w-72">
          <Search size={18} className="text-blue-500" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1  ml-2 outline-none bg-transparent text-sm"
          />
          <img src={FilterLogo} alt="" />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6 text-gray-950 font-medium">
          {/* Sign Up / Log In */}
          <span
            onClick={() => navigate("/loginpage")}
            className="flex items-center gap-2 cursor-pointer hover:text-blue-600"
          >
            <img src={userLogo} alt="" /> Sign Up / Log In
          </span>

          {/* Cart */}
          <span
            onClick={() => navigate("/cart")}
            className="flex items-center gap-2 text-gray-950 cursor-pointer hover:text-blue-600"
          >
            <img src={cartLogo} alt="" /> Cart
          </span>
        </div>
      </div>
{requestForm && (
  <div className="absolute top-20 right-10 z-50">
    <RequestForm requestForm={requestForm} setRequestForm={setRequestForm} onClick={() => setRequestForm(false)} />
  </div>
)}

    </header>
  );
}
