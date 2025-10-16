import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LogOut, User, CreditCard, ShoppingBag } from "lucide-react";
import img from "../../assets/img.png";

export default function ProfileLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {
      name: "Eleanor Pena",
      image: img,
    }
  );

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/loginpage");
  };

  const menuItems = [
    { name: "Profile Information", path: "/profile/" },
    { name: "Manage Address", path: "/profile/address" },
    { name: "My Bookings", path: "/profile/bookings" },
    { name: "My AMC Plans", path: "/profile/amc-plans" },
    { name: "Favorite Items", path: "/profile/favorites" },
    { name: "Settings", path: "/profile/settings" },
  ];

  // ✅ Check if the current route is order status
  const isOrderStatus = location.pathname.includes("/profile/orders");

  return (
    <div className="bg-[#f9fafb] p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="bg-white rounded-md border shadow-sm p-4 space-y-4">
          {/* User Header */}
          <div className="flex items-center space-x-3">
            <img
              src={user.image}
              alt="user"
              className="w-12 h-12 rounded-full object-cover"
            />
            <h2 className="font-semibold text-lg text-gray-800">{user.name}</h2>
          </div>

          {/* My Order Status Button */}
          <NavLink
            to="/profile/orders"
            className={({ isActive }) =>
              `flex items-center justify-between border-b pb-2 text-sm font-semibold ${
                isActive ? "text-purple-600" : "text-gray-800"
              }`
            }
          >
            <span className="flex items-center gap-2">
              <ShoppingBag size={16} />
              MY ORDERS STATUS
            </span>
            <span>{">"}</span>
          </NavLink>

          {/* Filters Section (only visible on My Order Status) */}
          {isOrderStatus && (
            <div className="space-y-3 mt-3 text-sm text-gray-700">
              <p className="font-semibold text-gray-900">Filters</p>

              <div>
                <p className="font-medium text-gray-800 mb-1">Order Status</p>
                {["On the way", "Delivered", "Cancelled", "Returned"].map(
                  (status) => (
                    <label
                      key={status}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <input type="checkbox" className="accent-blue-500" />
                      <span>{status}</span>
                    </label>
                  )
                )}
              </div>

              <div>
                <p className="font-medium text-gray-800 mb-1">Order Time</p>
                {["Last 30 days", "2024", "2023", "Older"].map((time) => (
                  <label
                    key={time}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <input type="checkbox" className="accent-blue-500" />
                    <span>{time}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Account Settings (only shown when not on Order Status) */}
          {!isOrderStatus && (
            <>
              <div className="border-t pt-3 text-sm text-gray-700 space-y-2">
                <p className="flex items-center gap-2 font-semibold text-lg">
                  <User size={16} />
                  Account Settings
                </p>
                {menuItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-sm font-medium ${
                        isActive
                          ? "bg-blue-100 text-blue-600"
                          : "hover:bg-gray-100 text-gray-800"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              <div className="border-t pt-4 text-sm text-gray-700">
                <p className="flex items-center gap-2 font-semibold text-lg">
                  <CreditCard size={16} />
                  Payments
                </p>
              </div>

              <div className="border-t pt-4">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-red-500 font-medium text-sm"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            </>
          )}
        </aside>

        {/* Main content */}
        <main className="md:col-span-3 bg-white rounded-md shadow-sm border p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
