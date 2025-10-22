import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import RequestForm from "../../pages/RequestForm";
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
} from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  const [requestForm, setRequestForm] = useState(false);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);

  // ✅ Load user from localStorage - Improved version
  useEffect(() => {
    loadUserFromStorage();
    // Listen for storage changes (if user logs in/out in another tab)
    window.addEventListener('storage', loadUserFromStorage);
    return () => {
      window.removeEventListener('storage', loadUserFromStorage);
    };
  }, []);
 
  const loadUserFromStorage = () => {
    try {
      const storedUser = localStorage.getItem("user");
      console.log("Stored user data:", storedUser); // Debug log
      
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        console.log("Parsed user:", parsedUser); // Debug log
        
        // Check if user data is valid and verified
        if (parsedUser && parsedUser.verified) {
          setUser(parsedUser);
        } else {
          setUser(null);
          localStorage.removeItem("user"); // Clean up invalid data
        }
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error loading user from localStorage:", error);
      setUser(null);
      localStorage.removeItem("user"); // Clean up corrupted data
    }
  };



  const handleRoute = () => {
  if (user) {
    navigate("/profile");
  } else {
    navigate("/loginpage");
  }
};

  

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
            to="/product-tracking"
            className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
          >
            <Truck size={16} className="text-blue-600" /> Track Your Order
          </Link>

          <div className="h-5 w-[1px] bg-blue-600"></div>

          <Link
            to="/service-tracking"
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
      <div className="flex items-center justify-between px-8 py-3 bg-white max-w-[1440px] mx-auto">
        {/* Left Section - Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Techno RO Logo" className="w-32 h-10 cursor-pointer" />
        </Link>

        {/* Center Section */}
        <nav className="flex items-center gap-6 text-gray-700 font-medium">
          <Link to="/product-category" className="hover:text-blue-600">
            Products
          </Link>
          <Link to="/service-category" className="hover:text-blue-600">
            Services
          </Link>
          <span
            onClick={() => setRequestForm(true)}
            className="hover:text-blue-600 cursor-pointer"
          >
            Service Request
          </span>
        </nav>

        {/* Search Bar */}
        <div className="relative flex items-center bg-[#F3F9FB] border border-gray-300 rounded-lg px-4 py-2 w-72">
          <Search size={18} className="text-blue-500" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 ml-2 outline-none bg-transparent text-sm"
          />
          <img src={FilterLogo} alt="Filter" className="w-5 h-5" />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6 text-gray-950 font-medium">
          {user ? (
            <div className="flex items-center gap-4">
              {/* User Profile with Dropdown */}
              <div className="relative group">
                <div className="flex items-center gap-3 cursor-pointer" 
                onClick={handleRoute}>
                  <img src={userLogo} alt="User" className="w-5 h-5" />
                  <span className="text-gray-800 font-medium hover:text-blue-600">
                    Hi, {user.name || user.username || "User"}
                  </span>
                </div>
                
                {/* Dropdown Menu */}
               
              </div>
            </div>
          ) : (
            <span
              onClick={() => navigate("/loginpage")}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-600"
            >
              <img src={userLogo} alt="user" /> Sign Up / Log In
            </span>
          )}

          {/* Cart */}
          <span
            onClick={() => navigate("/cart")}
            className="flex items-center gap-2 cursor-pointer hover:text-blue-600"
          >
            <img src={cartLogo} alt="cart" /> Cart
          </span>
        </div>
      </div>

      {/* --- Request Form Overlay --- */}
      {requestForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-2xl shadow-xl w-[90%] max-w-[600px] p-6">
            <button
              onClick={() => setRequestForm(false)}
              className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-lg font-bold"
            >
              ✕
            </button>
            <RequestForm
              requestForm={requestForm}
              setRequestForm={setRequestForm}
              onClose={() => setRequestForm(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
}