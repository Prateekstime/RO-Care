import { useState } from "react";
import logo from "../../assets/logo.png";
import { FiUser } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { HiOutlineBell } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import RequestForm from "../../pages/RequestForm";

const Header = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const products = [
    ["Water Purifier", "Vacuum Cleaner", "Water Ionizer", "Air Purifier", "DM Plant", "Swimming Pool Filtration Plant", "Air Conditioner"],
    ["RO Plant", "Water Dispenser", "Water Cooler", "Vegetable Purifier", "Water Chiller", "(STP) Sewage Treatment Plant", "Home Appliance"],
    ["Water Softener", "Water ATM", "Water Filter", "Water Tank", "Water Heater", "(ETP) Effluent Treatment Plant"],
  ];

  const services = [
    ["Installation", "Maintenance", "Repair", "AMC Services"],
    ["Water Testing", "Filter Replacement", "RO Membrane Cleaning"],
    ["Home Visit", "Industrial Service", "Emergency Service"],
  ];

  return (
    <div className="flex border-b-2 shadow-xl bg-gradient-to-b from-cyan-950  via-cyan-950  to-cyan-900 text-white border-gray-200 justify-between items-center px-6 py-3 relative">
      {/* Left - Logo & Nav */}
      <div className="flex items-center space-x-10">
        <NavLink to="/">
          <img
            className="h-[40px] w-[150px] cursor-pointer"
            src={logo}
            alt="Logo"
          />
        </NavLink>

     
      </div>
      <div className="flex gap-6 whitespace-nowrap ">

      {/* Middle - Search Bar */}
      <div className="relative flex items-center w-full max-w-xs">
        <span className="absolute left-3 text-gray-500 text-lg">
          <CiSearch />
        </span>
        <input
          type="text"
          className=" p-2 pl-10 rounded-md border text-white bg-cyan-900 border-cyan-800 focus:outline-none focus:ring-1 focus:ring-gray-700"
          placeholder="Services,Products,Spare Parts"
        />
      </div>
         <nav className="flex items-center text-white font-semibold space-x-4 relative">
          {/* Products Menu */}
          <div className="relative group">
            <NavLink
              to="/products"
              className="text-[17px] cursor-pointer hover:text-gray-500"
            >
              Products ▾
            </NavLink>

            {/* Dropdown */}
            <div className="absolute -right-40  hidden group-hover:flex bg-gray-50 shadow-xl p-4 rounded-2xl w-[540px] justify-between z-50">
              {products.map((col, colIndex) => (
                <ul key={colIndex} className="space-y-2 text-gray-800">
                  {col.map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="block text-xs hover:text-blue-600 transition"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Services Menu */}
          <div className="relative group">
            <NavLink
              to="/services"
              className="text-[17px] cursor-pointer hover:text-gray-500"
            >
              Services ▾
            </NavLink>

            {/* Dropdown */}
            <div className="absolute -right-40 top- hidden group-hover:flex bg-gray-50 shadow-xl p-4 rounded-2xl w-[400px] justify-between z-50">
              {services.map((col, colIndex) => (
                <ul key={colIndex} className="space-y-2 text-gray-800">
                  {col.map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="block text-xs hover:text-blue-600 transition"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

           <div className="relative group">
            <NavLink
              to="/all-brands"
              className="text-[17px] cursor-pointer hover:text-gray-500"
            >
              All Brands
            </NavLink>

          
          </div>

          {/* Service Request Form Button */}
          <button
            onClick={() => setIsFormOpen(true)}
            className="text-[17px] cursor-pointer hover:text-gray-500"
          >
            Service Request
          </button>

          {/* Service Request Form Overlay */}
          {isFormOpen && <RequestForm onClose={() => setIsFormOpen(false)} />}
        </nav>

      {/* Right - Icons */}
      <div className="flex items-center text-2xl space-x-6">
        <p className="cursor-pointer hover:text-gray-500">
          <HiOutlineBell />
        </p>
        <NavLink to={"/cart"}>
          <p className="cursor-pointer hover:text-gray-500">
            <LuShoppingCart />
          </p>
        </NavLink>
        <NavLink to={"/profile"}>
          <p className="cursor-pointer hover:text-gray-500">
            <FiUser />
          </p>
        </NavLink>
      </div>
      </div>

    </div>
  );
};

export default Header;
